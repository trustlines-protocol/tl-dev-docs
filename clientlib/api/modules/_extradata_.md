---
id: "_extradata_"
title: "Module: extraData"
sidebar_label: "extraData"
---

## Index

### Interfaces

* [ExtraData](../interfaces/_extradata_.extradata.md)

### Variables

* [MSG\_PACK\_ID](_extradata_.md#msg_pack_id)

### Functions

* [decode](_extradata_.md#decode)
* [encode](_extradata_.md#encode)
* [processExtraData](_extradata_.md#processextradata)

## Variables

### MSG\_PACK\_ID

• `Const` **MSG\_PACK\_ID**: &#34;0x544c4d50&#34; = "0x544c4d50"

*Defined in [src/extraData.ts:3](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/extraData.ts#L3)*

## Functions

### decode

▸ **decode**(`encodedExtraData`: string): [ExtraData](../interfaces/_extradata_.extradata.md)

*Defined in [src/extraData.ts:37](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/extraData.ts#L37)*

#### Parameters:

Name | Type |
------ | ------ |
`encodedExtraData` | string |

**Returns:** [ExtraData](../interfaces/_extradata_.extradata.md)

___

### encode

▸ **encode**(`extraData`: [ExtraData](../interfaces/_extradata_.extradata.md)): string

*Defined in [src/extraData.ts:17](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/extraData.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`extraData` | [ExtraData](../interfaces/_extradata_.extradata.md) |

**Returns:** string

___

### processExtraData

▸ **processExtraData**(`object`: any): any

*Defined in [src/extraData.ts:87](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/extraData.ts#L87)*

Processes the content of extraData and attaches the content to the object.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`object` | any | An object potentially having extra data to process  |

**Returns:** any
