---
id: "_signers_tlsigner_.tlsigner"
title: "Interface: TLSigner"
sidebar_label: "TLSigner"
---

["signers/TLSigner"](../modules/_signers_tlsigner_.md).TLSigner

Interface for different signer strategies.

## Hierarchy

* **TLSigner**

  ↳ [TLWallet](_wallets_tlwallet_.tlwallet.md)

## Implemented by

* [Web3Signer](../classes/_signers_web3signer_.web3signer.md)

## Methods

### confirm

▸ **confirm**(`rawTx`: [RawTxObject](_typings_.rawtxobject.md)): Promise&#60;string>

*Defined in [src/signers/TLSigner.ts:19](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/signers/TLSigner.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](_typings_.rawtxobject.md) |

**Returns:** Promise&#60;string>

___

### getAddress

▸ **getAddress**(): Promise&#60;string>

*Defined in [src/signers/TLSigner.ts:14](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/signers/TLSigner.ts#L14)*

**Returns:** Promise&#60;string>

___

### getBalance

▸ **getBalance**(): Promise&#60;[Amount](_typings_.amount.md)>

*Defined in [src/signers/TLSigner.ts:15](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/signers/TLSigner.ts#L15)*

**Returns:** Promise&#60;[Amount](_typings_.amount.md)>

___

### getMetaTxFees

▸ **getMetaTxFees**(`rawTx`: [RawTxObject](_typings_.rawtxobject.md)): Promise&#60;[MetaTransactionFees](_typings_.metatransactionfees.md)>

*Defined in [src/signers/TLSigner.ts:22](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/signers/TLSigner.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[MetaTransactionFees](_typings_.metatransactionfees.md)>

___

### getTxStatus

▸ **getTxStatus**(`txHash`: string \| [RawTxObject](_typings_.rawtxobject.md)): Promise&#60;[TransactionStatusObject](_typings_.transactionstatusobject.md)>

*Defined in [src/signers/TLSigner.ts:21](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/signers/TLSigner.ts#L21)*

#### Parameters:

Name | Type |
------ | ------ |
`txHash` | string \| [RawTxObject](_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[TransactionStatusObject](_typings_.transactionstatusobject.md)>

___

### hashTx

▸ **hashTx**(`rawTx`: [RawTxObject](_typings_.rawtxobject.md)): Promise&#60;string>

*Defined in [src/signers/TLSigner.ts:18](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/signers/TLSigner.ts#L18)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](_typings_.rawtxobject.md) |

**Returns:** Promise&#60;string>

___

### prepareTransaction

▸ **prepareTransaction**(`rawTx`: [RawTxObject](_typings_.rawtxobject.md)): Promise&#60;[TxObjectRaw](_typings_.txobjectraw.md)>

*Defined in [src/signers/TLSigner.ts:20](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/signers/TLSigner.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[TxObjectRaw](_typings_.txobjectraw.md)>

___

### signMessage

▸ **signMessage**(`message`: string \| ArrayLike&#60;number>): Promise&#60;[Signature](_typings_.signature.md)>

*Defined in [src/signers/TLSigner.ts:17](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/signers/TLSigner.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string \| ArrayLike&#60;number> |

**Returns:** Promise&#60;[Signature](_typings_.signature.md)>

___

### signMsgHash

▸ **signMsgHash**(`msgHash`: string): Promise&#60;[Signature](_typings_.signature.md)>

*Defined in [src/signers/TLSigner.ts:16](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/signers/TLSigner.ts#L16)*

#### Parameters:

Name | Type |
------ | ------ |
`msgHash` | string |

**Returns:** Promise&#60;[Signature](_typings_.signature.md)>
