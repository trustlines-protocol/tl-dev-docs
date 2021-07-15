---
id: "_exchange_.exchange"
title: "Class: Exchange"
sidebar_label: "Exchange"
---

["Exchange"](../modules/_exchange_.md).Exchange

The Exchange class contains all methods for making/taking orders, retrieving the orderbook
and more.

## Hierarchy

* **Exchange**

## Constructors

### constructor

\+ **new Exchange**(`params`: { currencyNetwork: [CurrencyNetwork](_currencynetwork_.currencynetwork.md) ; event: [Event](_event_.event.md) ; payment: [Payment](_payment_.payment.md) ; provider: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) ; transaction: [Transaction](_transaction_.transaction.md) ; user: [User](_user_.user.md)  }): [Exchange](_exchange_.exchange.md)

*Defined in [src/Exchange.ts:51](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Exchange.ts#L51)*

#### Parameters:

Name | Type |
------ | ------ |
`params` | { currencyNetwork: [CurrencyNetwork](_currencynetwork_.currencynetwork.md) ; event: [Event](_event_.event.md) ; payment: [Payment](_payment_.payment.md) ; provider: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) ; transaction: [Transaction](_transaction_.transaction.md) ; user: [User](_user_.user.md)  } |

**Returns:** [Exchange](_exchange_.exchange.md)

## Methods

### confirm

▸ **confirm**(`rawTx`: [RawTxObject](../interfaces/_typings_.rawtxobject.md)): Promise&#60;string>

*Defined in [src/Exchange.ts:421](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Exchange.ts#L421)*

Signs a raw transaction object as returned by `prepCancelOrder` or `prepFillOrder`
and sends the signed transaction.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`rawTx` | [RawTxObject](../interfaces/_typings_.rawtxobject.md) | Raw transaction object.  |

**Returns:** Promise&#60;string>

___

### getExAddresses

▸ **getExAddresses**(): Promise&#60;string[]>

*Defined in [src/Exchange.ts:72](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Exchange.ts#L72)*

Returns all known exchange contract addresses.

**Returns:** Promise&#60;string[]>

___

### getLogs

▸ **getLogs**(`exchangeAddress`: string, `filter?`: [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md)): Promise&#60;[AnyExchangeEvent](../modules/_typings_.md#anyexchangeevent)[]>

*Defined in [src/Exchange.ts:432](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Exchange.ts#L432)*

Returns event logs of the Exchange contract for the loaded user.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`exchangeAddress` | string | - | Address of Exchange contract. |
`filter` | [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md) | {} | Event filter object. See `EventFilterOptions` for more information. |

**Returns:** Promise&#60;[AnyExchangeEvent](../modules/_typings_.md#anyexchangeevent)[]>

___

### getOrderByHash

▸ **getOrderByHash**(`orderHash`: string, `options?`: [OrderOptions](../interfaces/_typings_.orderoptions.md)): Promise&#60;[SignedOrder](../interfaces/_typings_.signedorder.md)>

*Defined in [src/Exchange.ts:85](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Exchange.ts#L85)*

Returns a specific order by its hash.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`orderHash` | string | - | keccak-256 hash of order. |
`options` | [OrderOptions](../interfaces/_typings_.orderoptions.md) | {} | See `OrderOptions` for more details. |

**Returns:** Promise&#60;[SignedOrder](../interfaces/_typings_.signedorder.md)>

___

### getOrderbook

▸ **getOrderbook**(`baseTokenAddress`: string, `quoteTokenAddress`: string, `options?`: [OrderbookOptions](../interfaces/_typings_.orderbookoptions.md)): Promise&#60;[Orderbook](../interfaces/_typings_.orderbook.md)>

*Defined in [src/Exchange.ts:155](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Exchange.ts#L155)*

Returns the orderbook for a given token pair.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`baseTokenAddress` | string | - | Address of base token. |
`quoteTokenAddress` | string | - | Address of quote token. |
`options` | [OrderbookOptions](../interfaces/_typings_.orderbookoptions.md) | {} | See `OrderbookOptions` for more details. |

**Returns:** Promise&#60;[Orderbook](../interfaces/_typings_.orderbook.md)>

___

### getOrders

▸ **getOrders**(`query?`: [OrdersQuery](../interfaces/_typings_.ordersquery.md)): Promise&#60;[SignedOrder](../interfaces/_typings_.signedorder.md)[]>

*Defined in [src/Exchange.ts:118](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Exchange.ts#L118)*

Returns orders that match given query parameters.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`query` | [OrdersQuery](../interfaces/_typings_.ordersquery.md) | {} | See `OrdersQuery` for more information. |

**Returns:** Promise&#60;[SignedOrder](../interfaces/_typings_.signedorder.md)[]>

___

### makeOrder

▸ **makeOrder**(`exchangeContractAddress`: string, `makerTokenAddress`: string, `takerTokenAddress`: string, `makerTokenValue`: number \| string, `takerTokenValue`: number \| string, `options?`: [ExchangeOptions](../interfaces/_typings_.exchangeoptions.md)): Promise&#60;[SignedOrder](../interfaces/_typings_.signedorder.md)>

*Defined in [src/Exchange.ts:196](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Exchange.ts#L196)*

Creates an order and posts it to the relay server. If successful, the method returns the created order.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`exchangeContractAddress` | string | - | Address of exchange contract. |
`makerTokenAddress` | string | - | Address of token the maker (loaded user) is offering. |
`takerTokenAddress` | string | - | Address of token the maker (loaded user) is requesting from the taker. |
`makerTokenValue` | number \| string | - | Amount of token the maker (loaded user) is offering. |
`takerTokenValue` | number \| string | - | Amount of token the maker (loaded user) is requesting from the taker. |
`options` | [ExchangeOptions](../interfaces/_typings_.exchangeoptions.md) | {} | See `ExchangeOptions` for more information. |

**Returns:** Promise&#60;[SignedOrder](../interfaces/_typings_.signedorder.md)>

___

### prepCancelOrder

▸ **prepCancelOrder**(`signedOrder`: [SignedOrder](../interfaces/_typings_.signedorder.md), `cancelTakerTokenValue`: number \| string, `options?`: [ExchangeTxOptions](../modules/_typings_.md#exchangetxoptions)): Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

*Defined in [src/Exchange.ts:379](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Exchange.ts#L379)*

Prepares an ethereum transaction for cancelling an order.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`signedOrder` | [SignedOrder](../interfaces/_typings_.signedorder.md) | - | The order to cancel as returned by `getOrderbook`, `getOrders` or `getOrderByHash`. |
`cancelTakerTokenValue` | number \| string | - | Amount of tokens the maker (loaded user) wants to cancel. |
`options` | [ExchangeTxOptions](../modules/_typings_.md#exchangetxoptions) | {} | See `ExchangeTxOptions` for more information. |

**Returns:** Promise&#60;[TxObject](../interfaces/_typings_.txobject.md)>

___

### prepTakeOrder

▸ **prepTakeOrder**(`signedOrder`: [SignedOrder](../interfaces/_typings_.signedorder.md), `fillTakerTokenValue`: number \| string, `options?`: [ExchangeTxOptions](../modules/_typings_.md#exchangetxoptions)): Promise&#60;[ExchangeTx](../interfaces/_typings_.exchangetx.md)>

*Defined in [src/Exchange.ts:269](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Exchange.ts#L269)*

Prepares an ethereum transaction object for taking an order.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`signedOrder` | [SignedOrder](../interfaces/_typings_.signedorder.md) | - | The order to take as returned by `getOrderbook`, `getOrders` or `getOrderByHash`. |
`fillTakerTokenValue` | number \| string | - | Amount of tokens the taker (loaded user) wants to fill. |
`options` | [ExchangeTxOptions](../modules/_typings_.md#exchangetxoptions) | {} | See `ExchangeTxOptions` for more information. |

**Returns:** Promise&#60;[ExchangeTx](../interfaces/_typings_.exchangetx.md)>
