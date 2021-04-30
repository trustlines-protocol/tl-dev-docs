---
title: Introduction
---

The smart contracts are components of the [Trustlines Protocol](https://trustlines.foundation/protocol.html).
They are currently deployed on the Trustlines Blockchain. 
Transfers within currency networks are executed by the smart contracts. All trustlines (i.e. credit lines and balances between users) are notarized on the blockchain. Furthermore, the smart contracts enforce the rules determining how trustlines can be created, used and updated.

The [Smart contracts repository on github](https://github.com/trustlines-protocol/contracts) contains the
smart contracts implementing the Trustlines logic. This includes:

- Currency Networks
- Exchanges
- Identity implementaiton, proxy, and proxy factory.

It also includes deploy tools that can be used to deploy these contracts. The deploy tools can be used via cli or as a python package to be built on top of. The package tl-deploy used for deployment of the contracts additionally provides an abstraction layer to identities and meta-transactions for delegates to use.
