---
title: Set up trustline
---

To set up a trustline, make sure that a user instance is loaded into the library.

### 1. Request for establishing a trustline

Trustlines consist of bi-directional credit agreements.
That means, that they have to be accepted by both parties.
The first step to establish a trustline is therefore to create an initial request or proposal to the counterparty.

```javascript
const tlNetwork1 = new TLNetwork()

// Create and/or load user 1 ...

const networkAddress = "0xf8E191d2cd72Ff35CB8F012685A29B31996614EA"
const counterpartyAddress = "0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18"

// Prepare a transaction to request a trustline update
const {
  rawTx,
  ethFees,
  delegationFees,
} = await tlNetwork1.trustline.prepareUpdate(
  networkAddress,
  counterpartyAddress,
  100, // Proposed credit limit given to counterparty
  200 // Proposed credit limit received from counterparty
)
console.log("Transaction fees: ", ethFees)
console.log("Delegation fees: ", delegationFees)

// Sign and relay the transaction
const txHash = await tlNetwork1.trustline.confirm(rawTx)
console.log("Transaction hash: ", txHash)
```

The initiator creates a request where he is willing to **lend** a maximal denomination of `100` to the user with the address `counterpartyAddress` in the currency network with the address `networkAddress`.
He also proposes that he is willing to **owe** a maximal denomination of `200` to the counterparty.
If the `walletType` is `ethers`, `delegationFees` are `undefined`.

### 2. Accepting a trustline request

In the next step the counterparty has to accept the request. Note that in the example below the loaded user is the counterparty of step 1.

```javascript
const tlNetwork2 = new TLNetwork()

// Create and/or load user 2 ...

const networkAddress = "0xf8E191d2cd72Ff35CB8F012685A29B31996614EA"

// Retrieve latest request from step 1
const requests = await tlNetwork2.trustline.getRequests(networkAddress)
const latestRequest = requests[requests.length - 1]
const initiatorAddress = latestRequest.from
const creditlineGivenToInitiator = latestRequest.received.value
const creditlineReceivedFromInitiator = latestRequest.given.value

const { rawTx } = await tlNetwork2.trustline.prepareAccept(
  networkAddress,
  initiatorAddress,
  creditlineGivenToInitiator,
  creditlineReceivedFromInitiator
)

// sign and relay the transaction
const txHash = await tlNetwork2.trustline.confirm(rawTx)
console.log("Transaction hash: ", txHash)
```

The counterparty of step 1 first fetches all trustline requests in the currency network. The `prepareAccept` function is then called where the attributes `given` and `received` have to be from the point of view of the caller. So in our case the counterparty or receiver of the initial request.

**NOTE: All numerical values have to be provided in their largest unit. For example, if the currency network has two decimals, the values have to be in a format like `1.25`.**
