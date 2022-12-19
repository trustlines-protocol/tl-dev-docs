---
id: "_transaction_.transaction"
title: "Class: Transaction"
sidebar_label: "Transaction"
---

["Transaction"](../modules/_transaction_.md).Transaction

The Transaction class contains functions that are needed for Ethereum transactions.

## Hierarchy

* **Transaction**

## Constructors

### constructor

\+ **new Transaction**(`params`: { currencyNetwork: [CurrencyNetwork](_currencynetwork_.currencynetwork.md) ; provider: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) ; signer: [TLSigner](../interfaces/_signers_tlsigner_.tlsigner.md)  }): [Transaction](_transaction_.transaction.md)

*Defined in [src/Transaction.ts:43](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Transaction.ts#L43)*

#### Parameters:

Name | Type |
------ | ------ |
`params` | { currencyNetwork: [CurrencyNetwork](_currencynetwork_.currencynetwork.md) ; provider: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) ; signer: [TLSigner](../interfaces/_signers_tlsigner_.tlsigner.md)  } |

**Returns:** [Transaction](_transaction_.transaction.md)

## Methods

### confirm

▸ **confirm**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;string>

*Defined in [src/Transaction.ts:136](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Transaction.ts#L136)*

Signs and sends the given transaction object.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) | Raw transaction object.  |

**Returns:** Promise&#60;string>

___

### getAppliedDelegationFees

▸ **getAppliedDelegationFees**(`txHash`: string): Promise&#60;[TxFeesAmounts](../interfaces/_typings_.txfeesamounts.md)[]>

*Defined in [src/Transaction.ts:155](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Transaction.ts#L155)*

Get the effective delegation fees via enveloping transaction hash

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`txHash` | string | the hash of the transaction in which fees were paid |

**Returns:** Promise&#60;[TxFeesAmounts](../interfaces/_typings_.txfeesamounts.md)[]>

a list of the delegation fees applied within the transaction paid by loaded user

___

### getTxStatus

▸ **getTxStatus**(`tx`: string \| [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

*Defined in [src/Transaction.ts:144](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Transaction.ts#L144)*

Get the status of a sent tx either via txHash or via rawTx for a meta-tx

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tx` | string \| [RawTxObject](../interfaces/_typings_.rawtxobject.md) | the hash of the transaction / meta-tx or raw transaction object from which a meta-tx was built.  |

**Returns:** Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

___

### prepareContractTransaction

▸ **prepareContractTransaction**(`userAddress`: string, `contractAddress`: string, `contractName`: string, `functionName`: string, `args`: any[], `options?`: [TxOptionsInternal](../interfaces/_typings_.txoptionsinternal.md)): Promise&#60;[TxObjectInternal](../interfaces/_typings_.txobjectinternal.md)>

*Defined in [src/Transaction.ts:69](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Transaction.ts#L69)*

Returns transaction fees and the raw transaction object for calling a contract function.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`userAddress` | string | - | address of user that calls the contract function |
`contractAddress` | string | - | address of deployed contract |
`contractName` | string | - | name of deployed contract |
`functionName` | string | - | name of contract function |
`args` | any[] | - | arguments of function in same order as in contract |
`options` | [TxOptionsInternal](../interfaces/_typings_.txoptionsinternal.md) | {} | - |

**Returns:** Promise&#60;[TxObjectInternal](../interfaces/_typings_.txobjectinternal.md)>

An ethereum transaction object and the estimated transaction fees in ETH.

___

### prepareValueTransaction

▸ **prepareValueTransaction**(`senderAddress`: string, `receiverAddress`: string, `rawValue`: BigNumber, `options?`: [TxOptionsInternal](../interfaces/_typings_.txoptionsinternal.md)): Promise&#60;[TxObjectInternal](../interfaces/_typings_.txobjectinternal.md)>

*Defined in [src/Transaction.ts:108](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Transaction.ts#L108)*

Returns transaction fees and raw transaction object for transferring ETH.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`senderAddress` | string | - | address of user sending the transfer |
`receiverAddress` | string | - | address of user receiving the transfer |
`rawValue` | BigNumber | - | transfer amount in wei |
`options` | [TxOptionsInternal](../interfaces/_typings_.txoptionsinternal.md) | {} | - |

**Returns:** Promise&#60;[TxObjectInternal](../interfaces/_typings_.txobjectinternal.md)>

An ethereum transaction object containing and the estimated transaction fees in ETH.
