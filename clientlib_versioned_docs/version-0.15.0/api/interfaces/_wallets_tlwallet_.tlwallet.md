---
id: "_wallets_tlwallet_.tlwallet"
title: "Interface: TLWallet"
sidebar_label: "TLWallet"
---

["wallets/TLWallet"](../modules/_wallets_tlwallet_.md).TLWallet

Interface for different wallet strategies.

## Hierarchy

* [TLSigner](_signers_tlsigner_.tlsigner.md)

  ↳ **TLWallet**

## Implemented by

* [EthersWallet](../classes/_wallets_etherswallet_.etherswallet.md)
* [IdentityWallet](../classes/_wallets_identitywallet_.identitywallet.md)

## Properties

### address

•  **address**: string

*Defined in [src/wallets/TLWallet.ts:8](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L8)*

## Methods

### confirm

▸ **confirm**(`rawTx`: [RawTxObject](_typings_.rawtxobject.md)): Promise&#60;string>

*Inherited from [TLSigner](_signers_tlsigner_.tlsigner.md).[confirm](_signers_tlsigner_.tlsigner.md#confirm)*

*Defined in [src/signers/TLSigner.ts:19](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/TLSigner.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](_typings_.rawtxobject.md) |

**Returns:** Promise&#60;string>

___

### create

▸ **create**(): Promise&#60;[TLWalletData](_typings_.tlwalletdata.md)>

*Defined in [src/wallets/TLWallet.ts:11](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L11)*

**Returns:** Promise&#60;[TLWalletData](_typings_.tlwalletdata.md)>

___

### decrypt

▸ **decrypt**(`encMsg`: any, `theirPubKey`: string): Promise&#60;any>

*Defined in [src/wallets/TLWallet.ts:29](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L29)*

#### Parameters:

Name | Type |
------ | ------ |
`encMsg` | any |
`theirPubKey` | string |

**Returns:** Promise&#60;any>

___

### deployIdentity

▸ **deployIdentity**(): Promise&#60;string>

*Defined in [src/wallets/TLWallet.ts:12](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L12)*

**Returns:** Promise&#60;string>

___

### encrypt

▸ **encrypt**(`msg`: string, `theirPubKey`: string): Promise&#60;any>

*Defined in [src/wallets/TLWallet.ts:28](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L28)*

#### Parameters:

Name | Type |
------ | ------ |
`msg` | string |
`theirPubKey` | string |

**Returns:** Promise&#60;any>

___

### encryptToSerializedKeystore

▸ **encryptToSerializedKeystore**(`tlWalletData`: [TLWalletData](_typings_.tlwalletdata.md), `password`: string, `progressCallback?`: (progress: number) => any): Promise&#60;string>

*Defined in [src/wallets/TLWallet.ts:23](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`tlWalletData` | [TLWalletData](_typings_.tlwalletdata.md) |
`password` | string |
`progressCallback?` | (progress: number) => any |

**Returns:** Promise&#60;string>

___

### exportPrivateKey

▸ **exportPrivateKey**(): Promise&#60;string>

*Defined in [src/wallets/TLWallet.ts:10](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L10)*

**Returns:** Promise&#60;string>

___

### getAddress

▸ **getAddress**(): Promise&#60;string>

*Inherited from [TLSigner](_signers_tlsigner_.tlsigner.md).[getAddress](_signers_tlsigner_.tlsigner.md#getaddress)*

*Defined in [src/signers/TLSigner.ts:14](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/TLSigner.ts#L14)*

**Returns:** Promise&#60;string>

___

### getBalance

▸ **getBalance**(): Promise&#60;[Amount](_typings_.amount.md)>

*Inherited from [TLSigner](_signers_tlsigner_.tlsigner.md).[getBalance](_signers_tlsigner_.tlsigner.md#getbalance)*

*Defined in [src/signers/TLSigner.ts:15](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/TLSigner.ts#L15)*

**Returns:** Promise&#60;[Amount](_typings_.amount.md)>

___

### getMetaTxFees

▸ **getMetaTxFees**(`rawTx`: [RawTxObject](_typings_.rawtxobject.md)): Promise&#60;[MetaTransactionFees](_typings_.metatransactionfees.md)>

*Inherited from [TLSigner](_signers_tlsigner_.tlsigner.md).[getMetaTxFees](_signers_tlsigner_.tlsigner.md#getmetatxfees)*

*Defined in [src/signers/TLSigner.ts:22](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/TLSigner.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[MetaTransactionFees](_typings_.metatransactionfees.md)>

___

### getTxStatus

▸ **getTxStatus**(`txHash`: string \| [RawTxObject](_typings_.rawtxobject.md)): Promise&#60;[TransactionStatusObject](_typings_.transactionstatusobject.md)>

*Inherited from [TLSigner](_signers_tlsigner_.tlsigner.md).[getTxStatus](_signers_tlsigner_.tlsigner.md#gettxstatus)*

*Defined in [src/signers/TLSigner.ts:21](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/TLSigner.ts#L21)*

#### Parameters:

Name | Type |
------ | ------ |
`txHash` | string \| [RawTxObject](_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[TransactionStatusObject](_typings_.transactionstatusobject.md)>

___

### getWalletData

▸ **getWalletData**(): Promise&#60;[TLWalletData](_typings_.tlwalletdata.md)>

*Defined in [src/wallets/TLWallet.ts:15](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L15)*

**Returns:** Promise&#60;[TLWalletData](_typings_.tlwalletdata.md)>

___

### hashTx

▸ **hashTx**(`rawTx`: [RawTxObject](_typings_.rawtxobject.md)): Promise&#60;string>

*Inherited from [TLSigner](_signers_tlsigner_.tlsigner.md).[hashTx](_signers_tlsigner_.tlsigner.md#hashtx)*

*Defined in [src/signers/TLSigner.ts:18](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/TLSigner.ts#L18)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](_typings_.rawtxobject.md) |

**Returns:** Promise&#60;string>

___

### isIdentityDeployed

▸ **isIdentityDeployed**(): Promise&#60;boolean>

*Defined in [src/wallets/TLWallet.ts:13](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L13)*

**Returns:** Promise&#60;boolean>

___

### loadFrom

▸ **loadFrom**(`tlWalletData`: [TLWalletData](_typings_.tlwalletdata.md)): Promise&#60;void>

*Defined in [src/wallets/TLWallet.ts:14](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`tlWalletData` | [TLWalletData](_typings_.tlwalletdata.md) |

**Returns:** Promise&#60;void>

___

### prepareTransaction

▸ **prepareTransaction**(`rawTx`: [RawTxObject](_typings_.rawtxobject.md)): Promise&#60;[TxObjectRaw](_typings_.txobjectraw.md)>

*Inherited from [TLSigner](_signers_tlsigner_.tlsigner.md).[prepareTransaction](_signers_tlsigner_.tlsigner.md#preparetransaction)*

*Defined in [src/signers/TLSigner.ts:20](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/TLSigner.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[TxObjectRaw](_typings_.txobjectraw.md)>

___

### recoverFromEncryptedKeystore

▸ **recoverFromEncryptedKeystore**(`serializedEncryptedKeystore`: string, `password`: string, `progressCallback?`: (progress: number) => any): Promise&#60;[TLWalletData](_typings_.tlwalletdata.md)>

*Defined in [src/wallets/TLWallet.ts:17](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`serializedEncryptedKeystore` | string |
`password` | string |
`progressCallback?` | (progress: number) => any |

**Returns:** Promise&#60;[TLWalletData](_typings_.tlwalletdata.md)>

___

### recoverFromPrivateKey

▸ **recoverFromPrivateKey**(`privateKey`: string): Promise&#60;[TLWalletData](_typings_.tlwalletdata.md)>

*Defined in [src/wallets/TLWallet.ts:22](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`privateKey` | string |

**Returns:** Promise&#60;[TLWalletData](_typings_.tlwalletdata.md)>

___

### recoverFromSeed

▸ **recoverFromSeed**(`seed`: string): Promise&#60;[TLWalletData](_typings_.tlwalletdata.md)>

*Defined in [src/wallets/TLWallet.ts:16](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L16)*

#### Parameters:

Name | Type |
------ | ------ |
`seed` | string |

**Returns:** Promise&#60;[TLWalletData](_typings_.tlwalletdata.md)>

___

### showSeed

▸ **showSeed**(): Promise&#60;string>

*Defined in [src/wallets/TLWallet.ts:9](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L9)*

**Returns:** Promise&#60;string>

___

### signMessage

▸ **signMessage**(`message`: string \| ArrayLike&#60;number>): Promise&#60;[Signature](_typings_.signature.md)>

*Inherited from [TLSigner](_signers_tlsigner_.tlsigner.md).[signMessage](_signers_tlsigner_.tlsigner.md#signmessage)*

*Defined in [src/signers/TLSigner.ts:17](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/TLSigner.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string \| ArrayLike&#60;number> |

**Returns:** Promise&#60;[Signature](_typings_.signature.md)>

___

### signMsgHash

▸ **signMsgHash**(`msgHash`: string): Promise&#60;[Signature](_typings_.signature.md)>

*Inherited from [TLSigner](_signers_tlsigner_.tlsigner.md).[signMsgHash](_signers_tlsigner_.tlsigner.md#signmsghash)*

*Defined in [src/signers/TLSigner.ts:16](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/signers/TLSigner.ts#L16)*

#### Parameters:

Name | Type |
------ | ------ |
`msgHash` | string |

**Returns:** Promise&#60;[Signature](_typings_.signature.md)>
