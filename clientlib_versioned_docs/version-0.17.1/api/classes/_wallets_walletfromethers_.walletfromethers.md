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

## Implements

* ExternallyOwnedAccount
* TypedDataSigner

## Constructors

### constructor

\+ **new WalletFromEthers**(`privateKey`: string, `mnemonic?`: string): [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

*Overrides void*

*Defined in [src/wallets/WalletFromEthers.ts:53](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/WalletFromEthers.ts#L53)*

#### Parameters:

Name | Type |
------ | ------ |
`privateKey` | string |
`mnemonic?` | string |

**Returns:** [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

## Properties

### \_isSigner

• `Readonly` **\_isSigner**: boolean

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[_isSigner](_wallets_walletfromethers_.walletfromethers.md#_issigner)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:29*

___

### \_mnemonic

• `Readonly` **\_mnemonic**: () => Mnemonic

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[_mnemonic](_wallets_walletfromethers_.walletfromethers.md#_mnemonic)*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:12*

___

### \_signingKey

• `Readonly` **\_signingKey**: () => SigningKey

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[_signingKey](_wallets_walletfromethers_.walletfromethers.md#_signingkey)*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:11*

___

### address

• `Readonly` **address**: string

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[address](_wallets_walletfromethers_.walletfromethers.md#address)*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:9*

___

### provider

• `Readonly` **provider**: Provider

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[provider](_wallets_walletfromethers_.walletfromethers.md#provider)*

*Overrides void*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:10*

## Accessors

### mnemonic

• get **mnemonic**(): Mnemonic

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[mnemonic](_wallets_walletfromethers_.walletfromethers.md#mnemonic)*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:14*

**Returns:** Mnemonic

___

### privateKey

• get **privateKey**(): string

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[privateKey](_wallets_walletfromethers_.walletfromethers.md#privatekey)*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:15*

**Returns:** string

___

### publicKey

• get **publicKey**(): string

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[publicKey](_wallets_walletfromethers_.walletfromethers.md#publickey)*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:16*

**Returns:** string

## Methods

### \_checkProvider

▸ **_checkProvider**(`operation?`: string): void

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[_checkProvider](_wallets_walletfromethers_.walletfromethers.md#_checkprovider)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:42*

#### Parameters:

Name | Type |
------ | ------ |
`operation?` | string |

**Returns:** void

___

### \_signTypedData

▸ **_signTypedData**(`domain`: TypedDataDomain, `types`: Record&#60;string, Array&#60;TypedDataField>>, `value`: Record&#60;string, any>): Promise&#60;string>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[_signTypedData](_wallets_walletfromethers_.walletfromethers.md#_signtypeddata)*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:21*

#### Parameters:

Name | Type |
------ | ------ |
`domain` | TypedDataDomain |
`types` | Record&#60;string, Array&#60;TypedDataField>> |
`value` | Record&#60;string, any> |

**Returns:** Promise&#60;string>

___

### call

▸ **call**(`transaction`: Deferrable&#60;TransactionRequest>, `blockTag?`: BlockTag): Promise&#60;string>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[call](_wallets_walletfromethers_.walletfromethers.md#call)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:34*

#### Parameters:

Name | Type |
------ | ------ |
`transaction` | Deferrable&#60;TransactionRequest> |
`blockTag?` | BlockTag |

**Returns:** Promise&#60;string>

___

### checkTransaction

▸ **checkTransaction**(`transaction`: Deferrable&#60;TransactionRequest>): Deferrable&#60;TransactionRequest>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[checkTransaction](_wallets_walletfromethers_.walletfromethers.md#checktransaction)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:40*

#### Parameters:

Name | Type |
------ | ------ |
`transaction` | Deferrable&#60;TransactionRequest> |

**Returns:** Deferrable&#60;TransactionRequest>

___

### connect

▸ **connect**(`provider`: Provider): Wallet

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[connect](_wallets_walletfromethers_.walletfromethers.md#connect)*

*Overrides void*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:18*

#### Parameters:

Name | Type |
------ | ------ |
`provider` | Provider |

**Returns:** Wallet

___

### encrypt

▸ **encrypt**(`password`: Bytes \| string, `options?`: any, `progressCallback?`: ProgressCallback): Promise&#60;string>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[encrypt](_wallets_walletfromethers_.walletfromethers.md#encrypt)*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:22*

#### Parameters:

Name | Type |
------ | ------ |
`password` | Bytes \| string |
`options?` | any |
`progressCallback?` | ProgressCallback |

**Returns:** Promise&#60;string>

___

### estimateGas

▸ **estimateGas**(`transaction`: Deferrable&#60;TransactionRequest>): Promise&#60;BigNumber>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[estimateGas](_wallets_walletfromethers_.walletfromethers.md#estimategas)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:33*

#### Parameters:

Name | Type |
------ | ------ |
`transaction` | Deferrable&#60;TransactionRequest> |

**Returns:** Promise&#60;BigNumber>

___

### getAddress

▸ **getAddress**(): Promise&#60;string>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[getAddress](_wallets_walletfromethers_.walletfromethers.md#getaddress)*

*Overrides void*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:17*

**Returns:** Promise&#60;string>

___

### getBalance

▸ **getBalance**(`blockTag?`: BlockTag): Promise&#60;BigNumber>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[getBalance](_wallets_walletfromethers_.walletfromethers.md#getbalance)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:31*

#### Parameters:

Name | Type |
------ | ------ |
`blockTag?` | BlockTag |

**Returns:** Promise&#60;BigNumber>

___

### getChainId

▸ **getChainId**(): Promise&#60;number>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[getChainId](_wallets_walletfromethers_.walletfromethers.md#getchainid)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:36*

**Returns:** Promise&#60;number>

___

### getFeeData

▸ **getFeeData**(): Promise&#60;FeeData>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[getFeeData](_wallets_walletfromethers_.walletfromethers.md#getfeedata)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:38*

**Returns:** Promise&#60;FeeData>

___

### getGasPrice

▸ **getGasPrice**(): Promise&#60;BigNumber>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[getGasPrice](_wallets_walletfromethers_.walletfromethers.md#getgasprice)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:37*

**Returns:** Promise&#60;BigNumber>

___

### getTransactionCount

▸ **getTransactionCount**(`blockTag?`: BlockTag): Promise&#60;number>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[getTransactionCount](_wallets_walletfromethers_.walletfromethers.md#gettransactioncount)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:32*

#### Parameters:

Name | Type |
------ | ------ |
`blockTag?` | BlockTag |

**Returns:** Promise&#60;number>

___

### populateTransaction

▸ **populateTransaction**(`transaction`: Deferrable&#60;TransactionRequest>): Promise&#60;TransactionRequest>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[populateTransaction](_wallets_walletfromethers_.walletfromethers.md#populatetransaction)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:41*

#### Parameters:

Name | Type |
------ | ------ |
`transaction` | Deferrable&#60;TransactionRequest> |

**Returns:** Promise&#60;TransactionRequest>

___

### resolveName

▸ **resolveName**(`name`: string): Promise&#60;string>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[resolveName](_wallets_walletfromethers_.walletfromethers.md#resolvename)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:39*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** Promise&#60;string>

___

### sendTransaction

▸ **sendTransaction**(`transaction`: Deferrable&#60;TransactionRequest>): Promise&#60;TransactionResponse>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[sendTransaction](_wallets_walletfromethers_.walletfromethers.md#sendtransaction)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:35*

#### Parameters:

Name | Type |
------ | ------ |
`transaction` | Deferrable&#60;TransactionRequest> |

**Returns:** Promise&#60;TransactionResponse>

___

### signMessage

▸ **signMessage**(`message`: Bytes \| string): Promise&#60;string>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[signMessage](_wallets_walletfromethers_.walletfromethers.md#signmessage)*

*Overrides void*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:20*

#### Parameters:

Name | Type |
------ | ------ |
`message` | Bytes \| string |

**Returns:** Promise&#60;string>

___

### signTransaction

▸ **signTransaction**(`transaction`: TransactionRequest): Promise&#60;string>

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[signTransaction](_wallets_walletfromethers_.walletfromethers.md#signtransaction)*

*Overrides void*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:19*

#### Parameters:

Name | Type |
------ | ------ |
`transaction` | TransactionRequest |

**Returns:** Promise&#60;string>

___

### toEthersWalletData

▸ **toEthersWalletData**(): [EthersWalletData](../interfaces/_typings_.etherswalletdata.md)

*Defined in [src/wallets/WalletFromEthers.ts:75](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/WalletFromEthers.ts#L75)*

**Returns:** [EthersWalletData](../interfaces/_typings_.etherswalletdata.md)

___

### toIdentityWalletData

▸ **toIdentityWalletData**(`identityAddress`: string): [IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)

*Defined in [src/wallets/WalletFromEthers.ts:89](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/WalletFromEthers.ts#L89)*

#### Parameters:

Name | Type |
------ | ------ |
`identityAddress` | string |

**Returns:** [IdentityWalletData](../interfaces/_typings_.identitywalletdata.md)

___

### toSafeWalletData

▸ **toSafeWalletData**(`safeAddress`: string): any

*Defined in [src/wallets/WalletFromEthers.ts:103](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/WalletFromEthers.ts#L103)*

#### Parameters:

Name | Type |
------ | ------ |
`safeAddress` | string |

**Returns:** any

___

### createRandom

▸ `Static`**createRandom**(): [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

*Overrides void*

*Defined in [src/wallets/WalletFromEthers.ts:32](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/WalletFromEthers.ts#L32)*

**Returns:** [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

___

### fromEncryptedJson

▸ `Static`**fromEncryptedJson**(`encryptedJson`: string, `password`: string, `progressCallback?`: (progress: number) => any): Promise&#60;[WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)>

*Overrides void*

*Defined in [src/wallets/WalletFromEthers.ts:37](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/WalletFromEthers.ts#L37)*

#### Parameters:

Name | Type |
------ | ------ |
`encryptedJson` | string |
`password` | string |
`progressCallback?` | (progress: number) => any |

**Returns:** Promise&#60;[WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)>

___

### fromEncryptedJsonSync

▸ `Static`**fromEncryptedJsonSync**(`json`: string, `password`: Bytes \| string): Wallet

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[fromEncryptedJsonSync](_wallets_walletfromethers_.walletfromethers.md#fromencryptedjsonsync)*

*Defined in node_modules/@ethersproject/wallet/lib/index.d.ts:28*

#### Parameters:

Name | Type |
------ | ------ |
`json` | string |
`password` | Bytes \| string |

**Returns:** Wallet

___

### fromMnemonic

▸ `Static`**fromMnemonic**(`mnemonic`: string): [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

*Overrides void*

*Defined in [src/wallets/WalletFromEthers.ts:50](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/WalletFromEthers.ts#L50)*

#### Parameters:

Name | Type |
------ | ------ |
`mnemonic` | string |

**Returns:** [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

___

### fromWalletData

▸ `Static`**fromWalletData**(`walletData`: [EthersWalletData](../interfaces/_typings_.etherswalletdata.md) \| [IdentityWalletData](../interfaces/_typings_.identitywalletdata.md) \| [SafeWalletData](../interfaces/_typings_.safewalletdata.md)): [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

*Defined in [src/wallets/WalletFromEthers.ts:24](https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/wallets/WalletFromEthers.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`walletData` | [EthersWalletData](../interfaces/_typings_.etherswalletdata.md) \| [IdentityWalletData](../interfaces/_typings_.identitywalletdata.md) \| [SafeWalletData](../interfaces/_typings_.safewalletdata.md) |

**Returns:** [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md)

___

### isSigner

▸ `Static`**isSigner**(`value`: any): value is Signer

*Inherited from [WalletFromEthers](_wallets_walletfromethers_.walletfromethers.md).[isSigner](_wallets_walletfromethers_.walletfromethers.md#issigner)*

*Defined in node_modules/@ethersproject/abstract-signer/lib/index.d.ts:43*

#### Parameters:

Name | Type |
------ | ------ |
`value` | any |

**Returns:** value is Signer
