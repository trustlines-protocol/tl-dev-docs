---
id: "_typings_.tlnetworkconfig"
title: "Interface: TLNetworkConfig"
sidebar_label: "TLNetworkConfig"
---

["typings"](../modules/_typings_.md).TLNetworkConfig

Configuration object for a TLNetwork instance

## Hierarchy

* **TLNetworkConfig**

## Properties

### chainId

• `Optional` **chainId**: number

*Defined in [src/typings.ts:35](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L35)*

Chain id used in the signature of meta-tx

___

### identityFactoryAddress

• `Optional` **identityFactoryAddress**: string

*Defined in [src/typings.ts:27](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L27)*

Address of the identity factory

___

### identityImplementationAddress

• `Optional` **identityImplementationAddress**: string

*Defined in [src/typings.ts:31](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L31)*

Address of the implementation of the identity contract

___

### messagingUrl

• `Optional` **messagingUrl**: string \| [ProviderUrl](_typings_.providerurl.md)

*Defined in [src/typings.ts:15](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L15)*

ProviderUrl object or full url for the messaging api

___

### nonceMechanism

• `Optional` **nonceMechanism**: [NonceMechanism](../enums/_typings_.noncemechanism.md)

*Defined in [src/typings.ts:39](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L39)*

Mechanism how to generate nonces for identity meta-tx

___

### relayUrl

• `Optional` **relayUrl**: string \| [ProviderUrl](_typings_.providerurl.md)

*Defined in [src/typings.ts:11](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L11)*

ProviderUrl object or full url for the relay api

___

### walletType

• `Optional` **walletType**: string

*Defined in [src/typings.ts:23](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L23)*

Full URL for trustline rest api

___

### web3Provider

• `Optional` **web3Provider**: any

*Defined in [src/typings.ts:19](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L19)*

Web3 provider
