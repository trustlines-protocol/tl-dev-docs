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

*Defined in [src/typings.ts:373](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L373)*

Balance of given user address in ETH

___

### gasPrice

•  **gasPrice**: string

*Defined in [src/typings.ts:369](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L369)*

Amount of ETH in gwei for every unit of gas user is willing to pay

___

### nonce

•  **nonce**: number

*Defined in [src/typings.ts:377](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L377)*

Transaction count of given user address
