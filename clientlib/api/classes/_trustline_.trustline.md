---
id: "_trustline_.trustline"
title: "Class: Trustline"
sidebar_label: "Trustline"
---

["Trustline"](../modules/_trustline_.md).Trustline

The [Trustline](_trustline_.trustline.md) class contains all relevant methods for retrieving, creating and editing trustlines.
It is meant to be called via a [TLNetwork](_tlnetwork_.tlnetwork.md) instance like:
```typescript
const tlNetwork = new TLNetwork(
 //...
)

// Get trustlines
tlNetwork.trustline.getAll(
 // ...
).then(
 trustlines => console.log("Trustlines of loaded user:", trustlines)
)
```

## Hierarchy

* **Trustline**

## Methods

### buildTrustlineRequestInviteLink

▸ **buildTrustlineRequestInviteLink**(`networkAddress`: string, `amounts`: { creditlineGiven: string \| number ; creditlineReceived: string \| number ; interestRateGiven?: string \| number ; interestRateReceived?: string \| number  }, `options?`: { [key:string]: string; customBase?: string  }): Promise&#60;string>

*Defined in [src/Trustline.ts:634](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L634)*

Builds an invite link for a trustline request in the format
```
<BASE_URL>/trustlinerequest/:networkAddress/:senderAddress/:creditlineGiven/:creditlineReceived/:interestRateGiven/:interestRateReceived[?:optionalParams]
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`networkAddress` | string | Address of currency network. |
`amounts` | { creditlineGiven: string \| number ; creditlineReceived: string \| number ; interestRateGiven?: string \| number ; interestRateReceived?: string \| number  } | Amounts to use for the trustline request. |
`options?` | { [key:string]: string; customBase?: string  } | Additional options for link creation. |

**Returns:** Promise&#60;string>

___

### confirm

▸ **confirm**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;any>

*Defined in [src/Trustline.ts:312](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L312)*

Signs a raw transaction object as returned by `prepareAccept` or `prepareUpdate`
and sends the signed transaction.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) | Raw transaction object.  |

**Returns:** Promise&#60;any>

___

### get

▸ **get**(`networkAddress`: string, `counterpartyAddress`: string, `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md)  }): Promise&#60;[TrustlineObject](../interfaces/_typings_.trustlineobject.md)>

*Defined in [src/Trustline.ts:371](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L371)*

Returns a trustline to a counterparty address in a specified currency network.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`counterpartyAddress` | string | - | Address of counterparty of trustline.  |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md)  } | {} | - |

**Returns:** Promise&#60;[TrustlineObject](../interfaces/_typings_.trustlineobject.md)>

___

### getAll

▸ **getAll**(`networkAddress`: string, `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md)  }): Promise&#60;[TrustlineObject](../interfaces/_typings_.trustlineobject.md)[]>

*Defined in [src/Trustline.ts:344](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L344)*

Returns all trustlines of a loaded user in a currency network.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md)  } | {} | Extra options for user, network or trustline.  |

**Returns:** Promise&#60;[TrustlineObject](../interfaces/_typings_.trustlineobject.md)[]>

___

### getAllOfUser

▸ **getAllOfUser**(): Promise&#60;[TrustlineObject](../interfaces/_typings_.trustlineobject.md)[]>

*Defined in [src/Trustline.ts:319](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L319)*

Returns all trustlines of a loaded user in all currency networks.

**Returns:** Promise&#60;[TrustlineObject](../interfaces/_typings_.trustlineobject.md)[]>

___

### getClosePath

▸ **getClosePath**(`networkAddress`: string, `senderAddress`: string, `counterpartyAddress`: string, `options?`: [PaymentOptions](../interfaces/_typings_.paymentoptions.md)): Promise&#60;[ClosePathObject](../interfaces/_typings_.closepathobject.md)>

*Defined in [src/Trustline.ts:579](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L579)*

Returns a path for closing a trustline between sender and counterparty.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`senderAddress` | string | - | Address of sender. |
`counterpartyAddress` | string | - | Address of counterparty of trustline. |
`options` | [PaymentOptions](../interfaces/_typings_.paymentoptions.md) | {} | Payment options. See [PaymentOptions](../interfaces/_typings_.paymentoptions.md) for more information. |

**Returns:** Promise&#60;[ClosePathObject](../interfaces/_typings_.closepathobject.md)>

Relevant information for closing a trustline. See `ClosePathObject`.

___

### getEvents

▸ **getEvents**(`networkAddress`: string, `counterPartyAddress`: string, `filter?`: [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md)): Promise&#60;[AnyNetworkTrustlineEvent](../modules/_typings_.md#anynetworktrustlineevent)[]>

*Defined in [src/Trustline.ts:467](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L467)*

Returns all events of a specific trustline in a currency network. These are BalanceUpdate, TrustlineUpdate,
TrustlineUpdateRequest and TrustlineUpdateCancel

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`counterPartyAddress` | string | - | Address of the counter party of the trustline. |
`filter` | [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md) | {} | Event filter object. See `EventFilterOptions` for more information.  |

**Returns:** Promise&#60;[AnyNetworkTrustlineEvent](../modules/_typings_.md#anynetworktrustlineevent)[]>

___

### getRequests

▸ **getRequests**(`networkAddress`: string, `filter?`: [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md)): Promise&#60;[NetworkTrustlineUpdateRequestEvent](../interfaces/_typings_.networktrustlineupdaterequestevent.md)[]>

*Defined in [src/Trustline.ts:401](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L401)*

Returns trustline update requests of loaded user in a currency network.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`filter` | [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md) | {} | Event filter object. See `EventFilterOptions` for more information.  |

**Returns:** Promise&#60;[NetworkTrustlineUpdateRequestEvent](../interfaces/_typings_.networktrustlineupdaterequestevent.md)[]>

___

### getTrustlineBalanceUpdates

▸ **getTrustlineBalanceUpdates**(`networkAddress`: string, `counterPartyAddress`: string, `filter?`: [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md)): Promise&#60;[NetworkTrustlineBalanceUpdate](../interfaces/_typings_.networktrustlinebalanceupdate.md)[]>

*Defined in [src/Trustline.ts:449](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L449)*

Returns trustline balance updates of a specific trustline in a currency network. A balance update
happens, because of interests or because of received, sent or mediated transfers.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`counterPartyAddress` | string | - | Address of the counter party of the trustline. |
`filter` | [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md) | {} | Event filter object. See `EventFilterOptions` for more information.  |

**Returns:** Promise&#60;[NetworkTrustlineBalanceUpdate](../interfaces/_typings_.networktrustlinebalanceupdate.md)[]>

___

### getTrustlineUpdateCancels

▸ **getTrustlineUpdateCancels**(`networkAddress`: string, `filter?`: [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md)): Promise&#60;[NetworkTrustlineCancelEvent](../modules/_typings_.md#networktrustlinecancelevent)[]>

*Defined in [src/Trustline.ts:416](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L416)*

Returns trustline update cancels of loaded user in a currency network.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`filter` | [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md) | {} | Event filter object. See `EventFilterOptions` for more information.  |

**Returns:** Promise&#60;[NetworkTrustlineCancelEvent](../modules/_typings_.md#networktrustlinecancelevent)[]>

___

### getUpdates

▸ **getUpdates**(`networkAddress`: string, `filter?`: [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md)): Promise&#60;[NetworkTrustlineUpdateEvent](../interfaces/_typings_.networktrustlineupdateevent.md)[]>

*Defined in [src/Trustline.ts:432](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L432)*

Returns trustline updates of loaded user in a currency network. An update
happens when a user accepts a trustline update request.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`filter` | [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md) | {} | Event filter object. See `EventFilterOptions` for more information.  |

**Returns:** Promise&#60;[NetworkTrustlineUpdateEvent](../interfaces/_typings_.networktrustlineupdateevent.md)[]>

___

### prepareAccept

▸ **prepareAccept**(`networkAddress`: string, `initiatorAddress`: string, `creditlineGiven`: number \| string, `creditlineReceived`: number \| string, `options?`: [TrustlineUpdateOptions](../interfaces/_typings_.trustlineupdateoptions.md)): Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

*Defined in [src/Trustline.ts:252](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L252)*

Prepares a transaction object for accepting a trustline update request. Called
by receiver of initial update request.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`initiatorAddress` | string | - | Address of user who initiated the trustline update request. |
`creditlineGiven` | number \| string | - | Proposed creditline limit given by receiver to initiator,                        i.e. 1.23 if network has to 2 decimals. |
`creditlineReceived` | number \| string | - | Proposed creditline limit received by initiator from receiver,                           i.e. 1.23 if network has to 2 decimals. |
`options` | [TrustlineUpdateOptions](../interfaces/_typings_.trustlineupdateoptions.md) | {} | Options for creating a ethereum transaction. See type [TrustlineUpdateOptions](../interfaces/_typings_.trustlineupdateoptions.md) for more information. |

**Returns:** Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

___

### prepareCancelTrustlineUpdate

▸ **prepareCancelTrustlineUpdate**(`networkAddress`: string, `counterpartyAddress`: string, `options?`: [TxOptions](../interfaces/_typings_.txoptions.md)): Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

*Defined in [src/Trustline.ts:278](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L278)*

Prepares a transaction object for canceling / rejecting a trustline update request.
Called by initiator of cancel.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`counterpartyAddress` | string | - | Address of counterparty to cancel / reject the trustline update with. |
`options` | [TxOptions](../interfaces/_typings_.txoptions.md) | {} | Options for creating the ethereum transaction.                See [TxOptions](../interfaces/_typings_.txoptions.md) for more information. |

**Returns:** Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

___

### prepareClose

▸ **prepareClose**(`networkAddress`: string, `counterpartyAddress`: string, `options?`: [PaymentOptions](../interfaces/_typings_.paymentoptions.md)): Promise&#60;[CloseTxObject](../interfaces/_typings_.closetxobject.md)>

*Defined in [src/Trustline.ts:501](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L501)*

Prepares an ethereum transaction object for closing a trustline.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`counterpartyAddress` | string | - | Address of counterparty to who the trustline should be settled. |
`options` | [PaymentOptions](../interfaces/_typings_.paymentoptions.md) | {} | Payment options. See [PaymentOptions](../interfaces/_typings_.paymentoptions.md) for more information. |

**Returns:** Promise&#60;[CloseTxObject](../interfaces/_typings_.closetxobject.md)>

A transaction object for closing a trustline. See `CloseTxObject` for more information.

___

### prepareUpdate

▸ **prepareUpdate**(`networkAddress`: string, `counterpartyAddress`: string, `creditlineGiven`: number \| string, `creditlineReceived`: number \| string, `options?`: [TrustlineUpdateOptions](../interfaces/_typings_.trustlineupdateoptions.md)): Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

*Defined in [src/Trustline.ts:122](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Trustline.ts#L122)*

Prepares a transaction object for creating a trustline update request.
Called by initiator of update request.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`counterpartyAddress` | string | - | Address of counterparty who receives trustline update request. |
`creditlineGiven` | number \| string | - | Proposed creditline limit given by initiator to counterparty,                        e.g. 1.23 if network has 2 decimals. |
`creditlineReceived` | number \| string | - | Proposed creditline limit received by initiator from counterparty,                           e.g. 1.23 if network has 2 decimals. |
`options` | [TrustlineUpdateOptions](../interfaces/_typings_.trustlineupdateoptions.md) | {} | Options for creating an `updateTrustline` ethereum transaction.                See type [TrustlineUpdateOptions](../interfaces/_typings_.trustlineupdateoptions.md) for more information. |

**Returns:** Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>
