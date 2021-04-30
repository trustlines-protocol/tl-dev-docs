---
title: Usage
---

Use `tl-deploy --help` to find out about the relevant commands:

```
Usage: tl-deploy [OPTIONS] COMMAND [ARGS]...

  Commandline tool to deploy the Trustlines contracts

Options:
  --version  Prints the version of the software
  --help     Show this message and exit.

Commands:
  beacon                     Deploy a new beacon contract
  currency-network-proxy     Deploy a currency network proxy contract.
  currencynetwork            Deploy a currency network contract.
  deploy-and-migrate         Deploy new currrency networks and migrate old
                             ones to deployed ones.

  exchange                   Deploy an exchange contract.
  identity-implementation    Deploy an identity implementation contract.
  identity-proxy-factory     Deploy an identity proxy factory.
  migration                  Migrate old currency networks to new ones.
  test                       Deploy contracts for testing.
  unfreeze-and-remove-owner  Unfreeze a CurrencyNetworkOwnable contract and
                             remove its owner.

  verify-migration           Verify migration from old currency networks to
                             new ones.
```

To get help about a specific command use `tl-deploy COMMAND --help`.

## Deploy a Currency Network
A currency network contract handles all trustlines with the same denomination.
It allows for transfers between the users of this network.

You can deploy a currency network with the name `Testcoin` and symbol `TST` by using the command

```bash
tl-deploy currencynetwork Testcoin TST
```

To find out more about the possible options, use

```bash
tl-deploy currencynetwork --help
```

The mandatory arguments are the `NAME` and the `SYMBOL` of the network.
All other parameters are optional as they have either default values or are not needed in some cases.

## Deploy an upgradeable currency network

Upgradeable currency networks are handled via a beacon, an implementation, and one or multiple proxies.
The implementation contract contains the logic of the currency network code and is referred to by the beacon.
The proxies refer to the beacon to find which implementation logic to use. This allows to update the implementation
used by multiple proxies at the same with a single transaction to update the implementation referred to by the beacon.

Only the `owner` of the beacon / proxies are able to change the referred implementation / beacon.
Make sure the `owner` key is safely stored and replicated, losing it will prevent upgrading currency networks in the future.
Be aware that the owner of a proxy will not be able to interact with the logic of the implementation (here the currency network).

1. The first step is to deploy the desired implementation for example a currency network:

```bash
tl-deploy currencynetwork Implementation IMPL
```

You need to write down the address of the deployed implementation to use it when you deploy the beacon. It does not matter
which argument you used for the name, symbol, decimals, etc of the contract, as its storage will not be used.

2. The second step is to deploy a beacon that points to the implementation.

```bash
tl-deploy beacon --implementation <implementation_address> --owner <owner_address> --gas-price <gas_price>
```

Similarly, you should write down the address of the deployed beacon.

3. The last step is to deploy one (or as many as you want) proxy.

```bash
tl-deploy currency-network-proxy --beacon <beacon_address> --owner <owner_address> --gas-price <gas_price> NAME SYMBOL
```

This will give you the address with which your users should interract as a currency network. The values for the name, 
symbol, fee-rates, and other are the ones that will be taken into account.

## Deploy an Exchange
An exchange allows users of different currency networks to exchange 1. trustlines currencies,
2. trustlines currency for [ERC 20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md) tokens
   and 3. trustlines currency for wrapped Ether.
   This exchange is an extension to the [0x protocol](https://github.com/0xProject),
   adding support for Trustlines currencies.

You can deploy an exchange with

```bash
tl-deploy exchange
```
To get further information, use

```bash
tl-deploy exchange --help
```

The address of this exchange can be used as input for the `--exchange-contract` option when creating a currency network.

## Deploy Identity Contracts
We use identity proxy contracts to enable the use of meta-transactions.
Through that, new users can directly interact with the deployed currency network contracts
without the need of coins to pay for transaction fees.
Therefore two contracts need to be deployed.
1. Implementation of the identity contract
2. Identity proxy factory contract

### Identity Implementation
This contract is the implementation of an identity contract.
We need to deploy it to set the implementation of deployed identity proxies.

Run

```bash
tl-deploy identity-implementation
```
To get further information, run

```bash
tl-deploy identity-implementation --help
```

### Proxy Factory
The proxy factory contract is used to create identity proxies, where the implementation need to be set.

Run

```bash
tl-deploy identity-proxy-factory
```
Same as above you can get further information on the usage by running

```bash
tl-deploy identity-proxy-factory --help
```
