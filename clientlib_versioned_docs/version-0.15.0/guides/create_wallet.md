---
title: Create user / wallet
---

To be able to interact with the trustlines protocol a user, i.e. wallet, is needed.
You therefore have to create an instance and load it into the library.
The wallet manages your key pair and is used for cryptographically signing transactions, thus enabling the establishment of trustlines and transfers.
Depending on the initial configuration of the `TLNetwork` instance, you can create either a new instance of type `ethers` or type `identity`.
The former type is based on the wallet object of the [ethers.js](https://docs.ethers.io/ethers.js/html/) library, whereas the second type uses an [identity contract](https://github.com/trustlines-protocol/contracts/blob/master/docs/deploy.md#deploy-identity-contracts) to enable meta-transactions.

### Create instance of type `ethers`

Note that a user of type `ethers` can not use [meta-transactions](https://github.com/trustlines-protocol/contracts/blob/master/docs/deploy.md#deploy-identity-contracts).
The user therefore needs some coins ([TLC](https://explore.tlbc.trustlines.foundation/), [Test TLC](https://explore.laika.trustlines.foundation/), ... ), depending on the connected relay server and blockchain, before being able to execute a transaction.

```javascript
const laika = new TLNetwork({
  protocol: "https",
  wsProtocol: "wss",
  host: "relay0.testnet.trustlines.network",
  path: "/api/v1",
  walletType: "ethers",
})

const newEthersUser = await laika.user.create()
await laika.user.loadFrom(newEthersUser)
```

### Create instance of type `identity`

A user of type `identity` makes use of meta-transactions.
Therefore the addresses of the deployed [identity factory](https://github.com/trustlines-protocol/contracts/blob/master/contracts/identity/IdentityProxyFactory.sol) and [implementation](https://github.com/trustlines-protocol/contracts/blob/master/contracts/identity/Identity.sol) contracts have to be set.
An additional step of deploying the identity contract of the newly created user is also necessary.

```javascript
const laika = new TLNetwork({
  protocol: "https",
  wsProtocol: "wss",
  host: "relay0.testnet.trustlines.network",
  path: "/api/v1",
  walletType: "identity",
  identityFactoryAddress: "0x8D2720877Fa796E3C3B91BB91ad6CfcC07Ea249E",
  identityImplementationAddress: "0x8BEe92893D3ec62e5B3EBBe4e536A60Fd9AFc9D7",
})

const newIdentityUser = await laika.user.create()
await laika.user.loadFrom(newIdentityUser)

// Additional step to deploy the identity contract of newly created user
const txHash = await laika.user.deployIdentity()
```
