---
id: "_ethwrapper_.ethwrapper"
title: "Class: EthWrapper"
sidebar_label: "EthWrapper"
---

["EthWrapper"](../modules/_ethwrapper_.md).EthWrapper

The class EthWrapper contains all methods for depositing, withdrawing and transferring wrapped ETH.

## Hierarchy

* **EthWrapper**

## Constructors

### constructor

\+ **new EthWrapper**(`params`: { provider: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) ; transaction: [Transaction](_transaction_.transaction.md) ; user: [User](_user_.user.md)  }): [EthWrapper](_ethwrapper_.ethwrapper.md)

*Defined in [src/EthWrapper.ts:27](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/EthWrapper.ts#L27)*

#### Parameters:

Name | Type |
------ | ------ |
`params` | { provider: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) ; transaction: [Transaction](_transaction_.transaction.md) ; user: [User](_user_.user.md)  } |

**Returns:** [EthWrapper](_ethwrapper_.ethwrapper.md)

## Methods

### confirm

▸ **confirm**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;string>

*Defined in [src/EthWrapper.ts:161](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/EthWrapper.ts#L161)*

Signs a raw transaction object as returned by `prepTransfer`, `prepDeposit` or `prepWithdraw`
and sends the signed transaction.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) | Raw transaction object.  |

**Returns:** Promise&#60;string>

___

### getAddresses

▸ **getAddresses**(): Promise&#60;string[]>

*Defined in [src/EthWrapper.ts:42](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/EthWrapper.ts#L42)*

Returns all known ETH wrapper contract addresses from the relay server.

**Returns:** Promise&#60;string[]>

___

### getBalance

▸ **getBalance**(`ethWrapperAddress`: string): Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

*Defined in [src/EthWrapper.ts:50](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/EthWrapper.ts#L50)*

Returns the amount of already wrapped ETH on the given ETH wrapper contract.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ethWrapperAddress` | string | Address of ETH wrapper contract.  |

**Returns:** Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

___

### getLogs

▸ **getLogs**(`ethWrapperAddress`: string, `filter?`: [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md)): Promise&#60;[AnyTokenEvent](../modules/_typings_.md#anytokenevent)[]>

*Defined in [src/EthWrapper.ts:172](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/EthWrapper.ts#L172)*

Returns event logs of the ETH wrapper contract for the loaded user.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`ethWrapperAddress` | string | - | Address of the ETH wrapper contract. |
`filter` | [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md) | {} | Event filter object. See `EventFilterOptions` for more information. |

**Returns:** Promise&#60;[AnyTokenEvent](../modules/_typings_.md#anytokenevent)[]>

___

### prepDeposit

▸ **prepDeposit**(`ethWrapperAddress`: string, `value`: number \| string, `options?`: [TxOptions](../interfaces/_typings_.txoptions.md)): Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

*Defined in [src/EthWrapper.ts:101](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/EthWrapper.ts#L101)*

Prepares an ethereum transaction object for depositing/wrapping ETH.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`ethWrapperAddress` | string | - | Address of ETH wrapper contract. |
`value` | number \| string | - | Amount of ETH to deposit/wrap. |
`options` | [TxOptions](../interfaces/_typings_.txoptions.md) | {} | Transaction options. See `TxOptions` for more information. |

**Returns:** Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

___

### prepTransfer

▸ **prepTransfer**(`ethWrapperAddress`: string, `receiverAddress`: string, `value`: number \| string, `options?`: [TxOptions](../interfaces/_typings_.txoptions.md)): Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

*Defined in [src/EthWrapper.ts:66](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/EthWrapper.ts#L66)*

Prepares an ethereum transaction object for transferring wrapped ETH where the
loaded user is the sender.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`ethWrapperAddress` | string | - | Address of ETH wrapper contract. |
`receiverAddress` | string | - | Address of receiver of transfer. |
`value` | number \| string | - | Amount of wrapped ETH to transfer. |
`options` | [TxOptions](../interfaces/_typings_.txoptions.md) | {} | Transaction options. See `TxOptions` for more information. |

**Returns:** Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

___

### prepWithdraw

▸ **prepWithdraw**(`ethWrapperAddress`: string, `value`: number \| string, `options?`: [TxOptions](../interfaces/_typings_.txoptions.md)): Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

*Defined in [src/EthWrapper.ts:133](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/EthWrapper.ts#L133)*

Prepares an ethereum transaction object for withdrawing/unwrapping ETH.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`ethWrapperAddress` | string | - | Address of ETH wrapper contract. |
`value` | number \| string | - | Amount of ETH to withdraw/unwrap. |
`options` | [TxOptions](../interfaces/_typings_.txoptions.md) | {} | Transaction options. See `TxOptions` for more information. |

**Returns:** Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>
