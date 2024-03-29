---
title: Run relay via docker-compose
sidebar_label: Via docker-compose
---

The [docker/trustlines](https://github.com/trustlines-protocol/relay/tree/master/docker/trustlines) directory in the relay 
repository contains the files needed to start a trustlines system via
docker-compose. Following these setup instructions will give you a
system, where you can:
- connect to a trustlines laika node via JSONRPC on port 8545
- use the trustlines laika node as a metamask backend
- connect to a relay server on port 5000 and interact with currency
  networks running on the chain

:::caution
Please be aware that you additionally might have to firewall the
installed system if you don't want to expose those services.
:::

## Services

The docker-compose file contains service definitions for the following services:

- db: A service running a postgres server. The postgres files will be
  stored in the `postgres-data` docker volume.

- tlbc: A service running a modified OpenEthereum node for the trustlines
  blockchain. The blockchain data will be stored in the
  `blockchain-data` docker volume.

- index: A service running py-eth-index, which synchronizes certain
  information from OpenEthereum into the postgres database.

- relay: The relay server itself.

## Setup

We need to do some initial setup and configuration for the system to work. You
need to provide the `addresses.json` file, which should be put in the directory
alongside the `docker-compose.yml` file.

You can find some prepared files for each network in the `config/` directory at
the root of the relay repository. E.g. if you want to connect to the Trustlines
Blockchain and index all the currency networks registered by the Trustlines
foundation, you can copy it like that:

```bash
cp ../../config/addresses_tlbc.json ./addresses.json
```

This also includes the references to the identity related contracts. If you
deploy your own currency networks, please adapt `addresses.json` accordingly.


### Fetch Docker Image

Let's first build and fetch all of the images that we will need
without starting any services with the following command:

```bash
docker-compose up --no-start
```

### Generate Keys

The relay server either needs a OpenEthereum node with an unlocked account
or it needs a key to sign transactions itself. We will use the latter
method.

Please generate a keystore file by running the following command. It
will ask for a password.

```bash
docker run --rm -it -v $(pwd):/here --entrypoint /opt/relay/bin/deploy-tools trustlines/relay generate-keystore --keystore-path /here/keystore.json
```

We also need to store the password in clear text. Please create a file
`keystore-password.txt` containing only the password on the first
line.

Of course you can also use an existing keyfile, but please do not
reuse a keyfile from a validator node.

### Copy Compiled Contracts

The relay server image includes the `contracts.json` file, which contains the
compiled currency network contracts. We will need this file for the index
service.

Please copy them to the current directory with:

```bash
docker-compose run --rm --no-deps -v $(pwd):/here --entrypoint /bin/bash relay -c "cp /opt/relay/trustlines-contracts/build/contracts.json /here"
```

Checkout [this documentation](/relay/0.21.0/tutorials/trustlines_system#get-contract-abis) to see
alternative approaches how to retrieve the compiled contracts file.

### Setup Initial Database

We need to setup the database and import the ABIs for the index
service by running the following commands:

```bash
docker-compose up -d db
sleep 2
docker-compose run --rm index createtables
docker-compose run --rm index importabi
```

After that you can start the system with `docker-compose up -d`,
though you have to wait for the blockchain node to sync with the
trustlines blockchain in order to have a fully functioning system.

The account you've setup at the beginning will have to pay for
transactions. Please fund it with enough coins. You should now be able
to connect to the local node via metamask to do that.

### Test the Installation

Please try to run the following command:

```bash
curl http://localhost:5000/api/v1/networks
```

It should print some information about the networks as JSON.

## Next Steps

The relay server provides a REST API. Please read [relay server API
documentation](https://github.com/trustlines-protocol/relay/blob/master/docs/RelayAPI.md)
for more information.

You can also use the clientlib to access the relay server from
javascript. Please visit the [clientlib github
repository](https://github.com/trustlines-protocol/clientlib) for more
information.
