---
id: "_user_.user"
title: "Class: User"
sidebar_label: "User"
---

["User"](../modules/_user_.md).User

The [User](_user_.user.md) class contains all user related functions, which also include wallet related methods.
It is meant to be called via a [TLNetwork](_tlnetwork_.tlnetwork.md) instance like:
```typescript
const tlNetwork = new TLNetwork(...)

// Create user
tlNetwork.user.create().then(
 newUser => console.log("New user:", newUser)
)
```

## Hierarchy

* **User**

## Accessors

### address

• get **address**(): string

*Defined in [src/User.ts:44](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L44)*

Checksummed Ethereum address of currently loaded wallet.

**Returns:** string

## Methods

### create

▸ **create**(): Promise&#60;[TLWalletData](../interfaces/_typings_.tlwalletdata.md)>

*Defined in [src/User.ts:59](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L59)*

Creates a new random wallet based on the configured [WalletType](../modules/_typings_.md#wallettype).

**Returns:** Promise&#60;[TLWalletData](../interfaces/_typings_.tlwalletdata.md)>

the wallet data that can be used with `loadFrom`

___

### createLink

▸ **createLink**(`options`: { [key:string]: string; customBase?: string ; name?: string  }): Promise&#60;string>

*Defined in [src/User.ts:208](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L208)*

Returns a shareable link which can be send to other users.
Contains username and address.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options` | { [key:string]: string; customBase?: string ; name?: string  } | any additional options that we should hang on the URL        options.customBase - convention for a custom base for the URL        options.name - convention for a name for the user        options[key] - any other additional options that should be added to the URL  |

**Returns:** Promise&#60;string>

___

### deployIdentity

▸ **deployIdentity**(): Promise&#60;string>

*Defined in [src/User.ts:81](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L81)*

Deploys a new identity on the chain if the configured [WalletType](../modules/_typings_.md#wallettype) is [WalletTypeIdentity](../modules/_typings_.md#wallettypeidentity) and returns the transaction hash.

**Returns:** Promise&#60;string>

___

### encryptToSerializedKeystore

▸ **encryptToSerializedKeystore**(`tlWalletData`: [TLWalletData](../interfaces/_typings_.tlwalletdata.md), `password?`: string \| (progress: number) => void, `progressCallback?`: (progress: number) => void): Promise&#60;string>

*Defined in [src/User.ts:134](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L134)*

Encrypts and serializes the given wallet data.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tlWalletData` | [TLWalletData](../interfaces/_typings_.tlwalletdata.md) | Wallet data to encrypt and serialize. |
`password?` | string \| (progress: number) => void | Optional password to encrypt wallet with.                 If not specified default password is used. |
`progressCallback?` | (progress: number) => void | Optional encryption progress callback.  |

**Returns:** Promise&#60;string>

___

### exportPrivateKey

▸ **exportPrivateKey**(): Promise&#60;string>

*Defined in [src/User.ts:156](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L156)*

Returns the private key of loaded user.

**Returns:** Promise&#60;string>

___

### getAddress

▸ **getAddress**(): Promise&#60;string>

*Defined in [src/User.ts:51](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L51)*

Async `address` getter for loaded user.

**Returns:** Promise&#60;string>

___

### getBalance

▸ **getBalance**(): Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

*Defined in [src/User.ts:103](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L103)*

Returns ETH balance of loaded user.

**Returns:** Promise&#60;[Amount](../interfaces/_typings_.amount.md)>

___

### getWalletData

▸ **getWalletData**(): Promise&#60;[TLWalletData](../interfaces/_typings_.tlwalletdata.md)>

*Defined in [src/User.ts:74](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L74)*

Returns the wallet data. Can be used with `loadFrom`

**Returns:** Promise&#60;[TLWalletData](../interfaces/_typings_.tlwalletdata.md)>

___

### isIdentityDeployed

▸ **isIdentityDeployed**(): Promise&#60;boolean>

*Defined in [src/User.ts:88](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L88)*

Returns a boolean if a new identity already has been deployed for the loaded user.

**Returns:** Promise&#60;boolean>

___

### loadFrom

▸ **loadFrom**(`tlWalletData`: [TLWalletData](../interfaces/_typings_.tlwalletdata.md)): Promise&#60;void>

*Defined in [src/User.ts:67](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L67)*

Loads the given wallet data into the library

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tlWalletData` | [TLWalletData](../interfaces/_typings_.tlwalletdata.md) | data of the wallet to load  |

**Returns:** Promise&#60;void>

___

### recoverFromEncryptedKeystore

▸ **recoverFromEncryptedKeystore**(`serializedEncryptedKeystore`: string, `password`: string, `progressCallback?`: (progress: number) => any): Promise&#60;[TLWalletData](../interfaces/_typings_.tlwalletdata.md)>

*Defined in [src/User.ts:168](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L168)*

Recovers wallet data from a serialized encrypted JSON keystore string
(e.g. as returned by `encryptToSerializedKeystore`).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serializedEncryptedKeystore` | string | Serialized standard JSON keystore. |
`password` | string | Password to decrypt serialized JSON keystore with. |
`progressCallback?` | (progress: number) => any | Optional progress callback to call on encryption progress. |

**Returns:** Promise&#60;[TLWalletData](../interfaces/_typings_.tlwalletdata.md)>

the wallet data. Can be used with `loadFrom`

___

### recoverFromPrivateKey

▸ **recoverFromPrivateKey**(`privateKey`: string): Promise&#60;[TLWalletData](../interfaces/_typings_.tlwalletdata.md)>

*Defined in [src/User.ts:194](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L194)*

Recovers wallet data from private key.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`privateKey` | string | Private key to recover wallet data from. |

**Returns:** Promise&#60;[TLWalletData](../interfaces/_typings_.tlwalletdata.md)>

wallet data. Can be used with `loadFrom`

___

### recoverFromSeed

▸ **recoverFromSeed**(`seed`: string): Promise&#60;[TLWalletData](../interfaces/_typings_.tlwalletdata.md)>

*Defined in [src/User.ts:185](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L185)*

Recovers wallet data from 12 word seed phrase.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`seed` | string | 12 word seed phrase string. |

**Returns:** Promise&#60;[TLWalletData](../interfaces/_typings_.tlwalletdata.md)>

the wallet data. Can be used with `loadFrom`

___

### showSeed

▸ **showSeed**(): Promise&#60;string>

*Defined in [src/User.ts:149](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L149)*

Returns the 12 word seed of loaded user.

**Returns:** Promise&#60;string>

___

### signMsgHash

▸ **signMsgHash**(`msgHash`: string): Promise&#60;[Signature](../interfaces/_typings_.signature.md)>

*Defined in [src/User.ts:96](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/User.ts#L96)*

Digitally signs a message hash with the currently loaded user/wallet.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`msgHash` | string | Hash of message that should be signed.  |

**Returns:** Promise&#60;[Signature](../interfaces/_typings_.signature.md)>
