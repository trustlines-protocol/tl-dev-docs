---
id: "_typings_.txinfosraw"
title: "Interface: TxInfosRaw"
sidebar_label: "TxInfosRaw"
---

["typings"](../modules/_typings_.md).TxInfosRaw

Information for creating an ethereum transaction of a given user address
as returned by the relay server.

## Hierarchy

* **TxInfosRaw**

## Properties

### balance

•  **balance**: string

*Defined in [src/typings.ts:403](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/typings.ts#L403)*

Balance of given user address in ETH

___

### gasPrice

•  **gasPrice**: string

*Defined in [src/typings.ts:399](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/typings.ts#L399)*

Amount of ETH in gwei for every unit of gas user is willing to pay

___

### nonce

•  **nonce**: number

*Defined in [src/typings.ts:407](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/typings.ts#L407)*

Transaction count of given user address
