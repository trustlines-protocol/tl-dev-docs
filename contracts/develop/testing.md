---
title: Testing
---

For testing we use pytest with an ethereum tester plugin. The tests can
be run with `make test`. Please note that this will recompile all contracts
automatically, there's no need to call `make compile` manually.

You can also run end2end tests that will test how the contracts, [relay](https://github.com/trustlines-protocol/relay),
and [clientlib](https://github.com/trustlines-protocol/clientlib)
work together. For more information about the end2end tests, see
[the end2end repository](https://github.com/trustlines-protocol/end2end)
