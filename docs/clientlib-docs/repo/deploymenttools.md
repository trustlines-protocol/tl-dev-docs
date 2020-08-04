---
layout: clientlib
---

## Deployment tools
This section runs through the tooling necessary for deploying the contracts.

### Ethereum client
To deploy the Trustlines smart contracts, you need an ethereum client, e.g. geth or parity, which is synced to the chain you want to use. The client needs to expose the JSON RPC endpoint. Additionally you need an unlocked account with enough ether to pay for the contract deployment.

### Deployment setup

 * Download and install the solidity compiler solc into bin for compiling the contracts
  `curl -L -o $HOME/bin/solc https://github.com/ethereum/solidity/releases/download/v0.4.21/solc-static-linux && chmod +x $HOME/bin/solc`

 * Clone this repository with
 `git clone https://github.com/trustlines-network/contracts.git`
 `cd contracts`

 * Install the deploy tool with
 `pip install . -c constraints.txt`


### tl-deploy

The tool `tl-deploy` allows you to deploy the relevant contracts.

Use `tl-deploy --help` to find out about the relevant commands or read further in the [deploy documentation](docs/deploy.md)
