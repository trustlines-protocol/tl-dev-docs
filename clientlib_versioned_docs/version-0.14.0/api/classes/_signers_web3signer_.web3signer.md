---
id: "_signers_web3signer_.web3signer"
title: "Class: Web3Signer"
sidebar_label: "Web3Signer"
---

["signers/Web3Signer"](../modules/_signers_web3signer_.md).Web3Signer

The Web3Signer class contains functions for signing transactions with a web3 provider.

## Hierarchy

* **Web3Signer**

## Implements

* [TLSigner](../interfaces/_signers_tlsigner_.tlsigner.md)

## Constructors

### constructor

\+ **new Web3Signer**(`web3Provider`: Web3Provider): [Web3Signer](_signers_web3signer_.web3signer.md)

*Defined in [src/signers/Web3Signer.ts:23](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/Web3Signer.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`web3Provider` | Web3Provider |

**Returns:** [Web3Signer](_signers_web3signer_.web3signer.md)

## Methods

### confirm

▸ **confirm**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;string>

*Implementation of [TLSigner](../interfaces/_signers_tlsigner_.tlsigner.md)*

*Defined in [src/signers/Web3Signer.ts:59](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/Web3Signer.ts#L59)*

Signs a transaction and returns `Promise` with transaction hash.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) | Raw transaction object.  |

**Returns:** Promise&#60;string>

___

### getAddress

▸ **getAddress**(): Promise&#60;string>

*Implementation of [TLSigner](../interfaces/_signers_tlsigner_.tlsigner.md)*

*Defined in [src/signers/Web3Signer.ts:33](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/Web3Signer.ts#L33)*

Returns `Promise` with address of signer.

**Returns:** Promise&#60;string>

___

### getBalance

▸ **getBalance**(): Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

*Implementation of [TLSigner](../interfaces/_signers_tlsigner_.tlsigner.md)*

*Defined in [src/signers/Web3Signer.ts:43](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/Web3Signer.ts#L43)*

Returns `Promise` with balance of signer.

**Returns:** Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

___

### getMetaTxFees

▸ **getMetaTxFees**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;[MetaTransactionFees](../interfaces/_typings_.metatransactionfees.md)>

*Implementation of [TLSigner](../interfaces/_signers_tlsigner_.tlsigner.md)*

*Defined in [src/signers/Web3Signer.ts:172](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/Web3Signer.ts#L172)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[MetaTransactionFees](../interfaces/_typings_.metatransactionfees.md)>

___

### getTxInfos

▸ **getTxInfos**(`userAddress`: string): Promise&#60;[TxInfos](../interfaces/_typings_.txinfos.md)>

*Defined in [src/signers/Web3Signer.ts:125](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/Web3Signer.ts#L125)*

#### Parameters:

Name | Type |
------ | ------ |
`userAddress` | string |

**Returns:** Promise&#60;[TxInfos](../interfaces/_typings_.txinfos.md)>

___

### getTxStatus

▸ **getTxStatus**(`tx`: string \| [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

*Implementation of [TLSigner](../interfaces/_signers_tlsigner_.tlsigner.md)*

*Defined in [src/signers/Web3Signer.ts:166](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/Web3Signer.ts#L166)*

#### Parameters:

Name | Type |
------ | ------ |
`tx` | string \| [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

___

### hashTx

▸ **hashTx**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;string>

*Implementation of [TLSigner](../interfaces/_signers_tlsigner_.tlsigner.md)*

*Defined in [src/signers/Web3Signer.ts:121](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/Web3Signer.ts#L121)*

Returns the hash of the signed transaction for given rawTx with loaded user

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |   |

**Returns:** Promise&#60;string>

___

### prepareTransaction

▸ **prepareTransaction**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;[TxObjectRaw](../interfaces/_typings_.txobjectraw.md)>

*Implementation of [TLSigner](../interfaces/_signers_tlsigner_.tlsigner.md)*

*Defined in [src/signers/Web3Signer.ts:144](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/Web3Signer.ts#L144)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[TxObjectRaw](../interfaces/_typings_.txobjectraw.md)>

___

### signMessage

▸ **signMessage**(`message`: string \| ArrayLike&#60;number>): Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

*Implementation of [TLSigner](../interfaces/_signers_tlsigner_.tlsigner.md)*

*Defined in [src/signers/Web3Signer.ts:88](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/Web3Signer.ts#L88)*

Signs the given message and returns `Promise` with signature.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`message` | string \| ArrayLike&#60;number> | Message to sign.  |

**Returns:** Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

___

### signMsgHash

▸ **signMsgHash**(`msgHash`: string): Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

*Implementation of [TLSigner](../interfaces/_signers_tlsigner_.tlsigner.md)*

*Defined in [src/signers/Web3Signer.ts:106](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/Web3Signer.ts#L106)*

Signs the given message hash and return `Promise` with signature.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`msgHash` | string | Hash of message to sign.  |

**Returns:** Promise&#60;[Signature](../interfaces/_typings_.signature.md)>
