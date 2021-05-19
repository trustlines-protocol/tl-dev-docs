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

*Defined in [src/typings.ts:642](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L642)*

Payer of thee for the closing transaction

___

### maxFees

•  **maxFees**: [Amount](_typings_.amount.md)

*Defined in [src/typings.ts:646](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L646)*

Maximal fees that can occur for closing

___

### path

•  **path**: string[]

*Defined in [src/typings.ts:638](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L638)*

Close path for triangulation

___

### value

•  **value**: [Amount](_typings_.amount.md)

*Defined in [src/typings.ts:650](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L650)*

Estimated value to be transferred for closing
