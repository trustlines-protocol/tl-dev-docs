---
title: Running the Relay with a TLBC-node (with docker)
sidebar_label: Running the Relay with a TLBC-node (with docker)
---

:::note About this tutorial
All commands in this tutorial should be run from the `/docker/trustlines/tlbc` folder. 

The tutorial was tested on Ubuntu 20.04 with Docker 19.03. The steps should work on other Linux versions and Mac,
but you'll most probably have to slightly modify some commands.
:::

:::warning
You need a machine with at least **2GB(preferably 4GB)** of RAM. Running this on a machine with less than 2GB of RAM will
fail.
:::

The [docker/trustlines/tlbc](https://github.com/trustlines-protocol/relay/tree/master/docker/trustlines/tlbc) directory in the relay
repository contains the files needed to start components of the trustlines protocol (tlbc-node, relay, indexer) via
docker-compose. Following these setup instructions will give you a:
- TLBC-Node with OpenEthereum
- Py-eth-index connected to the TLBC-Node
- Relay instance connected to the TLBC-Node

:::caution
The config by default exposes port 5000 to connect to the relay. It is advised to actually
put a proxy (nginx, caddy, apache or traefik) in front of the relay server.
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

To find the location of the volumes on the system you can run:
```bash
docker volume ls
```

This will list the created volumes. Then you can execute:
```
docker volume inspect --format '{{ .Mountpoint }}' VOLUME_NAME
```

This will give you the path to the volume data.


## Setup

We need to do some initial setup and configuration for the system to work. You
need to provide the `addresses.json` file, which should be put in the directory
alongside the `docker-compose.yml` file.

:::note
The `addresses.json` file specifies which currency networks your py-eth-index & relay instance are
going to index. If you want to run your relay only with a set of particular currency networks
adapt the file accordingly.
:::

If you want the Trustlines Blockchain with the official set of currency networks, you can run:

```bash
cp ../../../config/addresses_tlbc.json ./addresses.json
```

:::note
The `addresses.json` file also includes references to the identity related contracts.
:::

### Generate Keys / Use existing key

To run the relay you need an account with TLC to pay for the transactions.
If you have one, use your existing keystore file.

If you don't have one, you can generate a new account with the `contract-deploy-tools` and fund that account with TLC coins
(through metamask for example)

To generate a new keystore file with the `contract-deploy-tools` you need python3 installed on your system (default on Ubuntu)
and pip3. If pip3 is missing on your machine install it with

```
apt install python3-pip
```

If python3 and pip3 are installed you can run the following to install the `contract-deploy-tools`:

```
python3 -m pip install contract-deploy-tools
```

Once complete generate the `keystore.json` file by running:

```
deploy-tools generate-keystore
```

:::note
If the `deploy-tools` fails with `Command not found`. You'll have to modify your `PATH`.
:::

We also need to store the password in clear text. Please create a file
`pass.pwd` containing only the password on the first line.

### TLBC-Node configuration
Rename the `node-config.dist.toml` file to `node-config.toml`. Then
change the unlock address to the address that is specified in your keystore.json.

To view the address in the keystore.json file you could cat the file:

```
cat keystore.json
```

This will print something like this:

```
{"address": "ae44ee881fbbb3a8372f48d6107e61e7fbc08013", "crypto": {"cipher": "aes-128-ctr", "cipherparam....
```

Copy the address and add a `0x` to it and add it to the node-config.toml.

### Relay configuration
Rename the `config.dist.toml` to `config.toml`. Then if necessary you can modify parameters in the
config. 

:::info
If you are making modifications to any config files after you've started a docker image you'll have to 
stop the image, remove it and then start it again for the modifications to be applied.

```bash
docker stop CONTAINER_ID
docker rm CONTAINER_ID

docker-compose up --detach SERVICE_NAME
```

`CONTAINER_ID` is the ID of the container when you run `docker ps`. The `SERVICE_NAME` is the name of the service you
want to start as specified in the docker-compose.yaml file.
:::


### Setup Initial Database

We need to set up the database and import the ABIs for the index
service by running the following commands:

```bash
docker-compose up -d db
sleep 2
docker-compose run --rm index createtables
docker-compose run --rm index importabi
```

After that, you can start the system with `docker-compose up -d`,
though you have to wait for the blockchain node to sync with the
trustlines blockchain in order to have a fully functioning system.

The account address that you've set up above will have to pay for
transactions. Please fund it with enough coins.

### Test the Installation

Please try to run the following command:

```bash
curl http://localhost:5000/api/v1/version
```

It should print the relay version running on the server.

### Useful commands

A short list with helpful commands.

#### Printing all running docker containers
```
docker ps
```

#### Stopping all running containers
```
docker stop $(docker ps -q)
```

`-q` prints only the running container ids in a list form.

### Removing all containers
```
docker rm $(docker ps -qa)
```

The `a` flag stands for all containers, not just the running ones. 


#### Printing docker logs
```
docker logs -f --tail 500 CONTAINER_NAME/CONTAINER_ID
```

The `-f` flag stands for follow. Basically you won't just see the log, but the screen will update when new logs arrive.
`--tail 500` specifies to just print the last 500 lines. If you don't provide the `tail` argument depending on how long
the container has been running you can wait a lot of time till all the logs print on your screen. 

## Next Steps

Setup a reverse Proxy and prevent requests on port 5000 to connect directly to the relay.
A good and easy proxy to install is [caddy](https://caddyserver.com/). 
