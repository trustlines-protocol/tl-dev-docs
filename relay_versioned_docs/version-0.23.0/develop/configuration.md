---
title: Configuration
---

The relay server can be configured via a `config.toml` file.
You can find an example config in the repository: `config.toml`.
Notably, the connection to the running blockchain node required by the relay
can be configured via the keys under `[node_rpc]`

```toml
[node_rpc]
## Possible values for connection type are ipc, and http. Default: http
port = 8545
host = "localhost"
use_ssl = false
## or use an uri to automatically detect the correct provider. Example for ipc:
# uri = "file:///path-to-file.ipc"
```

Additionally, if the delegate service is enabled, the relay relies on an unlocked account
on the connected node to sign transactions. This behaviour can be changed with the `[account]` keys
```toml
[account]
keystore_path = "keystore.json"
keystore_password_path = "keystore-password.txt"
```

In parallel to the config, the relay needs to know the addresses of deployed trustlines contracts.
That is, which currency networks are deployed on the chain and the relay should let its users interact with,
and which identity proxy factory the relay agrees to use to deploy identities for its users.
You can find a example of the `addresses.json` file in the repository.
The file contains the addresses of already deployed currency networks and identity proxy factory on the
Trustlines Blockchain.

Once configured, the relay can be started with the command `tl-relay`.
You can verify that it is correctly running with::

```bash
curl http://localhost:5000/api/v1/version
```
