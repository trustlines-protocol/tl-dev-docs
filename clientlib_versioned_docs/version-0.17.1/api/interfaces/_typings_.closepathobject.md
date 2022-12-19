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

*Defined in [src/typings.ts:678](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/typings.ts#L678)*

Payer of thee for the closing transaction

___

### maxFees

•  **maxFees**: [Amount](_typings_.amount.md)

*Defined in [src/typings.ts:682](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/typings.ts#L682)*

Maximal fees that can occur for closing

___

### path

•  **path**: string[]

*Defined in [src/typings.ts:674](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/typings.ts#L674)*

Close path for triangulation

___

### value

•  **value**: [Amount](_typings_.amount.md)

*Defined in [src/typings.ts:686](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/typings.ts#L686)*

Estimated value to be transferred for closing
