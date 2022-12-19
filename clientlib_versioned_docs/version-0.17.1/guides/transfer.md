---
title: Transfer
---

The requirement for a successful trustline transfer is a path with enough capacity from the sender to the receiver in the currency network. It is also to mention that the sender is always the loaded user.

### Transferring trustlines currency

```javascript
const networkAddress = "0xf8E191d2cd72Ff35CB8F012685A29B31996614EA"
const receiverAddress = "0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18"

const { rawTx, maxFees, path, feePayer } = await tlNetwork.payment.prepare(
  networkAddress,
  receiverAddress,
  1
)
console.log("Transfer path:", path)
console.log("Network fees:", maxFees)
console.log("Fee payer:", feePayer)

const txHash = await tlNetwork.payment.confirm(raw)
console.log("Transaction hash: ", txHash)
```
