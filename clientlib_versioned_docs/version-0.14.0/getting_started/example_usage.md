---
title: Example usage
---

We assume the usage of the `trustlines-clientlib` ES6 module in the following.

To start using the trustlines-clientlib you first have to configure the [relay server](https://github.com/trustlines-protocol/relay)
you want to connect to. You can either connect to a local develop relay server or use publicly available ones.

```javascript
import { TLNetwork } from '@trustlines/trustlines-clientlib'

// Instance using a relay connected to the Laika Testnet
const laika = new TLNetwork({
  relayUrl: {
    protocol: 'https',
    port: '80',
    host: 'relay0.testnet.trustlines.network',
    path: '/api/v1'
  },
  messagingUrl: {
    protocol: 'https',
    port: '80',
    host: 'relay0.testnet.trustlines.network',
    path: '/api/v1'
  }

  // ...
})

// Instance using a relay connected to the TLBC
const tlbc = new TLNetwork({
  relayUrl: 'https://tlbc.relay.anyblock.tools/api/v1',
  messagingUrl: 'https://messaging.trustlines.app/api/v1'
  // ...
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
