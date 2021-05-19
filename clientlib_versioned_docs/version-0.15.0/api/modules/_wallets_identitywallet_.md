---
id: "_wallets_identitywallet_"
title: "Module: wallets/IdentityWallet"
sidebar_label: "wallets/IdentityWallet"
---

## Index

### Classes

* [IdentityWallet](../classes/_wallets_identitywallet_.identitywallet.md)

### Functions

* [calculateIdentityAddress](_wallets_identitywallet_.md#calculateidentityaddress)
* [getRandomNonce](_wallets_identitywallet_.md#getrandomnonce)

## Functions

### calculateIdentityAddress

▸ **calculateIdentityAddress**(`factoryAddress`: string, `ownerAddress`: string): any

*Defined in [src/wallets/IdentityWallet.ts:511](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/IdentityWallet.ts#L511)*

#### Parameters:

Name | Type |
------ | ------ |
`factoryAddress` | string |
`ownerAddress` | string |

**Returns:** any

___

### getRandomNonce

▸ **getRandomNonce**(): string

*Defined in [src/wallets/IdentityWallet.ts:542](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/IdentityWallet.ts#L542)*

Generates a random nonce to use for meta transactions.
The nonce fits into the range of ]2^255, 2^256[.
This is an alternative to the up counting nonce (]0, 2^255[) without the need
to query a [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md).

**Returns:** string
