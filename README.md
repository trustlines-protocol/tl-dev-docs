# Trustlines Developer Docs

## Work In Progress

![Trustlines Developer Docs](assets/images/readme_header.png "Trustlines Developer Docs")

___

Trustlines Developer Docs will contain all the technical documentation related to [Trustlines Protocol](https://trustlines.foundation/protocol.html).

Here you can find all kind of technical details about Trustlines as well as code related documentation.

This site is a work in progress and the documentation currently resides in their respective repositories of the [trustlines-protocol GitHub organization](https://github.com/trustlines-protocol/).

### Content

- **Blockchain**

> The Trustlines Blockchain is a minimal viable Proof-of-Stake (mPoS) Ethereum sidechain.

- **Client library**

> The clientlib is a JS-library which makes it easy to build applications on top of the Trustlines Protocol. It provides a high level API to enable applications to interact with the smart contract system on the blockchain via the relay servers.

- **Relay Servers**

> The Relay Servers are an optional bridge between client apps and the Trustlines blockchain. They offer services which are not feasible to be implemented on-chain or within the client apps. Importantly, Relay servers calculate optimal paths and relay transactions.

- **Smart Contract System**

> The smart contract system is a collection of solidity contracts deployed on the Trustlines Blockchain. Transfers within the Trustlines Network are executed by the smart contracts. All trustlines (i.e. credit lines and balances between users) are notarized on the Trustlines Blockchain. Furthermore, the smart contracts enforce the rules determining how trustlines can be created, used and updated.

### (WIP) Add steps on installing and running Jekyll locally

- Install Ruby
- Install Gem
- Install Jekyll

Run `bundle exec jekyll serve`
