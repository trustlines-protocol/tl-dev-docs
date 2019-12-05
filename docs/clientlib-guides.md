---
layout: page
title: Client library guides
---

## Create user

To be able to interact with the trustlines network protocol a user object is mandatory. It consists of an [eth-lightwallet](<>) keystore object, the ethereum address and the public key. You can either create a new user instance or load an existing serialized keystore. The created or loaded user is used for establishing trustlines, doing transfers, etc.

#### Create new instance

```javascript
const newUser = await tlNetwork.user.create()
```

#### Load

```javascript
const serializedKeystore = '{"encSeed":{"encStr":"I4qBGJUmpzHUQoVRMkjMEAqGusa4oI7HEG7SQMYPO31OIH...'
const existingUser = await tlNetwork.user.load(serializedKeystore)
```

## Set up trustline

To set up a trustline, make sure that a user instance is provided either by creating a new one or loading an existing keystore. Also note that the account has to have enough ETH to actually create transactions.

#### 1. Request for establishing a trustline

As trustline agreements are bilateral agreements, they have to be accepted by both parties. The first step to establish a trustline is therefore to create an initial request or proposal to the counterparty.

```javascript
const networkAddress = '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'
const counterpartyAddress = '0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18'

// prepare a transaction to request a trustline update
const txObj = await tlNetwork.trustline.prepareUpdate(
    networkAddress,
    counterpartyAddress,
    100,
    200
)
console.log('Estimated transaction costs in ETH: ', txObj.ethFees.value)

// sign and relay the transaction
const txHash = await tlNetwork.trustline.confirm(txObj.rawTx)
console.log('Transaction hash: ', txHash)
```

The initiator creates a request where he is willing to **lend** a maximal denomination of `100` to the user with the address `counterpartyAddress` in the currency network with the address `networkAddress`. He also proposes that he is willing to **owe** a maximal denomination of `200` to the counterparty.

#### 2. Accepting a trustline request

In the next step the counterparty has to accept the request. Note that in the example below we assume that the iniated user is the counterparty of step 1.

```javascript
const networkAddress = '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'

// retrieve latest request from step 1
const requests = await tlNetwork.trustline.getRequests(networkAddress)
const latestRequest = requests[requests.length - 1]
const iniatorAddress = latestRequest.from
const creditlineGivenToIniator = latestRequest.received
const creditlineReceivedFromInitator = latestRequest.given

const txObj = await tlNetwork.trustline.prepareAccept(
    networkAddress,
    iniatorAddress,
    creditlineGivenToIniator,
    creditlineReceivedFromInitator
)
console.log('Estimated transaction costs in ETH: ', txObj.ethFees.value)

// sign and relay the transaction
const txHash = await tlNetwork.trustline.confirm(txObj.rawTx)
console.log('Transaction hash: ', txHash)
```

The counterparty of step 1 first fetches all trustline requests in the currency network. The `prepareAccept` function is then called where the attributes `given` and `received` have to be from the point of view of the caller. So in our case the counterparty or receiver of the initial request.

**NOTE: All numerical values have to be provided in their largest unit. For example, if the currency network has two decimals, the values have to be in a format like `1.25`.**

## Transfer

The requirement for a successful trustline transfer is a path with enough capacity from the sender to the receiver in the currency network. It is also to mention that the sender is always the initiated user.

#### Transferring trustlines currency

```javascript
const networkAddress = '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'
const receiverAddress = '0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18'

const txObj = await tlNetwork.payment.prepare(
    networkAddress,
    receiverAddress,
    1.23
)
console.log('Estimated transaction costs in ETH: ', txObj.ethFees.value)

const txHash = await tlNetwork.payment.confirm(txObj.raw)
console.log('Transaction hash: ', txHash)
```

## Decentralized exchanges

The Trustlines Network protocol includes a decentralized exchange (DEX). It enables users to exchange trustlines currencies and ERC20 tokens, in any direction - token-token, TLcurrency-token or TLcurrency-TLcurrency. The DEX is built on top of the [0x protocol](https://0xproject.com/).

The following guide will show you how to make and take an order in the Trustlines DEX.

### 1. Make an order

To create an order, the so called maker (initiating user) has to specify the token pair and values he or she wants to exchange. Note that our protocol supports the exchange of trustlines money and ERC-20 tokens.

```javascript
// Address of exchange contract
const exchangeAddress = '0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6'
// Address of currency network contract or token the maker is offering
const makerTokenAddress = '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'
// Address of currency network contract or token the maker is requesting
const takerTokenAddress = '0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18'
// Options when making an order
const options = {
    // If the decimals of the maker token are known, they can be provided
    // here
    makerTokenDecimals: 2,
    // If the decimals of the taker token are known, they can be provided
    // here
    takerTokenDecimals: 2,
    // If the order should expire, the expiration date can be specified here
    expirationUnixTimestampSec: 2524604400
}
// NOTE: Decimals have to be manually if the token is NOT a trustlines
//       currency.

// NOTE: This is NOT an on-chain transaction. The order is signed
//       by the initiated user and stored on the relay server.
const order = await tlNetwork.exchange.makeOrder(
    exchangeAdress,
    makerTokenAddress,
    takerTokenAddress,
    5,
    10,
    options
)

console.log('Successfully created an order: ', order)
```

### 2. Get orderbook and orders

After you successfully created an order, another user can take / fill that order. To do so, first the order has to be retrieved by the taker. You can fetch all open orders for a specific token pair by calling `getOrderbook`. There is also the option to filter specific orders by calling `getOrders` with query parameters.

```javascript
const baseTokenAddress = '0xf8E191d2cd72Ff35CB8F012685A29B31996614EA'
const quoteTokenAddress = '0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18'
// Options when fetching the orderbook
const options = {
    // If the decimals of the base token are known, they can be provided
    // here
    baseTokenDecimals: 2,
    // If the decimals of the quote token are known, they can be provided
    // here
    quoteTokenDecimals: 2
}
// NOTE: Decimals have to be provided if the token is NOT a currency network

// Get open orders for token pair BASE_TOKEN/QUOTE_TOKEN
const orderbook = await tlNetwork.exchange.getOrderbook(
    baseTokenAddress,
    quoteTokenAddress,
    options
)
console.log(`Open orders for token pair ${baseTokenAddress}/${quoteTokenAddress}`, orderbook)
```

### 3. Take or fill an order

Once the taker has somehow retrieved an order he or she wants to take, an on-chain transaction has to be created to do so. We assume the taker wants to fill the following order:

```javascript
const orderToFill = {
    ...,
    makerTokenAmount: {
        decimals: 2,
        value: '5',
        raw: '500'
    },
    takerTokenAmount: {
        decimals: 2,
        value: '10',
        raw: '1000'
    },
    availableMakerTokenAmount: {
        decimals: 2,
        value: '5',
        raw: '500'
    },
    availableTakerTokenAmount: {
        decimals: 2,
        value: '10',
        raw: '1000'
    }
}
```

Only if there is a path in both the maker and taker token, above order can be filled. So basically in the `maker token network` there has to be a path from `maker -> taker` and in the `taker token network` accordingly `taker -> maker`.  Note that this applies to currency networks, but not to ERC-20 tokens.

```javascript
// Options when taking an order
const options = {
    // If the decimals of the maker token are known, they can be provided
    // here
    makerTokenDecimals: 2,
    // If the decimals of the taker token are known, they can be provided
    // here
    takerTokenDecimals: 2
}
// NOTE: Decimals have to be provided if the token is NOT a currency network

// Taker (initiating user) has to prepare an on-chain transaction to fill an
// order
const txObj = await tlNetwork.exchange.prepTakeOrder(
    orderToFill,
    // We assume that the taker wants to exchange `5` taker tokens against
    // maker tokens
    5,
    options
)
console.log('Estimated transaction costs in ETH: ', txObj.ethFees.value)

// sign and relay the transaction
const txHash = await tlNetwork.exchange.confirm(txObj.rawTx)
console.log('Transaction hash: ', txHash)
```
