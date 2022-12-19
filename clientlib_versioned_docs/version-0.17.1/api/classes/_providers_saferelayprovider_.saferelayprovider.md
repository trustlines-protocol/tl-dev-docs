---
id: "_providers_saferelayprovider_.saferelayprovider"
title: "Class: SafeRelayProvider"
sidebar_label: "SafeRelayProvider"
---

["providers/SafeRelayProvider"](../modules/_providers_saferelayprovider_.md).SafeRelayProvider

## Hierarchy

* [Provider](_providers_provider_.provider.md)

  ↳ **SafeRelayProvider**

## Constructors

### constructor

\+ **new SafeRelayProvider**(`ApiUrl`: string, `WsApiUrl`: string): [SafeRelayProvider](_providers_saferelayprovider_.saferelayprovider.md)

*Inherited from [Provider](_providers_provider_.provider.md).[constructor](_providers_provider_.provider.md#constructor)*

*Defined in [src/providers/Provider.ts:9](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/Provider.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`ApiUrl` | string |
`WsApiUrl` | string |

**Returns:** [SafeRelayProvider](_providers_saferelayprovider_.saferelayprovider.md)

## Properties

### ApiUrl

•  **ApiUrl**: string

*Overrides [Provider](_providers_provider_.provider.md).[ApiUrl](_providers_provider_.provider.md#apiurl)*

*Defined in [src/providers/SafeRelayProvider.ts:15](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/SafeRelayProvider.ts#L15)*

___

### WsApiUrl

•  **WsApiUrl**: string

*Overrides [Provider](_providers_provider_.provider.md).[WsApiUrl](_providers_provider_.provider.md#wsapiurl)*

*Defined in [src/providers/SafeRelayProvider.ts:16](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/SafeRelayProvider.ts#L16)*

## Methods

### createWebsocketStream

▸ **createWebsocketStream**(`endpoint`: string, `functionName`: string, `args`: object, `reconnectingOptions?`: [ReconnectingWSOptions](../modules/_typings_.md#reconnectingwsoptions)): Observable&#60;any>

*Inherited from [Provider](_providers_provider_.provider.md).[createWebsocketStream](_providers_provider_.provider.md#createwebsocketstream)*

*Defined in [src/providers/Provider.ts:45](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/Provider.ts#L45)*

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

*Overrides [Provider](_providers_provider_.provider.md).[fetchEndpoint](_providers_provider_.provider.md#fetchendpoint)*

*Defined in [src/providers/SafeRelayProvider.ts:32](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/SafeRelayProvider.ts#L32)*

Returns a JSON response from the REST API of the server.

We overload this method since the safe relay server from gnosis doesn't like
urls with a trimmed slash at the end.

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

*Defined in [src/providers/SafeRelayProvider.ts:137](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/SafeRelayProvider.ts#L137)*

Returns balance of given address.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | string | Address to determine balance for.  |

**Returns:** Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

___

### getIdentityImplementationAddress

▸ **getIdentityImplementationAddress**(`address`: string): Promise&#60;string>

*Defined in [src/providers/SafeRelayProvider.ts:102](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/SafeRelayProvider.ts#L102)*

Returns implementation address of identity with given address

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | string | Address of identity |

**Returns:** Promise&#60;string>

the implementation address currently in use by the given identity

___

### getMetaTxFees

▸ **getMetaTxFees**(`metaTransaction`: [SafeMetaTransaction](../interfaces/_typings_.safemetatransaction.md)): Promise&#60;[SafeTransactionFees](../interfaces/_typings_.safetransactionfees.md)>

*Defined in [src/providers/SafeRelayProvider.ts:55](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/SafeRelayProvider.ts#L55)*

Returns the fees the provider would be willing to pay for the transaction

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`metaTransaction` | [SafeMetaTransaction](../interfaces/_typings_.safemetatransaction.md) | Meta transaction to be relayed |

**Returns:** Promise&#60;[SafeTransactionFees](../interfaces/_typings_.safetransactionfees.md)>

The fees value and currency network of fees for given meta transaction

___

### getMetaTxStatus

▸ **getMetaTxStatus**(`safeAddress`: string, `transactionHash`: string): Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

*Defined in [src/providers/SafeRelayProvider.ts:109](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/SafeRelayProvider.ts#L109)*

#### Parameters:

Name | Type |
------ | ------ |
`safeAddress` | string |
`transactionHash` | string |

**Returns:** Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

___

### getSafeNonce

▸ **getSafeNonce**(`safeAddress`: string): Promise&#60;number>

*Defined in [src/providers/SafeRelayProvider.ts:39](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/SafeRelayProvider.ts#L39)*

#### Parameters:

Name | Type |
------ | ------ |
`safeAddress` | string |

**Returns:** Promise&#60;number>

___

### getVersion

▸ **getVersion**(): Promise&#60;string>

*Inherited from [Provider](_providers_provider_.provider.md).[getVersion](_providers_provider_.provider.md#getversion)*

*Defined in [src/providers/Provider.ts:64](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/Provider.ts#L64)*

Returns the version of the currently configured provider server.

**Returns:** Promise&#60;string>

Version of relay in the format `<name>/vX.X.X`.

___

### plainFetch

▸ **plainFetch**(`endpoint`: string): Promise&#60;Response>

*Defined in [src/providers/SafeRelayProvider.ts:18](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/SafeRelayProvider.ts#L18)*

#### Parameters:

Name | Type |
------ | ------ |
`endpoint` | string |

**Returns:** Promise&#60;Response>

___

### postToEndpoint

▸ **postToEndpoint**&#60;T>(`endpoint`: string, `data`: any): Promise&#60;T>

*Inherited from [Provider](_providers_provider_.provider.md).[postToEndpoint](_providers_provider_.provider.md#posttoendpoint)*

*Defined in [src/providers/Provider.ts:29](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/Provider.ts#L29)*

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

▸ **sendSignedMetaTransaction**(`signedMetaTransaction`: [SafeMetaTransaction](../interfaces/_typings_.safemetatransaction.md)): Promise&#60;any>

*Defined in [src/providers/SafeRelayProvider.ts:86](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/providers/SafeRelayProvider.ts#L86)*

Send the given signed meta-transaction to a relay server to execute it on the
blockchain and returns a `Promise` with the transaction hash.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`signedMetaTransaction` | [SafeMetaTransaction](../interfaces/_typings_.safemetatransaction.md) | Signed meta-transaction to be sent to the relay server |

**Returns:** Promise&#60;any>

The hash of the transaction sent by the relay server, not to be confused with the hash of the meta-transaction
