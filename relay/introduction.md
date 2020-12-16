---
title: Introduction
---

The Trustlines relay server is a component of the [Trustlines Protocol](https://trustlines.foundation/protocol.html).
The Trustlines Protocol is a set of rules to allow the transfer of value on top of existing trust
relationships stored on a trustless infrastructure, e.g. a blockchain.

In the technology stack, the relay server is located in between a client of the Trustlines Protocol,
e.g. a mobile app build on to of the [Trustlines clientlib](https://github.com/trustlines-protocol/clientlib), and the deployed
[Trustlines smart contracts](https://github.com/trustlines-protocol/contracts) on a chosen blockchain, e.g.
[The Trustlines Blockchain (TLBC)](https://explore.tlbc.trustlines.foundation).

Operating a relay server requires an ethereum based blockchain node, a postgres database
and a [py-eth-index](https://github.com/trustlines-protocol/py-eth-index)
instance that index events that the relay will be able to process and serve to its users.

The goal of the relay server is to handle computation and services which are currently not feasible to do on the client
or on the blockchain.
More specifically the relay currently handles:

- Computing a graph of the trustlines in a currency networks
- Computing the path of mediators for trustlines transfer in this graph
- Providing an api to get a user events regarding trustlines
- Deploying identity contracts for users
- Relaying transactions of the user to a blockchain node
- Paying for meta-transactions of a user in exchange for a fee
- Sending notifications for user events.

Depending on the use case it is possible to enable/disable some of the functionality.
