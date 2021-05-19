---
id: "_wallets_tlwallet_"
title: "Module: wallets/TLWallet"
sidebar_label: "wallets/TLWallet"
---

## Index

### Interfaces

* [TLWallet](../interfaces/_wallets_tlwallet_.tlwallet.md)

### Variables

* [DEFAULT\_DERIVATION\_PATH](_wallets_tlwallet_.md#default_derivation_path)
* [EXPECTED\_VERSIONS](_wallets_tlwallet_.md#expected_versions)
* [TL\_WALLET\_VERSION](_wallets_tlwallet_.md#tl_wallet_version)
* [WALLET\_TYPE\_ETHERS](_wallets_tlwallet_.md#wallet_type_ethers)
* [WALLET\_TYPE\_IDENTITY](_wallets_tlwallet_.md#wallet_type_identity)

### Functions

* [verifyWalletData](_wallets_tlwallet_.md#verifywalletdata)

## Variables

### DEFAULT\_DERIVATION\_PATH

• `Const` **DEFAULT\_DERIVATION\_PATH**: &#34;m/44'/60'/0'/0/0&#34; = \`m/44'/60'/0'/0/0\`

*Defined in [src/wallets/TLWallet.ts:36](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L36)*

___

### EXPECTED\_VERSIONS

• `Const` **EXPECTED\_VERSIONS**: number[] = [1]

*Defined in [src/wallets/TLWallet.ts:35](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L35)*

___

### TL\_WALLET\_VERSION

• `Const` **TL\_WALLET\_VERSION**: 1 = 1

*Defined in [src/wallets/TLWallet.ts:32](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L32)*

___

### WALLET\_TYPE\_ETHERS

• `Const` **WALLET\_TYPE\_ETHERS**: &#34;ethers&#34; = "ethers"

*Defined in [src/wallets/TLWallet.ts:33](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L33)*

___

### WALLET\_TYPE\_IDENTITY

• `Const` **WALLET\_TYPE\_IDENTITY**: &#34;identity&#34; = "identity"

*Defined in [src/wallets/TLWallet.ts:34](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L34)*

## Functions

### verifyWalletData

▸ **verifyWalletData**(`walletData`: [TLWalletData](../interfaces/_typings_.tlwalletdata.md), `walletType`: string, `expectedVersions`: number[]): void

*Defined in [src/wallets/TLWallet.ts:44](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/TLWallet.ts#L44)*

Checks if type and version of given wallet data are supported.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`walletData` | [TLWalletData](../interfaces/_typings_.tlwalletdata.md) | Wallet data to check. |
`walletType` | string | Expected wallet type. |
`expectedVersions` | number[] | Expected wallet versions.  |

**Returns:** void
