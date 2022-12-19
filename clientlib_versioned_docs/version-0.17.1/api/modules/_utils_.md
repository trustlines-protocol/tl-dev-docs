---
id: "_utils_"
title: "Module: utils"
sidebar_label: "utils"
---

## Index

### Variables

* [DELEGATION\_GAS\_PRICE\_DIVISOR](_utils_.md#delegation_gas_price_divisor)
* [defaultBaseUrl](_utils_.md#defaultbaseurl)

### Functions

* [buildApiUrl](_utils_.md#buildapiurl)
* [buildUrl](_utils_.md#buildurl)
* [buildWsApiUrl](_utils_.md#buildwsapiurl)
* [calcRaw](_utils_.md#calcraw)
* [calcValue](_utils_.md#calcvalue)
* [calculateDelegationFees](_utils_.md#calculatedelegationfees)
* [calculateDelegationFeesAmount](_utils_.md#calculatedelegationfeesamount)
* [checkAddress](_utils_.md#checkaddress)
* [convertEthToWei](_utils_.md#convertethtowei)
* [convertHexStringToNumber](_utils_.md#converthexstringtonumber)
* [convertToAmount](_utils_.md#converttoamount)
* [convertToDelegationFees](_utils_.md#converttodelegationfees)
* [convertToHexString](_utils_.md#converttohexstring)
* [fetchUrl](_utils_.md#fetchurl)
* [formatEndpoint](_utils_.md#formatendpoint)
* [formatEvent](_utils_.md#formatevent)
* [formatExchangeEvent](_utils_.md#formatexchangeevent)
* [formatToAmount](_utils_.md#formattoamount)
* [formatToAmountInternal](_utils_.md#formattoamountinternal)
* [formatToDelegationFeesInternal](_utils_.md#formattodelegationfeesinternal)
* [formatToFeePayer](_utils_.md#formattofeepayer)
* [generateRandomNumber](_utils_.md#generaterandomnumber)
* [getRandomNonce](_utils_.md#getrandomnonce)
* [isURL](_utils_.md#isurl)
* [trimUrl](_utils_.md#trimurl)
* [websocketStream](_utils_.md#websocketstream)

## Variables

### DELEGATION\_GAS\_PRICE\_DIVISOR

• `Const` **DELEGATION\_GAS\_PRICE\_DIVISOR**: 1000000 = 1000000

*Defined in [src/utils.ts:319](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L319)*

___

### defaultBaseUrl

• `Const` **defaultBaseUrl**: &#34;trustlines://&#34; = "trustlines://"

*Defined in [src/utils.ts:40](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L40)*

## Functions

### buildApiUrl

▸ `Const`**buildApiUrl**(`UrlObject`: [ProviderUrl](../interfaces/_typings_.providerurl.md)): string

*Defined in [src/utils.ts:505](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L505)*

Returns URL by concatenating protocol, host, port and path from ProviderUrl object.

#### Parameters:

Name | Type |
------ | ------ |
`UrlObject` | [ProviderUrl](../interfaces/_typings_.providerurl.md) |

**Returns:** string

___

### buildUrl

▸ `Const`**buildUrl**(`baseUrl?`: string, `options?`: { path?: string[] ; query?: object  }): string

*Defined in [src/utils.ts:138](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L138)*

Encodes URI components and returns a URL.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`baseUrl` | string | defaultBaseUrl | base URL |
`options?` | { path?: string[] ; query?: object  } | - | additional parts of the URL if provided (path and query)        options.path - the path part of the URL        options.query - the query part of the URL  |

**Returns:** string

___

### buildWsApiUrl

▸ `Const`**buildWsApiUrl**(`UrlObject`: [ProviderUrl](../interfaces/_typings_.providerurl.md)): string

*Defined in [src/utils.ts:517](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L517)*

Returns URL by concatenating protocol, host, port and path.

#### Parameters:

Name | Type |
------ | ------ |
`UrlObject` | [ProviderUrl](../interfaces/_typings_.providerurl.md) |

**Returns:** string

___

### calcRaw

▸ `Const`**calcRaw**(`value`: number \| string \| BigNumber, `decimals`: number): BigNumber

*Defined in [src/utils.ts:176](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L176)*

Returns the smallest representation of a number.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | number \| string \| BigNumber | Representation of number in biggest unit. |
`decimals` | number | Number of decimals.  |

**Returns:** BigNumber

___

### calcValue

▸ `Const`**calcValue**(`raw`: number \| string \| BigNumber, `decimals`: number): BigNumber

*Defined in [src/utils.ts:189](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L189)*

Returns the biggest representation of a number.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`raw` | number \| string \| BigNumber | Representation of number in smallest unit. |
`decimals` | number | Number of decimals.  |

**Returns:** BigNumber

___

### calculateDelegationFees

▸ `Const`**calculateDelegationFees**(`baseFee`: number \| string \| BigNumber, `gasPrice`: number \| string \| BigNumber, `gasLimit`: number \| string \| BigNumber): BigNumber

*Defined in [src/utils.ts:302](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L302)*

#### Parameters:

Name | Type |
------ | ------ |
`baseFee` | number \| string \| BigNumber |
`gasPrice` | number \| string \| BigNumber |
`gasLimit` | number \| string \| BigNumber |

**Returns:** BigNumber

___

### calculateDelegationFeesAmount

▸ `Const`**calculateDelegationFeesAmount**(`delegationFees`: [DelegationFeesInternal](../interfaces/_typings_.delegationfeesinternal.md), `gasLimit`: number): [Amount](../interfaces/_typings_.amount.md)

*Defined in [src/utils.ts:286](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L286)*

#### Parameters:

Name | Type |
------ | ------ |
`delegationFees` | [DelegationFeesInternal](../interfaces/_typings_.delegationfeesinternal.md) |
`gasLimit` | number |

**Returns:** [Amount](../interfaces/_typings_.amount.md)

___

### checkAddress

▸ `Const`**checkAddress**(`address`: string): boolean

*Defined in [src/utils.ts:400](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L400)*

Checks if given address is a valid address

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | string | ethereum address  |

**Returns:** boolean

___

### convertEthToWei

▸ `Const`**convertEthToWei**(`value`: number \| string): number

*Defined in [src/utils.ts:412](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L412)*

Converts eth to wei

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | number \| string | value in eth  |

**Returns:** number

___

### convertHexStringToNumber

▸ `Const`**convertHexStringToNumber**(`hexString`: string): number

*Defined in [src/utils.ts:451](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L451)*

Return the number representation of the given hex string.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`hexString` | string |   |

**Returns:** number

___

### convertToAmount

▸ `Const`**convertToAmount**(`amount`: [AmountInternal](../interfaces/_typings_.amountinternal.md)): [Amount](../interfaces/_typings_.amount.md)

*Defined in [src/utils.ts:217](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L217)*

Converts an AmountInternal to Amount object.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`amount` | [AmountInternal](../interfaces/_typings_.amountinternal.md) | AmountInternal object.  |

**Returns:** [Amount](../interfaces/_typings_.amount.md)

___

### convertToDelegationFees

▸ `Const`**convertToDelegationFees**(`delegationFees`: [DelegationFeesInternal](../interfaces/_typings_.delegationfeesinternal.md)): [DelegationFeesObject](../interfaces/_typings_.delegationfeesobject.md)

*Defined in [src/utils.ts:276](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L276)*

Formats DelegationFeesInternal into a DelegationFeesObject.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`delegationFees` | [DelegationFeesInternal](../interfaces/_typings_.delegationfeesinternal.md) | DelegationFeesInternal object.  |

**Returns:** [DelegationFeesObject](../interfaces/_typings_.delegationfeesobject.md)

___

### convertToHexString

▸ `Const`**convertToHexString**(`decimalStr`: string \| number \| BigNumber): string

*Defined in [src/utils.ts:422](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L422)*

Returns the hexdecimal representation of given decimal string. The value has to be an integer.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`decimalStr` | string \| number \| BigNumber | Decimal string representation of number.  |

**Returns:** string

___

### fetchUrl

▸ `Const`**fetchUrl**&#60;T>(`url`: string, `options?`: object): Promise&#60;T>

*Defined in [src/utils.ts:47](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L47)*

Returns a `Promise` with a JSON object from given URL.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`url` | string |  |
`options?` | object | (optional)  |

**Returns:** Promise&#60;T>

___

### formatEndpoint

▸ `Const`**formatEndpoint**(`endpoint`: string): string

*Defined in [src/utils.ts:528](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L528)*

Adds a slash to the endpoint if it does not start with it.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | string | Endpoint to format.  |

**Returns:** string

___

### formatEvent

▸ `Const`**formatEvent**&#60;T>(`event`: any, `networkDecimals`: number, `interestRateDecimals`: number): T

*Defined in [src/utils.ts:327](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L327)*

Formats the number values of a raw event returned by the relay.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`event` | any | raw event |
`networkDecimals` | number | decimals of currency network |
`interestRateDecimals` | number | interest rate decimals of currency network  |

**Returns:** T

___

### formatExchangeEvent

▸ `Const`**formatExchangeEvent**(`exchangeEvent`: [AnyExchangeEventRaw](_typings_.md#anyexchangeeventraw), `makerDecimals`: number, `takerDecimals`: number): [AnyExchangeEvent](_typings_.md#anyexchangeevent)

*Defined in [src/utils.ts:361](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L361)*

Formats the number values of a raw Exchange event as returned by the relay.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`exchangeEvent` | [AnyExchangeEventRaw](_typings_.md#anyexchangeeventraw) | raw exchange event: `LogFill` or `LogCancel` |
`makerDecimals` | number | decimals in maker token |
`takerDecimals` | number | decimals in taker token  |

**Returns:** [AnyExchangeEvent](_typings_.md#anyexchangeevent)

___

### formatToAmount

▸ `Const`**formatToAmount**(`raw`: number \| string \| BigNumber, `decimals`: number): [Amount](../interfaces/_typings_.amount.md)

*Defined in [src/utils.ts:230](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L230)*

Formats raw representation of number into a Amount object.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`raw` | number \| string \| BigNumber | Representation of number in smallest unit. |
`decimals` | number | Number of decimals.  |

**Returns:** [Amount](../interfaces/_typings_.amount.md)

___

### formatToAmountInternal

▸ `Const`**formatToAmountInternal**(`raw`: number \| string \| BigNumber, `decimals`: number): [AmountInternal](../interfaces/_typings_.amountinternal.md)

*Defined in [src/utils.ts:202](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L202)*

Formats number into an AmountInternal object which is intended for internal use.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`raw` | number \| string \| BigNumber | Representation of number in smallest unit. |
`decimals` | number | Number of decimals.  |

**Returns:** [AmountInternal](../interfaces/_typings_.amountinternal.md)

___

### formatToDelegationFeesInternal

▸ `Const`**formatToDelegationFeesInternal**(`baseFee`: number \| string \| BigNumber, `decimals`: number, `gasPrice`: number \| string \| BigNumber, `currencyNetworkOfFees`: string): [DelegationFeesInternal](../interfaces/_typings_.delegationfeesinternal.md)

*Defined in [src/utils.ts:247](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L247)*

Formats number into an AmountInternal object which is intended for internal use.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`baseFee` | number \| string \| BigNumber | - |
`decimals` | number | Number of decimals. |
`gasPrice` | number \| string \| BigNumber | - |
`currencyNetworkOfFees` | string | the currency network corresponding to the delegation fees  |

**Returns:** [DelegationFeesInternal](../interfaces/_typings_.delegationfeesinternal.md)

___

### formatToFeePayer

▸ `Const`**formatToFeePayer**(`feePayer`: string): [FeePayer](../enums/_typings_.feepayer.md)

*Defined in [src/utils.ts:268](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L268)*

#### Parameters:

Name | Type |
------ | ------ |
`feePayer` | string |

**Returns:** [FeePayer](../enums/_typings_.feepayer.md)

___

### generateRandomNumber

▸ `Const`**generateRandomNumber**(`decimals`: number): BigNumber

*Defined in [src/utils.ts:472](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L472)*

Generates a random number with specified decimals.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`decimals` | number | Decimals which determine size of generated number.  |

**Returns:** BigNumber

___

### getRandomNonce

▸ **getRandomNonce**(): string

*Defined in [src/utils.ts:552](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L552)*

Generates a random nonce to use for meta transactions.
The nonce fits into the range of ]2^255, 2^256[.
This is an alternative to the up counting nonce (]0, 2^255[) without the need
to query a [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md).

**Returns:** string

___

### isURL

▸ `Const`**isURL**(`str`: any): boolean

*Defined in [src/utils.ts:485](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L485)*

Checks if given string is a valid url.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`str` | any | String to check.  |

**Returns:** boolean

___

### trimUrl

▸ `Const`**trimUrl**(`url`: string): string

*Defined in [src/utils.ts:539](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L539)*

Trims url from slashes.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`url` | string | URL to be trimmed from slashes.  |

**Returns:** string

___

### websocketStream

▸ `Const`**websocketStream**(`url`: string, `functionName`: string, `args`: object, `reconnectingOptions?`: [ReconnectingWSOptions](_typings_.md#reconnectingwsoptions)): Observable&#60;any>

*Defined in [src/utils.ts:71](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/utils.ts#L71)*

Returns an Observable for a websocket stream.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`url` | string | - | URL to open websocket stream to. |
`functionName` | string | - | Name of function to call on opened websocket. |
`args` | object | - | Arguments for above function. |
`reconnectingOptions` | [ReconnectingWSOptions](_typings_.md#reconnectingwsoptions) | {} | - |

**Returns:** Observable&#60;any>
