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

*Defined in [src/typings.ts:640](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L640)*

Payer of thee for the closing transaction

___

### maxFees

•  **maxFees**: [Amount](_typings_.amount.md)

*Defined in [src/typings.ts:644](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L644)*

Maximal fees that can occur for closing

___

### path

•  **path**: string[]

*Defined in [src/typings.ts:636](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L636)*

Close path for triangulation

___

### value

•  **value**: [Amount](_typings_.amount.md)

*Defined in [src/typings.ts:648](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L648)*

Estimated value to be transferred for closing
