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

*Defined in [src/typings.ts:388](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/typings.ts#L388)*

Balance of given user address in ETH

___

### gasPrice

•  **gasPrice**: string

*Defined in [src/typings.ts:384](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/typings.ts#L384)*

Amount of ETH in gwei for every unit of gas user is willing to pay

___

### nonce

•  **nonce**: number

*Defined in [src/typings.ts:392](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/typings.ts#L392)*

Transaction count of given user address
