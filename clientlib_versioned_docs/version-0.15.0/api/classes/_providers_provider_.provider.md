---
id: "_providers_provider_.provider"
title: "Class: Provider"
sidebar_label: "Provider"
---

["providers/Provider"](../modules/_providers_provider_.md).Provider

## Hierarchy

* **Provider**

  ↳ [RelayProvider](_providers_relayprovider_.relayprovider.md)

## Constructors

### constructor

\+ **new Provider**(`ApiUrl`: string, `WsApiUrl`: string): [Provider](_providers_provider_.provider.md)

*Defined in [src/providers/Provider.ts:9](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/Provider.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`ApiUrl` | string |
`WsApiUrl` | string |

**Returns:** [Provider](_providers_provider_.provider.md)

## Properties

### ApiUrl

•  **ApiUrl**: string

*Defined in [src/providers/Provider.ts:8](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/Provider.ts#L8)*

___

### WsApiUrl

•  **WsApiUrl**: string

*Defined in [src/providers/Provider.ts:9](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/Provider.ts#L9)*

## Methods

### createWebsocketStream

▸ **createWebsocketStream**(`endpoint`: string, `functionName`: string, `args`: object, `reconnectingOptions?`: [ReconnectingWSOptions](../modules/_typings_.md#reconnectingwsoptions)): Observable&#60;any>

*Defined in [src/providers/Provider.ts:45](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/Provider.ts#L45)*

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

*Defined in [src/providers/Provider.ts:21](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/Provider.ts#L21)*

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

### getVersion

▸ **getVersion**(): Promise&#60;string>

*Defined in [src/providers/Provider.ts:64](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/Provider.ts#L64)*

Returns the version of the currently configured provider server.

**Returns:** Promise&#60;string>

Version of relay in the format `<name>/vX.X.X`.

___

### postToEndpoint

▸ **postToEndpoint**&#60;T>(`endpoint`: string, `data`: any): Promise&#60;T>

*Defined in [src/providers/Provider.ts:29](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/Provider.ts#L29)*

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
