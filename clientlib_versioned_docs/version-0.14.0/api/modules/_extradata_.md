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

*Defined in [src/extraData.ts:3](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/extraData.ts#L3)*

## Functions

### decode

▸ **decode**(`encodedExtraData`: string): [ExtraData](../interfaces/_extradata_.extradata.md)

*Defined in [src/extraData.ts:32](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/extraData.ts#L32)*

#### Parameters:

Name | Type |
------ | ------ |
`encodedExtraData` | string |

**Returns:** [ExtraData](../interfaces/_extradata_.extradata.md)

___

### encode

▸ **encode**(`extraData`: [ExtraData](../interfaces/_extradata_.extradata.md)): string

*Defined in [src/extraData.ts:15](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/extraData.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`extraData` | [ExtraData](../interfaces/_extradata_.extradata.md) |

**Returns:** string

___

### processExtraData

▸ **processExtraData**(`object`: any): any

*Defined in [src/extraData.ts:81](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/extraData.ts#L81)*

Processes the content of extraData and attaches the content to the object.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`object` | any | An object potentially having extra data to process  |

**Returns:** any
