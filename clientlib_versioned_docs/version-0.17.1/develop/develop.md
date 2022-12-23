---
title: Start developing
---

If you want to start developing on the clientlib, make sure you can run the tests:

```bash
# All tests
yarn test

# Unit tests
yarn test:unit

# Integration tests
yarn test:integration

# end2end tests
yarn test:e2e
```

The end2end tests are used to test how different components of the Trustlines protocol run together.
You need to have all components up before running them.
A convenient way to achieve this is by using our [end2end](https://github.com/trustlines-protocol/end2end) setup.
