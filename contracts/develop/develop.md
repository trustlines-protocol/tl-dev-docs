---
title: Start Developing
---
To start developing on the smart contracts, you will need the solidity compiler solc version 0.8.0.
To download it into bin, run:

```bash
curl -L -o $HOME/bin/solc https://github.com/ethereum/solidity/releases/download/v0.8.0/solc-static-linux && chmod +x $HOME/bin/solc
```

You can then clone the repository:

```bash
git clone https://github.com/trustlines-protocol/contracts.git
cd contracts
```

Then create and activate a fresh virtualenv:

```bash
virtualenv -p python3 venv
source venv/bin/activate
```
Finally, to install all needed dependencies and compiling the contracts use the following command:

```bash
make install
```
