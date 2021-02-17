---
title: User
---

### All Events of User
Returns a list of all event logs of a user for currency networks / exchanges / tokens / unweth.
That means all events where the given user address is either `from` or `to`.
You can filter what type of events you want with `contractType` to select the contract
and `type` to select the name of the events within the contract.

#### Request
```
GET /users/:user/events?type=:type&fromBlock=:fromBlock&contractType:=contractType
```
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/events?type=TrustlineUpdate&fromBlock=123456&contractType=CurrencyNetwork
```
#### URL Parameters
|Name        |Type   |Required|Description|
|------------|-------|--------|-|
|user        |string |YES     |Address of user|
|type        |string |NO      |Either `TrustlineUpdate`, `TrustlineUpdateRequest`, `TrustlineUpdateCancel` or `Transfer`|
|contractType|string |NO      |Either `CurrencyNetwork`, `Exchange`, `UnwETH` or `Token`|
|fromBlock   |int    |NO      |Start of block range|

The types available for currency networks contracts are: `"TrustlineUpdateRequest"`, `"TrustlineUpdateCancel"`,
`"TrustlineUpdate"`, `"BalanceUpdate"`, `"Transfer"`, `"DebtUpdate"`, and `"NetworkFreeze"`.

The types available for exchange contracts are: `"LogFill"`, and `"LogCancel"`

The types available for UnwETH contracts are: `"Deposit"`, `"Withdrawal"`, `"Transfer"`, and `"Approval"`

The types available for token contracts are: `"Transfer"`, and `"Approval"`

If no contract type or event type are given, the response will have all events of types,
excluding `"DebtUpdate"`, `"BalanceUpdate"`, and `"NetworkFreeze"`

#### Response
For events from currency networks, they will have the following attributes:

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

Following additional attributes for `DebtUpdate` events:

| Attribute | Type   | Description                                                                                |
|-----------|--------|--------------------------------------------------------------------------------------------|
| debt      | string | Debt of `from` in the view of `to`, positive if `from` owes to `to` and negative otherwise |

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

### Balance of User
Returns the balance in wei of the given address.
#### Request
```
GET /users/:userAddress/balance
```
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/balance
```
#### URL Parameters
| Name        | Type   | Required | Description     |
| ----------- | ------ | -------- | --------------- |
| userAddress | string | YES      | Address of user |
#### Response
| Attribute | Type   | JSON Type | Description            |
| --------- | ------ | --------- | ---------------------- |
| balance   | string | string    | Balance of user in wei |
#### Example Response
```json
{
  "balance": "2377634165348042492"
}
```

---

### Transaction Infos for User
Returns information that is needed to sign a transaction.
#### Request
```
GET /users/:userAddress/txinfos
```
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/txinfos
```
#### URL Parameters
| Name        | Type   | Required | Description     |
|-------------|--------|----------|-----------------|
| userAddress | string | YES      | Address of user |
#### Response
| Attribute | Type   | Description                             |
|-----------|--------|-----------------------------------------|
| gasPrice  | string | Gas price                               |
| balance   | string | Balance of user in wei                  |
| nonce     | int    | Nonce needed for creating a transaction |
#### Example Response
```json
{
  "gasPrice": 0,
  "balance": "2377634165348042492",
  "nonce": 58
}
```

---

### All Trustlines of user in all currency networks
Returns a list of trustlines a user has in any currency network.
#### Request
```
GET /users/:userAddress/trustlines
```
#### URL Parameters
| Name           | Type   | Required | Description                 |
|----------------|--------|----------|-----------------------------|
| userAddress    | string | YES      | Address of user             |
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/users/0xE56d3f8096c765f29A88f54873a3D177a6c632D0/trustlines
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
        "address": "0xc773E89134957DD5d8eefA1700D147B3eAEEEFC5",
        "balance": "0",
        "counterParty": "0xc773E89134957DD5d8eefA1700D147B3eAEEEFC5",
        "currencyNetwork": "0xC637Db818131Ea67d19Ea1C9c28559e08b536f6E",
        "given": "0",
        "id": "0x1d4e46b52805a7440fd41653d7923cbe7c813f3f36776c26df6023bfae94fa4c",
        "interestRateGiven": "0",
        "interestRateReceived": "0",
        "isFrozen": false,
        "leftGiven": "0",
        "leftReceived": "0",
        "received": "0",
        "user": "0xE56d3f8096c765f29A88f54873a3D177a6c632D0"
    },
    {
        "address": "0x851c66B2fa4641a7411C6F62e5e905096512772C",
        "balance": "0",
        "counterParty": "0x851c66B2fa4641a7411C6F62e5e905096512772C",
        "currencyNetwork": "0x03cADF60A8f0eB5B17c5452fe0941Fb8FCc2F984",
        "given": "20",
        "id": "0x8194d0f524ed5b2056a1f2f432f6445a3c24c03e3a9c9191137c2b2109bb4a2b",
        "interestRateGiven": "0",
        "interestRateReceived": "0",
        "isFrozen": false,
        "leftGiven": "20",
        "leftReceived": "20",
        "received": "20",
        "user": "0xE56d3f8096c765f29A88f54873a3D177a6c632D0"
    }
]

```

---

### All debts of user
Returns a list of all the debts in all currency networks for the user.
#### Request
```
GET /users/:userAddress/debts
```
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/users/0x00a329c0648769A73afAc7F9381E08FB43dBEA72/debts
```
#### URL Parameters
| Name        | Type   | Required | Description     |
| ----------- | ------ | -------- | --------------- |
| userAddress | string | YES      | Address of user |
#### Response
The response is a list of objects with the following fields:
| Attribute       | Type    | JSON Type | Description                                                |
| --------------- | ------- | --------- | ---------------------------------------------------------- |
| currencyNetwork | address | string    | address of the currency network of all the following debts |
| debts           | object  | object    | list of debts involving the user in the currency network   |

Debts is a list of objects with the following fields:
| Attribute             | Type       | JSON Type      | Description                                                                          |
| --------------------- | ---------- | -------------- | ------------------------------------------------------------------------------------ |
| debtor                | address    | string         | address of the debtor that owes money to the user / towards which user owes money    |
| value                 | object     | object         | value of the debt, positive if user is owed money, negative if it owes money         |
| maximumClaimableValue | BigInteger | string         | the maximum value currently claimable considering the available paths in the network |
| claimPath             | List       | list of string | if it exists, a path to claim the claimable value of the debt in the network         |

#### Example Response
```json
[
  {
    "currencyNetwork": "0xee35211C4D9126D520bBfeaf3cFee5FE7B86F221",
    "debts": [
      {"value": "1572", "debtor": "0xBeEac99C8439044B282E796f7C821d543AFb7C00", "maximumClaimableValue": 0},
      {"value": "1342", "debtor": "0xF5FFaFb5bbFE348097327f2Eba64Fc127f6a35E2", "maximumClaimableValue": "1342", "claimPath": ["0xF5FFaFb5bbFE348097327f2Eba64Fc127f6a35E2", "0xee35211C4D9126D520bBfeaf3cFee5FE7B86F221"]},
      {"value": "-633", "debtor": "0xFFa82F6639247a76365514c2F53DB8388c349d8D", "maximumClaimableValue": "-100", "claimPath":  ["0xee35211C4D9126D520bBfeaf3cFee5FE7B86F221", "0xFFa82F6639247a76365514c2F53DB8388c349d8D"]}
    ]
  }
]
```

---
