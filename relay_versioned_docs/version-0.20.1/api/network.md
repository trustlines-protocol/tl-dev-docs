---
title: Network
---

### Currency networks list
Returns all registered currency networks with high-level information.
#### Request
```
GET /networks
```
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks
```
#### Response
| Attribute    | Type    | JSON Type                               | Description                          |
|--------------|---------|-----------------------------------------|--------------------------------------|
| name         | string  | string                                  | Full name of the currency network    |
| abbreviation | string  | string                                  | Abbreviated name of currency network |
| address      | address | string - hex-encoded prefixed with "0x" | Contract address of currency network |
#### Example Response
```json
[
  {
    "name": "Hours",
    "abbreviation": "HOU",
    "address": "0xC0B33D88C704455075a0724AA167a286da778DDE"
  },
  {
    "name": "Fugger",
    "abbreviation": "FUG",
    "address": "0x55bdaAf9f941A5BB3EacC8D876eeFf90b90ddac9"
  }
]
```

---

### Currency network details
Returns detailed information of currency network.
#### Request
```
GET /networks/:networkAddress
```
#### URL Parameters
|Name           |Type                     |Required   |Description|
|----           |----                     |--------   |-----------|
|networkAddress |string prefixed with "0x"|YES        |Address of currency network|
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE
```
#### Response
| Attribute                | Type       | JSON Type                               | Description                                             |
|--------------------------|------------|-----------------------------------------|---------------------------------------------------------|
| abbreviation             | string     | string                                  | Abbreviated name of currency network                    |
| address                  | address    | string - hex-encoded prefixed with "0x" | Contract address of currency network                    |
| decimals                 | int        | number                                  | Decimals specified in currency network                  |
| name                     | string     | string                                  | Full name of the currency network                       |
| numUsers                 | int        | number                                  | Total number of users in currency network               |
| defaultInterestRate      | BigInteger | string                                  | The default interest rate for every user in the network |
| interestRateDecimals     | int        | number                                  | Decimals of the interest rate                           |
| customInterests          | bool       | bool                                    | Whether custom interest rate can be set by users        |
| preventMediatorInterests | bool       | bool                                    | Whether to prevent mediators from paying interest       |
| isFrozen                 | bool       | bool                                    | Whether the currency network is frozen                  |
#### Example Response
```json
{
  "abbreviation": "HOU",
  "address": "0xC0B33D88C704455075a0724AA167a286da778DDE",
  "decimals": 2,
  "name": "Hours",
  "numUsers": 3,
  "defaultInterestRate": "100",
  "interestRateDecimals": 2,
  "customInterests": false,
  "preventMediatorInterests": false,
  "isFrozen": false
}
```

---

### Users list in currency network
Returns a list of user addresses in a currency network.
#### Request
```
GET /networks/:networkAddress/users
```
#### URL Parameters
| Name           | Type   | Required | Description                 |
|----------------|--------|----------|-----------------------------|
| networkAddress | string | YES      | Address of currency network |
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/users
```
#### Response
`string[]` - Array with addresses of users in currency network
#### Example Response
```json
[
  "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
  "0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320",
  "0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b"
]
```

---

### Trustlines list in currency network
Returns a list of all trustlines in a currency network.
#### Request
```
GET /networks/:networkAddress/trustlines
```
#### URL Parameters
| Name           | Type   | Required | Description                 |
|----------------|--------|----------|-----------------------------|
| networkAddress | string | YES      | Address of currency network |
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/trustlines
```
#### Response
A list of trustlines with the following attributes:

| Attribute            | Type   | Description                                     |
|----------------------|--------|-------------------------------------------------|
| counterParty         | string | Address of trustline counterparty               |
| currencyNetwork      | string | Address of currency network                     |
| user                 | string | Address of trustline user                       |
| balance              | string | Balance of trustline from point of view of user |
| given                | string | Creditline given to counterparty                |
| received             | string | Creditline received by counterparty             |
| leftGiven            | string | given - balance                                 |
| leftReceived         | string | received + balance                              |
| interestRateGiven    | string | Interest Rate given to counterparty             |
| interestRateReceived | string | Interest Rate received from counterparty        |
| isFrozen             | bool   | Whether the trustlines is frozen                |
| id                   | string | Identifier of trustline                         |
#### Example Response
```json
[
  {
    "id": "0xe4332c0bc15bf97933ce54c93af772bb13fad2c4c44e2516eb62d4f6c041e9ab",
    "leftReceived": "19848",
    "counterParty": "0xB5A3ad8d5A23e5DDD8b8917F709b01396e4d55e4",
    "currencyNetwork": "0xC0B33D88C704455075a0724AA167a286da778DDE",
    "balance": "-152",
    "given": "10000",
    "leftGiven": "10152",
    "received": "20000",
    "interestRateGiven": "1000",
    "interestRateReceived": "2000",
    "isFrozen": false,
    "user": "0x04f9b217b334507c42Ad3b74BFf024c724aBB166"
  }
]
```

---

### User details in currency network
Returns detailed information of a user in a currency network.
#### Request
```
GET /networks/:networkAddress/users/:userAddress
```
#### URL Parameters
|Name|Type|Required|Description|
|----|----|--------|-----------|
|networkAddress|string|YES|Address of currency network|
|userAddress|string|YES|Address of user|
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce
```
#### Response
| Attribute     | Type       | JSON Type | Description                                                                 |
| ---------     | ---------- | ------    | ---------------------------------------------                               |
| balance       | BigInteger | string    | Sum over balances of all non-frozen trustlines user has in currency network |
| frozenBalance | BigInteger | string    | Sum over balances of all frozen trustlines user has in currency network     |
| given         | BigInteger | string    | Sum of all creditlines given by user in currency network                    |
| received      | BigInteger | string    | Sum of all creditlines received by user in currency network                 |
| leftGiven     | BigInteger | string    | given - balance                                                             |
| leftReceived  | BigInteger | string    | received + balance                                                          |
#### Example Response
```json
{
  "balance": "-1000",
  "frozenBalance": "1000",
  "given": "2000",
  "received": "4000",
  "leftGiven": "3000",
  "leftReceived": "1000"
}
```

---

### Trustlines of user in currency network
Returns a list of trustlines a user has in a currency network.
#### Request
```
GET /networks/:networkAddress/users/:userAddress/trustlines
```
#### URL Parameters
| Name           | Type   | Required | Description                 |
|----------------|--------|----------|-----------------------------|
| networkAddress | string | YES      | Address of currency network |
| userAddress    | string | YES      | Address of user             |
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/trustlines
```
#### Response
| Attribute            | Type   | Description                                     |
|----------------------|--------|-------------------------------------------------|
| counterParty         | string | Address of trustline counterparty               |
| currencyNetwork      | string | Address of currency network                     |
| user                 | string | Address of trustline user                       |
| balance              | string | Balance of trustline from point of view of user |
| given                | string | Creditline given to counterparty                |
| received             | string | Creditline received by counterparty             |
| leftGiven            | string | given - balance                                 |
| leftReceived         | string | received + balance                              |
| interestRateGiven    | string | Interest Rate given to counterparty             |
| interestRateReceived | string | Interest Rate received from counterparty        |
| isFrozen             | bool   | Whether the trustlines is frozen                |
| id                   | string | Identifier of trustline                         |
#### Example Response
```json
[
  {
    "id": "0xe4332c0bc15bf97933ce54c93af772bb13fad2c4c44e2516eb62d4f6c041e9ab",
    "leftReceived": "19848",
    "counterParty": "0xB5A3ad8d5A23e5DDD8b8917F709b01396e4d55e4",
    "currencyNetwork": "0xC0B33D88C704455075a0724AA167a286da778DDE",
    "balance": "-152",
    "given": "10000",
    "leftGiven": "10152",
    "received": "20000",
    "interestRateGiven": "1000",
    "interestRateReceived": "2000",
    "isFrozen": false,
    "user": "0x04f9b217b334507c42Ad3b74BFf024c724aBB166"
  }
]
```

---

### Trustline between users in currency network
Returns a trustline between users A and B in a currency network.
#### Request
```
GET /networks/:networkAddress/users/:userAddressA/trustlines/:userAddressB
```
#### URL Parameters
| Name           | Type   | Required | Description                 |
|----------------|--------|----------|-----------------------------|
| networkAddress | string | YES      | Address of currency network |
| userAddressA   | string | YES      | Address of user A           |
| userAddressB   | string | YES      | Address of user B           |
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/trustlines/0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b
```
#### Response
| Attribute            | Type   | Description                                         |
|----------------------|--------|-----------------------------------------------------|
| counterParty         | string | Address of trustline counterparty                   |
| user                 | string | Address of trustline user                           |
| balance              | string | Balance of trustline from point of view of user (A) |
| given                | string | Creditline given to counterparty                    |
| received             | string | Creditline received by counterparty                 |
| leftGiven            | string | given - balance                                     |
| leftReceived         | string | received + balance                                  |
| interestRateGiven    | string | Interest Rate given to counterparty                 |
| interestRateReceived | string | Interest Rate received from counterparty            |
| isFrozen             | bool   | Whether the trustline is forzen                     |
| id                   | string | Identifier of trustline                             |
#### Example Response
```json
{
    "id": "0xe4332c0bc15bf97933ce54c93af772bb13fad2c4c44e2516eb62d4f6c041e9ab",
    "leftReceived": "19848",
    "counterParty": "0xB5A3ad8d5A23e5DDD8b8917F709b01396e4d55e4",
    "balance": "-152",
    "given": "10000",
    "leftGiven": "10152",
    "received": "20000",
    "interestRateGiven": "1000",
    "interestRateReceived": "2000",
    "isFrozen": false,
    "user": "0x04f9b217b334507c42Ad3b74BFf024c724aBB166"
}
```

---

### Spendable amount and path to any user in currency network
Returns an estimation on the amount user A can spend to any reachable user B in a currency network.
#### Request
```
POST /networks/:network_address/max-capacity-path-info
```
#### URL Parameters
| Name           | Type   | Required | Description                 |
|----------------|--------|----------|-----------------------------|
| networkAddress | string | YES      | Address of currency network |
#### Data Parameters
| Name    | Type   | Required | Description                           |
|---------|--------|----------|---------------------------------------|
| from    | string | YES      | Address of user who sends transfer    |
| to      | string | YES      | Address of user who receives transfer |
| maxHops | string | NO       | Upper bound for hops in transfer path |
#### Example Request
```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"from":"0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce","to":"0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b"}' \
  https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/max-capacity-path-info
```
#### Response
|Attribute|Type|Description|
|---------|----|-----------|
|capacity|string|Estimated capacity of estimated max capacity path|
|path|string[]|Addresses of users on max capacity path|
#### Example Response
```json
{
    "capacity": "18",
    "path": [
      "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
      "0xc257274276a4e539741ca11b590b9447b26a8051",
      "0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b"
  ]
}
```

---

### Transfer path in currency network
Returns the cheapest path and maximal fees for a transfer.
#### Request
```
POST /networks/:networkAddress/path-info
```
#### URL Parameters
| Name           | Type   | Required | Description                 |
|----------------|--------|----------|-----------------------------|
| networkAddress | string | YES      | Address of currency network |
#### Data Parameters
| Name     | Type   | Required | Description                           |
|----------|--------|----------|---------------------------------------|
| from     | string | YES      | Address of user who sends transfer    |
| to       | string | YES      | Address of user who receives transfer |
| value    | string | YES      | Transfer amount in smallest unit      |
| maxFees  | string | NO       | Upper bound for transfer fees         |
| maxHops  | string | NO       | Upper bound for hops in transfer path |
| feePayer | string | NO       | Either `sender` or `receiver`         |
#### Example Request
```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"from":"0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce","to":"0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b", "value": "1000"}' \
  https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/path-info
```
#### Response
| Attribute | Type     | Description                         |
|-----------|----------|-------------------------------------|
| path      | string[] | Addresses of users on transfer path |
| value     | int      | Transfer amount in smallest unit    |
| feePayer  | string   | Either `sender` or `receiver`       |
| fees      | string   | Maximal transfer fees               |
#### Example Response
```json
{
  "path": [
    "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
    "0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b"
  ],
  "value": 1000,
  "fees": "2",
  "feePayer": "sender"
}
```

---

### Closing trustline path in currency network
This endpoint is used in preparation for closing a trustline. It returns the
cheapest path, the fees and a value for a payment,
which reduces the balance to zero. At the moment this only works for negative
balances.

#### Request
```
POST /networks/:networkAddress/close-trustline-path-info
```
#### URL Parameters
| Name           | Type   | Required | Description                 |
|----------------|--------|----------|-----------------------------|
| networkAddress | string | YES      | Address of currency network |
#### Data Parameters
| Name    | Type   | Required | Description                                              |
|---------|--------|----------|----------------------------------------------------------|
| from    | string | YES      | Address of user who wants to close a trustline           |
| to      | string | YES      | Address of user with whom the trustline should be closed |
| maxFees | string | NO       | Upper bound for transfer fees                            |
| maxHops | string | NO       | Upper bound for hops in transfer path                    |

#### Example Request
```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"from":"0x186ec4A5E2c9Ed2B392599843375383D40C94F57","to":"0xaE8446e5ea18F6d7647b28eEf01e568BE672AF6c"}' \
https://relay0.testnet.trustlines.network/api/v1/networks/0xc5F45B680e81759E3FBc4b4a5A94FBd40BAB3fAd/close-trustline-path-info
```
#### Response
| Attribute    | Type     | Description                               |
|--------------|----------|-------------------------------------------|
| path         | string[] | Addresses of users on transfer path       |
| fees         | string   | Estimated transfer fees                   |
| value        | string   | Amount to be transferred in smallest unit |
| feePayer     | string   | Either `sender` or `receiver` |

#### Example Response
```json
{
    "fees": "6",
    "path": [
        "0x186ec4A5E2c9Ed2B392599843375383D40C94F57",
        "0x37605B30874452551F959811C5F8662329E51EB2",
        "0xaE8446e5ea18F6d7647b28eEf01e568BE672AF6c",
        "0x186ec4A5E2c9Ed2B392599843375383D40C94F57"
    ],
    "value": "410",
    "feePayer": "sender"
}
```

---

### All events in currency network
Returns a list of event logs in a currency network.
#### Request
```
GET /networks/:networkAddress/events?type=:type&fromBlock=:fromBlock
```
#### URL Parameters
| Name      | Type   | Required | Description                                                                               |
|-----------|--------|----------|-------------------------------------------------------------------------------------------|
| network   | string | YES      | Address of currency network                                                               |
| type      | string | NO       | Either `TrustlineUpdate`, `TrustlineUpdateRequest`, `TrustlineUpdateCancel` or `Transfer` |
| fromBlock | int    | NO       | Start of block range                                                                      |
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/events?type=TrustlineUpdate&fromBlock=123456
```
#### Response
| Attribute      | Type   | Description                                                                               |
|----------------|--------|-------------------------------------------------------------------------------------------|
| networkAddress | string | Address of currency network                                                               |
| blockNumber    | string | Number of block                                                                           |
| timestamp      | int    | UNIX timestamp                                                                            |
| type           | string | Either `TrustlineUpdate`, `TrustlineUpdateRequest`, `TrustlineUpdateCancel` or `Transfer` |
| from           | string | Address of `from` user                                                                    |
| to             | string | Address of `to` user                                                                      |
| status         | string | `sent`, `pending` or `confirmed` depending on block height                                |
| transactionId  | string | Transaction hash                                                                          |
| blockHash      | string | Hash of the block containing the event                                                    |
| logIndex       | number | Log index of the event                                                                    |

Following additional attributes for `TrustlineUpdate` and `TrustlineUpdateRequest` events:

| Attribute            | Type   | Description                                        |
|----------------------|--------|----------------------------------------------------|
| given                | string | Proposed or accepted amount `from -> to`           |
| received             | string | Proposed or accepted amount `to -> from`           |
| interestRateGiven    | string | Proposed or accepted rate of interests `from -> to`|
| interestRateReceived | string | Proposed or accepted rate of interests `to -> from`|
| isFrozen             | bool   | Proposed or accepted frozen status                 |

Following additional attributes for `Transfer` events:

| Attribute | Type   | Description                                          |
|-----------|--------|------------------------------------------------------|
| amount    | string | Transfer amount `from -> to`                         |
| extraData | string | extraData as specified in the corresponding transfer |
|           |        |                                                      |

#### Example Response
```json
[
    {
        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",
        "blockNumber": 6997877,
        "timestamp": 1524655432,
        "type": "TrustlineUpdateRequest",
        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
        "to": "0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320",
        "status": "confirmed",
        "transactionId": "0xb141aa3baec4e7151d8bd6ecab46d26b1add131e50bcc517c956a7ac979815cd",
        "blockHash": "0x10d4e9acb58d42d433dbc5c995e9a258cd2bb7fe82fedf2ebab82e450d30c643",
        "logIndex": 12,
        "given": "20000",
        "received": "20000",
        "interestRateGiven": "1000",
        "interestRateReceived": "1000",
        "isFrozen": false
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
        "blockHash": "0x10d4e9acb58d42d433dbc5c995e9a258cd2bb7fe82fedf2ebab82e450d30c643",
        "logIndex": 14
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
        "blockHash": "0x10d4e9acb58d42d433dbc5c995e9a258cd2bb7fe82fedf2ebab82e450d30c643",
        "logIndex": 1,
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
        "type": "Transfer",
        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
        "to": "0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b",
        "status": "confirmed",
        "transactionId": "0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6",
        "blockHash": "0xb141aa3baec4e7151d8bd6ecab46d26b1add131e50bcc517c956a7ac979815cd",
        "logIndex": 2,
        "amount": "100",
        "extraData": "0x1234"
    }
]
```

---

### Events of a user in currency network
Returns a list of event logs of a user in a currency network. This means all events where the given user address is either `from` or `to`.
#### Request
```
GET /networks/:network/users/:user/events?type=:type&fromBlock=:fromBlock
```
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/events?type=TrustlineUpdate&fromBlock=123456
```
#### URL Parameters
| Name      | Type   | Required | Description                                                                               |
|-----------|--------|----------|-------------------------------------------------------------------------------------------|
| network   | string | YES      | Address of currency network                                                               |
| user      | string | YES      | Address of user                                                                           |
| type      | string | NO       | Either `TrustlineUpdate`, `TrustlineUpdateRequest`, `TrustlineUpdateCancel` or `Transfer` |
| fromBlock | int    | NO       | Start of block range                                                                      |
#### Response
| Attribute      | Type   | Description                                                                               |
|----------------|--------|-------------------------------------------------------------------------------------------|
| networkAddress | string | Address of currency network                                                               |
| blockNumber    | string | Number of block                                                                           |
| timestamp      | int    | UNIX timestamp                                                                            |
| type           | string | Either `TrustlineUpdate`, `TrustlineUpdateRequest`, `TrustlineUpdateCancel` or `Transfer` |
| from           | string | Address of `from` user                                                                    |
| to             | string | Address of `to` user                                                                      |
| status         | string | `sent`, `pending` or `confirmed` depending on block height                                |
| transactionId  | string | Transaction hash                                                                          |
| blockHash      | string | Hash of the block containing the event                                                    |
| logIndex       | number | Log index of the event                                                                    |

Following additional attributes for `TrustlineUpdate` and `TrustlineUpdateRequest` events:

| Attribute            | Type   | Description                                         |
|----------------------|--------|-----------------------------------------------------|
| given                | string | Proposed or accepted amount `from -> to`            |
| received             | string | Proposed or accepted amount `to -> from`            |
| interestRateGiven    | string | Proposed or accepted rate of interests `from -> to` |
| interestRateReceived | string | Proposed or accepted rate of interests `to -> from` |
| isFrozen             | bool   | Proposed or accepted frozen state                   |

Following additional attributes for `Transfer` events:

| Attribute | Type   | Description                                          |
|-----------|--------|------------------------------------------------------|
| amount    | string | Transfer amount `from -> to`                         |
| extraData | string | extraData as specified in the corresponding transfer |

#### Example Response
```json
[
    {
        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",
        "blockNumber": 6997877,
        "timestamp": 1524655432,
        "type": "TrustlineUpdateRequest",
        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
        "to": "0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320",
        "status": "confirmed",
        "transactionId": "0xb141aa3baec4e7151d8bd6ecab46d26b1add131e50bcc517c956a7ac979815cd",
        "blockHash": "0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6",
        "logIndex": 1,
        "given": "20000",
        "received": "20000",
        "interestRateGiven": "1000",
        "interestRateReceived": "1000",
        "isFrozen": false
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
        "type": "Transfer",
        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
        "to": "0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b",
        "status": "confirmed",
        "transactionId": "0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6",
        "blockHash": "0x10d4e9acb58d42d433dbc5c995e9a258cd2bb7fe82fedf2ebab82e450d30c643",
        "logIndex": 4,
        "amount": "100",
        "extraData": "0x1234"
    }
]
```

---

### Events of a trustline in currency network
Returns a list of event logs of a trustline in a currency network from the view of user.
#### Request
```
GET /networks/:network/users/:user/trustlines/:counterParty/events?type=:type&fromBlock=:fromBlock
```
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/trustlines/0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b/events?type=TrustlineUpdate&fromBlock=123456
```
#### URL Parameters
| Name        | Type   | Required | Description                                                                                    |
|-------------|--------|----------|------------------------------------------------------------------------------------------------|
| network     | string | YES      | Address of currency network                                                                    |
| user        | string | YES      | Address of user, one address of the trustline                                                  |
| counterParty| string | YES      | Address of counterParty, other address of the trustline                                        |
| type        | string | NO       | Either `TrustlineUpdate`, `TrustlineUpdateRequest`, `TrustlineUpdateCancel` or `BalanceUpdate` |
| fromBlock   | int    | NO       | Start of block range                                                                           |
#### Response
| Attribute      | Type   | Description                                                                                    |
|----------------|--------|------------------------------------------------------------------------------------------------|
| networkAddress | string | Address of currency network                                                                    |
| blockNumber    | string | Number of block                                                                                |
| timestamp      | int    | UNIX timestamp                                                                                 |
| type           | string | Either `TrustlineUpdate`, `TrustlineUpdateRequest`, `TrustlineUpdateCancel` or `BalanceUpdate` |
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

Following additional attributes for `BalanceUpdate`:

| Attribute            | Type   | Description                                         |
|----------------------|--------|-----------------------------------------------------|
| amount               | string | New balance of trustline from view of `from`        |

#### Example Response
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
        "isFrozen": false
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
---

### Accrued interests of user
Returns a list of all accrued interests for user.
#### Request
```
GET /networks/:network/users/:user/interests?startTime=:timestamp&endTime=:timestamp
```
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/interests?startTime=1579000000&endTime=1579008836
```
#### URL Parameters
| Name     | Type                      | Required | Description                                       |
|----------|---------------------------|----------|---------------------------------------------------|
| network  | string prefixed with "0x" | YES      | Address of currency network                       |
| user     | string prefixed with "0x" | YES      | Address of concerned user                         |
| startTime| integer                   | NO       | Start of time window to get list for (default: 0) |
| endTime  | integer                   | NO       | End of time window to get list for (default: now) |
#### Response
The response is a list of objects with the following elements:

| Attribute        | Type    | JSON Type | Description               |
| ---------------- | ------- | --------- | ------------------------- |
| accruedInterests | string  | array     | list of accrued interests |
| user             | address | string    | Address of user           |
| counterparty     | address | string    | Address of counterparty   |

The `accuredInterests` is a list with the following elements:

| Attribute    | Type       | JSON Type | Description                              |
| ------------ | ---------- | --------- | ---------------------------------------- |
| value        | BigInteger | string    | signed interest accrued viewed from user |
| interestRate | integer    | integer   | interest rate for this accrued interest  |
| timestamp    | integer    | integer   | timestamp of accrued interest            |
#### Example Response
```json
[
  {
    "accruedInterests": [{"value": 123, "interestRate":  1000, "timestamp": 1579000000}, {"value": 456, "interestRate":  2000, "timestamp": 1579001000}],
    "user": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
    "counterparty": "0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320"
  },
  {
    "accruedInterests": [{"value": 123, "interestRate":  1000, "timestamp": 1579000000}, {"value": 456, "interestRate":  2000, "timestamp": 1579001000}],
    "user": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
    "counterparty": "0xC0B33D88C704455075a0724AA167a286da778DDE"
  }
]
```

---

### Accrued interests of trustline
Returns a list of all accrued interests for a trustline in between user and counterparty as seen by user.
#### Request
```
GET /networks/:network/users/:user/interests/:counterparty?startTime=:timestamp&endTime=:timestamp
```
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/interests/0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320?startTime=1579000000&endTime=1579008836
```
#### URL Parameters
| Name         | Type                      | Required | Description                                       |
|--------------|---------------------------|----------|---------------------------------------------------|
| network      | string prefixed with "0x" | YES      | Address of currency network                       |
| user         | string prefixed with "0x" | YES      | Address of concerned user                         |
| counterparty | string prefixed with "0x" | YES      | Address of concerned counterparty                 |
| startTime    | integer                   | NO       | Start of time window to get list for (default: 0) |
| endTime      | integer                   | NO       | End of time window to get list for (default: now) |
#### Response
The response is a an objects with the following elements:

| Attribute        | Type    | JSON Type | Description               |
| ---------------- | ------- | --------- | ------------------------- |
| accruedInterests | string  | array     | list of accrued interests |
| user             | address | string    | Address of user           |
| counterparty     | address | string    | Address of counterparty   |

The `accuredInterests` is a list with the following elements:

| Attribute    | Type       | JSON Type | Description                              |
| ------------ | ---------- | --------- | ---------------------------------------- |
| value        | BigInteger | string    | signed interest accrued viewed from user |
| interestRate | integer    | integer   | interest rate for this accrued interest  |
| timestamp    | integer    | integer   | timestamp of accrued interest            |
#### Example Response
```json
{
    "accruedInterests": [{"value": 123, "interestRate":  1000, "timestamp": 1579000000}, {"value": 456, "interestRate":  2000, "timestamp": 1579001000}],
    "user": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
    "counterparty": "0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320"
}
```

---

### Information for transfer in transaction
Returns information about all trustline transfer applied by transaction with given hash
or identified by block hash and log index.
#### Request
To get transfer details via transaction hash:
```
GET /transfers?transactionHash=hash
```
To get transfer details via transfer id:
```
GET /transfers?blockHash=hash&logIndex=logindex
```
#### Data Parameters
| Name            | Type   | Required | Description                                  |
|-----------------|--------|----------|--------------------------------------------- |
| transactionHash | string | No       | Hash of transaction responsible for transfer |
| blockHash       | string | No       | Hash of block identifying transfer event     |
| logIndex        | number | No       | Log index identifying transfer event         |

#### Example Request
To get transfer details via transaction hash:
```bash
curl https://relay0.testnet.trustlines.network/api/v1/transfers?transactionHash=0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6
```

To get transfer details via transfer id:
```bash
curl https://relay0.testnet.trustlines.network/api/v1/transfers?blockHash=0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6&logIndex=12
```

---

### Total transferred sum in between users of currency networks
Returns the total transferred sum from a user to another user in a currency network in a time window.

#### Request
```
GET /networks/:network/users/:sender/transferredSums/:receiver?startTime=:timestamp&endTime=:timestamp
```
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/networks/0xC0B33D88C704455075a0724AA167a286da778DDE/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/transferredSums/0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320?startTime=1579000000&endTime=1579008836
```
#### URL Parameters
| Name         | Type                      | Required | Description                                       |
|--------------|---------------------------|----------|---------------------------------------------------|
| network      | string prefixed with "0x" | YES      | Address of currency network                       |
| sender       | string prefixed with "0x" | YES      | Address of sender of transfers                    |
| receiver     | string prefixed with "0x" | YES      | Address of receiver of transfers                  |
| startTime    | integer                   | NO       | Start of time window to get list for (default: 0) |
| endTime      | integer                   | NO       | End of time window to get list for (default: now) |
#### Response
The response is a an objects with the following elements:

| Attribute        | Type       | JSON Type | Description                             |
| ---------------- | ---------- | --------- | --------------------------------------- |
| sender           | address    | string    | Address of sender of transfers          |
| receiver         | address    | string    | Address of user                         |
| startTime        | timestamp  | number    | start of time window to fetch transfers |
| endTime          | timestamp  | number    | end of time window to fetch transfers   |
| value            | BigInteger | string    | Total value sent in between users       |

#### Example Response
```json
{
    "sender": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
    "receiver": "0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320",
    "startTime": 1579000000,
    "endTime": 1579008836,
    "value":  "123"
}
```

---