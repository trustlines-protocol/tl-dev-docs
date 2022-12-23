---
id: "_tlnetwork_.tlnetwork"
title: "Class: TLNetwork"
sidebar_label: "TLNetwork"
---

["TLNetwork"](../modules/_tlnetwork_.md).TLNetwork

The TLNetwork class is the single entry-point into the trustlines-clientlib.
It contains all of the library's functionality and all calls to the library should be made through a `TLNetwork` instance.

## Hierarchy

* **TLNetwork**

## Constructors

### constructor

\+ **new TLNetwork**(`config?`: [TLNetworkConfig](../interfaces/_typings_.tlnetworkconfig.md)): [TLNetwork](_tlnetwork_.tlnetwork.md)

*Defined in [src/TLNetwork.ts:138](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/TLNetwork.ts#L138)*

Initiates a new TLNetwork instance that provides the public interface to trustlines-clientlib.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`config` | [TLNetworkConfig](../interfaces/_typings_.tlnetworkconfig.md) | {} | Configuration object. See [TLNetworkConfig](../interfaces/_typings_.tlnetworkconfig.md) for more information.  |

**Returns:** [TLNetwork](_tlnetwork_.tlnetwork.md)

## Properties

### currencyNetwork

•  **currencyNetwork**: [CurrencyNetwork](_currencynetwork_.currencynetwork.md)

*Defined in [src/TLNetwork.ts:87](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/TLNetwork.ts#L87)*

CurrencyNetwork instance containing all methods for retrieving currency network
related information.

___

### event

•  **event**: [Event](_event_.event.md)

*Defined in [src/TLNetwork.ts:91](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/TLNetwork.ts#L91)*

Event instance for retrieving and formatting event logs.

___

### payment

•  **payment**: [Payment](_payment_.payment.md)

*Defined in [src/TLNetwork.ts:78](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/TLNetwork.ts#L78)*

Payment instance containing all methods for creating trustline transfers
and TLC transfers.

___

### trustline

•  **trustline**: [Trustline](_trustline_.trustline.md)

*Defined in [src/TLNetwork.ts:82](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/TLNetwork.ts#L82)*

Trustline instance containing all methods for managing trustlines.

___

### user

•  **user**: [User](_user_.user.md)

*Defined in [src/TLNetwork.ts:73](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/TLNetwork.ts#L73)*

User instance containing all user/keystore related methods.
