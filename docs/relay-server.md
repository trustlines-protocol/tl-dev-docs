---
layout: page
title: Trustlines relay server
---

### [](#installation)Installation

#### [](#prerequisites)Prerequisites

-   Python 3.6 or up
-   pip

##### [](#installation-on-ubuntu)Installation on Ubuntu

`sudo apt install build-essential python3-dev libsecp256k1-dev python3-virtualenv virtualenv pkg-config libssl-dev automake autoconf libtool libgraphviz-dev git`

#### [](#setup)Setup

To install all needed development dependencies run the following commands in a fresh virtualenv:

```bash
git clone https://github.com/trustlines-protocol/relay.git
cd relay
pip install -c constraints.txt -r requirements.txt
pip install -c constraints.txt -e .
pre-commit install
pre-commit run -a
```

The last two commands will install a git pre-commit hook and intitialize the pre-commit installation. The installed git pre-commit hooks run flake8 and black among other things when committing changes to the git repository.

We also need to deploy trustlines smart contracts on a local node or testrpc as described [here](https://github.com/trustlines-protocol/contracts).

Add the `address` of the deployed `Currency Network` to the file `/relay/networks`:

#### [](#usage)Usage

```bash
cd relay
python trustlines.py
```

### [](#docs)Docs

-   [REST API Documentation](relay-api.html)

### [](#change-log)Changelog

See [CHANGELOG](https://github.com/trustlines-protocol/relay/blob/develop/CHANGELOG.rst).
