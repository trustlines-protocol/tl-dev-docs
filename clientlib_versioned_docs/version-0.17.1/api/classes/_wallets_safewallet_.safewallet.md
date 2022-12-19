---
id: "_wallets_safewallet_.safewallet"
title: "Class: SafeWallet"
sidebar_label: "SafeWallet"
---

["wallets/SafeWallet"](../modules/_wallets_safewallet_.md).SafeWallet

## Hierarchy

* **SafeWallet**

## Implements

* [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)

## Constructors

### constructor

\+ **new SafeWallet**(`provider`: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md), `safeRelayProvider`: [SafeRelayProvider](_providers_saferelayprovider_.saferelayprovider.md), `chainId`: number, `identityFactoryAddress`: string, `identityImplementationAddress`: string, `gnosisSafeL2Address`: string, `gnosisSafeProxyFactoryAddress`: string, `nonceMechanism`: [NonceMechanism](../enums/_typings_.noncemechanism.md)): [SafeWallet](_wallets_safewallet_.safewallet.md)

*Defined in [src/wallets/SafeWallet.ts:52](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L52)*

#### Parameters:

Name | Type |
------ | ------ |
`provider` | [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) |
`safeRelayProvider` | [SafeRelayProvider](_providers_saferelayprovider_.saferelayprovider.md) |
`chainId` | number |
`identityFactoryAddress` | string |
`identityImplementationAddress` | string |
`gnosisSafeL2Address` | string |
`gnosisSafeProxyFactoryAddress` | string |
`nonceMechanism` | [NonceMechanism](../enums/_typings_.noncemechanism.md) |

**Returns:** [SafeWallet](_wallets_safewallet_.safewallet.md)

## Properties

### provider

•  **provider**: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)

*Defined in [src/wallets/SafeWallet.ts:41](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L41)*

## Accessors

### address

• get **address**(): string

*Defined in [src/wallets/SafeWallet.ts:75](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L75)*

**Returns:** string

## Methods

### buildMetaTransaction

▸ **buildMetaTransaction**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): [SafeMetaTransaction](../interfaces/_typings_.safemetatransaction.md)

*Defined in [src/wallets/SafeWallet.ts:513](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L513)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** [SafeMetaTransaction](../interfaces/_typings_.safemetatransaction.md)

___

### confirm

▸ **confirm**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:331](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L331)*

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

▸ **create**(): Promise&#60;[SafeWalletData](../interfaces/_typings_.safewalletdata.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:108](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L108)*

Creates wallet data of type `identity`.

**Returns:** Promise&#60;[SafeWalletData](../interfaces/_typings_.safewalletdata.md)>

___

### decrypt

▸ **decrypt**(`encMsg`: any, `theirPubKey`: string): Promise&#60;any>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:313](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L313)*

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

*Defined in [src/wallets/SafeWallet.ts:150](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L150)*

Deploys a new identity contract on the chain

**Returns:** Promise&#60;string>

___

### encrypt

▸ **encrypt**(`msg`: string, `theirPubKey`: string): Promise&#60;any>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:309](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L309)*

#### Parameters:

Name | Type |
------ | ------ |
`msg` | string |
`theirPubKey` | string |

**Returns:** Promise&#60;any>

___

### encryptToSerializedKeystore

▸ **encryptToSerializedKeystore**(`walletData`: [SafeWalletData](../interfaces/_typings_.safewalletdata.md), `password`: string, `progressCallback?`: (progress: number) => any): Promise&#60;string>

*Defined in [src/wallets/SafeWallet.ts:500](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L500)*

Returns a serialized encrypted ethereum JSON keystore v3.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`walletData` | [SafeWalletData](../interfaces/_typings_.safewalletdata.md) | Wallet data of type `identity`. |
`password` | string | Password to encrypt wallet data. |
`progressCallback?` | (progress: number) => any | Optional encryption progress callback.  |

**Returns:** Promise&#60;string>

___

### exportPrivateKey

▸ **exportPrivateKey**(): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:302](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L302)*

Returns a `Promise` with the private key of loaded user.

**Returns:** Promise&#60;string>

___

### getAddress

▸ **getAddress**(): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:83](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L83)*

**Returns:** Promise&#60;string>

___

### getBalance

▸ **getBalance**(): Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:98](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L98)*

**Returns:** Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

___

### getIdentityImplementationAddress

▸ **getIdentityImplementationAddress**(): Promise&#60;string>

*Defined in [src/wallets/SafeWallet.ts:215](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L215)*

**Returns:** Promise&#60;string>

___

### getMetaTxFees

▸ **getMetaTxFees**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;[SafeTransactionFees](../interfaces/_typings_.safetransactionfees.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:479](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L479)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[SafeTransactionFees](../interfaces/_typings_.safetransactionfees.md)>

___

### getNonce

▸ **getNonce**(): Promise&#60;string>

*Defined in [src/wallets/SafeWallet.ts:531](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L531)*

**Returns:** Promise&#60;string>

___

### getTxStatus

▸ **getTxStatus**(`metaTx`: string \| [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:486](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L486)*

#### Parameters:

Name | Type |
------ | ------ |
`metaTx` | string \| [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

___

### getWalletData

▸ **getWalletData**(): Promise&#60;[SafeWalletData](../interfaces/_typings_.safewalletdata.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:90](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L90)*

**Returns:** Promise&#60;[SafeWalletData](../interfaces/_typings_.safewalletdata.md)>

___

### hashMetaTransaction

▸ **hashMetaTransaction**(`metaTransaction`: [SafeMetaTransaction](../interfaces/_typings_.safemetatransaction.md)): Promise&#60;string>

*Defined in [src/wallets/SafeWallet.ts:355](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L355)*

#### Parameters:

Name | Type |
------ | ------ |
`metaTransaction` | [SafeMetaTransaction](../interfaces/_typings_.safemetatransaction.md) |

**Returns:** Promise&#60;string>

___

### hashTx

▸ **hashTx**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:347](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L347)*

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

*Defined in [src/wallets/SafeWallet.ts:184](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L184)*

**Returns:** Promise&#60;boolean>

___

### isIdentityImplementationUpToDate

▸ **isIdentityImplementationUpToDate**(): Promise&#60;boolean>

*Defined in [src/wallets/SafeWallet.ts:208](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L208)*

**Returns:** Promise&#60;boolean>

___

### loadFrom

▸ **loadFrom**(`walletData`: [SafeWalletData](../interfaces/_typings_.safewalletdata.md)): Promise&#60;void>

*Defined in [src/wallets/SafeWallet.ts:223](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L223)*

Loads given wallet data of type `identity`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`walletData` | [SafeWalletData](../interfaces/_typings_.safewalletdata.md) | Wallet data of type `identity`.  |

**Returns:** Promise&#60;void>

___

### prepareImplementationUpdate

▸ **prepareImplementationUpdate**(`transaction`: [Transaction](_transaction_.transaction.md), `options?`: [TxOptionsInternal](../interfaces/_typings_.txoptionsinternal.md)): Promise&#60;[TxObjectInternal](../interfaces/_typings_.txobjectinternal.md)>

*Defined in [src/wallets/SafeWallet.ts:536](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L536)*

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

*Defined in [src/wallets/SafeWallet.ts:445](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L445)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[TxObjectRaw](../interfaces/_typings_.txobjectraw.md)>

___

### recoverFromEncryptedKeystore

▸ **recoverFromEncryptedKeystore**(`serializedEncryptedKeystore`: string, `password`: string, `progressCallback?`: (progress: number) => any): Promise&#60;[SafeWalletData](../interfaces/_typings_.safewalletdata.md)>

*Defined in [src/wallets/SafeWallet.ts:238](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L238)*

Recovers wallet data from a serialized encrypted ethereum JSON keystore v3
(e.g. as returned by `encryptToSerializedKeystore`).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serializedEncryptedKeystore` | string | Serialized encrypted ethereum JSON keystore v3. |
`password` | string | Password to decrypt serialized encrypted ethereum JSON keystore v3 with. |
`progressCallback?` | (progress: number) => any | Callback function for decryption progress.  |

**Returns:** Promise&#60;[SafeWalletData](../interfaces/_typings_.safewalletdata.md)>

___

### recoverFromPrivateKey

▸ **recoverFromPrivateKey**(`privateKey`: string): Promise&#60;[SafeWalletData](../interfaces/_typings_.safewalletdata.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:277](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L277)*

Recovers wallet data from private key.
Note that mnemonic and derivation path is `undefined` here.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`privateKey` | string | Private key to recover wallet data from.  |

**Returns:** Promise&#60;[SafeWalletData](../interfaces/_typings_.safewalletdata.md)>

___

### recoverFromSeed

▸ **recoverFromSeed**(`seed`: string): Promise&#60;[SafeWalletData](../interfaces/_typings_.safewalletdata.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:260](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L260)*

Recovers wallet data from mnemonic phrase.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`seed` | string | Mnemonic seed phrase.  |

**Returns:** Promise&#60;[SafeWalletData](../interfaces/_typings_.safewalletdata.md)>

___

### showSeed

▸ **showSeed**(): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:292](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L292)*

Returns a `Promise` with the mnemonic seed phrase of loaded user.

**Returns:** Promise&#60;string>

___

### signMessage

▸ **signMessage**(`message`: BytesLike): Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

*Defined in [src/wallets/SafeWallet.ts:321](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L321)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | BytesLike |

**Returns:** Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

___

### signMetaTransaction

▸ **signMetaTransaction**(`metaTransaction`: [SafeMetaTransaction](../interfaces/_typings_.safemetatransaction.md)): Promise&#60;string>

*Defined in [src/wallets/SafeWallet.ts:435](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L435)*

#### Parameters:

Name | Type |
------ | ------ |
`metaTransaction` | [SafeMetaTransaction](../interfaces/_typings_.safemetatransaction.md) |

**Returns:** Promise&#60;string>

___

### signMsgHash

▸ **signMsgHash**(`msgHash`: string): Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/SafeWallet.ts:317](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L317)*

#### Parameters:

Name | Type |
------ | ------ |
`msgHash` | string |

**Returns:** Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

___

### waitForSafeToBeDeployed

▸ **waitForSafeToBeDeployed**(`safeAddress`: string): Promise&#60;boolean>

*Defined in [src/wallets/SafeWallet.ts:119](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/SafeWallet.ts#L119)*

#### Parameters:

Name | Type |
------ | ------ |
`safeAddress` | string |

**Returns:** Promise&#60;boolean>
