---
title: Types of contracts
---
### Currency Networks

The currency network contracts represent the core logic of Trustlines. They dictate how trustlines are opened, updated, and closed. They also implement transfers in between users and how fees and interests are calculated.

### Exchange

The exchanges contracts are implementing an exchange which could be used to trade the currency of a network for the currency of another network, an ERC20 token, or wrapped ether. Their features are not currently fully supported by the protocol.

### Identity

The identity implementation contract allows to represent a user as a contract on a blockchain. It enables the use of meta-transactions where a delegate pays the blockchain fee of a transaction for a user. To reduce the costs of deploying an identity for a new user, we instead deploy a proxy contract that points to a reference identity implementation. This deployment is done by the identity proxy factory contract.
