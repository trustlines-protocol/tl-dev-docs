---
title: Manual Setup
---

This documents describes how to install the trustlines relay server
for local development.

If you're trying to setup a complete trustlines system, please visit
[Running the trustlines system](/relay/tutorials/trustlines_system)

The relay server provides a REST API. Please visit the [REST API
Documentation](https://github.com/trustlines-protocol/relay/blob/master/docs/RelayAPI.md)
page for more information.

## Installation

#### Prerequisites

An installation of the relay server requires at least the following
components:

- PostgreSQL header files
- Python 3.6 or up
- pip

#### Installation on Ubuntu

To install the relay server on Ubuntu 18.04, start by installing the pre-requisites
with the following command

```bash
sudo apt install build-essential python3-dev libsecp256k1-dev python3-virtualenv virtualenv pkg-config libssl-dev automake autoconf libtool git libpq-dev
```

#### Setup


To install the relay, start by cloning the repository

```bash
git clone https://github.com/trustlines-protocol/relay.git
cd relay
```

Then create and activate a fresh virtualenv::

```bash
pip install -c constraints.txt -r requirements.txt
pip install -c constraints.txt -e .
```


Finally, to install all needed dependencies to run the relay, use the following command

```git
pre-commit install
pre-commit run -a
```

You can verify that the relay is correctly installed by running `tl-relay --help`
to get an overview of available options.

## Additional Dependencies
In addition to having installed the relay, you will need a blockchain
node connected to a chain with deployed [trustlines contracts](https://github.com/trustlines-protocol/contracts)
to interact with. You can go to the [contracts repository](https://github.com/trustlines-protocol/contracts)
to see how to deploy new trustlines contracts, or you may use the provided
`addresses.json` files in `config/` containing addresses of deployed contracts on the Trustlines Blockchain by
copying them here

```bash
cp config/addresses_tlbc.json addresses.json
```

You may use the [blockchain repository](https://github.com/trustlines-protocol/blockchain)
to get a Trustlines Blockchain node running.

The relay also uses a [py-eth-index](https://github.com/trustlines-protocol/py-eth-index)
instance that index events that the relay will be able to process and serve to its users.

### Changelog

See [CHANGELOG](https://github.com/trustlines-protocol/relay/blob/master/CHANGELOG.rst)
