The Trustlines events returned by the relay api have the following attributes:

| Attribute      | Type   | Description                                                                                    |
|----------------|--------|------------------------------------------------------------------------------------------------|
| networkAddress | string | Address of currency network                                                                    |
| blockNumber    | string | Number of block                                                                                |
| timestamp      | int    | UNIX timestamp                                                                                 |
| type           | string | Either `TrustlineUpdate`, `TrustlineUpdateRequest`, `TrustlineUpdateCancel`, `Transfer`, `DebtUpdate`, `BalanceUpdate`, or `NetworkFreeze` |
| from           | string | Address of `from` user                                                                         |
| to             | string | Address of `to` user                                                                           |
| status         | string | `sent`, `pending` or `confirmed` depending on block height                                     |
| transactionId  | string | Transaction hash                                                                               |

Following additional attributes for `TrustlineUpdate` and `TrustlineUpdateRequest` events:

| Attribute            | Type   | Description                                         |
|----------------------|--------|-----------------------------------------------------|
| given                | string | Proposed or accepted amount `from -> to`            |
| received             | string | Proposed or accepted amount `to -> from`            |
| interestRateGiven    | string | Proposed or accepted rate of interests `from -> to` |
| interestRateReceived | string | Proposed or accepted rate of interests `to -> from` |
| isFrozen             | bool   | Proposed or accepted frozen state                   |

Following additional attribute for `TrustlineUpdateRequest` events:

| Attribute            | Type   | Description                                        |
|----------------------|--------|----------------------------------------------------|
| transfer             | string | Proposed amount to be transferred, ca be >0 or <0  |

The `transfer` attribute represents a proposal of a transfer that will be applied if the trustline is accepted.
The transfer is in the direction `from -> to` if the value is positive and `to -> from` otherwise,
in the point of view of the initiator of the trustline update.

Following additional attributes for `BalanceUpdate`:

| Attribute            | Type   | Description                                         |
|----------------------|--------|-----------------------------------------------------|
| amount               | string | New balance of trustline from view of `from`        |

Following additional attributes for `Transfer` events:

| Attribute | Type   | Description                                          |
|-----------|--------|------------------------------------------------------|
| amount    | string | Transfer amount `from -> to`                         |
| extraData | string | extraData as specified in the corresponding transfer |

Following additional attributes for `DebtUpdated`:

| Attribute            | Type   | Description                                                        |
|----------------------|--------|--------------------------------------------------------------------|
| debt                 | string | New debt in between `from` and `to` in the point of view of `from` |

#### Example Response

An example response for a list of events would be:

```json
[
    {
        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",
        "blockNumber": 6997877,
        "timestamp": 1524655432,
        "type": "TrustlineUpdateRequest",
        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
        "to": "0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320",
        "blockHash": "0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6",
        "logIndex": 1,
        "status": "confirmed",
        "transactionId": "0xb141aa3baec4e7151d8bd6ecab46d26b1add131e50bcc517c956a7ac979815cd",
        "given": "20000",
        "received": "20000",
        "interestRateGiven": "1000",
        "interestRateReceived": "1000",
        "isFrozen": false,
        "transfer": "-123"
    },
    {
        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",
        "blockNumber": 6997877,
        "timestamp": 1524655432,
        "type": "TrustlineUpdateCancel",
        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
        "to": "0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320",
        "status": "confirmed",
        "transactionId": "0xb141aa3baec4e7151d8bd6ecab46d26b1add131e50bcc517c956a7ac979815cd",
        "blockHash": "0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6",
        "logIndex": 2
    },
    {
        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",
        "blockNumber": 6997899,
        "timestamp": 1524655600,
        "type": "TrustlineUpdate",
        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
        "to": "0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b",
        "status": "confirmed",
        "transactionId": "0x10d4e9acb58d42d433dbc5c995e9a258cd2bb7fe82fedf2ebab82e450d30c643",
        "blockHash": "0xb141aa3baec4e7151d8bd6ecab46d26b1add131e50bcc517c956a7ac979815cd",
        "logIndex": 3,
        "given": "10000",
        "received": "10000",
        "interestRateGiven": "1000",
        "interestRateReceived": "1000",
        "isFrozen": false
    },
    {
        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",
        "blockNumber": 7011809,
        "timestamp": 1524755036,
        "type": "BalanceUpdate",
        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
        "to": "0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b",
        "status": "confirmed",
        "transactionId": "0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6",
        "blockHash": "0x10d4e9acb58d42d433dbc5c995e9a258cd2bb7fe82fedf2ebab82e450d30c643",
        "logIndex": 4,
        "amount": "100"
    }
]
```