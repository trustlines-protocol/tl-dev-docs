---
title: Introduction
---

Here you can find useful guides on how to use the core features of the trustlines-clientlib.


### Number format

The trustlines-clientlib returns numbers in the following format

```ts
type Amount = {
  raw: string // = value * decimals^10
  value: string // = raw / decimals^10
  decimals: number
}
```

The representation `raw` is the number in its smallest unit, whereas `value` is the representation in its biggest unit.

### Fees

There are currently three different types of fees returned by the trustlines-clientlib, when preparing transactions.

#### Transaction fees - `ethFees`

This kind of fees only occur, when the `walletType` in the initial configuration is set to `ethers`.
They are denominated in the native cryptocurrency or coins, e.g. `TLC`, `Test TLC`, `ETH`, etc.

#### Delegation fees - `delegationFees`

If the `walletType` is set to `identity`, the library uses meta-transactions that are relayed, i.e delegated, by the relay server.
The relay server operator pays for the occurring transaction fees and might want to be compensated for this service.
These fees are denominated in a Trustlines Currency.

#### Network fees - `maxFees`

When transfers are mediated through other users within the network, network fees might occur, which are also denominated in a Trustlines Currency.
