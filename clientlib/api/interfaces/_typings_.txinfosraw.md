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

*Defined in [src/typings.ts:371](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L371)*

Balance of given user address in ETH

___

### gasPrice

•  **gasPrice**: string

*Defined in [src/typings.ts:367](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L367)*

Amount of ETH in gwei for every unit of gas user is willing to pay

___

### nonce

•  **nonce**: number

*Defined in [src/typings.ts:375](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L375)*

Transaction count of given user address
