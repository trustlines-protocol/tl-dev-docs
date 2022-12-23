---
title: Installation
---

The trustlines-clientlib is published to npm as an ES6 module.
You can install it using either `npm` or `yarn`.

#### Using npm

```bash
$ npm i @trustlines/trustlines-clientlib
```

#### Using yarn

```bash
$ yarn add @trustlines/trustlines-clientlib
```

#### Build from source

If you want to build the library from source, you can run:

```bash
git clone git@github.com:trustlines-protocol/clientlib.git
cd clientlib
yarn && yarn build
```

This will create three different builds:

- ES6 module in `./lib-esm`
- CommonJS module in `./lib`
- Bundled JS injectable into browser in `./_bundles`
