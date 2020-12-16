---
id: "_currencynetwork_.currencynetwork"
title: "Class: CurrencyNetwork"
sidebar_label: "CurrencyNetwork"
---

["CurrencyNetwork"](../modules/_currencynetwork_.md).CurrencyNetwork

The [CurrencyNetwork](_currencynetwork_.currencynetwork.md) class contains all functions relevant for retrieving currency network related information.
It is meant to be called via a [TLNetwork](_tlnetwork_.tlnetwork.md) instance like:
```typescript
const tlNetwork = new TLNetwork(...)

// Get all networks
tlNetwork.currencyNetwork.getAll().then(
 networks => console.log("All networks:", networks)
)
```

## Hierarchy

* **CurrencyNetwork**

## Methods

### getAll

▸ **getAll**(): Promise&#60;[NetworkDetails](../interfaces/_typings_.networkdetails.md)[]>

*Defined in [src/CurrencyNetwork.ts:52](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/CurrencyNetwork.ts#L52)*

Returns all registered currency networks.

**Returns:** Promise&#60;[NetworkDetails](../interfaces/_typings_.networkdetails.md)[]>

___

### getInfo

▸ **getInfo**(`networkAddress`: string): Promise&#60;[NetworkDetails](../interfaces/_typings_.networkdetails.md)>

*Defined in [src/CurrencyNetwork.ts:70](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/CurrencyNetwork.ts#L70)*

Returns detailed information of specific currency network.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`networkAddress` | string | Address of a currency network. |

**Returns:** Promise&#60;[NetworkDetails](../interfaces/_typings_.networkdetails.md)>

A network object with information about name, decimals, number of users and address.

___

### getUserOverview

▸ **getUserOverview**(`networkAddress`: string, `userAddress`: string, `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md)  }): Promise&#60;[UserOverview](../interfaces/_typings_.useroverview.md)>

*Defined in [src/CurrencyNetwork.ts:100](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/CurrencyNetwork.ts#L100)*

Returns overview of a user in a specific currency network.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`userAddress` | string | - | Address of a user.  |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md)  } | {} | - |

**Returns:** Promise&#60;[UserOverview](../interfaces/_typings_.useroverview.md)>

___

### getUsers

▸ **getUsers**(`networkAddress`: string): Promise&#60;string[]>

*Defined in [src/CurrencyNetwork.ts:88](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/CurrencyNetwork.ts#L88)*

Returns all addresses of users in a currency network.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`networkAddress` | string | Address of a currency network.  |

**Returns:** Promise&#60;string[]>
