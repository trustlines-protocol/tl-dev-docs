---
title: Start developing
---

If you want to start fiddling around with the code, you need to install the relay and the dev requirements.
Start by cloning the repository

```bash
git clone https://github.com/trustlines-protocol/relay.git
cd relay
```

And install the relay and its development dependencies

```bash
pip install -r dev-requirements.txt -r requirements.txt -e .
```

You can run the tests on the relay with

```bash
./pytest
```

You can also run end2end tests that will test how the contracts, relay, and clientlib
work together. For more information about the end2end tests, see
[the end2end repository](https://github.com/trustlines-protocol/end2end).
