---
title: Miscellaneous
---

### Latest block number
Returns the latest block number.
#### Request
```
GET /blocknumber
```
#### Example Request
```
curl https://relay0.testnet.trustlines.network/api/v1/blocknumber
```
#### Response
`int` - Latest block number
#### Example Response
```json
7426584
```

---

### Relay transaction
Relays a raw transaction to the blockchain.
#### Request
```
POST /relay
```
#### Data Parameters
|Name|Type|Required|Description|
|----|----|--------|-----------|
|rawTransaction|string|YES|RLP encoded signed transaction|
#### Example Request
```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"rawTransaction":"<rawTxString>"}' \
  https://relay0.testnet.trustlines.network/api/v1/relay
```
#### Response
`string` - hash of transaction if relayed successfully
#### Example Response
```json
"<tx hash>"
```

---

### Status of transaction
Get the status of a transaction from a transaction hash.

#### Request
```
GET /transactions/:transactionHash/status
```

#### Example Request
```bash
curl https://relay0.testnet.trustlines.network/api/v1/transactions/0x51a240271AB8AB9f9a21C82d9a85396b704E164d/status
```

#### Response
| Attribute             | Type   | Description                                                       |
|-----------------------|--------|-------------------------------------------------------------------|
| status                | string | one of success, failure, pending, or not found                    |

#### Example Response
```json
{
  "status": "success"
}
```

---

### Fees for meta transaction
Get a list of the fees the delegate will accept for the given metaTransaction.
#### Request
```
POST /meta-transaction-fees
```
#### Data Parameters
| Name            | Type                   | Required | Description            |
|-----------------|------------------------|----------|------------------------|
| metaTransaction | object                 | YES      | MetaTransaction object |


The MetaTransaction object must have the following fields:

| Name                  | Type       | JSON Type                               | Description                                                        |
|-----------------------|------------|-----------------------------------------|--------------------------------------------------------------------|
| to                    | address    | string - hex-encoded prefixed with "0x" | the address on which the call of the meta transaction is happening |
| from                  | address    | string - hex-encoded prefixed with "0x" | address of identity contract                                       |
| chainId               | int        | number                                  | chain id of the target blockchain of the meta transaction          |
| version               | int        | number                                  | version of the identity contract for the meta transaction          |
| value                 | BigInteger | string                                  | the amount of wei to be sent along from 'from' to 'to'             |
| data                  | bytes      | string - hex-encoded prefixed with "0x" | the data object encoding the function call including arguments     |
| gasLimit              | BigInteger | string                                  | the limit on gas used by meta transaction and paid by user         |
| nonce                 | int        | number                                  | nonce used for replay protection                                   |
| timeLimit             | int        | number                                  | time limit after which meta transaction is invalid; 0 means unlimited |
| operationType         | int        | number                                  | type of applied operation: 0 CALL, 1 DELEGATECALL, 2 CREATE, 3 CREATE2 |

#### Example Request
```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"metaTransaction": {"from": "0xF2E246BB76DF876Cef8b38ae84130F4F55De395b", "to": "0x51a240271AB8AB9f9a21C82d9a85396b704E164d", "chainId": 61, "version": 1, "value": "0", "data": "0x46432830000000000000000000000000000000000000000000000000000000000000000a", "gasLimit": 0, "nonce": "1", "timeLimit": 0, "operationType": 0}}' \
  https://relay0.testnet.trustlines.network/api/v1/meta-transaction-fees
```

#### Response
| Attribute             | Type   | Description                                                       |
|-----------------------|--------|-------------------------------------------------------------------|
| baseFee               | string | flat fees paid by the user                                        |
| gasePrice             | string | fee per gas used by the meta transaction to be paid by the user   |
| feeRecipient          | string | address of the recipient of the fees                              |
| currencyNetworkOfFees | string | the currency network used to pay the fees of the meta transaction |

#### Example Response
```json
[
    {
      "baseFee": "123",
      "gasPrice": "0",
      "feeRecipient": "0xF2E246BB76DF876Cef8b38ae84130F4F55De395b",
      "currencyNetworkOfFees": "0x51a240271AB8AB9f9a21C82d9a85396b704E164d"
    },
    {
      "baseFee": "0",
      "gasPrice": "45",
      "feeRecipient": "0xF2E246BB76DF876Cef8b38ae84130F4F55De395b",
      "currencyNetworkOfFees": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce"
    }
]
```

---

### Effective delegation fees of transaction

Get the delegation fees that were applied with given transaction.

#### Request
```
GET /delegation-fees?transactionHash=hash
```
#### Data Parameters
| Name            | Type   | Required | Description                                         |
|-----------------|--------|----------|---------------------------------------------------- |
| transactionHash | string | Yes      | Hash of transaction responsible for delegation fees |

#### Example Request
```bash
curl https://relay0.testnet.trustlines.network/api/v1/delegation-fees?transactionHash=0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6
```

#### Response

Return a list of all fee payment found in the transaction.

| Attribute             | Type                | JSON Type            | Description                                 |
| --------------------- | ------------------- | -------------------- | ------------------------------------------- |
| feeSender             | address             | string               | address of the payer of the fees            |
| feeRecipient          | address             | string               | address of the recipient of the fee         |
| totalFee              | BigInteger          | string               | total value of the fee in currency network  |
| currencyNetworkOfFees | address             | string               | address of the currency network of the fee  |

#### Example Response
```json
[
    {
        "feeSender": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",
        "feeRecipient": "0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b",
        "totalFee": "123456",
        "currencyNetworkOfFees": "0xC0B33D88C704455075a0724AA167a286da778DDE"
    }
]
```

---

### Status of meta transaction
Get the status of a meta transaction for an identity.

#### Request
```
GET /identities/:identityAddress/meta-transactions/:metaTransactionHash/status
```

#### Example Request
```bash
curl https://relay0.testnet.trustlines.network/api/v1/identities/0xF2E246BB76DF876Cef8b38ae84130F4F55De395b/meta-transactions/0x51a240271AB8AB9f9a21C82d9a85396b704E164d/status
```

#### Response
| Attribute             | Type   | Description                                                       |
|-----------------------|--------|-------------------------------------------------------------------|
| status                | string | one of success, failure, pending, or not found                    |

#### Example Response
```json
{
  "status": "success"
}
```

---

### Relay meta transaction
Relays a meta transaction to the blockchain.
#### Request
```
POST /relay-meta-transaction
```
#### Data Parameters
| Name            | Type                   | Required | Description            |
|-----------------|------------------------|----------|------------------------|
| metaTransaction | object                 | YES      | MetaTransaction object |


The MetaTransaction object must have the following fields:

| Name                  | Type       | JSON Type                               | Description                                                        |
|-----------------------|------------|-----------------------------------------|--------------------------------------------------------------------|
| to                    | address    | string - hex-encoded prefixed with "0x" | the address on which the call of the meta transaction is happening |
| from                  | address    | string - hex-encoded prefixed with "0x" | address of identity contract                                       |
| chainId               | int        | number                                  | chain id of the target blockchain of the meta transaction          |
| version               | int        | number                                  | version of the identity contract for the meta transaction          |
| value                 | BigInteger | string                                  | the amount of wei to be sent along from 'from' to 'to'             |
| data                  | bytes      | string - hex-encoded prefixed with "0x" | the data object encoding the function call including arguments     |
| baseFee               | BigInteger | string                                  | the base fees the delegate will receive for the meta transaction   |
| gasPrice              | BigInteger | string                                  | the gas price to be paid to the delegate by user                   |
| gasLimit              | BigInteger | string                                  | the limit on gas used by meta transaction and paid by user         |
| feeRecipient          | address    | string - hex-encoded prefixed with "0x" | the address to which fees will be paid (0 means msg.sender)        |
| currencyNetworkOfFees | address    | string - hex-encoded prefixed with "0x" | the currency network used to pay the fees of the meta transaction  |
| nonce                 | int        | number                                  | nonce used for replay protection                                   |
| timeLimit             | int        | number                                  | time limit after which meta transaction is invalid; 0 means unlimited |
| operationType         | int        | number                                  | type of applied operation: 0 CALL, 1 DELEGATECALL, 2 CREATE, 3 CREATE2 |
| signature             | bytes      | string - hex-encoded prefixed with "0x" | 65 bytes containing concatenated. v,r,s of the signature           |

#### Example Request
```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"metaTransaction": {"from": "0xF2E246BB76DF876Cef8b38ae84130F4F55De395b", "to": "0x51a240271AB8AB9f9a21C82d9a85396b704E164d", "chainId": 61, "version": 1, "value": "0", "data": "0x46432830000000000000000000000000000000000000000000000000000000000000000a", "baseFee": "123", gasPrice: "0", gasLimit: "0", feeRecipient: "0x51a240271AB8AB9f9a21C82d9a85396b704E164d", "currencyNetworkOfFees": "0x51a240271AB8AB9f9a21C82d9a85396b704E164d", nonce": "1", "timeLimit": 0, operationType: 0, signature": "0x6d2fe56ef6648cb3f0398966ad3b05d891cde786d8074bdac15bcb92ebfa7222489b8eb6ed87165feeede19b031bb69e12036a5fa13b3a46ad0c2c19d051ea9101"}}' \
  https://relay0.testnet.trustlines.network/api/v1/relay-meta-transaction
```
#### Response
```json
"<tx hash>"
```
---

### Deploy identity contract
This endpoint can be used to deploy an identity contract to the blockchain.

#### Request
```
POST /identities
```
#### Data Parameters
| Name                  | Type    | JSON Type                               | Required | Description                                      |
|-----------------------|---------|-----------------------------------------|----------|--------------------------------------------------|
| factoryAddress        | address | string - hex-encoded prefixed with "0x" | YES      | Address of the owner of the identity             |
| implementationAddress | address | string - hex-encoded prefixed with "0x" | YES      | Address of the owner of the identity             |
| signature             | bytes   | string - hex-encoded prefixed with "0x" | YES      | Signature of owner on factory and implementation |



#### Example Request
```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"factoryAddress": "0x43e7ed7F5bcc0beBE8758118fae8609607CD874f", "implementationAddress": "0x22e54f55D010542BEbabCe0Bb36dA64fB966caE1", "signature": "0x6d2fe56ef6648cb3f0398966ad3b05d891cde786d8074bdac15bcb92ebfa7222489b8eb6ed87165feeede19b031bb69e12036a5fa13b3a46ad0c2c19d051ea9101"}' \
  https://relay0.testnet.trustlines.network/api/v1/identities
```
#### Response
The endpoint returns an object with the following fields:

| Name                  | Type       | JSON Type                                 | Description                                              |
|-----------------------|------------|-------------------------------------------|----------------------------------------------------------|
| identity              | address    | string - hex-encoded prefixed with "0x"   | the address of the deployed identity contract            |
| nextNonce             | number     | number                                    | the next available nonce                                 |
| balance               | BigInteger | string                                    | contracts balance in wei                                 |
| implementationAddress | address    | string - hex-encoded prefixed with "0x"   | Address of the implementation referenced by the identity |

#### Example Response
```json
{"identity": "0x43950642C8685ED8e3Fb89a5C5aeCb12862A87fd", "nextNonce": 0, "balance": "0", "implementationAddress": "0x22e54f55D010542BEbabCe0Bb36dA64fB966caE1"}
```

### Get authorized identity factories
#### Request
```
GET /factories
```

#### Example Request
```bash
curl https://relay0.testnet.trustlines.network/api/v1/factories
```

#### Response
`string[]`: list of known identity factories through which identity deployment is possible

#### Example Response
```
["0x43950642C8685ED8e3Fb89a5C5aeCb12862A87fd"]
```

### Get identity information
#### Request
```
GET /identities/:identity
```
#### URL Parameters

| Name     | Type                      | Required | Description                                   |
|----------|---------------------------|----------|-----------------------------------------------|
| identity | string prefixed with "0x" | YES      | the address of the deployed identity contract |

#### Example Request
```bash
curl https://relay0.testnet.trustlines.network/api/v1/identities/0x2AbCc1389258Dc187DB787E33FD2B99d53695DE3
```

#### Response
The endpoint returns an object with the following fields:

| Name                  | Type       | JSON Type                                 | Description                                              |
|-----------------------|------------|-------------------------------------------|----------------------------------------------------------|
| identity              | address    | string - hex-encoded prefixed with "0x"   | the address of the deployed identity contract            |
| nextNonce             | number     | number                                    | the next available nonce                                 |
| balance               | BigInteger | string                                    | contracts balance in wei                                 |
| implementationAddress | address    | string - hex-encoded prefixed with "0x"   | Address of the implementation referenced by the identity |
                            | contracts balance in wei                      |
#### Example Response
```json
{"identity": "0x2AbCc1389258Dc187DB787E33FD2B99d53695DE3", "nextNonce": 0, "balance": "0", "implementationAddress": "0x8beec4Fa55Ab6908D05E6D8259D685fc6DD3619E"}
```

### Get relay version
#### Request
```
GET /version
```

#### Example Request
```bash
curl https://relay0.testnet.trustlines.network/api/v1/version
```

#### Response
`string`: relay version

#### Example Response
```
relay/v0.7.0
```
