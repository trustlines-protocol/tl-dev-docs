---
title: Discover currency networks
---

The client library provides interfaces for retrieving information on deployed currency networks.

### General information

```js
// All currency networks the relay server knows about
const allDeployedCurrencyNetworks = await tlNetwork.currencyNetwork.getAll()

// Detailed information on specific currency network
const detailedInformation = await tlNetwork.currencyNetwork.getInfo("0x...")

// List of all users in specific currency network
const userAddresses = await tlNetwork.currencyNetwork.getUsers("0x...")
```

### User Context

```js
const networkAddress = "0x..."
const userAddress = "0x..."

// Overview of user in specific currency network
const userOverview = await tlNetwork.currencyNetwork.getUserOverview(
  networkAddress,
  userAddress
)
```
