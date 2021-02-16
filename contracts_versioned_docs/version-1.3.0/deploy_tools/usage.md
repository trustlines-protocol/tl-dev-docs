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
  currencynetwork          Deploy a currency network contract.
  exchange                 Deploy an exchange contract.
  identity-implementation  Deploy an identity implementation contract.
  identity-proxy-factory   Deploy an identity proxy factory.
  test                     Deploy contracts for testing.
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
