---
id: "_providers_tlprovider_.tlprovider"
title: "Interface: TLProvider"
sidebar_label: "TLProvider"
---

["providers/TLProvider"](../modules/_providers_tlprovider_.md).TLProvider

Interface for different provider strategies which extends the given
abstract class of `ethers.js`.

## Hierarchy

* **TLProvider**

## Implemented by

* [RelayProvider](../classes/_providers_relayprovider_.relayprovider.md)

## Properties

### ApiUrl

•  **ApiUrl**: string

*Defined in [src/providers/TLProvider.ts:16](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L16)*

___

### WsApiUrl

•  **WsApiUrl**: string

*Defined in [src/providers/TLProvider.ts:17](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L17)*

## Methods

### createWebsocketStream

▸ **createWebsocketStream**(`endpoint`: string, `functionName`: string, `args`: object, `reconnectingOptions?`: [ReconnectingWSOptions](../modules/_typings_.md#reconnectingwsoptions)): any

*Defined in [src/providers/TLProvider.ts:20](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`endpoint` | string |
`functionName` | string |
`args` | object |
`reconnectingOptions?` | [ReconnectingWSOptions](../modules/_typings_.md#reconnectingwsoptions) |

**Returns:** any

___

### fetchEndpoint

▸ **fetchEndpoint**&#60;T>(`endpoint`: string, `options?`: object): Promise&#60;T>

*Defined in [src/providers/TLProvider.ts:18](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L18)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`endpoint` | string |
`options?` | object |

**Returns:** Promise&#60;T>

___

### getBalance

▸ **getBalance**(`userAddress`: string): Promise&#60;[Amount](_typings_.amount.md)>

*Defined in [src/providers/TLProvider.ts:35](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L35)*

#### Parameters:

Name | Type |
------ | ------ |
`userAddress` | string |

**Returns:** Promise&#60;[Amount](_typings_.amount.md)>

___

### getIdentityImplementationAddress

▸ **getIdentityImplementationAddress**(`userAddress`: string): Promise&#60;string>

*Defined in [src/providers/TLProvider.ts:29](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L29)*

#### Parameters:

Name | Type |
------ | ------ |
`userAddress` | string |

**Returns:** Promise&#60;string>

___

### getIdentityNonce

▸ **getIdentityNonce**(`userAddress`: string): Promise&#60;number>

*Defined in [src/providers/TLProvider.ts:28](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L28)*

#### Parameters:

Name | Type |
------ | ------ |
`userAddress` | string |

**Returns:** Promise&#60;number>

___

### getMetaTxFees

▸ **getMetaTxFees**(`metaTransaction`: [MetaTransaction](_typings_.metatransaction.md)): Promise&#60;[MetaTransactionFees](_typings_.metatransactionfees.md)>

*Defined in [src/providers/TLProvider.ts:30](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`metaTransaction` | [MetaTransaction](_typings_.metatransaction.md) |

**Returns:** Promise&#60;[MetaTransactionFees](_typings_.metatransactionfees.md)>

___

### getMetaTxStatus

▸ **getMetaTxStatus**(`identityAddress`: string, `metaTransactionHash`: string): Promise&#60;[MetaTransactionStatus](_typings_.metatransactionstatus.md)>

*Defined in [src/providers/TLProvider.ts:31](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`identityAddress` | string |
`metaTransactionHash` | string |

**Returns:** Promise&#60;[MetaTransactionStatus](_typings_.metatransactionstatus.md)>

___

### getTxInfos

▸ **getTxInfos**(`userAddress`: string): Promise&#60;[TxInfos](_typings_.txinfos.md)>

*Defined in [src/providers/TLProvider.ts:26](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L26)*

#### Parameters:

Name | Type |
------ | ------ |
`userAddress` | string |

**Returns:** Promise&#60;[TxInfos](_typings_.txinfos.md)>

___

### getTxStatus

▸ **getTxStatus**(`txHash`: string): Promise&#60;[TransactionStatusObject](_typings_.transactionstatusobject.md)>

*Defined in [src/providers/TLProvider.ts:27](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L27)*

#### Parameters:

Name | Type |
------ | ------ |
`txHash` | string |

**Returns:** Promise&#60;[TransactionStatusObject](_typings_.transactionstatusobject.md)>

___

### postToEndpoint

▸ **postToEndpoint**&#60;T>(`endpoint`: string, `data`: any): Promise&#60;T>

*Defined in [src/providers/TLProvider.ts:19](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L19)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`endpoint` | string |
`data` | any |

**Returns:** Promise&#60;T>

___

### sendSignedMetaTransaction

▸ **sendSignedMetaTransaction**(`metaTransaction`: [MetaTransaction](_typings_.metatransaction.md)): Promise&#60;string>

*Defined in [src/providers/TLProvider.ts:37](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L37)*

#### Parameters:

Name | Type |
------ | ------ |
`metaTransaction` | [MetaTransaction](_typings_.metatransaction.md) |

**Returns:** Promise&#60;string>

___

### sendSignedTransaction

▸ **sendSignedTransaction**(`signedTransaction`: string): Promise&#60;string>

*Defined in [src/providers/TLProvider.ts:36](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/TLProvider.ts#L36)*

#### Parameters:

Name | Type |
------ | ------ |
`signedTransaction` | string |

**Returns:** Promise&#60;string>
