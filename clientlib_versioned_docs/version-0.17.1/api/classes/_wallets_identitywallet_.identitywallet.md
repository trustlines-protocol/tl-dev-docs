---
id: "_wallets_identitywallet_.identitywallet"
title: "Class: IdentityWallet"
sidebar_label: "IdentityWallet"
---

["wallets/IdentityWallet"](../modules/_wallets_identitywallet_.md).IdentityWallet

## Hierarchy

* **IdentityWallet**

## Implements

* [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)

## Constructors

### constructor

\+ **new IdentityWallet**(`provider`: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md), `chainId`: number, `identityFactoryAddress`: string, `identityImplementationAddress`: string, `nonceMechanism`: [NonceMechanism](../enums/_typings_.noncemechanism.md)): [IdentityWallet](_wallets_identitywallet_.identitywallet.md)

*Defined in [src/wallets/IdentityWallet.ts:49](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L49)*

#### Parameters:

Name | Type |
------ | ------ |
`provider` | [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) |
`chainId` | number |
`identityFactoryAddress` | string |
`identityImplementationAddress` | string |
`nonceMechanism` | [NonceMechanism](../enums/_typings_.noncemechanism.md) |

**Returns:** [IdentityWallet](_wallets_identitywallet_.identitywallet.md)

## Properties

### provider

•  **provider**: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)

*Defined in [src/wallets/IdentityWallet.ts:41](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L41)*

## Accessors

### address

• get **address**(): string

*Defined in [src/wallets/IdentityWallet.ts:66](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L66)*

**Returns:** string

## Methods

### buildMetaTransaction

▸ **buildMetaTransaction**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): [MetaTransaction](../interfaces/_typings_.metatransaction.md)

*Defined in [src/wallets/IdentityWallet.ts:423](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L423)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** [MetaTransaction](../interfaces/_typings_.metatransaction.md)

___

### confirm

▸ **confirm**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:276](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L276)*

Takes a raw transaction object, turns it into a meta-transaction signed by
the loaded user and relays the transaction.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) | Raw transaction object. |

**Returns:** Promise&#60;string>

the hash of the meta-transaction

___

### create

▸ **create**(): Promise&#60;[IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:97](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L97)*

Creates wallet data of type `identity`.

**Returns:** Promise&#60;[IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)>

___

### decrypt

▸ **decrypt**(`encMsg`: any, `theirPubKey`: string): Promise&#60;any>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:258](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L258)*

#### Parameters:

Name | Type |
------ | ------ |
`encMsg` | any |
`theirPubKey` | string |

**Returns:** Promise&#60;any>

___

### deployIdentity

▸ **deployIdentity**(): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:109](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L109)*

Deploys a new identity contract on the chain

**Returns:** Promise&#60;string>

___

### encrypt

▸ **encrypt**(`msg`: string, `theirPubKey`: string): Promise&#60;any>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:254](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L254)*

#### Parameters:

Name | Type |
------ | ------ |
`msg` | string |
`theirPubKey` | string |

**Returns:** Promise&#60;any>

___

### encryptToSerializedKeystore

▸ **encryptToSerializedKeystore**(`walletData`: [IdentityWalletData](../interfaces/_typings_.identitywalletdata.md), `password`: string, `progressCallback?`: (progress: number) => any): Promise&#60;string>

*Defined in [src/wallets/IdentityWallet.ts:410](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L410)*

Returns a serialized encrypted ethereum JSON keystore v3.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`walletData` | [IdentityWalletData](../interfaces/_typings_.identitywalletdata.md) | Wallet data of type `identity`. |
`password` | string | Password to encrypt wallet data. |
`progressCallback?` | (progress: number) => any | Optional encryption progress callback.  |

**Returns:** Promise&#60;string>

___

### exportPrivateKey

▸ **exportPrivateKey**(): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:247](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L247)*

Returns a `Promise` with the private key of loaded user.

**Returns:** Promise&#60;string>

___

### getAddress

▸ **getAddress**(): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:73](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L73)*

**Returns:** Promise&#60;string>

___

### getBalance

▸ **getBalance**(): Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:87](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L87)*

**Returns:** Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

___

### getIdentityImplementationAddress

▸ **getIdentityImplementationAddress**(): Promise&#60;string>

*Defined in [src/wallets/IdentityWallet.ts:165](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L165)*

**Returns:** Promise&#60;string>

___

### getMetaTxFees

▸ **getMetaTxFees**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;[MetaTransactionFees](../interfaces/_typings_.metatransactionfees.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:390](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L390)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[MetaTransactionFees](../interfaces/_typings_.metatransactionfees.md)>

___

### getNonce

▸ **getNonce**(): Promise&#60;string>

*Defined in [src/wallets/IdentityWallet.ts:443](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L443)*

**Returns:** Promise&#60;string>

___

### getTxStatus

▸ **getTxStatus**(`tx`: string \| [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:397](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L397)*

#### Parameters:

Name | Type |
------ | ------ |
`tx` | string \| [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

___

### getWalletData

▸ **getWalletData**(): Promise&#60;[IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:80](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L80)*

**Returns:** Promise&#60;[IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)>

___

### hashMetaTransaction

▸ **hashMetaTransaction**(`metaTransaction`: [MetaTransaction](../interfaces/_typings_.metatransaction.md)): Promise&#60;string>

*Defined in [src/wallets/IdentityWallet.ts:298](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L298)*

#### Parameters:

Name | Type |
------ | ------ |
`metaTransaction` | [MetaTransaction](../interfaces/_typings_.metatransaction.md) |

**Returns:** Promise&#60;string>

___

### hashTx

▸ **hashTx**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:290](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L290)*

Return the meta-tx hash for given raw transaction for loaded user

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |   |

**Returns:** Promise&#60;string>

___

### isIdentityDeployed

▸ **isIdentityDeployed**(): Promise&#60;boolean>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:139](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L139)*

**Returns:** Promise&#60;boolean>

___

### isIdentityImplementationUpToDate

▸ **isIdentityImplementationUpToDate**(): Promise&#60;boolean>

*Defined in [src/wallets/IdentityWallet.ts:158](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L158)*

**Returns:** Promise&#60;boolean>

___

### loadFrom

▸ **loadFrom**(`walletData`: [IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)): Promise&#60;void>

*Defined in [src/wallets/IdentityWallet.ts:173](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L173)*

Loads given wallet data of type `identity`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`walletData` | [IdentityWalletData](../interfaces/_typings_.identitywalletdata.md) | Wallet data of type `identity`.  |

**Returns:** Promise&#60;void>

___

### prepareImplementationUpdate

▸ **prepareImplementationUpdate**(`transaction`: [Transaction](_transaction_.transaction.md), `options?`: [TxOptionsInternal](../interfaces/_typings_.txoptionsinternal.md)): Promise&#60;[TxObjectInternal](../interfaces/_typings_.txobjectinternal.md)>

*Defined in [src/wallets/IdentityWallet.ts:459](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L459)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`transaction` | [Transaction](_transaction_.transaction.md) | - |
`options` | [TxOptionsInternal](../interfaces/_typings_.txoptionsinternal.md) | {} |

**Returns:** Promise&#60;[TxObjectInternal](../interfaces/_typings_.txobjectinternal.md)>

___

### prepareTransaction

▸ **prepareTransaction**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;[TxObjectRaw](../interfaces/_typings_.txobjectraw.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:354](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L354)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[TxObjectRaw](../interfaces/_typings_.txobjectraw.md)>

___

### recoverFromEncryptedKeystore

▸ **recoverFromEncryptedKeystore**(`serializedEncryptedKeystore`: string, `password`: string, `progressCallback?`: (progress: number) => any): Promise&#60;[IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)>

*Defined in [src/wallets/IdentityWallet.ts:188](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L188)*

Recovers wallet data from a serialized encrypted ethereum JSON keystore v3
(e.g. as returned by `encryptToSerializedKeystore`).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serializedEncryptedKeystore` | string | Serialized encrypted ethereum JSON keystore v3. |
`password` | string | Password to decrypt serialized encrypted ethereum JSON keystore v3 with. |
`progressCallback?` | (progress: number) => any | Callback function for decryption progress.  |

**Returns:** Promise&#60;[IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)>

___

### recoverFromPrivateKey

▸ **recoverFromPrivateKey**(`privateKey`: string): Promise&#60;[IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:223](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L223)*

Recovers wallet data from private key.
Note that mnemonic and derivation path is `undefined` here.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`privateKey` | string | Private key to recover wallet data from.  |

**Returns:** Promise&#60;[IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)>

___

### recoverFromSeed

▸ **recoverFromSeed**(`seed`: string): Promise&#60;[IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:209](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L209)*

Recovers wallet data from mnemonic phrase.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`seed` | string | Mnemonic seed phrase.  |

**Returns:** Promise&#60;[IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)>

___

### showSeed

▸ **showSeed**(): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:237](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L237)*

Returns a `Promise` with the mnemonic seed phrase of loaded user.

**Returns:** Promise&#60;string>

___

### signMessage

▸ **signMessage**(`message`: BytesLike): Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

*Defined in [src/wallets/IdentityWallet.ts:266](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L266)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | BytesLike |

**Returns:** Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

___

### signMetaTransaction

▸ **signMetaTransaction**(`metaTransaction`: [MetaTransaction](../interfaces/_typings_.metatransaction.md)): Promise&#60;string>

*Defined in [src/wallets/IdentityWallet.ts:345](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L345)*

#### Parameters:

Name | Type |
------ | ------ |
`metaTransaction` | [MetaTransaction](../interfaces/_typings_.metatransaction.md) |

**Returns:** Promise&#60;string>

___

### signMsgHash

▸ **signMsgHash**(`msgHash`: string): Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/IdentityWallet.ts:262](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/IdentityWallet.ts#L262)*

#### Parameters:

Name | Type |
------ | ------ |
`msgHash` | string |

**Returns:** Promise&#60;[Signature](../interfaces/_typings_.signature.md)>
