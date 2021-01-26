---
title: Installation
---

The installation requires the following to be installed:

-  Python 3.6 or up and dev dependencies
-  [pip](https://pip.pypa.io/en/stable/)
-  git

To install them on Ubuntu, run:

```bash
apt install build-essential python3-dev \
python3-virtualenv virtualenv pkg-config libssl-dev \
automake autoconf libtool git make libsecp256k1-dev
```

You can then install the deployment tool with:

```bash
pip install trustlines-contracts-deploy
```

After that, you can run :code:`tl-deploy --help` to see the list of available
commands for deploying Trustlines contracts or read
further in the [deploy documentation](https://github.com/trustlines-protocol/contracts/blob/master/docs/deploy.md)
