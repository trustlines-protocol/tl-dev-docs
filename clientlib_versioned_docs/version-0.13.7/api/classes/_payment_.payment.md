---
id: "_payment_.payment"
title: "Class: Payment"
sidebar_label: "Payment"
---

["Payment"](../modules/_payment_.md).Payment

The Payment class contains all payment related functions. This includes trustline transfers and TLC transfers.
It is meant to be called via a [TLNetwork](_tlnetwork_.tlnetwork.md) instance like:
```typescript
const tlNetwork = new TLNetwork(
 //...
)

// Get transfer logs
tlNetwork.payment.get(
 // ...
).then(
 payments => console.log("Payments of loaded user:", payments)
)
```

## Hierarchy

* **Payment**

## Methods

### calculateTransferGasLimit

▸ **calculateTransferGasLimit**(`pathLength`: number): BigNumber

*Defined in [src/Payment.ts:376](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Payment.ts#L376)*

#### Parameters:

Name | Type |
------ | ------ |
`pathLength` | number |

**Returns:** BigNumber

___

### confirm

▸ **confirm**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;any>

*Defined in [src/Payment.ts:286](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Payment.ts#L286)*

Signs a raw transaction object as returned by `prepare`
and sends the signed transaction.

**`deprecated`** use confirmPayment instead.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) | Raw transaction object. |

**Returns:** Promise&#60;any>

___

### confirmPayment

▸ **confirmPayment**(`__namedParameters`: { rawTx: [RawTxObject](../interfaces/_typings_.rawtxobject.md) ; receiverAddress: string ; transferId: string  }, `message?`: string): Promise&#60;string>

*Defined in [src/Payment.ts:299](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Payment.ts#L299)*

Signs the rawTx provided as returned by `prepare`
and sends the signed transaction as well as the message with transferId
Can be directly given a `PaymentTxObject` object as returned by `prepare`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`__namedParameters` | { rawTx: [RawTxObject](../interfaces/_typings_.rawtxobject.md) ; receiverAddress: string ; transferId: string  } | - |
`message?` | string | The message to be sent.  |

**Returns:** Promise&#60;string>

___

### createRequest

▸ **createRequest**(`networkAddress`: string, `options?`: { [key:string]: string; amount?: string ; customBase?: string  }): Promise&#60;string>

*Defined in [src/Payment.ts:326](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Payment.ts#L326)*

Creates a payment request link.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`networkAddress` | string | Address of a currency network. |
`options?` | { [key:string]: string; amount?: string ; customBase?: string  } |         options.amount - optional amount for the payment request in "normal" units (if we request 1€ - the amount should be 1)        options.customBase - optional customBase for the link        options[key] - any other additional options that should be added to the URL  |

**Returns:** Promise&#60;string>

___

### get

▸ **get**(`networkAddress`: string, `filter?`: [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md)): Promise&#60;[NetworkTransferEvent](../interfaces/_typings_.networktransferevent.md)[]>

*Defined in [src/Payment.ts:270](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Payment.ts#L270)*

Returns transfer event logs of loaded user in a specified currency network.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of currency network. |
`filter` | [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md) | {} | Event filter object. See [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md) for more information.  |

**Returns:** Promise&#60;[NetworkTransferEvent](../interfaces/_typings_.networktransferevent.md)[]>

___

### getMaxAmountAndPathInNetwork

▸ **getMaxAmountAndPathInNetwork**(`networkAddress`: string, `receiverAddress`: string): Promise&#60;any>

*Defined in [src/Payment.ts:353](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Payment.ts#L353)*

Retrieve the maximum spendable amount and path to user in a network

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`networkAddress` | string |  |
`receiverAddress` | string |   |

**Returns:** Promise&#60;any>

>}

___

### getTransferDetails

▸ **getTransferDetails**(`transferIdentifier`: [TransferIdentifier](../interfaces/_typings_.transferidentifier.md), `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md)  }): Promise&#60;[TransferDetails](../interfaces/_typings_.transferdetails.md)>

*Defined in [src/Payment.ts:393](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Payment.ts#L393)*

Get the transfer details list for given transfer identifier

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`transferIdentifier` | [TransferIdentifier](../interfaces/_typings_.transferidentifier.md) | - | Used to identify the transfer for which to get the details. Needs to provide either blockHash and logIndex or txHash Returns a single transfer detail or throw an error if multiple transfer were identified |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md)  } | {} | Optional network decimals for formatting the transfer value  |

**Returns:** Promise&#60;[TransferDetails](../interfaces/_typings_.transferdetails.md)>

___

### getTransferDetailsList

▸ **getTransferDetailsList**(`transferIdentifier`: [TransferIdentifier](../interfaces/_typings_.transferidentifier.md), `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md)  }): Promise&#60;[TransferDetails](../interfaces/_typings_.transferdetails.md)[]>

*Defined in [src/Payment.ts:421](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Payment.ts#L421)*

Get the transfer details list for given transfer identifier

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`transferIdentifier` | [TransferIdentifier](../interfaces/_typings_.transferidentifier.md) | - | Used to identify the transfer for which to get the details. Needs to provide either blockHash and logIndex or txHash |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md)  } | {} | Optional network decimals for formatting the transfer value  |

**Returns:** Promise&#60;[TransferDetails](../interfaces/_typings_.transferdetails.md)[]>

___

### getTransferPathInfo

▸ **getTransferPathInfo**(`networkAddress`: string, `senderAddress`: string, `receiverAddress`: string, `value`: number \| string, `options?`: [PaymentOptions](../interfaces/_typings_.paymentoptions.md)): Promise&#60;[PathObject](../interfaces/_typings_.pathobject.md)>

*Defined in [src/Payment.ts:223](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Payment.ts#L223)*

Returns a path for a trustlines transfer, along with estimated fees and gas costs.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`senderAddress` | string | - | Address of sender of transfer. |
`receiverAddress` | string | - | Address of receiver of transfer. |
`value` | number \| string | - | Amount to transfer in biggest unit,              i.e. 1.23 if currency network has 2 decimals. |
`options` | [PaymentOptions](../interfaces/_typings_.paymentoptions.md) | {} | Payment options. See [PaymentOptions](../interfaces/_typings_.paymentoptions.md) for more information. |

**Returns:** Promise&#60;[PathObject](../interfaces/_typings_.pathobject.md)>

___

### prepare

▸ **prepare**(`networkAddress`: string, `receiverAddress`: string, `value`: number \| string, `options?`: [PaymentOptions](../interfaces/_typings_.paymentoptions.md)): Promise&#60;[PaymentTxObject](../interfaces/_typings_.paymenttxobject.md)>

*Defined in [src/Payment.ts:102](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Payment.ts#L102)*

Prepares ethereum transaction object for a trustlines transfer, where loaded user is sender.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of a currency network. |
`receiverAddress` | string | - | Address of receiver of transfer. |
`value` | number \| string | - | Amount to transfer in biggest unit,              i.e. 1.5 if currency network has 2 decimals. |
`options` | [PaymentOptions](../interfaces/_typings_.paymentoptions.md) | { addTransferId: true } | Optional payment options. See [PaymentOptions](../interfaces/_typings_.paymentoptions.md) for more information. |

**Returns:** Promise&#60;[PaymentTxObject](../interfaces/_typings_.paymenttxobject.md)>

___

### prepareEth

▸ **prepareEth**(`receiverAddress`: string, `value`: number \| string, `options?`: [PaymentOptions](../interfaces/_typings_.paymentoptions.md)): Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

*Defined in [src/Payment.ts:188](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Payment.ts#L188)*

Prepares a ethereum transaction object for a ETH transfer, where loaded user is the sender.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`receiverAddress` | string | - | Address of receiver of transfer. |
`value` | number \| string | - | Amount of ETH to transfer. |
`options` | [PaymentOptions](../interfaces/_typings_.paymentoptions.md) | {} | Payment options. See [PaymentOptions](../interfaces/_typings_.paymentoptions.md) for more information. |

**Returns:** Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>
