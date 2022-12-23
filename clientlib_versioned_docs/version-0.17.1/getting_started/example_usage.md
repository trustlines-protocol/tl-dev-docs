---
title: Example usage
---

We assume the usage of the `trustlines-clientlib` ES6 module in the following.

To start using the trustlines-clientlib you first have to configure the [relay server](https://github.com/trustlines-protocol/relay)
you want to connect to. You can either connect to a local develop relay server or use publicly available ones.

```javascript
import { TLNetwork } from '@trustlines/trustlines-clientlib'

// Instantiate a new TLNetwork instance connected to Gnosis Chain
const gnosis = new TLNetwork({
  relayUrl: 'https://trustlines-relay-gnosis.giveth.io/api/v1',
  messagingUrl: 'https://messaging-gn.trustlines.app/api/v1',
  walletType: 'safe',
  identityFactoryAddress: '0x1234...',
  identityImplementationAddress: '0x1234...',
  gnosisSafeL2Address: '0x3E5c63644E683549055b9Be8653de26E0B4CD36E',
  gnosisSafeProxyFactoryAddress: '0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2',
  chainId: 100,
  safeRelayUrl: 'https://trustlines-safe-relay-gnosis.giveth.io/api',
})
```

This library is a promise-based library.
So every asynchronous call will return a native JavaScript promise.
If an error occurs the library will throw it.
The caller has to handle it appropriately.

```javascript
try {
  const networks = await laika.currencyNetwork.getAll()
} catch (error) {
  console.log('Caught error:', error)
}
