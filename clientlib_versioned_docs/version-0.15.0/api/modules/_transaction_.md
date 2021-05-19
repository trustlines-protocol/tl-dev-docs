---
id: "_transaction_"
title: "Module: Transaction"
sidebar_label: "Transaction"
---

## Index

### Classes

* [Transaction](../classes/_transaction_.transaction.md)

### Variables

* [GAS\_LIMIT\_DEFAULT\_CONTRACT\_TRANSACTION](_transaction_.md#gas_limit_default_contract_transaction)
* [GAS\_LIMIT\_IDENTITY\_OVERHEAD](_transaction_.md#gas_limit_identity_overhead)
* [GAS\_LIMIT\_MULTIPLIER](_transaction_.md#gas_limit_multiplier)
* [GAS\_LIMIT\_VALUE\_TRANSACTION](_transaction_.md#gas_limit_value_transaction)

## Variables

### GAS\_LIMIT\_DEFAULT\_CONTRACT\_TRANSACTION

• `Const` **GAS\_LIMIT\_DEFAULT\_CONTRACT\_TRANSACTION**: BigNumber = new BigNumber(600\_000)

*Defined in [src/Transaction.ts:30](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Transaction.ts#L30)*

___

### GAS\_LIMIT\_IDENTITY\_OVERHEAD

• `Const` **GAS\_LIMIT\_IDENTITY\_OVERHEAD**: BigNumber = new BigNumber(27\_000)

*Defined in [src/Transaction.ts:26](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Transaction.ts#L26)*

___

### GAS\_LIMIT\_MULTIPLIER

• `Const` **GAS\_LIMIT\_MULTIPLIER**: 1.2 = 1.2

*Defined in [src/Transaction.ts:24](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Transaction.ts#L24)*

___

### GAS\_LIMIT\_VALUE\_TRANSACTION

• `Const` **GAS\_LIMIT\_VALUE\_TRANSACTION**: BigNumber = new BigNumber(21\_000) .plus(GAS\_LIMIT\_IDENTITY\_OVERHEAD.multipliedBy(GAS\_LIMIT\_MULTIPLIER)) .integerValue(BigNumber.ROUND\_DOWN)

*Defined in [src/Transaction.ts:27](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Transaction.ts#L27)*
