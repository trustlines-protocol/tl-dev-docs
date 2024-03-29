---
title: Create user / wallet
---

To be able to interact with the trustlines protocol a user, i.e. wallet, is needed.
You therefore have to create an instance and load it into the library.
The wallet manages your key pair and is used for cryptographically signing transactions, thus enabling the establishment
of trustlines and transfers.
Depending on the initial configuration of the `TLNetwork` instance, you can create either a new instance of
type `ethers` or type `identity`.
The former type is based on the wallet object of the [ethers.js](https://docs.ethers.io/ethers.js/html/) library,
whereas the second type uses
an [identity contract](https://github.com/trustlines-protocol/contracts/blob/master/docs/deploy.md#deploy-identity-contracts)
to enable meta-transactions.

### Create instance of type `safe`

A user of type `safe` is based on a [Gnosis Safe](https://gnosis-safe.io/) contract. The Gnosis Safe is a smart contract
that acts as your identity on chain. You control it with your private key and we make a use of meta-transactions to pay
for the gas costs of your transactions.

```javascript
import {WALLET_TYPE_SAFE} from "./TLWallet"

const gnosis = new TLNetwork({
  relayUrl: "https://trustlines-relay-gnosis.giveth.io/api/v1",
  messagingUrl: "https://messaging-gn.trustlines.app/api/v1",
  walletType: WALLLET_TYPE_SAFE,
  identityFactoryAddress: "0x1234...",
  identityImplementationAddress: "0x1234...",
  gnosisSafeL2Address: "0x3E5c63644E683549055b9Be8653de26E0B4CD36E",
  gnosisSafeProxyFactoryAddress: "0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2",
  chainId: 100,
  safeRelayUrl: "https://trustlines-safe-relay-gnosis.giveth.io/api",
})

const newIdentityUser = await gnosis.user.create()
await gnosis.user.loadFrom(newIdentityUser)

// Additional step to deploy the identity contract of newly created user
const txHash = await gnosis.user.deployIdentity()
```

### Create instance of type `ethers`

Note that a user of type `ethers` can not
use [meta-transactions](https://github.com/trustlines-protocol/contracts/blob/master/docs/deploy.md#deploy-identity-contracts).

```javascript
const ethers = new TLNetwork({
  protocol: "https",
  wsProtocol: "wss",
  host: "relay0.testnet.trustlines.network",
  path: "/api/v1",
  walletType: "ethers",
})

const newEthersUser = await ethers.user.create()
await ethers.user.loadFrom(newEthersUser)
```

### Create instance of type `identity`

A user of type `identity` makes use of meta-transactions.
Therefore, the addresses of the
deployed [identity factory](https://github.com/trustlines-protocol/contracts/blob/master/contracts/identity/IdentityProxyFactory.sol)
and [implementation](https://github.com/trustlines-protocol/contracts/blob/master/contracts/identity/Identity.sol)
contracts have to be set.
An additional step of deploying the identity contract of the newly created user is also necessary.

```javascript
const identity = new TLNetwork({
  protocol: "https",
  wsProtocol: "wss",
  host: "relay0.testnet.trustlines.network",
  path: "/api/v1",
  walletType: "identity",
  identityFactoryAddress: "0x8D2720877Fa796E3C3B91BB91ad6CfcC07Ea249E",
  identityImplementationAddress: "0x8BEe92893D3ec62e5B3EBBe4e536A60Fd9AFc9D7",
})

const newIdentityUser = await identity.user.create()
await identity.user.loadFrom(newIdentityUser)

// Additional step to deploy the identity contract of newly created user
const txHash = await laika.user.deployIdentity()
```
