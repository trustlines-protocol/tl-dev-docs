---
layout: page
title: Client library introduction
---

The clientlib is a Javascript library which makes it easy to build applications on top of the Trustlines Protocol since it encapsulates app client functionalities in a ready to use way. It provides a high-level API to enable applications to interact with the smart contract system on the Trustlines Blockchain via a relay server.

[![npm](https://img.shields.io/npm/v/trustlines-clientlib.svg)](https://www.npmjs.com/package/trustlines-clientlib)
[![CircleCI branch](https://img.shields.io/circleci/project/github/trustlines-protocol/clientlib/master.svg)](https://circleci.com/gh/trustlines-protocol/clientlib)
[![Codecov branch](https://img.shields.io/codecov/c/github/trustlines-protocol/clientlib/master.svg)](https://codecov.io/gh/trustlines-protocol/clientlib)

A TypeScript/Javascript library for interacting with the [trustlines-network protocol](https://trustlines.network/).

## Installation

Install the library using `npm` or `yarn`

```bash
$ npm install trustlines-clientlib
// OR
$ yarn add trustlines-clientlib
```

#### Import ES6 module

```javascript
import { TLNetwork } from 'trustlines-clientlib'
```

Use the following configuration to connect to the currently deployed test setup.

**NOTE: The [trustlines-network contracts](https://github.com/trustlines-network/contracts) are deployed on the Laika Testnet ([Laika Blockexplorer](https://explore.laika.trustlines.foundation/)), the test network of Trustlines. Some Laika test `TLC` is therefore required to interact with the contracts in this setup.**

```javascript
import { TLNetwork } from 'trustlines-clientlib'

const tlNetworkConfig = {
  protocol: 'https',
  host: 'relay0.testnet.trustlines.network',
  path: 'api/v1/'
}

const tlNetwork = new TLNetwork(tlNetworkConfig)
```

## Example

This library is a promise-based library. So every asynchronous call will return a native Javascript promise. If an error occurs the library will throw it. The caller has to handle it appropriately.

```javascript
try {
  const networks = await tlNetwork.currencyNetwokr.getAll()
} catch (error) {
  console.log('Caught error:', error)
}
```

## Running injected web3 example

To run the example make sure to have [MetaMask](https://metamask.io/) installed and connected to a JSON RPC.

```bash
yarn serve
```

This serves the injected web3 example app on `http://127.0.0.1:8080`. You can find the app under `./examples/injected-web3`.

At the current stage the library provides features such as establishing and managing trustlines, doing trustline and ETH transfers, retrieving information about currency networks and more.

Check our sequence diagrams to get an idea on the current user flow:

### Onboarding

[![sequence_onboarding.png](https://raw.githubusercontent.com/trustlines-network/clientlib-docs/master/media/onboarding.png "trustlines user flow onboarding")](https://raw.githubusercontent.com/trustlines-network/clientlib-docs/master/media/onboarding_2000p.png)

### Credit line update

[![sequence_creditlineupdate.png](https://raw.githubusercontent.com/trustlines-network/clientlib-docs/master/media/creditline.png "trustlines user flow credit line update")](https://raw.githubusercontent.com/trustlines-network/clientlib-docs/master/media/creditline_2000p.png)

### Payment

[![sequence_payment.png](https://raw.githubusercontent.com/trustlines-network/clientlib-docs/master/media/payment.png "trustlines user flow payment")](https://raw.githubusercontent.com/trustlines-network/clientlib-docs/master/media/payment_2000p.png)

## Async

This library is a [promise-based](https://www.promisejs.org) library. So every asynchronous call will return a native Javascript promise. If an error occurs, the library will throw it. This needs to be handles appropriately by the caller. It is up to you if you choose `promise` or `async/await` syntax for calling methods.

#### Promise syntax

{% highlight javascript %}
tlNetwork
    .currencyNetwork.getAll()
    .then(networks => {
        console.log('Currency networks: ', networks)
    })
    .catch(error => {
        console.log('Error: ', error)
    })
{% endhighlight %}

#### Async/await syntax

{% highlight javascript %}
try {
    const networks = await tlNetwork.currencyNetwork.getAll()
    console.log('Currency networks: ', networks)
} catch {
    console.log('Error: ', error)
}
{% endhighlight %}
