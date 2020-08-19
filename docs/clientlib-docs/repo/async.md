---
layout: clientlib
title: The Relay Server
---

This library is a [promise-based](https://www.promisejs.org) library. So every asynchronous call will return a native Javascript promise. If an error occurs, the library will throw it. This needs to be handles appropriately by the caller. It is up to you if you choose `promise` or `async/await` syntax for calling methods.

#### Promise syntax
```javascript
tlNetwork
    .currencyNetwork.getAll()
    .then(networks => {
        console.log('Currency networks: ', networks)
    })
    .catch(error => {
        console.log('Error: ', error)
    })
```

#### Async/await syntax
```javascript
try {
    const networks = await tlNetwork.currencyNetwork.getAll()
    console.log('Currency networks: ', networks)
} catch {
    console.log('Error: ', error)
}
```
