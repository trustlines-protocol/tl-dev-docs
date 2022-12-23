---
id: "_wallets_etherswallet_.etherswallet"
title: "Class: EthersWallet"
sidebar_label: "EthersWallet"
---

["wallets/EthersWallet"](../modules/_wallets_etherswallet_.md).EthersWallet

The EthersWallet class contains wallet related methods.

## Hierarchy

* **EthersWallet**

## Implements

* [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)

## Constructors

### constructor

\+ **new EthersWallet**(`provider`: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)): [EthersWallet](_wallets_etherswallet_.etherswallet.md)

*Defined in [src/wallets/EthersWallet.ts:31](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`provider` | [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) |

**Returns:** [EthersWallet](_wallets_etherswallet_.etherswallet.md)

## Properties

### provider

•  **provider**: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md)

*Defined in [src/wallets/EthersWallet.ts:29](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L29)*

## Accessors

### address

• get **address**(): string

*Defined in [src/wallets/EthersWallet.ts:42](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L42)*

**Returns:** string

## Methods

### confirm

▸ **confirm**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:197](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L197)*

Takes a raw transaction object, turns it into a RLP encoded hex string, signs it with
the loaded user and relays the transaction.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) | Raw transaction object.  |

**Returns:** Promise&#60;string>

___

### create

▸ **create**(): Promise&#60;[EthersWalletData](../interfaces/_typings_.etherswalletdata.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:70](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L70)*

Creates wallet data of type `ethers`.

**Returns:** Promise&#60;[EthersWalletData](../interfaces/_typings_.etherswalletdata.md)>

___

### decrypt

▸ **decrypt**(`encMsg`: any, `theirPubKey`: string): Promise&#60;any>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:288](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L288)*

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

*Defined in [src/wallets/EthersWallet.ts:78](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L78)*

Deploys a new identity contract on the chain

**Returns:** Promise&#60;string>

___

### encrypt

▸ **encrypt**(`msg`: string, `theirPubKey`: string): Promise&#60;any>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:284](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L284)*

#### Parameters:

Name | Type |
------ | ------ |
`msg` | string |
`theirPubKey` | string |

**Returns:** Promise&#60;any>

___

### encryptToSerializedKeystore

▸ **encryptToSerializedKeystore**(`walletData`: [EthersWalletData](../interfaces/_typings_.etherswalletdata.md), `password`: string, `progressCallback?`: (progress: number) => any): Promise&#60;string>

*Defined in [src/wallets/EthersWallet.ts:94](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L94)*

Encrypts and serializes the given wallet data.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`walletData` | [EthersWalletData](../interfaces/_typings_.etherswalletdata.md) | Wallet data of type `ethers`. |
`password` | string | Password to encrypt wallet data with. |
`progressCallback?` | (progress: number) => any | Optional encryption progress callback. |

**Returns:** Promise&#60;string>

Serialized encrypted ethereum JSON keystore v3.

___

### exportPrivateKey

▸ **exportPrivateKey**(): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:273](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L273)*

Returns a `Promise` with the private key of loaded user.

**Returns:** Promise&#60;string>

___

### getAddress

▸ **getAddress**(): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:49](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L49)*

**Returns:** Promise&#60;string>

___

### getBalance

▸ **getBalance**(): Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:251](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L251)*

Returns a `Promise` with the balance of loaded user.

**Returns:** Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

___

### getMetaTxFees

▸ **getMetaTxFees**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;[MetaTransactionFees](../interfaces/_typings_.metatransactionfees.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:320](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L320)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[MetaTransactionFees](../interfaces/_typings_.metatransactionfees.md)>

___

### getTxStatus

▸ **getTxStatus**(`tx`: string \| [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:313](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L313)*

#### Parameters:

Name | Type |
------ | ------ |
`tx` | string \| [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[TransactionStatusObject](../interfaces/_typings_.transactionstatusobject.md)>

___

### getWalletData

▸ **getWalletData**(): Promise&#60;[EthersWalletData](../interfaces/_typings_.etherswalletdata.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:56](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L56)*

**Returns:** Promise&#60;[EthersWalletData](../interfaces/_typings_.etherswalletdata.md)>

___

### hashTx

▸ **hashTx**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:237](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L237)*

Returns the hash of the signed transaction for given rawTx with loaded user

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |   |

**Returns:** Promise&#60;string>

___

### isIdentityDeployed

▸ **isIdentityDeployed**(): Promise&#60;boolean>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:83](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L83)*

**Returns:** Promise&#60;boolean>

___

### loadFrom

▸ **loadFrom**(`walletData`: [EthersWalletData](../interfaces/_typings_.etherswalletdata.md)): Promise&#60;void>

*Defined in [src/wallets/EthersWallet.ts:111](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L111)*

Loads given wallet data of type `ethers`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`walletData` | [EthersWalletData](../interfaces/_typings_.etherswalletdata.md) | Wallet data of type `ethers`.  |

**Returns:** Promise&#60;void>

___

### prepareTransaction

▸ **prepareTransaction**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;[TxObjectRaw](../interfaces/_typings_.txobjectraw.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:292](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L292)*

#### Parameters:

Name | Type |
------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |

**Returns:** Promise&#60;[TxObjectRaw](../interfaces/_typings_.txobjectraw.md)>

___

### recoverFromEncryptedKeystore

▸ **recoverFromEncryptedKeystore**(`serializedEncryptedKeystore`: string, `password`: string, `progressCallback?`: (progress: number) => any): Promise&#60;[EthersWalletData](../interfaces/_typings_.etherswalletdata.md)>

*Defined in [src/wallets/EthersWallet.ts:123](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L123)*

Recovers wallet data from a serialized encrypted ethereum JSON keystore v3
(e.g. as returned by `encryptToSerializedKeystore`).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serializedEncryptedKeystore` | string | Serialized encrypted ethereum JSON keystore v3. |
`password` | string | Password to decrypt encrypted ethereum JSON keystore v3. |
`progressCallback?` | (progress: number) => any | Callback function for decryption progress.  |

**Returns:** Promise&#60;[EthersWalletData](../interfaces/_typings_.etherswalletdata.md)>

___

### recoverFromPrivateKey

▸ **recoverFromPrivateKey**(`privateKey`: string): Promise&#60;[EthersWalletData](../interfaces/_typings_.etherswalletdata.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:150](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L150)*

Recovers wallet data from private key.
Note that mnemonic and derivation path is `undefined` here.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`privateKey` | string | Private key to recover wallet data from.  |

**Returns:** Promise&#60;[EthersWalletData](../interfaces/_typings_.etherswalletdata.md)>

___

### recoverFromSeed

▸ **recoverFromSeed**(`seed`: string): Promise&#60;[EthersWalletData](../interfaces/_typings_.etherswalletdata.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:140](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L140)*

Recovers wallet data from mnemonic phrase.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`seed` | string | Mnemonic seed phrase.  |

**Returns:** Promise&#60;[EthersWalletData](../interfaces/_typings_.etherswalletdata.md)>

___

### showSeed

▸ **showSeed**(): Promise&#60;string>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:263](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L263)*

Returns a `Promise` with the mnemonic seed phrase of loaded user.
Note that the returned seed is `undefined` for accounts recovered by a private key
or serialized encrypted keystores that were not created with `ethers`.

**Returns:** Promise&#60;string>

___

### signMessage

▸ **signMessage**(`message`: BytesLike): Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

*Defined in [src/wallets/EthersWallet.ts:180](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L180)*

Signs given message with loaded wallet.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`message` | BytesLike | Message to sign.  |

**Returns:** Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

___

### signMsgHash

▸ **signMsgHash**(`msgHash`: string): Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

*Implementation of [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)*

*Defined in [src/wallets/EthersWallet.ts:165](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L165)*

Signs given hex hash of message with loaded wallet.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`msgHash` | string | Hash of message to sign.  |

**Returns:** Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

___

### signTx

▸ **signTx**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;string>

*Defined in [src/wallets/EthersWallet.ts:209](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/EthersWallet.ts#L209)*

Takes a raw transaction object and signs it RLP encoded with the loaded user

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) |   |

**Returns:** Promise&#60;string>
