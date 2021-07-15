---
id: "_typings_.closepathobject"
title: "Interface: ClosePathObject"
sidebar_label: "ClosePathObject"
---

["typings"](../modules/_typings_.md).ClosePathObject

Path object for closing a trustline.
Contains all relevant information for closing a trustline.

## Hierarchy

* **ClosePathObject**

## Properties

### feePayer

•  **feePayer**: [FeePayer](../enums/_typings_.feepayer.md)

*Defined in [src/typings.ts:657](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/typings.ts#L657)*

Payer of thee for the closing transaction

___

### maxFees

•  **maxFees**: [Amount](_typings_.amount.md)

*Defined in [src/typings.ts:661](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/typings.ts#L661)*

Maximal fees that can occur for closing

___

### path

•  **path**: string[]

*Defined in [src/typings.ts:653](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/typings.ts#L653)*

Close path for triangulation

___

### value

•  **value**: [Amount](_typings_.amount.md)

*Defined in [src/typings.ts:665](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/typings.ts#L665)*

Estimated value to be transferred for closing
