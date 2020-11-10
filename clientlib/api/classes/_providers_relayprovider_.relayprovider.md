---
id: "_providers_relayprovider_.relayprovider"
title: "Class: RelayProvider"
sidebar_label: "RelayProvider"
---

["providers/RelayProvider"](../modules/_providers_relayprovider_.md).RelayProvider

## Hierarchy

* [Provider](_providers_provider_.provider.md)

  ↳ **RelayProvider**

## Implements

* [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)

## Constructors

### constructor

\+ **new RelayProvider**(`relayApiUrl`: string, `relayWsApiUrl`: string): [RelayProvider](_providers_relayprovider_.relayprovider.md)

*Overrides [Provider](_providers_provider_.provider.md).[constructor](_providers_provider_.provider.md#constructor)*

*Defined in [src/providers/RelayProvider.ts:20](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/RelayProvider.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`relayApiUrl` | string |
`relayWsApiUrl` | string |

**Returns:** [RelayProvider](_providers_relayprovider_.relayprovider.md)

## Properties

### ApiUrl

•  **ApiUrl**: string

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md).[ApiUrl](../interfaces/_providers_tlprovider_.tlprovider.md#apiurl)*

*Inherited from [Provider](_providers_provider_.provider.md).[ApiUrl](_providers_provider_.provider.md#apiurl)*

*Defined in [src/providers/Provider.ts:8](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/Provider.ts#L8)*

___

### WsApiUrl

•  **WsApiUrl**: string

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md).[WsApiUrl](../interfaces/_providers_tlprovider_.tlprovider.md#wsapiurl)*

*Inherited from [Provider](_providers_provider_.provider.md).[WsApiUrl](_providers_provider_.provider.md#wsapiurl)*

*Defined in [src/providers/Provider.ts:9](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/Provider.ts#L9)*

## Methods

### createWebsocketStream

▸ **createWebsocketStream**(`endpoint`: string, `functionName`: string, `args`: object, `reconnectingOptions?`: [ReconnectingWSOptions](../modules/_typings_.md#reconnectingwsoptions)): Observable&#60;any>

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)*

*Inherited from [Provider](_providers_provider_.provider.md).[createWebsocketStream](_providers_provider_.provider.md#createwebsocketstream)*

*Defined in [src/providers/Provider.ts:45](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/Provider.ts#L45)*

Creates a websocket stream connection to the server.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | string | Websocket stream endpoint to connect to. |
`functionName` | string | Function to call on connection. |
`args` | object | Function arguments. |
`reconnectingOptions?` | [ReconnectingWSOptions](../modules/_typings_.md#reconnectingwsoptions) | - |

**Returns:** Observable&#60;any>

___

### fetchEndpoint

▸ **fetchEndpoint**&#60;T>(`endpoint`: string, `options?`: object): Promise&#60;T>

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)*

*Inherited from [Provider](_providers_provider_.provider.md).[fetchEndpoint](_providers_provider_.provider.md#fetchendpoint)*

*Defined in [src/providers/Provider.ts:21](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/Provider.ts#L21)*

Returns a JSON response from the REST API of the server.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | string | Endpoint to fetch. |
`options?` | object | Optional fetch options.  |

**Returns:** Promise&#60;T>

___

### getBalance

▸ **getBalance**(`address`: string): Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)*

*Defined in [src/providers/RelayProvider.ts:115](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/RelayProvider.ts#L115)*

Returns balance of given address.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | string | Address to determine balance for.  |

**Returns:** Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

___

### getIdentityImplementationAddress

▸ **getIdentityImplementationAddress**(`address`: string): Promise&#60;string>

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)*

*Defined in [src/providers/RelayProvider.ts:62](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/RelayProvider.ts#L62)*

Returns implementation address of identity with given address

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | string | Address of identity |

**Returns:** Promise&#60;string>

the implementation address currently in use by the given identity

___

### getIdentityNonce

▸ **getIdentityNonce**(`address`: string): Promise&#60;number>

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)*

*Defined in [src/providers/RelayProvider.ts:47](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/RelayProvider.ts#L47)*

Returns next nonce for identity with given address

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | string | Address of identity |

**Returns:** Promise&#60;number>

the next nonce that should be used for making a meta-transaction

___

### getMetaTxFees

▸ **getMetaTxFees**(`metaTransaction`: [MetaTransaction](../interfaces/_typings_.metatransaction.md)): Promise&#60;[MetaTransactionFees](../interfaces/_typings_.metatransactionfees.md)>

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)*

*Defined in [src/providers/RelayProvider.ts:79](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/RelayProvider.ts#L79)*

Returns the fees the provider would be willing to pay for the transaction

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`metaTransaction` | [MetaTransaction](../interfaces/_typings_.metatransaction.md) | Meta transaction to be relayed |

**Returns:** Promise&#60;[MetaTransactionFees](../interfaces/_typings_.metatransactionfees.md)>

The fees value and currency network of fees for given meta transaction

___

### getMetaTxStatus

▸ **getMetaTxStatus**(`identityAddress`: string, `metaTransactionHash`: string): Promise&#60;[MetaTransactionStatus](../interfaces/_typings_.metatransactionstatus.md)>

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)*

*Defined in [src/providers/RelayProvider.ts:94](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/RelayProvider.ts#L94)*

#### Parameters:

Name | Type |
------ | ------ |
`identityAddress` | string |
`metaTransactionHash` | string |

**Returns:** Promise&#60;[MetaTransactionStatus](../interfaces/_typings_.metatransactionstatus.md)>

___

### getTxInfos

▸ **getTxInfos**(`address`: string): Promise&#60;[TxInfos](../interfaces/_typings_.txinfos.md)>

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)*

*Defined in [src/providers/RelayProvider.ts:31](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/RelayProvider.ts#L31)*

Returns needed information for creating an ethereum transaction.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | string | Address of user creating the transaction |

**Returns:** Promise&#60;[TxInfos](../interfaces/_typings_.txinfos.md)>

Information for creating an ethereum transaction for the given user address.
         See type `TxInfos` for more details.

___

### getTxStatus

▸ **getTxStatus**(`transactionHash`: string): Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)*

*Defined in [src/providers/RelayProvider.ts:103](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/RelayProvider.ts#L103)*

#### Parameters:

Name | Type |
------ | ------ |
`transactionHash` | string |

**Returns:** Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

___

### getVersion

▸ **getVersion**(): Promise&#60;string>

*Inherited from [Provider](_providers_provider_.provider.md).[getVersion](_providers_provider_.provider.md#getversion)*

*Defined in [src/providers/Provider.ts:64](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/Provider.ts#L64)*

Returns the version of the currently configured provider server.

**Returns:** Promise&#60;string>

Version of relay in the format `<name>/vX.X.X`.

___

### postToEndpoint

▸ **postToEndpoint**&#60;T>(`endpoint`: string, `data`: any): Promise&#60;T>

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)*

*Inherited from [Provider](_providers_provider_.provider.md).[postToEndpoint](_providers_provider_.provider.md#posttoendpoint)*

*Defined in [src/providers/Provider.ts:29](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/Provider.ts#L29)*

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

▸ **sendSignedMetaTransaction**(`signedMetaTransaction`: [MetaTransaction](../interfaces/_typings_.metatransaction.md)): Promise&#60;string>

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)*

*Defined in [src/providers/RelayProvider.ts:145](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/RelayProvider.ts#L145)*

Send the given signed meta-transaction to a relay server to execute it on the
blockchain and returns a `Promise` with the transaction hash.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`signedMetaTransaction` | [MetaTransaction](../interfaces/_typings_.metatransaction.md) | Signed meta-transaction to be sent to the relay server |

**Returns:** Promise&#60;string>

The hash of the transaction sent by the relay server, not to be confused with the hash of the meta-transaction

___

### sendSignedTransaction

▸ **sendSignedTransaction**(`signedTransaction`: string): Promise&#60;string>

*Implementation of [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)*

*Defined in [src/providers/RelayProvider.ts:125](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/providers/RelayProvider.ts#L125)*

Send the given _signedTransaction_ to a relay server to execute it on the
blockchain and returns a `Promise` with the transaction hash.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`signedTransaction` | string |   |

**Returns:** Promise&#60;string>
