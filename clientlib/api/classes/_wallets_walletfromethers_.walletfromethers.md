---
id: "_wallets_walletfromethers_.walletfromethers"
title: "Class: WalletFromEthers"
sidebar_label: "WalletFromEthers"
---

["wallets/WalletFromEthers"](../modules/_wallets_walletfromethers_.md).WalletFromEthers

This is a wrapper class for `ethers.Wallet`. It allows us to customize some of the methods provided by
`ethers.Wallet`. We also use this to add some conversion methods adapted to our internal types.

## Hierarchy

* Wallet

  ↳ **WalletFromEthers**

## Constructors

### constructor

\+ **new WalletFromEthers**(`privateKey`: string, `mnemonic?`: string): [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

*Overrides void*

*Defined in [src/wallets/WalletFromEthers.ts:46](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/wallets/WalletFromEthers.ts#L46)*

#### Parameters:

Name | Type |
------ | ------ |
`privateKey` | string |
`mnemonic?` | string |

**Returns:** [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

## Properties

### address

• `Readonly` **address**: string

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[address](_wallets_walletfromethers_.walletfromethers.md#address)*

*Defined in node_modules/ethers/wallet.d.ts:14*

___

### mnemonic

• `Readonly` **mnemonic**: string

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[mnemonic](_wallets_walletfromethers_.walletfromethers.md#mnemonic)*

*Defined in node_modules/ethers/wallet.d.ts:15*

___

### path

• `Readonly` **path**: string

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[path](_wallets_walletfromethers_.walletfromethers.md#path)*

*Defined in node_modules/ethers/wallet.d.ts:16*

___

### privateKey

• `Readonly` **privateKey**: string

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[privateKey](_wallets_walletfromethers_.walletfromethers.md#privatekey)*

*Defined in node_modules/ethers/wallet.d.ts:17*

___

### provider

• `Readonly` **provider**: Provider

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[provider](_wallets_walletfromethers_.walletfromethers.md#provider)*

*Overrides void*

*Defined in node_modules/ethers/wallet.d.ts:11*

## Methods

### connect

▸ **connect**(`provider`: Provider): Wallet

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[connect](_wallets_walletfromethers_.walletfromethers.md#connect)*

*Defined in node_modules/ethers/wallet.d.ts:21*

 Create a new instance of this Wallet connected to provider.

#### Parameters:

Name | Type |
------ | ------ |
`provider` | Provider |

**Returns:** Wallet

___

### encrypt

▸ **encrypt**(`password`: Arrayish \| string, `options?`: any, `progressCallback?`: ProgressCallback): Promise&#60;string>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[encrypt](_wallets_walletfromethers_.walletfromethers.md#encrypt)*

*Defined in node_modules/ethers/wallet.d.ts:28*

#### Parameters:

Name | Type |
------ | ------ |
`password` | Arrayish \| string |
`options?` | any |
`progressCallback?` | ProgressCallback |

**Returns:** Promise&#60;string>

___

### getAddress

▸ **getAddress**(): Promise&#60;string>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[getAddress](_wallets_walletfromethers_.walletfromethers.md#getaddress)*

*Overrides void*

*Defined in node_modules/ethers/wallet.d.ts:22*

**Returns:** Promise&#60;string>

___

### getBalance

▸ **getBalance**(`blockTag?`: BlockTag): Promise&#60;BigNumber>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[getBalance](_wallets_walletfromethers_.walletfromethers.md#getbalance)*

*Defined in node_modules/ethers/wallet.d.ts:25*

#### Parameters:

Name | Type |
------ | ------ |
`blockTag?` | BlockTag |

**Returns:** Promise&#60;BigNumber>

___

### getTransactionCount

▸ **getTransactionCount**(`blockTag?`: BlockTag): Promise&#60;number>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[getTransactionCount](_wallets_walletfromethers_.walletfromethers.md#gettransactioncount)*

*Defined in node_modules/ethers/wallet.d.ts:26*

#### Parameters:

Name | Type |
------ | ------ |
`blockTag?` | BlockTag |

**Returns:** Promise&#60;number>

___

### sendTransaction

▸ **sendTransaction**(`transaction`: TransactionRequest): Promise&#60;TransactionResponse>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[sendTransaction](_wallets_walletfromethers_.walletfromethers.md#sendtransaction)*

*Overrides void*

*Defined in node_modules/ethers/wallet.d.ts:27*

#### Parameters:

Name | Type |
------ | ------ |
`transaction` | TransactionRequest |

**Returns:** Promise&#60;TransactionResponse>

___

### sign

▸ **sign**(`transaction`: TransactionRequest): Promise&#60;string>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[sign](_wallets_walletfromethers_.walletfromethers.md#sign)*

*Defined in node_modules/ethers/wallet.d.ts:23*

#### Parameters:

Name | Type |
------ | ------ |
`transaction` | TransactionRequest |

**Returns:** Promise&#60;string>

___

### signMessage

▸ **signMessage**(`message`: Arrayish \| string): Promise&#60;string>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[signMessage](_wallets_walletfromethers_.walletfromethers.md#signmessage)*

*Overrides void*

*Defined in node_modules/ethers/wallet.d.ts:24*

#### Parameters:

Name | Type |
------ | ------ |
`message` | Arrayish \| string |

**Returns:** Promise&#60;string>

___

### toEthersWalletData

▸ **toEthersWalletData**(): [EthersWalletData](../interfaces/_typings_.etherswalletdata.md)

*Defined in [src/wallets/WalletFromEthers.ts:57](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/wallets/WalletFromEthers.ts#L57)*

**Returns:** [EthersWalletData](../interfaces/_typings_.etherswalletdata.md)

___

### toIdentityWalletData

▸ **toIdentityWalletData**(`identityAddress`: string): [IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)

*Defined in [src/wallets/WalletFromEthers.ts:71](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/wallets/WalletFromEthers.ts#L71)*

#### Parameters:

Name | Type |
------ | ------ |
`identityAddress` | string |

**Returns:** [IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)

___

### createRandom

▸ `Static`**createRandom**(): [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

*Overrides void*

*Defined in [src/wallets/WalletFromEthers.ts:25](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/wallets/WalletFromEthers.ts#L25)*

**Returns:** [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

___

### fromEncryptedJson

▸ `Static`**fromEncryptedJson**(`encryptedJson`: string, `password`: string, `progressCallback?`: (progress: number) => any): Promise&#60;[WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)>

*Overrides void*

*Defined in [src/wallets/WalletFromEthers.ts:30](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/wallets/WalletFromEthers.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`encryptedJson` | string |
`password` | string |
`progressCallback?` | (progress: number) => any |

**Returns:** Promise&#60;[WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)>

___

### fromMnemonic

▸ `Static`**fromMnemonic**(`mnemonic`: string): [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

*Overrides void*

*Defined in [src/wallets/WalletFromEthers.ts:43](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/wallets/WalletFromEthers.ts#L43)*

#### Parameters:

Name | Type |
------ | ------ |
`mnemonic` | string |

**Returns:** [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

___

### fromWalletData

▸ `Static`**fromWalletData**(`walletData`: [EthersWalletData](../interfaces/_typings_.etherswalletdata.md) \| [IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)): [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

*Defined in [src/wallets/WalletFromEthers.ts:17](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/wallets/WalletFromEthers.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`walletData` | [EthersWalletData](../interfaces/_typings_.etherswalletdata.md) \| [IdentityWalletData](../interfaces/_typings_.identitywalletdata.md) |

**Returns:** [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

___

### isSigner

▸ `Static`**isSigner**(`value`: any): value is Signer

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[isSigner](_wallets_walletfromethers_.walletfromethers.md#issigner)*

*Defined in node_modules/ethers/abstract-signer.d.ts:10*

#### Parameters:

Name | Type |
------ | ------ |
`value` | any |

**Returns:** value is Signer
