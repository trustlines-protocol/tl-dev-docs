---
layout: contracts
title: Currency Networks contracts.json
---

```json
{
  "CurrencyNetwork": {
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "getUsers",
        "outputs": [
          {
            "name": "",
            "type": "address[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "interfaceID",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_value",
            "type": "uint64"
          },
          {
            "name": "_maxFee",
            "type": "uint64"
          },
          {
            "name": "_path",
            "type": "address[]"
          },
          {
            "name": "_extraData",
            "type": "bytes"
          }
        ],
        "name": "transferReceiverPays",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_creditor",
            "type": "address"
          },
          {
            "name": "_debtor",
            "type": "address"
          }
        ],
        "name": "creditline",
        "outputs": [
          {
            "name": "_creditline",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isNetworkFrozen",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "customInterests",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "capacityImbalanceFeeDivisor",
        "outputs": [
          {
            "name": "",
            "type": "uint16"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "preventMediatorInterests",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "a",
            "type": "address"
          },
          {
            "name": "b",
            "type": "address"
          }
        ],
        "name": "isTrustlineFrozen",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint8"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          },
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "authorizedBy",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_otherParty",
            "type": "address"
          },
          {
            "name": "_maxFee",
            "type": "uint64"
          },
          {
            "name": "_path",
            "type": "address[]"
          }
        ],
        "name": "closeTrustlineByTriangularTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "debt",
        "outputs": [
          {
            "name": "",
            "type": "int256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_name",
            "type": "string"
          },
          {
            "name": "_symbol",
            "type": "string"
          },
          {
            "name": "_decimals",
            "type": "uint8"
          },
          {
            "name": "_capacityImbalanceFeeDivisor",
            "type": "uint16"
          },
          {
            "name": "_defaultInterestRate",
            "type": "int16"
          },
          {
            "name": "_customInterests",
            "type": "bool"
          },
          {
            "name": "_preventMediatorInterests",
            "type": "bool"
          },
          {
            "name": "_expirationTime",
            "type": "uint256"
          },
          {
            "name": "authorizedAddresses",
            "type": "address[]"
          }
        ],
        "name": "init",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_creditor",
            "type": "address"
          },
          {
            "name": "_debtor",
            "type": "address"
          }
        ],
        "name": "interestRate",
        "outputs": [
          {
            "name": "_interestRate",
            "type": "int16"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "target",
            "type": "address"
          }
        ],
        "name": "addAuthorizedAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_otherParty",
            "type": "address"
          }
        ],
        "name": "closeTrustline",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "debtor",
            "type": "address"
          },
          {
            "name": "creditor",
            "type": "address"
          }
        ],
        "name": "getDebt",
        "outputs": [
          {
            "name": "",
            "type": "int256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_counterparty",
            "type": "address"
          }
        ],
        "name": "cancelTrustlineUpdate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "getFriends",
        "outputs": [
          {
            "name": "",
            "type": "address[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_counterParty",
            "type": "address"
          }
        ],
        "name": "applyInterests",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "target",
            "type": "address"
          }
        ],
        "name": "removeAuthorizedAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "globalAuthorized",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "defaultInterestRate",
        "outputs": [
          {
            "name": "",
            "type": "int16"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_value",
            "type": "uint64"
          },
          {
            "name": "_maxFee",
            "type": "uint64"
          },
          {
            "name": "_path",
            "type": "address[]"
          },
          {
            "name": "_extraData",
            "type": "bytes"
          }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "onboarder",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_a",
            "type": "address"
          },
          {
            "name": "_b",
            "type": "address"
          }
        ],
        "name": "balance",
        "outputs": [
          {
            "name": "_balance",
            "type": "int256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_value",
            "type": "uint64"
          },
          {
            "name": "_maxFee",
            "type": "uint64"
          },
          {
            "name": "_path",
            "type": "address[]"
          },
          {
            "name": "_extraData",
            "type": "bytes"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_debtor",
            "type": "address"
          },
          {
            "name": "_creditlineGiven",
            "type": "uint64"
          },
          {
            "name": "_creditlineReceived",
            "type": "uint64"
          }
        ],
        "name": "updateCreditlimits",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "freezeNetwork",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "expirationTime",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_value",
            "type": "uint64"
          },
          {
            "name": "_maxFee",
            "type": "uint64"
          },
          {
            "name": "_path",
            "type": "address[]"
          },
          {
            "name": "_extraData",
            "type": "bytes"
          }
        ],
        "name": "debitTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_debtor",
            "type": "address"
          },
          {
            "name": "_creditlineGiven",
            "type": "uint64"
          },
          {
            "name": "_creditlineReceived",
            "type": "uint64"
          },
          {
            "name": "_interestRateGiven",
            "type": "int16"
          },
          {
            "name": "_interestRateReceived",
            "type": "int16"
          },
          {
            "name": "_isFrozen",
            "type": "bool"
          }
        ],
        "name": "updateTrustline",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "creditor",
            "type": "address"
          },
          {
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "increaseDebt",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_a",
            "type": "address"
          },
          {
            "name": "_b",
            "type": "address"
          }
        ],
        "name": "getAccount",
        "outputs": [
          {
            "name": "",
            "type": "int256"
          },
          {
            "name": "",
            "type": "int256"
          },
          {
            "name": "",
            "type": "int256"
          },
          {
            "name": "",
            "type": "int256"
          },
          {
            "name": "",
            "type": "bool"
          },
          {
            "name": "",
            "type": "int256"
          },
          {
            "name": "",
            "type": "int256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "fallback"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_onboarder",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_onboardee",
            "type": "address"
          }
        ],
        "name": "Onboard",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "_debtor",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_creditor",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_newDebt",
            "type": "int256"
          }
        ],
        "name": "DebtUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_value",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_extraData",
            "type": "bytes"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_creditor",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_debtor",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_creditlineGiven",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_creditlineReceived",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_interestRateGiven",
            "type": "int256"
          },
          {
            "indexed": false,
            "name": "_interestRateReceived",
            "type": "int256"
          },
          {
            "indexed": false,
            "name": "_isFrozen",
            "type": "bool"
          }
        ],
        "name": "TrustlineUpdateRequest",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_creditor",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_debtor",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_creditlineGiven",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_creditlineReceived",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_interestRateGiven",
            "type": "int256"
          },
          {
            "indexed": false,
            "name": "_interestRateReceived",
            "type": "int256"
          },
          {
            "indexed": false,
            "name": "_isFrozen",
            "type": "bool"
          }
        ],
        "name": "TrustlineUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_initiator",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_counterparty",
            "type": "address"
          }
        ],
        "name": "TrustlineUpdateCancel",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_value",
            "type": "int256"
          }
        ],
        "name": "BalanceUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "NetworkFreeze",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "authorized",
            "type": "address"
          }
        ],
        "name": "GlobalAuthorizedAddressAdd",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "authorized",
            "type": "address"
          }
        ],
        "name": "GlobalAuthorizedAddressRemove",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "authorized",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "allower",
            "type": "address"
          }
        ],
        "name": "AuthorizedAddressAdd",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "authorized",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "allower",
            "type": "address"
          }
        ],
        "name": "AuthorizedAddressRemove",
        "type": "event"
      }
    ],
    "devdoc": {
      "methods": {
        "addAuthorizedAddress(address)": {
          "details": "Authorizes an address.",
          "params": {
            "target": "Address to authorize."
          }
        },
        "cancelTrustlineUpdate(address)": {
          "params": {
            "_counterparty": "The other party of the trustline agreement"
          }
        },
        "closeTrustline(address)": {
          "params": {
            "_otherParty": "The other party of the trustline agreement"
          }
        },
        "closeTrustlineByTriangularTransfer(address,uint64,address[])": {
          "params": {
            "_maxFee": "maximum fees the sender is willing to pay",
            "_otherParty": "Address of the other party to close the trustline with",
            "_path": "The path along, which to do the triangulation"
          }
        },
        "creditline(address,address)": {
          "return": "Amount tokens allowed to spent"
        },
        "debitTransfer(uint64,uint64,address[],bytes)": {
          "params": {
            "_extraData": "extra data bytes to be logged in the Transfer event*",
            "_maxFee": "Maximum fee the receiver wants to pay",
            "_path": "Path of transfer starting with debtor and ending with creditor (msg.sender)",
            "_value": "The amount of token to be transferred"
          }
        },
        "getDebt(address,address)": {
          "params": {
            "creditor": "The address towards which the debtor owes money",
            "debtor": "The address of which we query the debt"
          },
          "return": "the debt of the debtor to the creditor, equal to the opposite of the debt of the creditor to the debtor"
        },
        "increaseDebt(address,uint256)": {
          "params": {
            "creditor": "The address towards which msg.sender increases its debt",
            "value": "The value to increase the debt by"
          }
        },
        "init(string,string,uint8,uint16,int16,bool,bool,uint256,address[])": {
          "params": {
            "_capacityImbalanceFeeDivisor": "Divisor of the imbalance fee. The fee is 1 / _capacityImbalanceFeeDivisor",
            "_customInterests": "Flag to allow or disallow trustlines to have custom interests",
            "_decimals": "Number of decimals of the currency",
            "_defaultInterestRate": "The default interests for every trustlines in 0.001% per year",
            "_expirationTime": "Time after which the currency network is frozen and cannot be used anymore. Setting        this value to zero disables freezing.",
            "_name": "The name of the currency",
            "_preventMediatorInterests": "Flag to allow or disallow transactions resulting in loss of interests for        intermediaries, unless the transaction exclusively reduces balances",
            "_symbol": "The symbol of the currency"
          }
        },
        "interestRate(address,address)": {
          "return": "Interest rate on the balance of the line"
        },
        "removeAuthorizedAddress(address)": {
          "details": "Removes authorizion of an address.",
          "params": {
            "target": "Address to remove authorization from."
          }
        },
        "transfer(uint64,uint64,address[],bytes)": {
          "params": {
            "_extraData": "extra data bytes to be logged in the Transfer event*",
            "_maxFee": "Maximum fee the sender wants to pay",
            "_path": "Path of transfer starting with msg.sender and ending with receiver",
            "_value": "The amount to be transferred"
          }
        },
        "transferFrom(uint64,uint64,address[],bytes)": {
          "params": {
            "_extraData": "extra data bytes to be logged in the Transfer event*",
            "_maxFee": "Maximum fee the sender wants to pay",
            "_path": "Path of transfer starting with sender and ending with receiver",
            "_value": "The amount of token to be transferred"
          }
        },
        "transferReceiverPays(uint64,uint64,address[],bytes)": {
          "params": {
            "_extraData": "extra data bytes to be logged in the Transfer event*",
            "_maxFee": "Maximum fee the sender wants to pay",
            "_path": "Path of transfer starting with msg.sender and ending with receiver",
            "_value": "The amount of token to be transferred"
          }
        },
        "updateCreditlimits(address,uint64,uint64)": {
          "params": {
            "_creditlineGiven": "The creditline limit given by msg.sender",
            "_creditlineReceived": "The creditline limit given _debtor",
            "_debtor": "The other party of the trustline agreement"
          }
        },
        "updateTrustline(address,uint64,uint64,int16,int16,bool)": {
          "params": {
            "_creditlineGiven": "The creditline limit given by msg.sender",
            "_creditlineReceived": "The creditline limit given _debtor",
            "_debtor": "The other party of the trustline agreement",
            "_interestRateGiven": "The interest given by msg.sender",
            "_interestRateReceived": "The interest given by _debtor",
            "_isFrozen": "Whether the initiator asks for freezing the trustline"
          }
        }
      }
    },
    "bytecode": "0x6080604052614d01806100136000396000f3fe608060405234801561001057600080fd5b50600436106102315760003560e01c8063498b5ae811610130578063ae132d31116100b8578063da284dcc1161007c578063da284dcc14610aef578063de4afd6914610af7578063f2351aa714610bce578063f8585db314610c29578063fd59084714610c5557610231565b8063ae132d3114610963578063b203bb99146109a5578063b61f3035146109d3578063c0f60d8d14610aaa578063cc07d30014610ae757610231565b806370712939116100ff578063707129391461083057806370783a531461085657806386c1c74d1461087c57806395d89b4114610884578063a884105e1461088c57610231565b8063498b5ae8146107905780635c9c1fd1146107be5780635cbb7caa146107e457806362f2adb31461080a57610231565b806329e9e882116101be578063392e53cd11610182578063392e53cd146105b4578063393ee089146105bc57806340e659e9146106fd57806342f1181e14610744578063447bf0851461076a57610231565b806329e9e88214610491578063313ce567146104bf57806334004444146104dd5780633502f73e1461050b578063365d1cec1461059757610231565b80630a4409a7116102055780630a4409a71461041a5780630ba36e2a1461045a5780630bc1c14c146104625780631763d4e71461046a578063238a4ae51461048957610231565b8062ce8e3e1461023357806301ffc9a71461028b57806306fdde03146102c65780630951b61514610343575b005b61023b610cbd565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561027757818101518382015260200161025f565b505050509050019250505060405180910390f35b6102b2600480360360208110156102a157600080fd5b50356001600160e01b031916610d23565b604080519115158252519081900360200190f35b6102ce610d8e565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103085781810151838201526020016102f0565b50505050905090810190601f1680156103355780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102316004803603608081101561035957600080fd5b6001600160401b038235811692602081013590911691810190606081016040820135600160201b81111561038c57600080fd5b82018360208201111561039e57600080fd5b803590602001918460208302840111600160201b831117156103bf57600080fd5b919390929091602081019035600160201b8111156103dc57600080fd5b8201836020820111156103ee57600080fd5b803590602001918460018302840111600160201b8311171561040f57600080fd5b509092509050610e1c565b6104486004803603604081101561043057600080fd5b506001600160a01b0381358116916020013516610f10565b60408051918252519081900360200190f35b6102b2610f36565b6102b2610f3f565b610472610f51565b6040805161ffff9092168252519081900360200190f35b6102b2610f60565b6102b2600480360360408110156104a757600080fd5b506001600160a01b0381358116916020013516610f73565b6104c7610fa9565b6040805160ff9092168252519081900360200190f35b6102b2600480360360408110156104f357600080fd5b506001600160a01b0381358116916020013516610fb2565b6102316004803603606081101561052157600080fd5b6001600160a01b03823516916001600160401b0360208201351691810190606081016040820135600160201b81111561055957600080fd5b82018360208201111561056b57600080fd5b803590602001918460208302840111600160201b8311171561058c57600080fd5b509092509050610fd2565b610448600480360360208110156105ad57600080fd5b5035611016565b6102b2611028565b61023160048036036101208110156105d357600080fd5b810190602081018135600160201b8111156105ed57600080fd5b8201836020820111156105ff57600080fd5b803590602001918460018302840111600160201b8311171561062057600080fd5b919390929091602081019035600160201b81111561063d57600080fd5b82018360208201111561064f57600080fd5b803590602001918460018302840111600160201b8311171561067057600080fd5b9193909260ff8335169261ffff60208201351692604082013560010b926060830135151592608081013515159260a082013592909160e081019060c00135600160201b8111156106bf57600080fd5b8201836020820111156106d157600080fd5b803590602001918460208302840111600160201b831117156106f257600080fd5b509092509050611031565b61072b6004803603604081101561071357600080fd5b506001600160a01b03813581169160200135166112e9565b60408051600192830b90920b8252519081900360200190f35b6102316004803603602081101561075a57600080fd5b50356001600160a01b0316611309565b6102316004803603602081101561078057600080fd5b50356001600160a01b0316611361565b610448600480360360408110156107a657600080fd5b506001600160a01b0381358116916020013516611370565b610231600480360360208110156107d457600080fd5b50356001600160a01b03166113dc565b61023b600480360360208110156107fa57600080fd5b50356001600160a01b03166114dc565b6102316004803603602081101561082057600080fd5b50356001600160a01b0316611555565b6102316004803603602081101561084657600080fd5b50356001600160a01b0316611623565b6102b26004803603602081101561086c57600080fd5b50356001600160a01b03166116f3565b61072b611708565b6102ce611718565b610231600480360360808110156108a257600080fd5b6001600160401b038235811692602081013590911691810190606081016040820135600160201b8111156108d557600080fd5b8201836020820111156108e757600080fd5b803590602001918460208302840111600160201b8311171561090857600080fd5b919390929091602081019035600160201b81111561092557600080fd5b82018360208201111561093757600080fd5b803590602001918460018302840111600160201b8311171561095857600080fd5b509092509050611772565b6109896004803603602081101561097957600080fd5b50356001600160a01b031661185e565b604080516001600160a01b039092168252519081900360200190f35b610448600480360360408110156109bb57600080fd5b506001600160a01b0381358116916020013516611879565b610231600480360360808110156109e957600080fd5b6001600160401b038235811692602081013590911691810190606081016040820135600160201b811115610a1c57600080fd5b820183602082011115610a2e57600080fd5b803590602001918460208302840111600160201b83111715610a4f57600080fd5b919390929091602081019035600160201b811115610a6c57600080fd5b820183602082011115610a7e57600080fd5b803590602001918460018302840111600160201b83111715610a9f57600080fd5b50909250905061189c565b61023160048036036060811015610ac057600080fd5b506001600160a01b03813516906001600160401b0360208201358116916040013516611942565b61023161194f565b610448611a0c565b61023160048036036080811015610b0d57600080fd5b6001600160401b038235811692602081013590911691810190606081016040820135600160201b811115610b4057600080fd5b820183602082011115610b5257600080fd5b803590602001918460208302840111600160201b83111715610b7357600080fd5b919390929091602081019035600160201b811115610b9057600080fd5b820183602082011115610ba257600080fd5b803590602001918460018302840111600160201b83111715610bc357600080fd5b509092509050611a12565b610231600480360360c0811015610be457600080fd5b506001600160a01b03813516906001600160401b0360208201358116916040810135909116906060810135600190810b91608081013590910b9060a001351515611b90565b61023160048036036040811015610c3f57600080fd5b506001600160a01b038135169060200135611ba9565b610c8360048036036040811015610c6b57600080fd5b506001600160a01b0381358116916020013516611bba565b6040805197885260208801969096528686019490945260608601929092521515608085015260a084015260c0830152519081900360e00190f35b60606008600101805480602002602001604051908101604052809291908181526020018280548015610d1857602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610cfa575b505050505090505b90565b60006001600160e01b031982167f01ffc9a7000000000000000000000000000000000000000000000000000000001480610d8657506001600160e01b031982167f04c5327000000000000000000000000000000000000000000000000000000000145b90505b919050565b6000805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610e145780601f10610de957610100808354040283529160200191610e14565b820191906000526020600020905b815481529060010190602001808311610df757829003601f168201915b505050505081565b8215801590610e58575083836000818110610e3357fe5b905060200201356001600160a01b03166001600160a01b0316336001600160a01b0316145b610e9657604051600160e51b62461bcd0281526004018080602001828103825260238152602001806147ff6023913960400191505060405180910390fd5b610f08868686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8a018190048102820181019092528881529250889150879081908401838280828437600092019190915250611c4c92505050565b505050505050565b6000610f1a614583565b610f248484611ffb565b516001600160401b0316949350505050565b600c5460ff1681565b600c5465010000000000900460ff1681565b600c54610100900461ffff1681565b600c546601000000000000900460ff1681565b600c5460009060ff1615610f8957506001610fa3565b610f91614583565b610f9b8484611ffb565b608001519150505b92915050565b60025460ff1681565b600460209081526000928352604080842090915290825290205460ff1681565b611010848484848080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061212092505050565b50505050565b600d6020526000908152604090205481565b600a5460ff1681565b600a5460ff161561107657604051600160e51b62461bcd028152600401808060200182810382526025815260200180614c366025913960400191505060405180910390fd5b600a805460ff1916600190811790915586900b158015906110945750845b156110d357604051600160e51b62461bcd02815260040180806020018281038252603d8152602001806149f2603d913960400191505060405180910390fd5b8315806110e557508380156110e55750845b61112357604051600160e51b62461bcd028152600401808060200182810382526047815260200180614b306047913960600191505060405180910390fd5b82158061112f57504283115b61116d57604051600160e51b62461bcd028152600401808060200182810382526043815260200180614c936043913960600191505060405180910390fd5b8661ffff16600114156111b457604051600160e51b62461bcd02815260040180806020018281038252603c8152602001806148f9603c913960400191505060405180910390fd5b61123a8c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508d925061250f915050565b600c805462ffff00191661010061ffff8a8116919091029190911764ffff0000001916630100000060018a900b92909216919091021765ff0000000000191665010000000000871515021766ff0000000000001916660100000000000086151502179055600b83905560005b818110156112da576112d28383838181106112bd57fe5b905060200201356001600160a01b031661254f565b6001016112a6565b50505050505050505050505050565b60006112f3614583565b6112fd8484611ffb565b60400151949350505050565b3360008181526004602090815260408083206001600160a01b0386168085529252808320805460ff191660011790555190917ff92a3df90be9663e4fa8008da5af16eff9e227303d0a59fd3e7bd9fa2980d39b91a350565b3361136c818361259b565b5050565b6000816001600160a01b0316836001600160a01b031610156113b057600d600061139a8585612747565b8152602001908152602001600020549050610fa3565b6113d5600d60006113c18686612747565b815260200190815260200160002054612859565b9050610fa3565b600c5460ff161561142157604051600160e51b62461bcd02815260040180806020018281038252603c8152602001806146b7603c913960400191505060405180910390fd5b611429614583565b61143333836128c4565b60a08101519091506001600160a01b03166114985760408051600160e51b62461bcd02815260206004820152601560248201527f4e6f207265717565737420746f2064656c6574652e0000000000000000000000604482015290519081900360640190fd5b6114a2338361296e565b6040516001600160a01b0383169033907f46814aaabccd0d590a16aa6c0f88ee4cfd871d7beb692b2998fda70433510a3290600090a35050565b6001600160a01b03811660009081526007602090815260409182902060010180548351818402810184019094528084526060939283018282801561154957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161152b575b50505050509050919050565b61155d6145b8565b61156733836129bd565b905061157681600001516129ef565b156115b557604051600160e51b62461bcd02815260040180806020018281038252602f8152602001806147d0602f913960400191505060405180910390fd5b6115be81612a0d565b816001600160a01b0316336001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836020015160200151604051808260080b815260200191505060405180910390a361136c33838360200151612a59565b3360009081526004602090815260408083206001600160a01b038516845290915290205460ff1661169e5760408051600160e51b62461bcd02815260206004820181905260248201527f546172676574206e6f7420617574686f72697a65642062792073656e6465722e604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b0386168085529252808320805460ff191690555190917ffe3265421a7458af9570e66dd7a92be646934442be69fa65895b948a0e20f0a091a350565b60036020526000908152604090205460ff1681565b600c546301000000900460010b81565b60018054604080516020600284861615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610e145780601f10610de957610100808354040283529160200191610e14565b82158015906117ae57508383600081811061178957fe5b905060200201356001600160a01b03166001600160a01b0316336001600160a01b0316145b6117ec57604051600160e51b62461bcd0281526004018080602001828103825260238152602001806147ff6023913960400191505060405180910390fd5b610f08868686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8a018190048102820181019092528881529250889150879081908401838280828437600092019190915250612ba692505050565b600e602052600090815260409020546001600160a01b031681565b60006118836145de565b61188d8484612e6a565b6020015160080b949350505050565b3360009081526003602052604090205460ff168061190457508215801590611904575060046000858560008181106118d057fe5b602090810292909201356001600160a01b0316835250818101929092526040908101600090812033825290925290205460ff165b6117ec57604051600160e51b62461bcd02815260040180806020018281038252602c8152602001806148cd602c913960400191505060405180910390fd5b3361101081858585612f30565b600b5461199057604051600160e51b62461bcd02815260040180806020018281038252602b815260200180614a9a602b913960400191505060405180910390fd5b42600b5411156119d457604051600160e51b62461bcd02815260040180806020018281038252602a8152602001806149c8602a913960400191505060405180910390fd5b600c805460ff191660011790556040517f8d522fe0692f19bce789ee1908909a9da1d904e3b1d504672ab601bd5b25841d90600090a1565b600b5481565b600084846000818110611a2157fe5b905060200201356001600160a01b031690506000858560018888905003818110611a4757fe5b905060200201356001600160a01b03169050336001600160a01b0316816001600160a01b031614611aac57604051600160e51b62461bcd028152600401808060200182810382526033815260200180614c036033913960400191505060405180910390fd5b876001600160401b0316611ac08383611370565b1215611b0057604051600160e51b62461bcd028152600401808060200182810382526038815260200180614c5b6038913960400191505060405180910390fd5b611b1482828a6001600160401b0316612f8b565b611b86888888888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a9150899081908401838280828437600092019190915250611c4c92505050565b5050505050505050565b33611ba081888888888888612f9f565b50505050505050565b80611bb533848361333c565b505050565b6000806000806000806000611bcd6145b8565b611bd78a8a6129bd565b80518051602082015160408301516060840151608090940151949550919390929080611c055750600c5460ff165b60209586015180519601516001600160401b039586169d50939094169a50600191820b9950900b965090945063ffffffff909116925060080b905092959891949750929550565b6001825111611ca55760408051600160e51b62461bcd02815260206004820152600f60248201527f5061746820746f6f2073686f72742e0000000000000000000000000000000000604482015290519081900360640190fd5b836000600160ff1b806001835b6001885103811015611f06576000888260010181518110611ccf57fe5b602002602001015190506000898381518110611ce757fe5b602002602001015190506000611cfb6145b8565b611d0583856129bd565b9050611d1481600001516129ef565b15611d5357604051600160e51b62461bcd0281526004018080602001828103825260418152602001806149646041913960600191505060405180910390fd5b611d5c81612a0d565b6020808201510151611d6e828c6134a0565b600c546601000000000000900460ff1615611dee57889750611d90828261352b565b9850600082602001516020015160080b121596508789121580611db05750865b611dee57604051600160e51b62461bcd028152600401808060200182810382526045815260200180614aeb6045913960600191505060405180910390fd5b611dfd84868460200151612a59565b846001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a846020015160200151604051808260080b815260200191505060405180910390a360028d5103861415611e69575050505050611f06565b611e87611e768c836135b7565b600c54610100900461ffff16613657565b9250611e938b846136a3565b9a50611e9f8a84613715565b99508d6001600160401b03168a6001600160401b03161115611ef557604051600160e51b62461bcd028152600401808060200182810382526026815260200180614ac56026913960400191505060405180910390fd5b505060019093019250611cb2915050565b5086600188510381518110611f1757fe5b60200260200101516001600160a01b031687600081518110611f3557fe5b60200260200101516001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c168b8960405180836001600160401b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611fb5578181015183820152602001611f9d565b50505050905090810190601f168015611fe25780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3505050505050505050565b612003614583565b61200b614583565b600560006120198686612747565b81526020808201929092526040908101600020815160c08101835290546001600160401b038082168352600160401b82041693820193909352600160801b8304600190810b810b810b92820192909252600160901b8304820b820b90910b606082015260ff600160a01b83041615156080820152600160a81b909104600a90810b810b900b60a082015290506120ad614583565b836001600160a01b0316856001600160a01b031610156120ce575080612118565b81516001600160401b03908116602080840191909152830151168152604080830151600190810b810b606080850191909152840151810b900b908201526080808301511515908201525b949350505050565b60038151101561216457604051600160e51b62461bcd0281526004018080602001828103825260238152602001806149a56023913960400191505060405180910390fd5b8060008151811061217157fe5b60200260200101516001600160a01b0316336001600160a01b0316146121e15760408051600160e51b62461bcd02815260206004820152601b60248201527f50617468206d757374207374617274206d73672e73656e6465722e0000000000604482015290519081900360640190fd5b806001825103815181106121f157fe5b60200260200101516001600160a01b0316336001600160a01b03161461224b57604051600160e51b62461bcd02815260040180806020018281038252602f815260200180614935602f913960400191505060405180910390fd5b6122536145b8565b6122718260008151811061226357fe5b6020026020010151856129bd565b905061228081600001516129ef565b156122bf57604051600160e51b62461bcd02815260040180806020018281038252602d815260200180614a6d602d913960400191505060405180910390fd5b6122c881612a0d565b6122d06145de565b816020015190506000816020015160080b13156123dd57846001600160a01b0316836001815181106122fe57fe5b60200260200101516001600160a01b03161461234e57604051600160e51b62461bcd02815260040180806020018281038252603a815260200180614bc9603a913960400191505060405180910390fd5b806020015160080b81602001516001600160401b0316146123b95760408051600160e51b62461bcd02815260206004820181905260248201527f43616e6e6f74207472616e7366657220746f6f20686967682076616c7565732e604482015290519081900360640190fd5b6123d88160200151858560405180602001604052806000815250611c4c565b6124ea565b6000816020015160080b12156124ea57846001600160a01b03168360028551038151811061240757fe5b60200260200101516001600160a01b03161461245757604051600160e51b62461bcd02815260040180806020018281038252604281526020018061478e6042913960600191505060405180910390fd5b806020015160000360080b81602001516000036001600160401b0316146124c85760408051600160e51b62461bcd02815260206004820181905260248201527f43616e6e6f74207472616e7366657220746f6f20686967682076616c7565732e604482015290519081900360640190fd5b6124ea8160200151600003858560405180602001604052806000815250612ba6565b612508836000815181106124fa57fe5b60200260200101518661259b565b5050505050565b82516125229060009060208601906145fe565b5081516125369060019060208501906145fe565b506002805460ff191660ff929092169190911790555050565b6001600160a01b038116600081815260036020526040808220805460ff19166001179055517fa491c3daa0c7408c73f5c3bbfb2b1501b2a7ace3e155dc9cc059fad331ce844f9190a250565b6125a36145de565b6125ad8383612e6a565b9050806020015160080b6000146125f857604051600160e51b62461bcd0281526004018080602001828103825260368152602001806147586036913960400191505060405180910390fd5b6126028383610f73565b1561264157604051600160e51b62461bcd02815260040180806020018281038252602d815260200180614a6d602d913960400191505060405180910390fd5b600061264d8484612747565b6000818152600660209081526040808320805474ffffffffffffffffffffffffffffffffffffffffff19168155600190810180546001600160a01b031916905560058352818420848155018390556001600160a01b0388168352600790915290209091506126bb9084613785565b6001600160a01b03831660009081526007602052604090206126e3908563ffffffff61378516565b6040805160008082526020820181905281830181905260608201819052608082015290516001600160a01b0380861692908716917f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c209181900360a00190a350505050565b6000816001600160a01b0316836001600160a01b0316141561279d57604051600160e51b62461bcd02815260040180806020018281038252602e8152602001806146f3602e913960400191505060405180910390fd5b816001600160a01b0316836001600160a01b031610156127fb5750604080516001600160a01b03808516606090811b602080850191909152918516901b60348301528251602881840301815260489092019092528051910120610fa3565b816001600160a01b0316836001600160a01b03161115610fa35750604080516001600160a01b03808416606090811b602080850191909152918616901b60348301528251602881840301815260489092019092528051910120610fa3565b600081612867575080610d89565b600082900380831415610d865760408051600160e51b62461bcd02815260206004820152601860248201527f536166654d6174683a204d696e7573204f766572666c6f770000000000000000604482015290519081900360640190fd5b6128cc614583565b6128d4614583565b600660006128e28686612747565b81526020808201929092526040908101600020815160c08101835281546001600160401b038082168352600160401b82041694820194909452600160801b8404600190810b810b810b93820193909352600160901b8404830b830b830b6060820152600160a01b90930460ff161515608084015201546001600160a01b031660a0820152949350505050565b6006600061297c8484612747565b81526020810191909152604001600020805474ffffffffffffffffffffffffffffffffffffffffff1916815560010180546001600160a01b03191690555050565b6129c56145b8565b6129cd6145b8565b6129d78484611ffb565b81526129e38484612e6a565b60208201529392505050565b600c5460009060ff1615612a0557506001610d89565b506080015190565b60208082015190810151905182516040810151606090910151612a39939263ffffffff16914291613852565b60209182018051600892830b90920b91909201525163ffffffff42169052565b600060056000612a698686612747565b81526020019081526020016000206001019050826001600160a01b0316846001600160a01b03161015612b1c57815181546020840151604085015160120b72ffffffffffffffffffffffffffffffffffffff16600160681b026cffffffffffffffffffffffffff60089290920b68ffffffffffffffffff16600160201b026cffffffffffffffffff000000001963ffffffff90951663ffffffff1990941693909317939093169190911716178155611010565b815181546020840151604085015160120b72ffffffffffffffffffffffffffffffffffffff16600160681b026cffffffffffffffffffffffffff60009290920360080b68ffffffffffffffffff16600160201b026cffffffffffffffffff000000001963ffffffff90951663ffffffff199094169390931793909316919091171617815550505050565b6001825111612bff5760408051600160e51b62461bcd02815260206004820152600f60248201527f5061746820746f6f2073686f72742e0000000000000000000000000000000000604482015290519081900360640190fd5b8151849060009081908190600190600019015b8015611f06576000888281518110612c2657fe5b602002602001015190506000896001840381518110612c4157fe5b602002602001015190506000612c556145b8565b612c5f83856129bd565b9050612c6e81600001516129ef565b15612cad57604051600160e51b62461bcd0281526004018080602001828103825260418152602001806149646041913960600191505060405180910390fd5b612cb681612a0d565b60018c5103851415612ccb5760009150612cf4565b612cf1612ce08b8360200151602001516135b7565b600c54610100900461ffff16613a00565b91505b612cfe8a83613715565b9950612d0a8983613715565b98508c6001600160401b0316896001600160401b03161115612d6057604051600160e51b62461bcd028152600401808060200182810382526026815260200180614ac56026913960400191505060405180910390fd5b6020808201510151612d72828c6134a0565b600c546601000000000000900460ff1615612df357889750612d94828261352b565b98508789131580612da25750865b612de057604051600160e51b62461bcd028152600401808060200182810382526045815260200180614aeb6045913960600191505060405180910390fd5b600082602001516020015160080b121596505b612e0284868460200151612a59565b846001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a846020015160200151604051808260080b815260200191505060405180910390a350506000199093019250612c12915050565b612e726145de565b612e7a6145de565b60056000612e888686612747565b81526020808201929092526040908101600020815160608101835260019091015463ffffffff81168252600160201b8104600890810b810b900b93820193909352600160681b909204601290810b810b900b908201529050612ee86145de565b836001600160a01b0316856001600160a01b03161015612f09575080612118565b815163ffffffff168152602080830151600003600890810b900b9082015291505092915050565b600c546301000000900460010b80612f46614583565b612f508787611ffb565b6080810151600c549192509065010000000000900460ff1615612f7c5781604001519350816060015192505b611b8688888888888887612f9f565b806110108484612f9a84612859565b61333c565b600c5460ff1615612fe457604051600160e51b62461bcd0281526004018080602001828103825260378152602001806147216037913960400191505060405180910390fd5b612fec614583565b612ff68888611ffb565b9050613001816129ef565b1561304657811561304657604051600160e51b62461bcd02815260040180806020018281038252603a815260200180614822603a913960400191505060405180910390fd5b600c5465010000000000900460ff168061308d5750600c54600185810b6301000000909204810b900b14801561308d5750600c54600184810b6301000000909204810b900b145b6130cb57604051600160e51b62461bcd02815260040180806020018281038252604a815260200180614883604a913960600191505060405180910390fd5b600c5465010000000000900460ff16156131355760008460010b121580156130f7575060008360010b12155b61313557604051600160e51b62461bcd02815260040180806020018281038252602b815260200180614b77602b913960400191505060405180910390fd5b80600001516001600160401b0316866001600160401b031611158015613171575080602001516001600160401b0316856001600160401b031611155b80156131875750806040015160010b8460010b13155b801561319c5750806060015160010b8360010b145b80156131af575080608001511515821515145b80156131bd57508060800151155b1561323f5780516001600160401b03161580156131e5575060208101516001600160401b0316155b80156131f65750604081015160010b155b80156132075750606081015160010b155b801561321557506080810151155b156132205750611ba0565b61322a888861296e565b61323988888888888888613a43565b50611ba0565b613247614583565b61325189896128c4565b9050876001600160a01b03168160a001516001600160a01b031614156133225780600001516001600160401b0316866001600160401b0316111580156132ad575080602001516001600160401b0316876001600160401b031611155b80156132c35750806060015160010b8560010b13155b80156132d85750806040015160010b8460010b145b80156132eb575080608001511515831515145b1561330e576132fa898961296e565b613309888a888a888a89613a43565b61331d565b61331d89898989898989613a5c565b613331565b61333189898989898989613a5c565b505050505050505050565b6000600d600061334c8686612747565b8152602001908152602001600020549050826001600160a01b0316846001600160a01b031610156134055760006133838284613b2c565b905061338e81613c09565b5080600d600061339e8888612747565b815260208082019290925260409081016000209290925581516001600160a01b03808916825287169181019190915280820183905290517fb0fd525375cf2d63db200a0701eb5b6f384df5d85b2ed3abb8460b7c51a8128e9181900360600190a150611010565b60006134198261341485612859565b613b2c565b905061342481613c09565b5080600d60006134348888612747565b8152602080820192909252604090810160009081209390935580516001600160a01b03808a168252881692810192909252918390038183015290517fb0fd525375cf2d63db200a0701eb5b6f384df5d85b2ed3abb8460b7c51a8128e9181900360600190a15050505050565b60006134b483602001516020015183613c51565b8351602001519091506001600160401b0381166134d083613cbe565b60080b131561351357604051600160e51b62461bcd02815260040180806020018281038252603e815260200180614a2f603e913960400191505060405180910390fd5b50602092830151600891820b90910b92019190915250565b6020808301510151600090600881810b9084900b9081039083126135635784600001516060015160010b816000030292505050610fa3565b60008260080b126135885784600001516040015160010b816000030292505050610fa3565b84600001516060015160010b8260080b0285600001516040015160010b8560080b600003020192505050610fa3565b60006001600160401b038316600883900b8212156135f357506001600160401b03831682810390600882900b13156135f3576000915050610fa3565b60008160080b13613608576000915050610fa3565b806001600160401b038116600882900b1461211857604051600160e51b62461bcd02815260040180806020018281038252602781526020018061485c6027913960400191505060405180910390fd5b600061ffff8216158061367157506001600160401b038316155b1561367e57506000610fa3565b8161ffff16600184036001600160401b03168161369757fe5b04600101905092915050565b6000826001600160401b0316826001600160401b0316111561370f5760408051600160e51b62461bcd02815260206004820152601660248201527f536166654d6174683a20537562204f766572666c6f7700000000000000000000604482015290519081900360640190fd5b50900390565b60008282016001600160401b03808516908216101561377e5760408051600160e51b62461bcd02815260206004820152601660248201527f536166654d6174683a20416464204f766572666c6f7700000000000000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b0381166000908152602083905260409020805415611bb5576001830180546000919060001981019081106137bc57fe5b60009182526020909120015482546001860180546001600160a01b03909316935083929091600019019081106137ee57fe5b600091825260209091200180546001600160a01b0319166001600160a01b0392909216919091179055600184018054600019019061382c908261467c565b5081546001600160a01b0391909116600090815260209490945260408420559190915550565b600080600887900b811215613868575082613877565b60008760080b12156138775750815b8060010b6000141561388c57869150506139f7565b858503600888900b8060008312156138a057fe5b60015b600f811361399257600185900b8302840280158015906138d1575083858760010b0282816138cd57fe5b0514155b1561391a5760008660010b131561390f5760008c60080b13156138fd576001600160401b03925061390a565b67fffffffffffffffe1992505b613914565b600092505b50613992565b64496cebb8008202818161392a57fe5b059350836139385750613992565b8383019260008113801561394c5750600085135b1561396257600084136139625792506139929050565b6000811280156139725750600085125b1561398857600084126139885792506139929050565b50506001016138a3565b506001600160401b038113156139c05760008460010b12156139b6575060006139c0565b506001600160401b035b67fffffffffffffffe198112156139f15760008460010b12156139e5575060006139f1565b5067fffffffffffffffe195b93505050505b95945050505050565b600061ffff82161580613a1a57506001600160401b038316155b15613a2757506000610fa3565b6001820361ffff16600184036001600160401b03168161369757fe5b613a4d8787613d39565b611ba087878787878787613ef0565b613ab687876040518060c00160405280896001600160401b03168152602001886001600160401b031681526020018760010b81526020018660010b815260200185151581526020018b6001600160a01b031681525061408f565b604080516001600160401b03808816825286166020820152600185810b8284015284900b6060820152821515608082015290516001600160a01b0380891692908a16917f5a556eea24d64e436a7874b016114fc608d6c738dbf507317c581a363931f0229181900360a00190a350505050505050565b818101600083138015613b3f5750600082135b15613b9c5760008113613b9c5760408051600160e51b62461bcd02815260206004820152600f60248201527f4f766572666c6f77206572726f722e0000000000000000000000000000000000604482015290519081900360640190fd5b600083128015613bac5750600082125b15610fa35760008112610fa35760408051600160e51b62461bcd02815260206004820152601060248201527f556e646572666c6f77206572726f722e00000000000000000000000000000000604482015290519081900360640190fd5b600081600160ff1b1415610d8957604051600160e51b62461bcd028152600401808060200182810382526027815260200180614ba26027913960400191505060405180910390fd5b60006001600160401b0382168303600884810b9082900b131561377e5760408051600160e51b62461bcd02815260206004820152601960248201527f536166654d6174683a20537562496e74204f766572666c6f7700000000000000604482015290519081900360640190fd5b60008160080b60001415613cd3575080610d89565b60008260000390508260080b8160080b1415610d865760408051600160e51b62461bcd02815260206004820152601860248201527f536166654d6174683a204d696e7573204f766572666c6f770000000000000000604482015290519081900360640190fd5b6001600160a01b038281166000908152600e602052604090205416613e77576001600160a01b038181166000908152600e602052604090205416613e1c576001600160a01b038281166000818152600e6020526040808220805460016001600160a01b03199182168117909255948616835281832080549095168117909455519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a36040516001600160a01b038216906001907f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f90600090a361136c565b6001600160a01b038281166000818152600e602052604080822080546001600160a01b0319169486169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a361136c565b6001600160a01b038181166000908152600e60205260409020541661136c576001600160a01b038181166000818152600e602052604080822080546001600160a01b0319169487169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a35050565b613ef86145b8565b613f0288886129bd565b905080600001516040015160010b8460010b141580613f2f575080600001516060015160010b8360010b14155b8015613f445750602080820151015160080b15155b15613fa957613f5281612a0d565b866001600160a01b0316886001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836020015160200151604051808260080b815260200191505060405180910390a35b613fb38888614211565b80516001600160401b0380881690915281519086166020918201528151600186810b810b604090920191909152825185820b90910b60609091015281518315156080909101528101516140099089908990612a59565b61401888888360000151614283565b604080516001600160401b03808916825287166020820152600186810b8284015285900b6060820152831515608082015290516001600160a01b03808a1692908b16917f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c209181900360a00190a35050505050505050565b600c5465010000000000900460ff166140e757600c546040820151600190810b6301000000909204810b900b146140c257fe5b600c546060820151600190810b6301000000909204810b900b146140e257fe5b61410b565b6000816040015160010b12156140f957fe5b6000816060015160010b121561410b57fe5b60006006600061411b8686612747565b81526020808201929092526040908101600020845181549386015192860151606087015160a0880151600180860180546001600160a01b0319166001600160a01b039093169290921790915560809098015167ffffffffffffffff199096166001600160401b03938416176fffffffffffffffff00000000000000001916600160401b93909516929092029390931771ffff000000000000000000000000000000001916600160801b93870b61ffff9081169490940217600160901b61ffff021916600160901b9190960b929092169190910293909317600160a01b60ff021916600160a01b9115159190910217909155505050565b61422260088363ffffffff61452916565b61423360088263ffffffff61452916565b6001600160a01b038216600090815260076020526040902061425b908263ffffffff61452916565b6001600160a01b038116600090815260076020526040902061136c908363ffffffff61452916565b600c5465010000000000900460ff166142db57600c546040820151600190810b6301000000909204810b900b146142b657fe5b600c546060820151600190810b6301000000909204810b900b146142d657fe5b6142ff565b6000816040015160010b12156142ed57fe5b6000816060015160010b12156142ff57fe5b60006005600061430f8686612747565b81526020019081526020016000206000019050826001600160a01b0316846001600160a01b031610156144325781518154602084015160408501516060860151608087015160a0880151600a0b6affffffffffffffffffffff16600160a81b0274ffffffffffffffffffffffffffffffffffffffffff911515600160a01b02600160a01b60ff0219600194850b61ffff908116600160901b02600160901b61ffff02199790960b16600160801b0271ffff00000000000000000000000000000000196001600160401b03988916600160401b026fffffffffffffffff00000000000000001999909b1667ffffffffffffffff19909a1699909917979097169890981796909616949094179290921617939093169190911791909116178155611010565b60208201518154835160608501516040860151608087015160a0880151600a0b6affffffffffffffffffffff16600160a81b0274ffffffffffffffffffffffffffffffffffffffffff911515600160a01b02600160a01b60ff0219600194850b61ffff908116600160901b02600160901b61ffff02199790960b16600160801b0271ffff00000000000000000000000000000000196001600160401b03988916600160401b026fffffffffffffffff00000000000000001999909b1667ffffffffffffffff19909a169990991797909716989098179690961694909417929092161793909316919091179190911617815550505050565b6001600160a01b03811660009081526020839052604090208054611bb5576001808401805482018355805491820181556000908152602090200180546001600160a01b0384166001600160a01b0319909116179055505050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b6040518061012001604052806145cc614583565b81526020016145d96145de565b905290565b604080516060810182526000808252602082018190529181019190915290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061463f57805160ff191683800117855561466c565b8280016001018555821561466c579182015b8281111561466c578251825591602001919060010190614651565b5061467892915061469c565b5090565b815481835581811115611bb557600083815260209020611bb59181019083015b610d2091905b8082111561467857600081556001016146a256fe546865206e6574776f726b2069732066726f7a656e3b2074727573746c696e6573207570646174652063616e6e6f742062652063616e63656c65642e556e69717565206964656e74696669657273207265717569726520646966666572656e7420616464726573736573546865206e6574776f726b2069732066726f7a656e20616e642074727573746c696e65732063616e6e6f7420626520757064617465642e412074727573746c696e652063616e206f6e6c7920626520636c6f736564206966206974732062616c616e6365206973207a65726f2e5365636f6e6420746f206c61737420656c656d656e74206f66207061746820646f6573206e6f74206d61746368205f6f74686572506172747920616464726573732e43616e6e6f74206170706c7920696e746572657374732c207468652074727573746c696e652069732066726f7a656e5468652070617468206d7573742073746172742077697468206d73672e73656e64657254727573746c696e652069732066726f7a656e2c2069742063616e6e6f74206265207570646174656420756e6c65737320756e66726f7a656e2e54686520696d62616c616e636520646f6573206e6f742066697420696e746f2075696e7436342e496e74657265737420726174657320676976656e20616e64207265636569766564206d75737420626520657175616c20746f2064656661756c7420696e7465726573742072617465732e5468652073656e646572206f6620746865206d657373616765206973206e6f7420617574686f72697a65642e546f6f206c6f7720696d62616c616e6365206665652064697669736f722c20666565732063616e206e6f74206265206d6f7265207468616e203530254c61737420656c656d656e74206f66207061746820646f6573206e6f74206d61746368206d73672e73656e6465722e546865207061746820676976656e20697320696e636f72726563743a206f6e652074727573746c696e6520696e2074686520706174682069732066726f7a656e2e5061746820676976656e20746f6f2073686f727420746f20626520636f72726563742e5468652063757272656e6379206e6574776f726b2063616e6e6f742062652066726f7a656e207965742e437573746f6d20696e7465726573747320617265207365743b2064656661756c7420696e7465726573742072617465206d757374206265207a65726f2e546865207472616e736665727265642076616c7565206578636565647320746865206361706163697479206f662074686520637265646974206c696e652e5468652074727573746c696e652069732066726f7a656e20616e642063616e6e6f7420626520636c6f7365642e5468652063757272656e6379206e6574776f726b206861732064697361626c656420667265657a696e672e54686520666565732065786365656420746865206d61782066656520706172616d657465722e546865207472616e73666572207761732070726576656e746564206279207468652070726576656e74206d65646961746f7220696e7465726573747320737472617465677950726576656e74206d65646961746f7220696e7465726573742063616e6e6f742062652073657420776974686f7574207573696e6720637573746f6d20696e746572657374732e4f6e6c7920706f73697469766520696e7465726573742072617465732061726520737570706f727465642e50726576656e74207573696e672076616c756520666f72206d696e7573206f766572666c6f772e5365636f6e6420656c656d656e74206f66207061746820646f6573206e6f74206d61746368205f6f74686572506172747920616464726573732e546865207472616e736665722063616e206f6e6c7920626520696e6974696174656420627920746865206372656469746f722e43757272656e6379204e6574776f726b20616c726561647920696e697469616c697a65642e5468652073656e64657220646f6573206e6f7420686176652073756368206465627420746f7761726473207468652072656365697665722e45787069726174696f6e2074696d65206d7573742062652065697468657220696e2074686520667574757265206f72207a65726f20746f2064697361626c652069742ea165627a7a72305820e05f993a32660e443c26d3d331e59f86a8b5791e1d91130d3666f8f1e87a170a0029",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106102315760003560e01c8063498b5ae811610130578063ae132d31116100b8578063da284dcc1161007c578063da284dcc14610aef578063de4afd6914610af7578063f2351aa714610bce578063f8585db314610c29578063fd59084714610c5557610231565b8063ae132d3114610963578063b203bb99146109a5578063b61f3035146109d3578063c0f60d8d14610aaa578063cc07d30014610ae757610231565b806370712939116100ff578063707129391461083057806370783a531461085657806386c1c74d1461087c57806395d89b4114610884578063a884105e1461088c57610231565b8063498b5ae8146107905780635c9c1fd1146107be5780635cbb7caa146107e457806362f2adb31461080a57610231565b806329e9e882116101be578063392e53cd11610182578063392e53cd146105b4578063393ee089146105bc57806340e659e9146106fd57806342f1181e14610744578063447bf0851461076a57610231565b806329e9e88214610491578063313ce567146104bf57806334004444146104dd5780633502f73e1461050b578063365d1cec1461059757610231565b80630a4409a7116102055780630a4409a71461041a5780630ba36e2a1461045a5780630bc1c14c146104625780631763d4e71461046a578063238a4ae51461048957610231565b8062ce8e3e1461023357806301ffc9a71461028b57806306fdde03146102c65780630951b61514610343575b005b61023b610cbd565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561027757818101518382015260200161025f565b505050509050019250505060405180910390f35b6102b2600480360360208110156102a157600080fd5b50356001600160e01b031916610d23565b604080519115158252519081900360200190f35b6102ce610d8e565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103085781810151838201526020016102f0565b50505050905090810190601f1680156103355780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102316004803603608081101561035957600080fd5b6001600160401b038235811692602081013590911691810190606081016040820135600160201b81111561038c57600080fd5b82018360208201111561039e57600080fd5b803590602001918460208302840111600160201b831117156103bf57600080fd5b919390929091602081019035600160201b8111156103dc57600080fd5b8201836020820111156103ee57600080fd5b803590602001918460018302840111600160201b8311171561040f57600080fd5b509092509050610e1c565b6104486004803603604081101561043057600080fd5b506001600160a01b0381358116916020013516610f10565b60408051918252519081900360200190f35b6102b2610f36565b6102b2610f3f565b610472610f51565b6040805161ffff9092168252519081900360200190f35b6102b2610f60565b6102b2600480360360408110156104a757600080fd5b506001600160a01b0381358116916020013516610f73565b6104c7610fa9565b6040805160ff9092168252519081900360200190f35b6102b2600480360360408110156104f357600080fd5b506001600160a01b0381358116916020013516610fb2565b6102316004803603606081101561052157600080fd5b6001600160a01b03823516916001600160401b0360208201351691810190606081016040820135600160201b81111561055957600080fd5b82018360208201111561056b57600080fd5b803590602001918460208302840111600160201b8311171561058c57600080fd5b509092509050610fd2565b610448600480360360208110156105ad57600080fd5b5035611016565b6102b2611028565b61023160048036036101208110156105d357600080fd5b810190602081018135600160201b8111156105ed57600080fd5b8201836020820111156105ff57600080fd5b803590602001918460018302840111600160201b8311171561062057600080fd5b919390929091602081019035600160201b81111561063d57600080fd5b82018360208201111561064f57600080fd5b803590602001918460018302840111600160201b8311171561067057600080fd5b9193909260ff8335169261ffff60208201351692604082013560010b926060830135151592608081013515159260a082013592909160e081019060c00135600160201b8111156106bf57600080fd5b8201836020820111156106d157600080fd5b803590602001918460208302840111600160201b831117156106f257600080fd5b509092509050611031565b61072b6004803603604081101561071357600080fd5b506001600160a01b03813581169160200135166112e9565b60408051600192830b90920b8252519081900360200190f35b6102316004803603602081101561075a57600080fd5b50356001600160a01b0316611309565b6102316004803603602081101561078057600080fd5b50356001600160a01b0316611361565b610448600480360360408110156107a657600080fd5b506001600160a01b0381358116916020013516611370565b610231600480360360208110156107d457600080fd5b50356001600160a01b03166113dc565b61023b600480360360208110156107fa57600080fd5b50356001600160a01b03166114dc565b6102316004803603602081101561082057600080fd5b50356001600160a01b0316611555565b6102316004803603602081101561084657600080fd5b50356001600160a01b0316611623565b6102b26004803603602081101561086c57600080fd5b50356001600160a01b03166116f3565b61072b611708565b6102ce611718565b610231600480360360808110156108a257600080fd5b6001600160401b038235811692602081013590911691810190606081016040820135600160201b8111156108d557600080fd5b8201836020820111156108e757600080fd5b803590602001918460208302840111600160201b8311171561090857600080fd5b919390929091602081019035600160201b81111561092557600080fd5b82018360208201111561093757600080fd5b803590602001918460018302840111600160201b8311171561095857600080fd5b509092509050611772565b6109896004803603602081101561097957600080fd5b50356001600160a01b031661185e565b604080516001600160a01b039092168252519081900360200190f35b610448600480360360408110156109bb57600080fd5b506001600160a01b0381358116916020013516611879565b610231600480360360808110156109e957600080fd5b6001600160401b038235811692602081013590911691810190606081016040820135600160201b811115610a1c57600080fd5b820183602082011115610a2e57600080fd5b803590602001918460208302840111600160201b83111715610a4f57600080fd5b919390929091602081019035600160201b811115610a6c57600080fd5b820183602082011115610a7e57600080fd5b803590602001918460018302840111600160201b83111715610a9f57600080fd5b50909250905061189c565b61023160048036036060811015610ac057600080fd5b506001600160a01b03813516906001600160401b0360208201358116916040013516611942565b61023161194f565b610448611a0c565b61023160048036036080811015610b0d57600080fd5b6001600160401b038235811692602081013590911691810190606081016040820135600160201b811115610b4057600080fd5b820183602082011115610b5257600080fd5b803590602001918460208302840111600160201b83111715610b7357600080fd5b919390929091602081019035600160201b811115610b9057600080fd5b820183602082011115610ba257600080fd5b803590602001918460018302840111600160201b83111715610bc357600080fd5b509092509050611a12565b610231600480360360c0811015610be457600080fd5b506001600160a01b03813516906001600160401b0360208201358116916040810135909116906060810135600190810b91608081013590910b9060a001351515611b90565b61023160048036036040811015610c3f57600080fd5b506001600160a01b038135169060200135611ba9565b610c8360048036036040811015610c6b57600080fd5b506001600160a01b0381358116916020013516611bba565b6040805197885260208801969096528686019490945260608601929092521515608085015260a084015260c0830152519081900360e00190f35b60606008600101805480602002602001604051908101604052809291908181526020018280548015610d1857602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610cfa575b505050505090505b90565b60006001600160e01b031982167f01ffc9a7000000000000000000000000000000000000000000000000000000001480610d8657506001600160e01b031982167f04c5327000000000000000000000000000000000000000000000000000000000145b90505b919050565b6000805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610e145780601f10610de957610100808354040283529160200191610e14565b820191906000526020600020905b815481529060010190602001808311610df757829003601f168201915b505050505081565b8215801590610e58575083836000818110610e3357fe5b905060200201356001600160a01b03166001600160a01b0316336001600160a01b0316145b610e9657604051600160e51b62461bcd0281526004018080602001828103825260238152602001806147ff6023913960400191505060405180910390fd5b610f08868686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8a018190048102820181019092528881529250889150879081908401838280828437600092019190915250611c4c92505050565b505050505050565b6000610f1a614583565b610f248484611ffb565b516001600160401b0316949350505050565b600c5460ff1681565b600c5465010000000000900460ff1681565b600c54610100900461ffff1681565b600c546601000000000000900460ff1681565b600c5460009060ff1615610f8957506001610fa3565b610f91614583565b610f9b8484611ffb565b608001519150505b92915050565b60025460ff1681565b600460209081526000928352604080842090915290825290205460ff1681565b611010848484848080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061212092505050565b50505050565b600d6020526000908152604090205481565b600a5460ff1681565b600a5460ff161561107657604051600160e51b62461bcd028152600401808060200182810382526025815260200180614c366025913960400191505060405180910390fd5b600a805460ff1916600190811790915586900b158015906110945750845b156110d357604051600160e51b62461bcd02815260040180806020018281038252603d8152602001806149f2603d913960400191505060405180910390fd5b8315806110e557508380156110e55750845b61112357604051600160e51b62461bcd028152600401808060200182810382526047815260200180614b306047913960600191505060405180910390fd5b82158061112f57504283115b61116d57604051600160e51b62461bcd028152600401808060200182810382526043815260200180614c936043913960600191505060405180910390fd5b8661ffff16600114156111b457604051600160e51b62461bcd02815260040180806020018281038252603c8152602001806148f9603c913960400191505060405180910390fd5b61123a8c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508d925061250f915050565b600c805462ffff00191661010061ffff8a8116919091029190911764ffff0000001916630100000060018a900b92909216919091021765ff0000000000191665010000000000871515021766ff0000000000001916660100000000000086151502179055600b83905560005b818110156112da576112d28383838181106112bd57fe5b905060200201356001600160a01b031661254f565b6001016112a6565b50505050505050505050505050565b60006112f3614583565b6112fd8484611ffb565b60400151949350505050565b3360008181526004602090815260408083206001600160a01b0386168085529252808320805460ff191660011790555190917ff92a3df90be9663e4fa8008da5af16eff9e227303d0a59fd3e7bd9fa2980d39b91a350565b3361136c818361259b565b5050565b6000816001600160a01b0316836001600160a01b031610156113b057600d600061139a8585612747565b8152602001908152602001600020549050610fa3565b6113d5600d60006113c18686612747565b815260200190815260200160002054612859565b9050610fa3565b600c5460ff161561142157604051600160e51b62461bcd02815260040180806020018281038252603c8152602001806146b7603c913960400191505060405180910390fd5b611429614583565b61143333836128c4565b60a08101519091506001600160a01b03166114985760408051600160e51b62461bcd02815260206004820152601560248201527f4e6f207265717565737420746f2064656c6574652e0000000000000000000000604482015290519081900360640190fd5b6114a2338361296e565b6040516001600160a01b0383169033907f46814aaabccd0d590a16aa6c0f88ee4cfd871d7beb692b2998fda70433510a3290600090a35050565b6001600160a01b03811660009081526007602090815260409182902060010180548351818402810184019094528084526060939283018282801561154957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161152b575b50505050509050919050565b61155d6145b8565b61156733836129bd565b905061157681600001516129ef565b156115b557604051600160e51b62461bcd02815260040180806020018281038252602f8152602001806147d0602f913960400191505060405180910390fd5b6115be81612a0d565b816001600160a01b0316336001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836020015160200151604051808260080b815260200191505060405180910390a361136c33838360200151612a59565b3360009081526004602090815260408083206001600160a01b038516845290915290205460ff1661169e5760408051600160e51b62461bcd02815260206004820181905260248201527f546172676574206e6f7420617574686f72697a65642062792073656e6465722e604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b0386168085529252808320805460ff191690555190917ffe3265421a7458af9570e66dd7a92be646934442be69fa65895b948a0e20f0a091a350565b60036020526000908152604090205460ff1681565b600c546301000000900460010b81565b60018054604080516020600284861615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610e145780601f10610de957610100808354040283529160200191610e14565b82158015906117ae57508383600081811061178957fe5b905060200201356001600160a01b03166001600160a01b0316336001600160a01b0316145b6117ec57604051600160e51b62461bcd0281526004018080602001828103825260238152602001806147ff6023913960400191505060405180910390fd5b610f08868686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8a018190048102820181019092528881529250889150879081908401838280828437600092019190915250612ba692505050565b600e602052600090815260409020546001600160a01b031681565b60006118836145de565b61188d8484612e6a565b6020015160080b949350505050565b3360009081526003602052604090205460ff168061190457508215801590611904575060046000858560008181106118d057fe5b602090810292909201356001600160a01b0316835250818101929092526040908101600090812033825290925290205460ff165b6117ec57604051600160e51b62461bcd02815260040180806020018281038252602c8152602001806148cd602c913960400191505060405180910390fd5b3361101081858585612f30565b600b5461199057604051600160e51b62461bcd02815260040180806020018281038252602b815260200180614a9a602b913960400191505060405180910390fd5b42600b5411156119d457604051600160e51b62461bcd02815260040180806020018281038252602a8152602001806149c8602a913960400191505060405180910390fd5b600c805460ff191660011790556040517f8d522fe0692f19bce789ee1908909a9da1d904e3b1d504672ab601bd5b25841d90600090a1565b600b5481565b600084846000818110611a2157fe5b905060200201356001600160a01b031690506000858560018888905003818110611a4757fe5b905060200201356001600160a01b03169050336001600160a01b0316816001600160a01b031614611aac57604051600160e51b62461bcd028152600401808060200182810382526033815260200180614c036033913960400191505060405180910390fd5b876001600160401b0316611ac08383611370565b1215611b0057604051600160e51b62461bcd028152600401808060200182810382526038815260200180614c5b6038913960400191505060405180910390fd5b611b1482828a6001600160401b0316612f8b565b611b86888888888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a9150899081908401838280828437600092019190915250611c4c92505050565b5050505050505050565b33611ba081888888888888612f9f565b50505050505050565b80611bb533848361333c565b505050565b6000806000806000806000611bcd6145b8565b611bd78a8a6129bd565b80518051602082015160408301516060840151608090940151949550919390929080611c055750600c5460ff165b60209586015180519601516001600160401b039586169d50939094169a50600191820b9950900b965090945063ffffffff909116925060080b905092959891949750929550565b6001825111611ca55760408051600160e51b62461bcd02815260206004820152600f60248201527f5061746820746f6f2073686f72742e0000000000000000000000000000000000604482015290519081900360640190fd5b836000600160ff1b806001835b6001885103811015611f06576000888260010181518110611ccf57fe5b602002602001015190506000898381518110611ce757fe5b602002602001015190506000611cfb6145b8565b611d0583856129bd565b9050611d1481600001516129ef565b15611d5357604051600160e51b62461bcd0281526004018080602001828103825260418152602001806149646041913960600191505060405180910390fd5b611d5c81612a0d565b6020808201510151611d6e828c6134a0565b600c546601000000000000900460ff1615611dee57889750611d90828261352b565b9850600082602001516020015160080b121596508789121580611db05750865b611dee57604051600160e51b62461bcd028152600401808060200182810382526045815260200180614aeb6045913960600191505060405180910390fd5b611dfd84868460200151612a59565b846001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a846020015160200151604051808260080b815260200191505060405180910390a360028d5103861415611e69575050505050611f06565b611e87611e768c836135b7565b600c54610100900461ffff16613657565b9250611e938b846136a3565b9a50611e9f8a84613715565b99508d6001600160401b03168a6001600160401b03161115611ef557604051600160e51b62461bcd028152600401808060200182810382526026815260200180614ac56026913960400191505060405180910390fd5b505060019093019250611cb2915050565b5086600188510381518110611f1757fe5b60200260200101516001600160a01b031687600081518110611f3557fe5b60200260200101516001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c168b8960405180836001600160401b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611fb5578181015183820152602001611f9d565b50505050905090810190601f168015611fe25780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3505050505050505050565b612003614583565b61200b614583565b600560006120198686612747565b81526020808201929092526040908101600020815160c08101835290546001600160401b038082168352600160401b82041693820193909352600160801b8304600190810b810b810b92820192909252600160901b8304820b820b90910b606082015260ff600160a01b83041615156080820152600160a81b909104600a90810b810b900b60a082015290506120ad614583565b836001600160a01b0316856001600160a01b031610156120ce575080612118565b81516001600160401b03908116602080840191909152830151168152604080830151600190810b810b606080850191909152840151810b900b908201526080808301511515908201525b949350505050565b60038151101561216457604051600160e51b62461bcd0281526004018080602001828103825260238152602001806149a56023913960400191505060405180910390fd5b8060008151811061217157fe5b60200260200101516001600160a01b0316336001600160a01b0316146121e15760408051600160e51b62461bcd02815260206004820152601b60248201527f50617468206d757374207374617274206d73672e73656e6465722e0000000000604482015290519081900360640190fd5b806001825103815181106121f157fe5b60200260200101516001600160a01b0316336001600160a01b03161461224b57604051600160e51b62461bcd02815260040180806020018281038252602f815260200180614935602f913960400191505060405180910390fd5b6122536145b8565b6122718260008151811061226357fe5b6020026020010151856129bd565b905061228081600001516129ef565b156122bf57604051600160e51b62461bcd02815260040180806020018281038252602d815260200180614a6d602d913960400191505060405180910390fd5b6122c881612a0d565b6122d06145de565b816020015190506000816020015160080b13156123dd57846001600160a01b0316836001815181106122fe57fe5b60200260200101516001600160a01b03161461234e57604051600160e51b62461bcd02815260040180806020018281038252603a815260200180614bc9603a913960400191505060405180910390fd5b806020015160080b81602001516001600160401b0316146123b95760408051600160e51b62461bcd02815260206004820181905260248201527f43616e6e6f74207472616e7366657220746f6f20686967682076616c7565732e604482015290519081900360640190fd5b6123d88160200151858560405180602001604052806000815250611c4c565b6124ea565b6000816020015160080b12156124ea57846001600160a01b03168360028551038151811061240757fe5b60200260200101516001600160a01b03161461245757604051600160e51b62461bcd02815260040180806020018281038252604281526020018061478e6042913960600191505060405180910390fd5b806020015160000360080b81602001516000036001600160401b0316146124c85760408051600160e51b62461bcd02815260206004820181905260248201527f43616e6e6f74207472616e7366657220746f6f20686967682076616c7565732e604482015290519081900360640190fd5b6124ea8160200151600003858560405180602001604052806000815250612ba6565b612508836000815181106124fa57fe5b60200260200101518661259b565b5050505050565b82516125229060009060208601906145fe565b5081516125369060019060208501906145fe565b506002805460ff191660ff929092169190911790555050565b6001600160a01b038116600081815260036020526040808220805460ff19166001179055517fa491c3daa0c7408c73f5c3bbfb2b1501b2a7ace3e155dc9cc059fad331ce844f9190a250565b6125a36145de565b6125ad8383612e6a565b9050806020015160080b6000146125f857604051600160e51b62461bcd0281526004018080602001828103825260368152602001806147586036913960400191505060405180910390fd5b6126028383610f73565b1561264157604051600160e51b62461bcd02815260040180806020018281038252602d815260200180614a6d602d913960400191505060405180910390fd5b600061264d8484612747565b6000818152600660209081526040808320805474ffffffffffffffffffffffffffffffffffffffffff19168155600190810180546001600160a01b031916905560058352818420848155018390556001600160a01b0388168352600790915290209091506126bb9084613785565b6001600160a01b03831660009081526007602052604090206126e3908563ffffffff61378516565b6040805160008082526020820181905281830181905260608201819052608082015290516001600160a01b0380861692908716917f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c209181900360a00190a350505050565b6000816001600160a01b0316836001600160a01b0316141561279d57604051600160e51b62461bcd02815260040180806020018281038252602e8152602001806146f3602e913960400191505060405180910390fd5b816001600160a01b0316836001600160a01b031610156127fb5750604080516001600160a01b03808516606090811b602080850191909152918516901b60348301528251602881840301815260489092019092528051910120610fa3565b816001600160a01b0316836001600160a01b03161115610fa35750604080516001600160a01b03808416606090811b602080850191909152918616901b60348301528251602881840301815260489092019092528051910120610fa3565b600081612867575080610d89565b600082900380831415610d865760408051600160e51b62461bcd02815260206004820152601860248201527f536166654d6174683a204d696e7573204f766572666c6f770000000000000000604482015290519081900360640190fd5b6128cc614583565b6128d4614583565b600660006128e28686612747565b81526020808201929092526040908101600020815160c08101835281546001600160401b038082168352600160401b82041694820194909452600160801b8404600190810b810b810b93820193909352600160901b8404830b830b830b6060820152600160a01b90930460ff161515608084015201546001600160a01b031660a0820152949350505050565b6006600061297c8484612747565b81526020810191909152604001600020805474ffffffffffffffffffffffffffffffffffffffffff1916815560010180546001600160a01b03191690555050565b6129c56145b8565b6129cd6145b8565b6129d78484611ffb565b81526129e38484612e6a565b60208201529392505050565b600c5460009060ff1615612a0557506001610d89565b506080015190565b60208082015190810151905182516040810151606090910151612a39939263ffffffff16914291613852565b60209182018051600892830b90920b91909201525163ffffffff42169052565b600060056000612a698686612747565b81526020019081526020016000206001019050826001600160a01b0316846001600160a01b03161015612b1c57815181546020840151604085015160120b72ffffffffffffffffffffffffffffffffffffff16600160681b026cffffffffffffffffffffffffff60089290920b68ffffffffffffffffff16600160201b026cffffffffffffffffff000000001963ffffffff90951663ffffffff1990941693909317939093169190911716178155611010565b815181546020840151604085015160120b72ffffffffffffffffffffffffffffffffffffff16600160681b026cffffffffffffffffffffffffff60009290920360080b68ffffffffffffffffff16600160201b026cffffffffffffffffff000000001963ffffffff90951663ffffffff199094169390931793909316919091171617815550505050565b6001825111612bff5760408051600160e51b62461bcd02815260206004820152600f60248201527f5061746820746f6f2073686f72742e0000000000000000000000000000000000604482015290519081900360640190fd5b8151849060009081908190600190600019015b8015611f06576000888281518110612c2657fe5b602002602001015190506000896001840381518110612c4157fe5b602002602001015190506000612c556145b8565b612c5f83856129bd565b9050612c6e81600001516129ef565b15612cad57604051600160e51b62461bcd0281526004018080602001828103825260418152602001806149646041913960600191505060405180910390fd5b612cb681612a0d565b60018c5103851415612ccb5760009150612cf4565b612cf1612ce08b8360200151602001516135b7565b600c54610100900461ffff16613a00565b91505b612cfe8a83613715565b9950612d0a8983613715565b98508c6001600160401b0316896001600160401b03161115612d6057604051600160e51b62461bcd028152600401808060200182810382526026815260200180614ac56026913960400191505060405180910390fd5b6020808201510151612d72828c6134a0565b600c546601000000000000900460ff1615612df357889750612d94828261352b565b98508789131580612da25750865b612de057604051600160e51b62461bcd028152600401808060200182810382526045815260200180614aeb6045913960600191505060405180910390fd5b600082602001516020015160080b121596505b612e0284868460200151612a59565b846001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a846020015160200151604051808260080b815260200191505060405180910390a350506000199093019250612c12915050565b612e726145de565b612e7a6145de565b60056000612e888686612747565b81526020808201929092526040908101600020815160608101835260019091015463ffffffff81168252600160201b8104600890810b810b900b93820193909352600160681b909204601290810b810b900b908201529050612ee86145de565b836001600160a01b0316856001600160a01b03161015612f09575080612118565b815163ffffffff168152602080830151600003600890810b900b9082015291505092915050565b600c546301000000900460010b80612f46614583565b612f508787611ffb565b6080810151600c549192509065010000000000900460ff1615612f7c5781604001519350816060015192505b611b8688888888888887612f9f565b806110108484612f9a84612859565b61333c565b600c5460ff1615612fe457604051600160e51b62461bcd0281526004018080602001828103825260378152602001806147216037913960400191505060405180910390fd5b612fec614583565b612ff68888611ffb565b9050613001816129ef565b1561304657811561304657604051600160e51b62461bcd02815260040180806020018281038252603a815260200180614822603a913960400191505060405180910390fd5b600c5465010000000000900460ff168061308d5750600c54600185810b6301000000909204810b900b14801561308d5750600c54600184810b6301000000909204810b900b145b6130cb57604051600160e51b62461bcd02815260040180806020018281038252604a815260200180614883604a913960600191505060405180910390fd5b600c5465010000000000900460ff16156131355760008460010b121580156130f7575060008360010b12155b61313557604051600160e51b62461bcd02815260040180806020018281038252602b815260200180614b77602b913960400191505060405180910390fd5b80600001516001600160401b0316866001600160401b031611158015613171575080602001516001600160401b0316856001600160401b031611155b80156131875750806040015160010b8460010b13155b801561319c5750806060015160010b8360010b145b80156131af575080608001511515821515145b80156131bd57508060800151155b1561323f5780516001600160401b03161580156131e5575060208101516001600160401b0316155b80156131f65750604081015160010b155b80156132075750606081015160010b155b801561321557506080810151155b156132205750611ba0565b61322a888861296e565b61323988888888888888613a43565b50611ba0565b613247614583565b61325189896128c4565b9050876001600160a01b03168160a001516001600160a01b031614156133225780600001516001600160401b0316866001600160401b0316111580156132ad575080602001516001600160401b0316876001600160401b031611155b80156132c35750806060015160010b8560010b13155b80156132d85750806040015160010b8460010b145b80156132eb575080608001511515831515145b1561330e576132fa898961296e565b613309888a888a888a89613a43565b61331d565b61331d89898989898989613a5c565b613331565b61333189898989898989613a5c565b505050505050505050565b6000600d600061334c8686612747565b8152602001908152602001600020549050826001600160a01b0316846001600160a01b031610156134055760006133838284613b2c565b905061338e81613c09565b5080600d600061339e8888612747565b815260208082019290925260409081016000209290925581516001600160a01b03808916825287169181019190915280820183905290517fb0fd525375cf2d63db200a0701eb5b6f384df5d85b2ed3abb8460b7c51a8128e9181900360600190a150611010565b60006134198261341485612859565b613b2c565b905061342481613c09565b5080600d60006134348888612747565b8152602080820192909252604090810160009081209390935580516001600160a01b03808a168252881692810192909252918390038183015290517fb0fd525375cf2d63db200a0701eb5b6f384df5d85b2ed3abb8460b7c51a8128e9181900360600190a15050505050565b60006134b483602001516020015183613c51565b8351602001519091506001600160401b0381166134d083613cbe565b60080b131561351357604051600160e51b62461bcd02815260040180806020018281038252603e815260200180614a2f603e913960400191505060405180910390fd5b50602092830151600891820b90910b92019190915250565b6020808301510151600090600881810b9084900b9081039083126135635784600001516060015160010b816000030292505050610fa3565b60008260080b126135885784600001516040015160010b816000030292505050610fa3565b84600001516060015160010b8260080b0285600001516040015160010b8560080b600003020192505050610fa3565b60006001600160401b038316600883900b8212156135f357506001600160401b03831682810390600882900b13156135f3576000915050610fa3565b60008160080b13613608576000915050610fa3565b806001600160401b038116600882900b1461211857604051600160e51b62461bcd02815260040180806020018281038252602781526020018061485c6027913960400191505060405180910390fd5b600061ffff8216158061367157506001600160401b038316155b1561367e57506000610fa3565b8161ffff16600184036001600160401b03168161369757fe5b04600101905092915050565b6000826001600160401b0316826001600160401b0316111561370f5760408051600160e51b62461bcd02815260206004820152601660248201527f536166654d6174683a20537562204f766572666c6f7700000000000000000000604482015290519081900360640190fd5b50900390565b60008282016001600160401b03808516908216101561377e5760408051600160e51b62461bcd02815260206004820152601660248201527f536166654d6174683a20416464204f766572666c6f7700000000000000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b0381166000908152602083905260409020805415611bb5576001830180546000919060001981019081106137bc57fe5b60009182526020909120015482546001860180546001600160a01b03909316935083929091600019019081106137ee57fe5b600091825260209091200180546001600160a01b0319166001600160a01b0392909216919091179055600184018054600019019061382c908261467c565b5081546001600160a01b0391909116600090815260209490945260408420559190915550565b600080600887900b811215613868575082613877565b60008760080b12156138775750815b8060010b6000141561388c57869150506139f7565b858503600888900b8060008312156138a057fe5b60015b600f811361399257600185900b8302840280158015906138d1575083858760010b0282816138cd57fe5b0514155b1561391a5760008660010b131561390f5760008c60080b13156138fd576001600160401b03925061390a565b67fffffffffffffffe1992505b613914565b600092505b50613992565b64496cebb8008202818161392a57fe5b059350836139385750613992565b8383019260008113801561394c5750600085135b1561396257600084136139625792506139929050565b6000811280156139725750600085125b1561398857600084126139885792506139929050565b50506001016138a3565b506001600160401b038113156139c05760008460010b12156139b6575060006139c0565b506001600160401b035b67fffffffffffffffe198112156139f15760008460010b12156139e5575060006139f1565b5067fffffffffffffffe195b93505050505b95945050505050565b600061ffff82161580613a1a57506001600160401b038316155b15613a2757506000610fa3565b6001820361ffff16600184036001600160401b03168161369757fe5b613a4d8787613d39565b611ba087878787878787613ef0565b613ab687876040518060c00160405280896001600160401b03168152602001886001600160401b031681526020018760010b81526020018660010b815260200185151581526020018b6001600160a01b031681525061408f565b604080516001600160401b03808816825286166020820152600185810b8284015284900b6060820152821515608082015290516001600160a01b0380891692908a16917f5a556eea24d64e436a7874b016114fc608d6c738dbf507317c581a363931f0229181900360a00190a350505050505050565b818101600083138015613b3f5750600082135b15613b9c5760008113613b9c5760408051600160e51b62461bcd02815260206004820152600f60248201527f4f766572666c6f77206572726f722e0000000000000000000000000000000000604482015290519081900360640190fd5b600083128015613bac5750600082125b15610fa35760008112610fa35760408051600160e51b62461bcd02815260206004820152601060248201527f556e646572666c6f77206572726f722e00000000000000000000000000000000604482015290519081900360640190fd5b600081600160ff1b1415610d8957604051600160e51b62461bcd028152600401808060200182810382526027815260200180614ba26027913960400191505060405180910390fd5b60006001600160401b0382168303600884810b9082900b131561377e5760408051600160e51b62461bcd02815260206004820152601960248201527f536166654d6174683a20537562496e74204f766572666c6f7700000000000000604482015290519081900360640190fd5b60008160080b60001415613cd3575080610d89565b60008260000390508260080b8160080b1415610d865760408051600160e51b62461bcd02815260206004820152601860248201527f536166654d6174683a204d696e7573204f766572666c6f770000000000000000604482015290519081900360640190fd5b6001600160a01b038281166000908152600e602052604090205416613e77576001600160a01b038181166000908152600e602052604090205416613e1c576001600160a01b038281166000818152600e6020526040808220805460016001600160a01b03199182168117909255948616835281832080549095168117909455519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a36040516001600160a01b038216906001907f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f90600090a361136c565b6001600160a01b038281166000818152600e602052604080822080546001600160a01b0319169486169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a361136c565b6001600160a01b038181166000908152600e60205260409020541661136c576001600160a01b038181166000818152600e602052604080822080546001600160a01b0319169487169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a35050565b613ef86145b8565b613f0288886129bd565b905080600001516040015160010b8460010b141580613f2f575080600001516060015160010b8360010b14155b8015613f445750602080820151015160080b15155b15613fa957613f5281612a0d565b866001600160a01b0316886001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836020015160200151604051808260080b815260200191505060405180910390a35b613fb38888614211565b80516001600160401b0380881690915281519086166020918201528151600186810b810b604090920191909152825185820b90910b60609091015281518315156080909101528101516140099089908990612a59565b61401888888360000151614283565b604080516001600160401b03808916825287166020820152600186810b8284015285900b6060820152831515608082015290516001600160a01b03808a1692908b16917f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c209181900360a00190a35050505050505050565b600c5465010000000000900460ff166140e757600c546040820151600190810b6301000000909204810b900b146140c257fe5b600c546060820151600190810b6301000000909204810b900b146140e257fe5b61410b565b6000816040015160010b12156140f957fe5b6000816060015160010b121561410b57fe5b60006006600061411b8686612747565b81526020808201929092526040908101600020845181549386015192860151606087015160a0880151600180860180546001600160a01b0319166001600160a01b039093169290921790915560809098015167ffffffffffffffff199096166001600160401b03938416176fffffffffffffffff00000000000000001916600160401b93909516929092029390931771ffff000000000000000000000000000000001916600160801b93870b61ffff9081169490940217600160901b61ffff021916600160901b9190960b929092169190910293909317600160a01b60ff021916600160a01b9115159190910217909155505050565b61422260088363ffffffff61452916565b61423360088263ffffffff61452916565b6001600160a01b038216600090815260076020526040902061425b908263ffffffff61452916565b6001600160a01b038116600090815260076020526040902061136c908363ffffffff61452916565b600c5465010000000000900460ff166142db57600c546040820151600190810b6301000000909204810b900b146142b657fe5b600c546060820151600190810b6301000000909204810b900b146142d657fe5b6142ff565b6000816040015160010b12156142ed57fe5b6000816060015160010b12156142ff57fe5b60006005600061430f8686612747565b81526020019081526020016000206000019050826001600160a01b0316846001600160a01b031610156144325781518154602084015160408501516060860151608087015160a0880151600a0b6affffffffffffffffffffff16600160a81b0274ffffffffffffffffffffffffffffffffffffffffff911515600160a01b02600160a01b60ff0219600194850b61ffff908116600160901b02600160901b61ffff02199790960b16600160801b0271ffff00000000000000000000000000000000196001600160401b03988916600160401b026fffffffffffffffff00000000000000001999909b1667ffffffffffffffff19909a1699909917979097169890981796909616949094179290921617939093169190911791909116178155611010565b60208201518154835160608501516040860151608087015160a0880151600a0b6affffffffffffffffffffff16600160a81b0274ffffffffffffffffffffffffffffffffffffffffff911515600160a01b02600160a01b60ff0219600194850b61ffff908116600160901b02600160901b61ffff02199790960b16600160801b0271ffff00000000000000000000000000000000196001600160401b03988916600160401b026fffffffffffffffff00000000000000001999909b1667ffffffffffffffff19909a169990991797909716989098179690961694909417929092161793909316919091179190911617815550505050565b6001600160a01b03811660009081526020839052604090208054611bb5576001808401805482018355805491820181556000908152602090200180546001600160a01b0384166001600160a01b0319909116179055505050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b6040518061012001604052806145cc614583565b81526020016145d96145de565b905290565b604080516060810182526000808252602082018190529181019190915290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061463f57805160ff191683800117855561466c565b8280016001018555821561466c579182015b8281111561466c578251825591602001919060010190614651565b5061467892915061469c565b5090565b815481835581811115611bb557600083815260209020611bb59181019083015b610d2091905b8082111561467857600081556001016146a256fe546865206e6574776f726b2069732066726f7a656e3b2074727573746c696e6573207570646174652063616e6e6f742062652063616e63656c65642e556e69717565206964656e74696669657273207265717569726520646966666572656e7420616464726573736573546865206e6574776f726b2069732066726f7a656e20616e642074727573746c696e65732063616e6e6f7420626520757064617465642e412074727573746c696e652063616e206f6e6c7920626520636c6f736564206966206974732062616c616e6365206973207a65726f2e5365636f6e6420746f206c61737420656c656d656e74206f66207061746820646f6573206e6f74206d61746368205f6f74686572506172747920616464726573732e43616e6e6f74206170706c7920696e746572657374732c207468652074727573746c696e652069732066726f7a656e5468652070617468206d7573742073746172742077697468206d73672e73656e64657254727573746c696e652069732066726f7a656e2c2069742063616e6e6f74206265207570646174656420756e6c65737320756e66726f7a656e2e54686520696d62616c616e636520646f6573206e6f742066697420696e746f2075696e7436342e496e74657265737420726174657320676976656e20616e64207265636569766564206d75737420626520657175616c20746f2064656661756c7420696e7465726573742072617465732e5468652073656e646572206f6620746865206d657373616765206973206e6f7420617574686f72697a65642e546f6f206c6f7720696d62616c616e6365206665652064697669736f722c20666565732063616e206e6f74206265206d6f7265207468616e203530254c61737420656c656d656e74206f66207061746820646f6573206e6f74206d61746368206d73672e73656e6465722e546865207061746820676976656e20697320696e636f72726563743a206f6e652074727573746c696e6520696e2074686520706174682069732066726f7a656e2e5061746820676976656e20746f6f2073686f727420746f20626520636f72726563742e5468652063757272656e6379206e6574776f726b2063616e6e6f742062652066726f7a656e207965742e437573746f6d20696e7465726573747320617265207365743b2064656661756c7420696e7465726573742072617465206d757374206265207a65726f2e546865207472616e736665727265642076616c7565206578636565647320746865206361706163697479206f662074686520637265646974206c696e652e5468652074727573746c696e652069732066726f7a656e20616e642063616e6e6f7420626520636c6f7365642e5468652063757272656e6379206e6574776f726b206861732064697361626c656420667265657a696e672e54686520666565732065786365656420746865206d61782066656520706172616d657465722e546865207472616e73666572207761732070726576656e746564206279207468652070726576656e74206d65646961746f7220696e7465726573747320737472617465677950726576656e74206d65646961746f7220696e7465726573742063616e6e6f742062652073657420776974686f7574207573696e6720637573746f6d20696e746572657374732e4f6e6c7920706f73697469766520696e7465726573742072617465732061726520737570706f727465642e50726576656e74207573696e672076616c756520666f72206d696e7573206f766572666c6f772e5365636f6e6420656c656d656e74206f66207061746820646f6573206e6f74206d61746368205f6f74686572506172747920616464726573732e546865207472616e736665722063616e206f6e6c7920626520696e6974696174656420627920746865206372656469746f722e43757272656e6379204e6574776f726b20616c726561647920696e697469616c697a65642e5468652073656e64657220646f6573206e6f7420686176652073756368206465627420746f7761726473207468652072656365697665722e45787069726174696f6e2074696d65206d7573742062652065697468657220696e2074686520667574757265206f72207a65726f20746f2064697361626c652069742ea165627a7a72305820e05f993a32660e443c26d3d331e59f86a8b5791e1d91130d3666f8f1e87a170a0029",
    "metadata": {
      "compiler": {
        "version": "0.5.8+commit.23d335f2"
      },
      "language": "Solidity",
      "output": {
        "abi": [
          {
            "constant": true,
            "inputs": [],
            "name": "getUsers",
            "outputs": [
              {
                "name": "",
                "type": "address[]"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "interfaceID",
                "type": "bytes4"
              }
            ],
            "name": "supportsInterface",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_value",
                "type": "uint64"
              },
              {
                "name": "_maxFee",
                "type": "uint64"
              },
              {
                "name": "_path",
                "type": "address[]"
              },
              {
                "name": "_extraData",
                "type": "bytes"
              }
            ],
            "name": "transferReceiverPays",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "_creditor",
                "type": "address"
              },
              {
                "name": "_debtor",
                "type": "address"
              }
            ],
            "name": "creditline",
            "outputs": [
              {
                "name": "_creditline",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "isNetworkFrozen",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "customInterests",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "capacityImbalanceFeeDivisor",
            "outputs": [
              {
                "name": "",
                "type": "uint16"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "preventMediatorInterests",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "a",
                "type": "address"
              },
              {
                "name": "b",
                "type": "address"
              }
            ],
            "name": "isTrustlineFrozen",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
              {
                "name": "",
                "type": "uint8"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "address"
              },
              {
                "name": "",
                "type": "address"
              }
            ],
            "name": "authorizedBy",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_otherParty",
                "type": "address"
              },
              {
                "name": "_maxFee",
                "type": "uint64"
              },
              {
                "name": "_path",
                "type": "address[]"
              }
            ],
            "name": "closeTrustlineByTriangularTransfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "bytes32"
              }
            ],
            "name": "debt",
            "outputs": [
              {
                "name": "",
                "type": "int256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "isInitialized",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_name",
                "type": "string"
              },
              {
                "name": "_symbol",
                "type": "string"
              },
              {
                "name": "_decimals",
                "type": "uint8"
              },
              {
                "name": "_capacityImbalanceFeeDivisor",
                "type": "uint16"
              },
              {
                "name": "_defaultInterestRate",
                "type": "int16"
              },
              {
                "name": "_customInterests",
                "type": "bool"
              },
              {
                "name": "_preventMediatorInterests",
                "type": "bool"
              },
              {
                "name": "_expirationTime",
                "type": "uint256"
              },
              {
                "name": "authorizedAddresses",
                "type": "address[]"
              }
            ],
            "name": "init",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "_creditor",
                "type": "address"
              },
              {
                "name": "_debtor",
                "type": "address"
              }
            ],
            "name": "interestRate",
            "outputs": [
              {
                "name": "_interestRate",
                "type": "int16"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "target",
                "type": "address"
              }
            ],
            "name": "addAuthorizedAddress",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_otherParty",
                "type": "address"
              }
            ],
            "name": "closeTrustline",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "debtor",
                "type": "address"
              },
              {
                "name": "creditor",
                "type": "address"
              }
            ],
            "name": "getDebt",
            "outputs": [
              {
                "name": "",
                "type": "int256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_counterparty",
                "type": "address"
              }
            ],
            "name": "cancelTrustlineUpdate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "_user",
                "type": "address"
              }
            ],
            "name": "getFriends",
            "outputs": [
              {
                "name": "",
                "type": "address[]"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_counterParty",
                "type": "address"
              }
            ],
            "name": "applyInterests",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "target",
                "type": "address"
              }
            ],
            "name": "removeAuthorizedAddress",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "name": "globalAuthorized",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "defaultInterestRate",
            "outputs": [
              {
                "name": "",
                "type": "int16"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
              {
                "name": "",
                "type": "string"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_value",
                "type": "uint64"
              },
              {
                "name": "_maxFee",
                "type": "uint64"
              },
              {
                "name": "_path",
                "type": "address[]"
              },
              {
                "name": "_extraData",
                "type": "bytes"
              }
            ],
            "name": "transfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "name": "onboarder",
            "outputs": [
              {
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "_a",
                "type": "address"
              },
              {
                "name": "_b",
                "type": "address"
              }
            ],
            "name": "balance",
            "outputs": [
              {
                "name": "_balance",
                "type": "int256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_value",
                "type": "uint64"
              },
              {
                "name": "_maxFee",
                "type": "uint64"
              },
              {
                "name": "_path",
                "type": "address[]"
              },
              {
                "name": "_extraData",
                "type": "bytes"
              }
            ],
            "name": "transferFrom",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_debtor",
                "type": "address"
              },
              {
                "name": "_creditlineGiven",
                "type": "uint64"
              },
              {
                "name": "_creditlineReceived",
                "type": "uint64"
              }
            ],
            "name": "updateCreditlimits",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "freezeNetwork",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "expirationTime",
            "outputs": [
              {
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_value",
                "type": "uint64"
              },
              {
                "name": "_maxFee",
                "type": "uint64"
              },
              {
                "name": "_path",
                "type": "address[]"
              },
              {
                "name": "_extraData",
                "type": "bytes"
              }
            ],
            "name": "debitTransfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_debtor",
                "type": "address"
              },
              {
                "name": "_creditlineGiven",
                "type": "uint64"
              },
              {
                "name": "_creditlineReceived",
                "type": "uint64"
              },
              {
                "name": "_interestRateGiven",
                "type": "int16"
              },
              {
                "name": "_interestRateReceived",
                "type": "int16"
              },
              {
                "name": "_isFrozen",
                "type": "bool"
              }
            ],
            "name": "updateTrustline",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "creditor",
                "type": "address"
              },
              {
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "increaseDebt",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "_a",
                "type": "address"
              },
              {
                "name": "_b",
                "type": "address"
              }
            ],
            "name": "getAccount",
            "outputs": [
              {
                "name": "",
                "type": "int256"
              },
              {
                "name": "",
                "type": "int256"
              },
              {
                "name": "",
                "type": "int256"
              },
              {
                "name": "",
                "type": "int256"
              },
              {
                "name": "",
                "type": "bool"
              },
              {
                "name": "",
                "type": "int256"
              },
              {
                "name": "",
                "type": "int256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "fallback"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_onboarder",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "_onboardee",
                "type": "address"
              }
            ],
            "name": "Onboard",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "_debtor",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "_creditor",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "_newDebt",
                "type": "int256"
              }
            ],
            "name": "DebtUpdate",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_from",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "_to",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "_extraData",
                "type": "bytes"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_creditor",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "_debtor",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "_creditlineGiven",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "_creditlineReceived",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "_interestRateGiven",
                "type": "int256"
              },
              {
                "indexed": false,
                "name": "_interestRateReceived",
                "type": "int256"
              },
              {
                "indexed": false,
                "name": "_isFrozen",
                "type": "bool"
              }
            ],
            "name": "TrustlineUpdateRequest",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_creditor",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "_debtor",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "_creditlineGiven",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "_creditlineReceived",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "_interestRateGiven",
                "type": "int256"
              },
              {
                "indexed": false,
                "name": "_interestRateReceived",
                "type": "int256"
              },
              {
                "indexed": false,
                "name": "_isFrozen",
                "type": "bool"
              }
            ],
            "name": "TrustlineUpdate",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_initiator",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "_counterparty",
                "type": "address"
              }
            ],
            "name": "TrustlineUpdateCancel",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "_from",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "_to",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "_value",
                "type": "int256"
              }
            ],
            "name": "BalanceUpdate",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [],
            "name": "NetworkFreeze",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "authorized",
                "type": "address"
              }
            ],
            "name": "GlobalAuthorizedAddressAdd",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "authorized",
                "type": "address"
              }
            ],
            "name": "GlobalAuthorizedAddressRemove",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "authorized",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "allower",
                "type": "address"
              }
            ],
            "name": "AuthorizedAddressAdd",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "authorized",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "allower",
                "type": "address"
              }
            ],
            "name": "AuthorizedAddressRemove",
            "type": "event"
          }
        ],
        "devdoc": {
          "methods": {
            "addAuthorizedAddress(address)": {
              "details": "Authorizes an address.",
              "params": {
                "target": "Address to authorize."
              }
            },
            "cancelTrustlineUpdate(address)": {
              "params": {
                "_counterparty": "The other party of the trustline agreement"
              }
            },
            "closeTrustline(address)": {
              "params": {
                "_otherParty": "The other party of the trustline agreement"
              }
            },
            "closeTrustlineByTriangularTransfer(address,uint64,address[])": {
              "params": {
                "_maxFee": "maximum fees the sender is willing to pay",
                "_otherParty": "Address of the other party to close the trustline with",
                "_path": "The path along, which to do the triangulation"
              }
            },
            "creditline(address,address)": {
              "return": "Amount tokens allowed to spent"
            },
            "debitTransfer(uint64,uint64,address[],bytes)": {
              "params": {
                "_extraData": "extra data bytes to be logged in the Transfer event*",
                "_maxFee": "Maximum fee the receiver wants to pay",
                "_path": "Path of transfer starting with debtor and ending with creditor (msg.sender)",
                "_value": "The amount of token to be transferred"
              }
            },
            "getDebt(address,address)": {
              "params": {
                "creditor": "The address towards which the debtor owes money",
                "debtor": "The address of which we query the debt"
              },
              "return": "the debt of the debtor to the creditor, equal to the opposite of the debt of the creditor to the debtor"
            },
            "increaseDebt(address,uint256)": {
              "params": {
                "creditor": "The address towards which msg.sender increases its debt",
                "value": "The value to increase the debt by"
              }
            },
            "init(string,string,uint8,uint16,int16,bool,bool,uint256,address[])": {
              "params": {
                "_capacityImbalanceFeeDivisor": "Divisor of the imbalance fee. The fee is 1 / _capacityImbalanceFeeDivisor",
                "_customInterests": "Flag to allow or disallow trustlines to have custom interests",
                "_decimals": "Number of decimals of the currency",
                "_defaultInterestRate": "The default interests for every trustlines in 0.001% per year",
                "_expirationTime": "Time after which the currency network is frozen and cannot be used anymore. Setting        this value to zero disables freezing.",
                "_name": "The name of the currency",
                "_preventMediatorInterests": "Flag to allow or disallow transactions resulting in loss of interests for        intermediaries, unless the transaction exclusively reduces balances",
                "_symbol": "The symbol of the currency"
              }
            },
            "interestRate(address,address)": {
              "return": "Interest rate on the balance of the line"
            },
            "removeAuthorizedAddress(address)": {
              "details": "Removes authorizion of an address.",
              "params": {
                "target": "Address to remove authorization from."
              }
            },
            "transfer(uint64,uint64,address[],bytes)": {
              "params": {
                "_extraData": "extra data bytes to be logged in the Transfer event*",
                "_maxFee": "Maximum fee the sender wants to pay",
                "_path": "Path of transfer starting with msg.sender and ending with receiver",
                "_value": "The amount to be transferred"
              }
            },
            "transferFrom(uint64,uint64,address[],bytes)": {
              "params": {
                "_extraData": "extra data bytes to be logged in the Transfer event*",
                "_maxFee": "Maximum fee the sender wants to pay",
                "_path": "Path of transfer starting with sender and ending with receiver",
                "_value": "The amount of token to be transferred"
              }
            },
            "transferReceiverPays(uint64,uint64,address[],bytes)": {
              "params": {
                "_extraData": "extra data bytes to be logged in the Transfer event*",
                "_maxFee": "Maximum fee the sender wants to pay",
                "_path": "Path of transfer starting with msg.sender and ending with receiver",
                "_value": "The amount of token to be transferred"
              }
            },
            "updateCreditlimits(address,uint64,uint64)": {
              "params": {
                "_creditlineGiven": "The creditline limit given by msg.sender",
                "_creditlineReceived": "The creditline limit given _debtor",
                "_debtor": "The other party of the trustline agreement"
              }
            },
            "updateTrustline(address,uint64,uint64,int16,int16,bool)": {
              "params": {
                "_creditlineGiven": "The creditline limit given by msg.sender",
                "_creditlineReceived": "The creditline limit given _debtor",
                "_debtor": "The other party of the trustline agreement",
                "_interestRateGiven": "The interest given by msg.sender",
                "_interestRateReceived": "The interest given by _debtor",
                "_isFrozen": "Whether the initiator asks for freezing the trustline"
              }
            }
          }
        },
        "userdoc": {
          "methods": {
            "applyInterests(address)": {
              "notice": "Updates the balance of the trustline between `msg.sender` and `_counterParty` by applying the outstanding interests"
            },
            "cancelTrustlineUpdate(address)": {
              "notice": "`msg.sender` cancels a trustline update it initiated with _debtor"
            },
            "closeTrustline(address)": {
              "notice": "`msg.sender` closes a trustline with `_otherParty` For this to succeed the balance of this trustline needs to be zero"
            },
            "closeTrustlineByTriangularTransfer(address,uint64,address[])": {
              "notice": "Close the trustline between `msg.sender` and `_otherParty` by doing a triangular transfer over `_path"
            },
            "creditline(address,address)": {
              "notice": "The creditline limit given by `_creditor` to `_debtor`"
            },
            "debitTransfer(uint64,uint64,address[],bytes)": {
              "notice": "send `_value` along `_path` sender needs to have a debt towards receiver of at least `_value`"
            },
            "getAccount(address,address)": {
              "notice": "Query the trustline between two users. Can be removed once structs are supported in the ABI"
            },
            "getDebt(address,address)": {
              "notice": "Get the debt owed by debtor to creditor, may be negative if creditor owes debtor"
            },
            "increaseDebt(address,uint256)": {
              "notice": "Used to increase the debt tracked by the currency network of msg.sender towards creditor address"
            },
            "init(string,string,uint8,uint16,int16,bool,bool,uint256,address[])": {
              "notice": "Initialize the currency Network"
            },
            "interestRate(address,address)": {
              "notice": "The interest rate given by `_creditor` to `_debtor`"
            },
            "transfer(uint64,uint64,address[],bytes)": {
              "notice": "send `_value` along `_path` The fees will be payed by the sender, so `_value` is the amount received by receiver"
            },
            "transferFrom(uint64,uint64,address[],bytes)": {
              "notice": "send `_value` along `_path` msg.sender needs to be authorized to call this function"
            },
            "transferReceiverPays(uint64,uint64,address[],bytes)": {
              "notice": "send `_value` along `_path` The fees will be payed by the receiver, so `_value` is the amount that is sent out by sender"
            },
            "updateCreditlimits(address,uint64,uint64)": {
              "notice": "`msg.sender` offers a trustline update to `_debtor` of `_creditlineGiven` tokens for `_creditlineReceived` token Needs to be accepted by the other party, unless we reduce both values."
            },
            "updateTrustline(address,uint64,uint64,int16,int16,bool)": {
              "notice": "`msg.sender` offers a trustline update to `_debtor` of `_creditlineGiven` tokens for `_creditlineReceived` token Needs to be accepted by the other party, unless we reduce both values."
            }
          },
          "notice": "CurrencyNetwork * Extends basic currency networks to add debt tracking, debit transfer, and onboarding. *"
        }
      },
      "settings": {
        "compilationTarget": {
          "contracts/currency-network/CurrencyNetwork.sol": "CurrencyNetwork"
        },
        "evmVersion": "petersburg",
        "libraries": {},
        "optimizer": {
          "enabled": true,
          "runs": 500
        },
        "remappings": []
      },
      "sources": {
        "contracts/currency-network/CurrencyNetwork.sol": {
          "keccak256": "0x719990f5a975ccc7452b071283744fcb57df756563c27028a2a695bed9f6b86f",
          "urls": [
            "bzzr://28cfd69a35b0d054d92a1b69e228fb9ef79d40fae7d30b4042283bce6ae645d7"
          ]
        },
        "contracts/currency-network/CurrencyNetworkBasic.sol": {
          "keccak256": "0x94c6d1f12e017bafe3a8a1b8b89eae42237f65ac95e37dd914be448033a3912c",
          "urls": [
            "bzzr://04079eab4382fd7b02a43470eb7636f5c09efceaeb8bf9586c60df19ffc3f29a"
          ]
        },
        "contracts/currency-network/CurrencyNetworkInterface.sol": {
          "keccak256": "0x5a69c6a6ec114f401a0fdbe5e6ea008303e9c2904c3b0cd09ebc51776ec36e6d",
          "urls": [
            "bzzr://6296df9989c5ed1879d868e6297610a6c65ba86b69150b1c7909dffec7a9a85e"
          ]
        },
        "contracts/currency-network/CurrencyNetworkSafeMath.sol": {
          "keccak256": "0xd5ef83676c5ef48f261a814e1a218ec2a425956e0d45c60e8bda090396e6c5fa",
          "urls": [
            "bzzr://376533cae4f2e216d971ef2bd5e27b0dfb9b2ff09b82bd03136dff096ffcab40"
          ]
        },
        "contracts/currency-network/DebtTracking.sol": {
          "keccak256": "0xe66096e1e4e8fe62b28897c04e2edbdae5e2ce951bee5e662254f650a19f7a33",
          "urls": [
            "bzzr://a6c23bbd8b53c27dc30acc34355725bd149805c240288e9883e5252c50418e3d"
          ]
        },
        "contracts/currency-network/MetaData.sol": {
          "keccak256": "0xeafde0ebc14b0bdd5dccab19e8146bfd78320f81e09db20422e239b4f35a3435",
          "urls": [
            "bzzr://a89a6d15404a6e2cd50b52c4bf37014814f55a9e2465b53c2b65202d57f8e8b3"
          ]
        },
        "contracts/currency-network/Onboarding.sol": {
          "keccak256": "0x8bba94aaa7216bb04a60fede125016042117880f0b8564a632572c1443caaa5b",
          "urls": [
            "bzzr://5cfdf31c74a84dd72b3c6cbcd25da6818d8821acc63053b0d7f9ba20ce7fc8ce"
          ]
        },
        "contracts/lib/Authorizable.sol": {
          "keccak256": "0x3061b129f4adf1dda158f35a20147b10c2dc1ac208c9f290b2402e58d7aad9f9",
          "urls": [
            "bzzr://3c2aff3433453866b134a1e4efa9eb48dd49ff93382c8a05c1f4db7696828328"
          ]
        },
        "contracts/lib/ERC165.sol": {
          "keccak256": "0xbff73d0aa1d2f23cb512bd987a2ef3524cb45980aeac69781768f07e1ee8cef3",
          "urls": [
            "bzzr://eea7604ca2a973a34e9ffdae1fec23669920ed33246b6bb5d6f4d5f6056575c7"
          ]
        },
        "contracts/lib/it_set_lib.sol": {
          "keccak256": "0xa76dba7a1e5f82b54473087b53f9e3b98d273a0f1decdf906fcdb2ae115cadb0",
          "urls": [
            "bzzr://9e1beb6c41c328d7a25fd84f0cc8718574fd88559e84dcc1baa58cef06c8de35"
          ]
        }
      },
      "version": 1
    },
    "userdoc": {
      "methods": {
        "applyInterests(address)": {
          "notice": "Updates the balance of the trustline between `msg.sender` and `_counterParty` by applying the outstanding interests"
        },
        "cancelTrustlineUpdate(address)": {
          "notice": "`msg.sender` cancels a trustline update it initiated with _debtor"
        },
        "closeTrustline(address)": {
          "notice": "`msg.sender` closes a trustline with `_otherParty` For this to succeed the balance of this trustline needs to be zero"
        },
        "closeTrustlineByTriangularTransfer(address,uint64,address[])": {
          "notice": "Close the trustline between `msg.sender` and `_otherParty` by doing a triangular transfer over `_path"
        },
        "creditline(address,address)": {
          "notice": "The creditline limit given by `_creditor` to `_debtor`"
        },
        "debitTransfer(uint64,uint64,address[],bytes)": {
          "notice": "send `_value` along `_path` sender needs to have a debt towards receiver of at least `_value`"
        },
        "getAccount(address,address)": {
          "notice": "Query the trustline between two users. Can be removed once structs are supported in the ABI"
        },
        "getDebt(address,address)": {
          "notice": "Get the debt owed by debtor to creditor, may be negative if creditor owes debtor"
        },
        "increaseDebt(address,uint256)": {
          "notice": "Used to increase the debt tracked by the currency network of msg.sender towards creditor address"
        },
        "init(string,string,uint8,uint16,int16,bool,bool,uint256,address[])": {
          "notice": "Initialize the currency Network"
        },
        "interestRate(address,address)": {
          "notice": "The interest rate given by `_creditor` to `_debtor`"
        },
        "transfer(uint64,uint64,address[],bytes)": {
          "notice": "send `_value` along `_path` The fees will be payed by the sender, so `_value` is the amount received by receiver"
        },
        "transferFrom(uint64,uint64,address[],bytes)": {
          "notice": "send `_value` along `_path` msg.sender needs to be authorized to call this function"
        },
        "transferReceiverPays(uint64,uint64,address[],bytes)": {
          "notice": "send `_value` along `_path` The fees will be payed by the receiver, so `_value` is the amount that is sent out by sender"
        },
        "updateCreditlimits(address,uint64,uint64)": {
          "notice": "`msg.sender` offers a trustline update to `_debtor` of `_creditlineGiven` tokens for `_creditlineReceived` token Needs to be accepted by the other party, unless we reduce both values."
        },
        "updateTrustline(address,uint64,uint64,int16,int16,bool)": {
          "notice": "`msg.sender` offers a trustline update to `_debtor` of `_creditlineGiven` tokens for `_creditlineReceived` token Needs to be accepted by the other party, unless we reduce both values."
        }
      },
      "notice": "CurrencyNetwork * Extends basic currency networks to add debt tracking, debit transfer, and onboarding. *"
    }
  }
}
```
