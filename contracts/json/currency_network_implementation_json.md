---
layout: contracts
title: Currency Network Implementation.json
---

```json
{
  "CurrencyNetworkOwnable": {
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "authorized",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
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
            "internalType": "address",
            "name": "authorized",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "allower",
            "type": "address"
          }
        ],
        "name": "AuthorizedAddressRemove",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "_value",
            "type": "int256"
          }
        ],
        "name": "BalanceUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "_debtor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "_creditor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "int256",
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
            "internalType": "address",
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
            "internalType": "address",
            "name": "authorized",
            "type": "address"
          }
        ],
        "name": "GlobalAuthorizedAddressRemove",
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
        "inputs": [],
        "name": "NetworkUnfreeze",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_onboarder",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_onboardee",
            "type": "address"
          }
        ],
        "name": "Onboard",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "OwnerRemoval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
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
            "internalType": "address",
            "name": "_creditor",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_debtor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_creditlineGiven",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_creditlineReceived",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "_interestRateGiven",
            "type": "int256"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "_interestRateReceived",
            "type": "int256"
          },
          {
            "indexed": false,
            "internalType": "bool",
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
            "internalType": "address",
            "name": "_initiator",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
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
            "internalType": "address",
            "name": "_creditor",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_debtor",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_creditlineGiven",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_creditlineReceived",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "_interestRateGiven",
            "type": "int256"
          },
          {
            "indexed": false,
            "internalType": "int256",
            "name": "_interestRateReceived",
            "type": "int256"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "_isFrozen",
            "type": "bool"
          }
        ],
        "name": "TrustlineUpdateRequest",
        "type": "event"
      },
      {
        "stateMutability": "nonpayable",
        "type": "fallback"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "target",
            "type": "address"
          }
        ],
        "name": "addAuthorizedAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_counterParty",
            "type": "address"
          }
        ],
        "name": "applyInterests",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "authorizedBy",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_a",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_b",
            "type": "address"
          }
        ],
        "name": "balance",
        "outputs": [
          {
            "internalType": "int256",
            "name": "_balance",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "int72",
            "name": "_balance",
            "type": "int72"
          },
          {
            "internalType": "uint256",
            "name": "_startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_endTime",
            "type": "uint256"
          },
          {
            "internalType": "int16",
            "name": "_interestRateGiven",
            "type": "int16"
          },
          {
            "internalType": "int16",
            "name": "_interestRateReceived",
            "type": "int16"
          }
        ],
        "name": "calculateBalanceWithInterests",
        "outputs": [
          {
            "internalType": "int72",
            "name": "",
            "type": "int72"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_counterparty",
            "type": "address"
          }
        ],
        "name": "cancelTrustlineUpdate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "capacityImbalanceFeeDivisor",
        "outputs": [
          {
            "internalType": "uint16",
            "name": "",
            "type": "uint16"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_otherParty",
            "type": "address"
          }
        ],
        "name": "closeTrustline",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_otherParty",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "_minBalance",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "_maxBalance",
            "type": "uint64"
          }
        ],
        "name": "closeTrustlineByDirectTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_otherParty",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "_maxFee",
            "type": "uint64"
          },
          {
            "internalType": "address[]",
            "name": "_path",
            "type": "address[]"
          }
        ],
        "name": "closeTrustlineByTriangularTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_creditor",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_debtor",
            "type": "address"
          }
        ],
        "name": "creditline",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "_creditline",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "customInterests",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint64",
            "name": "_value",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "_maxFee",
            "type": "uint64"
          },
          {
            "internalType": "address[]",
            "name": "_path",
            "type": "address[]"
          },
          {
            "internalType": "bytes",
            "name": "_extraData",
            "type": "bytes"
          }
        ],
        "name": "debitTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "debt",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "defaultInterestRate",
        "outputs": [
          {
            "internalType": "int16",
            "name": "",
            "type": "int16"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "expirationTime",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "freezeNetwork",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_a",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_b",
            "type": "address"
          }
        ],
        "name": "getAccount",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          },
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          },
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAllDebtors",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "debtor",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "creditor",
            "type": "address"
          }
        ],
        "name": "getDebt",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "getDebtorsOfUser",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "getFriends",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getUsers",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "globalAuthorized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "creditor",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "increaseDebt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_symbol",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "_decimals",
            "type": "uint8"
          },
          {
            "internalType": "uint16",
            "name": "_capacityImbalanceFeeDivisor",
            "type": "uint16"
          },
          {
            "internalType": "int16",
            "name": "_defaultInterestRate",
            "type": "int16"
          },
          {
            "internalType": "bool",
            "name": "_customInterests",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_preventMediatorInterests",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_expirationTime",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "authorizedAddresses",
            "type": "address[]"
          }
        ],
        "name": "init",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_creditor",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_debtor",
            "type": "address"
          }
        ],
        "name": "interestRate",
        "outputs": [
          {
            "internalType": "int16",
            "name": "_interestRate",
            "type": "int16"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isInitialized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "isNetworkFrozen",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "a",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "b",
            "type": "address"
          }
        ],
        "name": "isTrustlineFrozen",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "onboarder",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "preventMediatorInterests",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "target",
            "type": "address"
          }
        ],
        "name": "removeAuthorizedAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "removeOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_creditor",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_debtor",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "_creditlineGiven",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "_creditlineReceived",
            "type": "uint64"
          },
          {
            "internalType": "int16",
            "name": "_interestRateGiven",
            "type": "int16"
          },
          {
            "internalType": "int16",
            "name": "_interestRateReceived",
            "type": "int16"
          },
          {
            "internalType": "bool",
            "name": "_isFrozen",
            "type": "bool"
          },
          {
            "internalType": "uint32",
            "name": "_mtime",
            "type": "uint32"
          },
          {
            "internalType": "int72",
            "name": "_balance",
            "type": "int72"
          }
        ],
        "name": "setAccount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "debtor",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "creditor",
            "type": "address"
          },
          {
            "internalType": "int256",
            "name": "value",
            "type": "int256"
          }
        ],
        "name": "setDebt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "onBoarder",
            "type": "address"
          }
        ],
        "name": "setOnboarder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_creditor",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_debtor",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "_creditlineGiven",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "_creditlineReceived",
            "type": "uint64"
          },
          {
            "internalType": "int16",
            "name": "_interestRateGiven",
            "type": "int16"
          },
          {
            "internalType": "int16",
            "name": "_interestRateReceived",
            "type": "int16"
          },
          {
            "internalType": "bool",
            "name": "_isFrozen",
            "type": "bool"
          }
        ],
        "name": "setTrustlineRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceID",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint64",
            "name": "_value",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "_maxFee",
            "type": "uint64"
          },
          {
            "internalType": "address[]",
            "name": "_path",
            "type": "address[]"
          },
          {
            "internalType": "bytes",
            "name": "_extraData",
            "type": "bytes"
          }
        ],
        "name": "transfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint64",
            "name": "_value",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "_maxFee",
            "type": "uint64"
          },
          {
            "internalType": "address[]",
            "name": "_path",
            "type": "address[]"
          },
          {
            "internalType": "bytes",
            "name": "_extraData",
            "type": "bytes"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint64",
            "name": "_value",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "_maxFee",
            "type": "uint64"
          },
          {
            "internalType": "address[]",
            "name": "_path",
            "type": "address[]"
          },
          {
            "internalType": "bytes",
            "name": "_extraData",
            "type": "bytes"
          }
        ],
        "name": "transferReceiverPays",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "unfreezeNetwork",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_debtor",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "_creditlineGiven",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "_creditlineReceived",
            "type": "uint64"
          }
        ],
        "name": "updateCreditlimits",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_debtor",
            "type": "address"
          },
          {
            "internalType": "uint64",
            "name": "_creditlineGiven",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "_creditlineReceived",
            "type": "uint64"
          },
          {
            "internalType": "int16",
            "name": "_interestRateGiven",
            "type": "int16"
          },
          {
            "internalType": "int16",
            "name": "_interestRateReceived",
            "type": "int16"
          },
          {
            "internalType": "bool",
            "name": "_isFrozen",
            "type": "bool"
          }
        ],
        "name": "updateTrustline",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "devdoc": {
      "kind": "dev",
      "methods": {
        "addAuthorizedAddress(address)": {
          "details": "Authorizes an address.",
          "params": {
            "target": "Address to authorize."
          }
        },
        "applyInterests(address)": {
          "params": {
            "_counterParty": "The counterparty with which to update the interests"
          }
        },
        "balance(address,address)": {
          "params": {
            "_a": "First address that defines the trustline",
            "_b": "second address that defines the trustline"
          },
          "returns": {
            "_balance": "the amount _b owes to _a on the trustline between _a and _b*"
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
        "closeTrustlineByDirectTransfer(address,uint64,uint64)": {
          "params": {
            "_maxBalance": "The minimum balance the trustline should have to close it",
            "_minBalance": "The maximum balance the trustline should have to close it",
            "_otherParty": "Address of the other party to close the trustline with"
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
          "params": {
            "_creditor": "the creditor of the queried trustline",
            "_debtor": "the debtor of the queried trustline"
          },
          "returns": {
            "_creditline": "credit limit given by creditor to debtor"
          }
        },
        "debitTransfer(uint64,uint64,address[],bytes)": {
          "params": {
            "_extraData": "extra data bytes to be logged in the Transfer event*",
            "_maxFee": "Maximum fee the receiver wants to pay",
            "_path": "Path of transfer starting with debtor and ending with creditor (msg.sender)",
            "_value": "The amount of token to be transferred"
          }
        },
        "getAccount(address,address)": {
          "details": "Can be removed once structs are supported in the ABI",
          "params": {
            "_a": "First address that defines the trustline",
            "_b": "second address that defines the trustline"
          }
        },
        "getDebt(address,address)": {
          "params": {
            "creditor": "The address towards which the debtor owes money",
            "debtor": "The address of which we query the debt"
          },
          "returns": {
            "_0": "the debt of the debtor to the creditor, equal to the opposite of the debt of the creditor to the debtor"
          }
        },
        "getFriends(address)": {
          "params": {
            "_user": "The user to query the list of friends for*"
          }
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
            "_defaultInterestRate": "The default interests for every trustlines in 0.01% per year",
            "_expirationTime": "Time after which the currency network is frozen and cannot be used anymore. Setting         this value to zero disables freezing.",
            "_name": "The name of the currency",
            "_preventMediatorInterests": "Flag to allow or disallow transactions resulting in loss of interests for         intermediaries, unless the transaction exclusively reduces balances",
            "_symbol": "The symbol of the currency"
          }
        },
        "interestRate(address,address)": {
          "params": {
            "_creditor": "the creditor of the queried trustline",
            "_debtor": "the debtor of the queried trustline"
          },
          "returns": {
            "_interestRate": "Interest rate given by creditor to debtor on the balance of the line"
          }
        },
        "removeAuthorizedAddress(address)": {
          "details": "Removes authorizion of an address.",
          "params": {
            "target": "Address to remove authorization from."
          }
        },
        "setAccount(address,address,uint64,uint64,int16,int16,bool,uint32,int72)": {
          "details": "Set an account for two users, the final balance will be _balance plus the interests accrued on _balance in between _mtime and now.",
          "params": {
            "_balance": "The balance of the trustline at time _mtime as seen by _creditor",
            "_creditlineGiven": "The creditline limit given by _creditor",
            "_creditlineReceived": "The creditline limit given _debtor",
            "_creditor": "The first party of the trustline agreement",
            "_debtor": "The other party of the trustline agreement",
            "_interestRateGiven": "The interest given by _creditor",
            "_interestRateReceived": "The interest given by _debtor",
            "_isFrozen": "Whether the trustline should be frozen",
            "_mtime": "The last modification time of the balance"
          }
        },
        "setTrustlineRequest(address,address,uint64,uint64,int16,int16,bool)": {
          "details": "Set a trustline request in between two users",
          "params": {
            "_creditlineGiven": "The creditline limit given by _creditor",
            "_creditlineReceived": "The creditline limit given _debtor",
            "_creditor": "The first party of the trustline request",
            "_debtor": "The other party of the trustline request",
            "_interestRateGiven": "The interest given by _creditor",
            "_interestRateReceived": "The interest given by _debtor",
            "_isFrozen": "Whether the trustline should be frozen"
          }
        },
        "supportsInterface(bytes4)": {
          "details": "This needs to be in sync with CurrencyNetworkInterface.sol*",
          "params": {
            "interfaceID": "the queried interface id"
          },
          "returns": {
            "_0": "A boolean for whether the interface id is supported"
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
      },
      "version": 1
    },
    "bytecode": "0x608060405234801561001057600080fd5b50615a7f80620000216000396000f3fe608060405234801561001057600080fd5b506004361061032a5760003560e01c80635cbb7caa116101b2578063ae132d31116100f9578063c0f60d8d116100a2578063de4afd691161007c578063de4afd6914610651578063f2351aa714610664578063f8585db314610677578063fd5908471461068a5761032a565b8063c0f60d8d1461062e578063cc07d30014610641578063da284dcc146106495761032a565b8063b61f3035116100d3578063b61f3035146105e8578063b9015c21146105fb578063bf590d851461060e5761032a565b8063ae132d31146105af578063ae94d130146105c2578063b203bb99146105d55761032a565b80638b5c22891161015b57806395d89b411161013557806395d89b411461058c578063a246e2c314610594578063a884105e1461059c5761032a565b80638b5c22891461055c5780638ba2fdec146105645780638da5cb5b146105775761032a565b806370783a531161018c57806370783a531461052e57806381b0867e1461054157806386c1c74d146105545761032a565b80635cbb7caa146104f557806362f2adb314610508578063707129391461051b5761032a565b806329e9e88211610276578063393ee0891161021f578063447bf085116101f9578063447bf085146104bc578063498b5ae8146104cf5780635c9c1fd1146104e25761032a565b8063393ee0891461047657806340e659e91461048957806342f1181e146104a95761032a565b80633502f73e116102505780633502f73e14610448578063365d1cec1461045b578063392e53cd1461046e5761032a565b806329e9e8821461040d578063313ce5671461042057806334004444146104355761032a565b80630ba36e2a116102d8578063197a8062116102b2578063197a8062146103ea578063238a4ae5146103fd578063246f8b96146104055761032a565b80630ba36e2a146103c55780630bc1c14c146103cd5780631763d4e7146103d55761032a565b806306fdde031161030957806306fdde031461037d5780630951b615146103925780630a4409a7146103a55761032a565b8062ce8e3e1461032c57806301ffc9a71461034a5780630537f6211461036a575b005b6103346106b0565b604051610341919061472e565b60405180910390f35b61035d61035836600461446f565b610715565b604051610341919061477b565b61032a61037836600461426a565b61074d565b6103856108ba565b6040516103419190614802565b61032a6103a03660046145ce565b610948565b6103b86103b3366004614178565b610a33565b6040516103419190614794565b61035d610a52565b61035d610a5b565b6103dd610a6d565b604051610341919061565d565b6103346103f836600461415e565b610a7c565b61035d610af5565b61032a610b08565b61035d61041b366004614178565b610b6d565b610428610b9d565b60405161034191906156c3565b61035d610443366004614178565b610ba6565b61032a610456366004614344565b610bc6565b6103b8610469366004614457565b610c0a565b61035d610c1c565b61032a6104843660046144ed565b610c25565b61049c610497366004614178565b610c60565b6040516103419190614786565b61032a6104b736600461415e565b610c79565b61032a6104ca36600461415e565b610cd3565b6103b86104dd366004614178565b610ce2565b61032a6104f036600461415e565b610d4f565b61033461050336600461415e565b610def565b61032a61051636600461415e565b610e66565b61032a61052936600461415e565b610f09565b61035d61053c36600461415e565b610fa1565b61032a61054f3660046141aa565b610fb6565b61049c610ff0565b61032a611000565b61032a6105723660046141e5565b611086565b61057f6110c8565b60405161034191906146f6565b6103856110d7565b6103346110e4565b61032a6105aa3660046145ce565b611147565b61057f6105bd36600461415e565b61122a565b61032a6105d03660046143a2565b611245565b6103b86105e3366004614178565b61139e565b61032a6105f63660046145ce565b6113ba565b61032a610609366004614178565b61145e565b61062161061c366004614497565b6114e2565b60405161034191906147cf565b61032a61063c3660046143a2565b6117c2565b61032a6117cf565b6103b8611848565b61032a61065f3660046145ce565b61184e565b61032a6106723660046143e4565b6119b5565b61032a61068536600461431b565b6119c5565b61069d610698366004614178565b6119d1565b604051610341979695949392919061479d565b6060600560010180548060200260200160405190810160405280929190818152602001828054801561070b57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116106ed575b5050505050905090565b60006001600160e01b031982166301ffc9a760e01b148061074557506001600160e01b03198216624c532760e41b145b90505b919050565b6012546001600160a01b031633146107805760405162461bcd60e51b8152600401610777906149de565b60405180910390fd5b610788613e67565b6001600160401b03808916825287166020820152600186810b810b604083015285810b900b606082015283151560808201526107c2613e95565b63ffffffff4281811683526000916107e09186918816908b8b6114e2565b600881810b900b602084015290506107f98c8c85611a5c565b6108048c8c84611cb2565b61080e8c8c611d96565b8a6001600160a01b03168c6001600160a01b03167f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c208c8c8c8c8c60405161085995949392919061568e565b60405180910390a38a6001600160a01b03168c6001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836040516108a491906147cf565b60405180910390a3505050505050505050505050565b600a80546108c790615957565b80601f01602080910402602001604051908101604052809291908181526020018280546108f390615957565b80156109405780601f1061091557610100808354040283529160200191610940565b820191906000526020600020905b81548152906001019060200180831161092357829003601f168201915b505050505081565b821580159061099d57508383600081811061097357634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610988919061415e565b6001600160a01b0316336001600160a01b0316145b6109b95760405162461bcd60e51b815260040161077790614bc9565b610a2b868686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8a018190048102820181019092528881529250889150879081908401838280828437600092019190915250611df092505050565b505050505050565b600080610a4084846120ff565b516001600160401b0316949350505050565b60095460ff1681565b60095465010000000000900460ff1681565b600954610100900461ffff1681565b6001600160a01b0381166000908152600e6020908152604091829020600101805483518184028101840190945280845260609392830182828015610ae957602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610acb575b50505050509050919050565b6009546601000000000000900460ff1681565b6012546001600160a01b03163314610b325760405162461bcd60e51b8152600401610777906149de565b601280546001600160a01b03191690556040517f85c61b2c3289f917426c03e630bbb09a3762d42c2080cc1ea57803fcd479bb6f90600090a1565b60095460009060ff1615610b8357506001610b97565b6000610b8f84846120ff565b608001519150505b92915050565b600c5460ff1681565b600160209081526000928352604080842090915290825290205460ff1681565b610c04848484848080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061220992505050565b50505050565b600d6020526000908152604090205481565b60075460ff1681565b601280546001600160a01b031916331790556009805460ff19166001179055610c5589898989898989898961252f565b505050505050505050565b600080610c6d84846120ff565b60400151949350505050565b3360008181526001602081815260408084206001600160a01b0387168086529252808420805460ff1916909317909255905190917ff92a3df90be9663e4fa8008da5af16eff9e227303d0a59fd3e7bd9fa2980d39b91a350565b33610cde8183612739565b5050565b6000816001600160a01b0316836001600160a01b03161015610d2257600d6000610d0c85856128a4565b8152602001908152602001600020549050610b97565b600d6000610d3085856128a4565b815260200190815260200160002054610d48906159c6565b9050610b97565b60095460ff1615610d725760405162461bcd60e51b815260040161077790614815565b6000610d7e33836128b7565b60a08101519091506001600160a01b0316610dab5760405162461bcd60e51b815260040161077790614f4f565b610db5338361295b565b6040516001600160a01b0383169033907f46814aaabccd0d590a16aa6c0f88ee4cfd871d7beb692b2998fda70433510a3290600090a35050565b6001600160a01b038116600090815260046020908152604091829020600101805483518184028101840190945280845260609392830182828015610ae9576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610acb5750505050509050919050565b6000610e7233836129aa565b9050610e8181600001516129dc565b15610e9e5760405162461bcd60e51b815260040161077790614b37565b610ea7816129fa565b816001600160a01b0316336001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836020015160200151604051610ef291906147cf565b60405180910390a3610cde33838360200151611cb2565b3360009081526001602090815260408083206001600160a01b038516845290915290205460ff16610f4c5760405162461bcd60e51b815260040161077790614b94565b3360008181526001602090815260408083206001600160a01b0386168085529252808320805460ff191690555190917ffe3265421a7458af9570e66dd7a92be646934442be69fa65895b948a0e20f0a091a350565b60006020819052908152604090205460ff1681565b6012546001600160a01b03163314610fe05760405162461bcd60e51b8152600401610777906149de565b610feb838383612a46565b505050565b6009546301000000900460010b81565b6012546001600160a01b0316331461102a5760405162461bcd60e51b8152600401610777906149de565b60095460ff1615156001146110515760405162461bcd60e51b8152600401610777906149a7565b6009805460ff191690556040517f1cf27a9544d54369d4ec6b136f8521f807c310e33c00115f99d9863871b55a4590600090a1565b6012546001600160a01b031633146110b05760405162461bcd60e51b8152600401610777906149de565b6110bf87878787878787612b9a565b50505050505050565b6012546001600160a01b031681565b600b80546108c790615957565b6060600f60010180548060200260200160405190810160405280929190818152602001828054801561070b576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116106ed575050505050905090565b821580159061119c57508383600081811061117257634e487b7160e01b600052603260045260246000fd5b9050602002016020810190611187919061415e565b6001600160a01b0316336001600160a01b0316145b6111b85760405162461bcd60e51b815260040161077790614bc9565b610a2b868686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8a018190048102820181019092528881529250889150879081908401838280828437600092019190915250612c5092505050565b6011602052600090815260409020546001600160a01b031681565b600061125133856129aa565b905061125c816129fa565b816001600160401b031681602001516020015160080b13156112905760405162461bcd60e51b8152600401610777906148b6565b826001600160401b031681602001516020015160080b12156112c45760405162461bcd60e51b815260040161077790614e8d565b604080516002808252606082018352600092602083019080368337019050509050338160008151811061130757634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050848160018151811061134957634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505061138d82602001516020015160008360405180602001604052806000815250612c50565b6113973386612739565b5050505050565b6000806113ab8484612ebb565b6020015160080b949350505050565b3360009081526020819052604090205460ff1680611442575082158015906114425750600160008585600081811061140257634e487b7160e01b600052603260045260246000fd5b9050602002016020810190611417919061415e565b6001600160a01b031681526020808201929092526040908101600090812033825290925290205460ff165b6111b85760405162461bcd60e51b815260040161077790614d20565b6012546001600160a01b031633146114885760405162461bcd60e51b8152600401610777906149de565b6001600160a01b0382811660008181526011602052604080822080546001600160a01b0319169486169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a35050565b60006001600160401b03600887900b13801590611514575061150a6001600160401b036159e0565b60080b8660080b12155b6115305760405162461bcd60e51b8152600401610777906154bd565b838511156115505760405162461bcd60e51b815260040161077790614872565b6000808760080b1315611564575082611573565b60008760080b12156115735750815b8060010b6000141561158857869150506117b9565b60006115948787615909565b9050600888900b8060008312156115bb57634e487b7160e01b600052600160045260246000fd5b60015b600f81136116fb576000846115d7600188900b866157d1565b6115e191906157d1565b905080158015906116095750836115fc86600189900b6157d1565b611606908361577d565b14155b1561165b5760008660010b13156116505760008c60080b1315611635576001600160401b03925061164b565b6116456001600160401b036159e0565b60080b92505b611655565b600092505b506116fb565b8161166c6301e133806127106157d1565b61167691906157d1565b611680908261577d565b93508361168d57506116fb565b8261169885826156fa565b93506000811380156116aa5750600085135b156116c057600084136116c05792506116fb9050565b6000811280156116d05750600085125b156116e657600084126116e65792506116fb9050565b505080806116f390615992565b9150506115be565b5060008460010b1315611751576001600160401b0381131561172157506001600160401b035b6117316001600160401b036159e0565b60080b8112156117515761174b6001600160401b036159e0565b60080b90505b60008460010b12156117995760008a60080b13801561177257508960080b81135b1561177b575060005b60008a60080b12801561179057508960080b81125b15611799575060005b60006117a960088c900b836157d1565b12156117b3575060005b93505050505b95945050505050565b33610c0481858585612f6a565b6008546117ee5760405162461bcd60e51b815260040161077790615157565b4260085411156118105760405162461bcd60e51b815260040161077790614f86565b6009805460ff191660011790556040517f8d522fe0692f19bce789ee1908909a9da1d904e3b1d504672ab601bd5b25841d90600090a1565b60085481565b60008484600081811061187157634e487b7160e01b600052603260045260246000fd5b9050602002016020810190611886919061415e565b905060008585611897600182615909565b8181106118b457634e487b7160e01b600052603260045260246000fd5b90506020020160208101906118c9919061415e565b90506001600160a01b03811633146118f35760405162461bcd60e51b81526004016107779061541b565b876001600160401b03166119078383610ce2565b12156119255760405162461bcd60e51b81526004016107779061551a565b61193982828a6001600160401b0316612fbf565b6119ab888888888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a9150899081908401838280828437600092019190915250611df092505050565b5050505050505050565b336110bf81888888888888612fd3565b80610feb338483612a46565b6000806000806000806000806119e78a8a6129aa565b80518051602082015160408301516060840151608090940151949550919390929080611a15575060095460ff165b60209586015180519601516001600160401b039586169d50939094169a50600191820b9950900b965090945063ffffffff909116925060080b905092959891949750929550565b60095465010000000000900460ff16611adc576009546040820151600190810b6301000000909204810b900b14611aa357634e487b7160e01b600052600160045260246000fd5b6009546060820151600190810b6301000000909204810b900b14611ad757634e487b7160e01b600052600160045260246000fd5b611b28565b6000816040015160010b1215611b0257634e487b7160e01b600052600160045260246000fd5b6000816060015160010b1215611b2857634e487b7160e01b600052600160045260246000fd5b600060026000611b3886866128a4565b81526020019081526020016000206000019050826001600160a01b0316846001600160a01b03161015611c0b578151815460208401516040850151606086015160808701511515600160a01b0260ff60a01b19600192830b61ffff908116600160901b0261ffff60901b199590940b16600160801b0261ffff60801b196001600160401b03968716600160401b026fffffffffffffffff0000000000000000199790991667ffffffffffffffff199098169790971795909516969096179490941692909217161791909116178155610c04565b6020820151815483516060850151604086015160808701511515600160a01b0260ff60a01b19600192830b61ffff908116600160901b0261ffff60901b199590940b16600160801b0261ffff60801b196001600160401b03968716600160401b026fffffffffffffffff0000000000000000199790991667ffffffffffffffff19909816979097179590951696909617949094169290921716179190911617815550505050565b600060026000611cc286866128a4565b81526020019081526020016000206001019050826001600160a01b0316846001600160a01b03161015611d3d5781518154602084015160080b68ffffffffffffffffff16640100000000026cffffffffffffffffff000000001963ffffffff90931663ffffffff199092169190911791909116178155610c04565b8151815463ffffffff191663ffffffff9091161781556020820151611d61906159e0565b815460089190910b68ffffffffffffffffff16640100000000026cffffffffffffffffff000000001990911617815550505050565b611da1600583613351565b611dac600582613351565b6001600160a01b0382166000908152600460205260409020611dce9082613351565b6001600160a01b0381166000908152600460205260409020610cde9083613351565b6001825111611e115760405162461bcd60e51b815260040161077790615253565b836000600160ff1b806001835b60018851611e2c9190615909565b81101561204a57600088611e4183600161573a565b81518110611e5f57634e487b7160e01b600052603260045260246000fd5b602002602001015190506000898381518110611e8b57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600080611ea283856129aa565b9050611eb181600001516129dc565b15611ece5760405162461bcd60e51b815260040161077790614e26565b611ed7816129fa565b6020808201510151611ee9828c6133b6565b6009546601000000000000900460ff1615611f4757889750611f0b828261342a565b9850600082602001516020015160080b121596508789121580611f2b5750865b611f475760405162461bcd60e51b8152600401610777906151e8565b611f5684868460200151611cb2565b846001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a846020015160200151604051611fa191906147cf565b60405180910390a360028d51611fb79190615909565b861415611fc857505050505061204a565b611fe6611fd58c836134d7565b600954610100900461ffff16613564565b9250611ff2838c615920565b9a50611ffe838b615752565b99508d6001600160401b03168a6001600160401b031611156120325760405162461bcd60e51b8152600401610777906151a2565b50505050508080612042906159b2565b915050611e1e565b50866001885161205a9190615909565b8151811061207857634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316876000815181106120aa57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c168b896040516120ec92919061566c565b60405180910390a3505050505050505050565b612107613e67565b60006002600061211786866128a4565b81526020808201929092526040908101600020815160a08101835290546001600160401b038082168352600160401b82041693820193909352600160801b8304600190810b810b810b92820192909252600160901b8304820b820b90910b6060820152600160a01b90910460ff16151560808201529050612196613e67565b836001600160a01b0316856001600160a01b031610156121b7575080612201565b81516001600160401b03908116602080840191909152830151168152604080830151600190810b810b606080850191909152840151810b900b908201526080808301511515908201525b949350505050565b60038151101561222b5760405162461bcd60e51b815260040161077790614ed5565b8060008151811061224c57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316336001600160a01b0316146122845760405162461bcd60e51b8152600401610777906150d3565b80600182516122939190615909565b815181106122b157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316336001600160a01b0316146122e95760405162461bcd60e51b815260040161077790614dc9565b600061231d8260008151811061230f57634e487b7160e01b600052603260045260246000fd5b6020026020010151856129aa565b905061232c81600001516129dc565b156123495760405162461bcd60e51b81526004016107779061510a565b612352816129fa565b6000816020015190506000816020015160080b131561241b57846001600160a01b03168360018151811061239657634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316146123c45760405162461bcd60e51b815260040161077790615389565b806020015160080b81602001516001600160401b0316146123f75760405162461bcd60e51b8152600401610777906153e6565b6124168160200151858560405180602001604052806000815250611df0565b6124fd565b6000816020015160080b12156124fd57846001600160a01b031683600285516124449190615909565b8151811061246257634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316146124905760405162461bcd60e51b815260040161077790614acf565b806020015161249e906159e0565b60080b81602001516124af906159e0565b6001600160401b0316146124d55760405162461bcd60e51b8152600401610777906153e6565b6124fd81602001516124e6906159e0565b858560405180602001604052806000815250612c50565b6113978360008151811061252157634e487b7160e01b600052603260045260246000fd5b602002602001015186612739565b60075460ff16156125525760405162461bcd60e51b815260040161077790615478565b6007805460ff1916600190811790915585900b158015906125705750835b1561258d5760405162461bcd60e51b815260040161077790614fd0565b6107d08560010b131580156125a857506107cf198560010b12155b6125c45760405162461bcd60e51b8152600401610777906155ae565b8215806125d657508280156125d65750835b6125f25760405162461bcd60e51b81526004016107779061528a565b8115806125fe57504282115b61261a5760405162461bcd60e51b8152600401610777906155f4565b8561ffff166001141561263f5760405162461bcd60e51b815260040161077790614d6c565b885161265290600a9060208c0190613eac565b50875161266690600b9060208b0190613eac565b50600c805460ff191660ff89161790556009805462ffff00191661010061ffff898116919091029190911764ffff00000019166301000000600189900b92909216919091021765ff0000000000191665010000000000861515021766ff0000000000001916660100000000000085151502179055600882905560005b815181101561272d5761271b82828151811061270e57634e487b7160e01b600052603260045260246000fd5b60200260200101516135b0565b80612725816159b2565b9150506126e2565b50505050505050505050565b60006127458383612ebb565b9050806020015160080b60001461276e5760405162461bcd60e51b815260040161077790614a72565b6127788383610b6d565b156127955760405162461bcd60e51b81526004016107779061510a565b60006127a184846128a4565b6000818152600360209081526040808320805474ffffffffffffffffffffffffffffffffffffffffff199081168255600191820180546001600160a01b031916905560028452828520805490911681550180546cffffffffffffffffffffffffff191690556001600160a01b03881683526004909152902090915061282690846135fc565b6001600160a01b038316600090815260046020526040902061284890856135fc565b826001600160a01b0316846001600160a01b03167f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c2060008060008060006040516128969594939291906147dd565b60405180910390a350505050565b60006128b0838361372c565b9392505050565b6128bf613f30565b6000600360006128cf86866128a4565b81526020808201929092526040908101600020815160c08101835281546001600160401b038082168352600160401b82041694820194909452600160801b8404600190810b810b810b93820193909352600160901b8404830b830b830b6060820152600160a01b90930460ff161515608084015201546001600160a01b031660a0820152949350505050565b6003600061296984846128a4565b81526020810191909152604001600020805474ffffffffffffffffffffffffffffffffffffffffff1916815560010180546001600160a01b03191690555050565b6129b2613f65565b6129ba613f65565b6129c484846120ff565b81526129d08484612ebb565b60208201529392505050565b60095460009060ff16156129f257506001610748565b506080015190565b60208082015190810151905182516040810151606090910151612a26939263ffffffff169142916114e2565b60209182018051600892830b90920b91909201525163ffffffff42169052565b6000600d6000612a5686866128a4565b81526020019081526020016000205490506000836001600160a01b0316856001600160a01b03161015612af957612a8d83836156fa565b9050612a98816137ef565b80600d6000612aa788886128a4565b8152602001908152602001600020819055507fb0fd525375cf2d63db200a0701eb5b6f384df5d85b2ed3abb8460b7c51a8128e858583604051612aec9392919061470a565b60405180910390a1612b7b565b612b02836159c6565b612b0c90836156fa565b9050612b17816137ef565b80600d6000612b2688886128a4565b81526020810191909152604001600020557fb0fd525375cf2d63db200a0701eb5b6f384df5d85b2ed3abb8460b7c51a8128e8585612b63846159c6565b604051612b729392919061470a565b60405180910390a15b8015612b9057612b8b8585613816565b611397565b6113978585613870565b612bf487876040518060c00160405280896001600160401b03168152602001886001600160401b031681526020018760010b81526020018660010b815260200185151581526020018b6001600160a01b0316815250613914565b856001600160a01b0316876001600160a01b03167f5a556eea24d64e436a7874b016114fc608d6c738dbf507317c581a363931f0228787878787604051612c3f95949392919061568e565b60405180910390a350505050505050565b6001825111612c715760405162461bcd60e51b815260040161077790615253565b600084905060008060008060019050600060018851612c909190615909565b90505b801561204a576000888281518110612cbb57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600089600184612cd59190615909565b81518110612cf357634e487b7160e01b600052603260045260246000fd5b60200260200101519050600080612d0a83856129aa565b9050612d1981600001516129dc565b15612d365760405162461bcd60e51b815260040161077790614e26565b612d3f816129fa565b60018c51612d4d9190615909565b851415612d5d5760009150612d86565b612d83612d728b8360200151602001516134d7565b600954610100900461ffff16613ad3565b91505b612d90828b615752565b9950612d9c828a615752565b98508c6001600160401b0316896001600160401b03161115612dd05760405162461bcd60e51b8152600401610777906151a2565b6020808201510151612de2828c6133b6565b6009546601000000000000900460ff1615612e4157889750612e04828261342a565b98508789131580612e125750865b612e2e5760405162461bcd60e51b8152600401610777906151e8565b600082602001516020015160080b121596505b612e5084868460200151611cb2565b846001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a846020015160200151604051612e9b91906147cf565b60405180910390a350505050508080612eb390615940565b915050612c93565b612ec3613e95565b600060026000612ed386866128a4565b8152602080820192909252604090810160002081518083019092526001015463ffffffff811682526401000000009004600890810b810b900b918101919091529050612f1d613e95565b836001600160a01b0316856001600160a01b03161015612f3e575080612201565b815163ffffffff1681526020820151612f56906159e0565b600890810b900b6020820152949350505050565b6009546301000000900460010b806000612f8487876120ff565b60808101516009549192509065010000000000900460ff1615612fb05781604001519350816060015192505b6119ab88888888888887612fd3565b80610c048484612fce846159c6565b612a46565b60095460ff1615612ff65760405162461bcd60e51b815260040161077790614a15565b600061300288886120ff565b905061300d816129dc565b156130305781156130305760405162461bcd60e51b815260040161077790614c0c565b60095465010000000000900460ff16806130775750600954600185810b6301000000909204810b900b1480156130775750600954600184810b6301000000909204810b900b145b6130935760405162461bcd60e51b815260040161077790614cb0565b60095465010000000000900460ff16156131495760008460010b121580156130bf575060008360010b12155b6130db5760405162461bcd60e51b8152600401610777906152f7565b6107d08460010b131580156130f657506107cf198460010b12155b6131125760405162461bcd60e51b81526004016107779061508a565b6107d08360010b1315801561312d57506107cf198360010b12155b6131495760405162461bcd60e51b8152600401610777906148fe565b80600001516001600160401b0316866001600160401b031611158015613185575080602001516001600160401b0316856001600160401b031611155b801561319b5750806040015160010b8460010b13155b80156131b05750806060015160010b8360010b145b80156131c3575080608001511515821515145b80156131d157508060800151155b156132655780516001600160401b03161580156131f9575060208101516001600160401b0316155b801561320a5750604081015160010b155b801561321b5750606081015160010b155b801561322957506080810151155b156132465760405162461bcd60e51b815260040161077790615577565b613250888861295b565b61325f88888888888888613b14565b506110bf565b600061327189896128b7565b9050876001600160a01b03168160a001516001600160a01b031614156133425780600001516001600160401b0316866001600160401b0316111580156132cd575080602001516001600160401b0316876001600160401b031611155b80156132e35750806060015160010b8560010b13155b80156132f85750806040015160010b8460010b145b801561330b575080608001511515831515145b1561332e5761331a898961295b565b613329888a888a888a89613b14565b61333d565b61333d89898989898989612b9a565b610c55565b610c5589898989898989612b9a565b6001600160a01b03811660009081526020839052604090208054610feb5760018084015461337e9161573a565b81556001808401805491820181556000908152602090200180546001600160a01b0384166001600160a01b0319909116179055505050565b6000816001600160401b03168360200151602001516133d59190615893565b8351602001519091506001600160401b0381166133f1836159e0565b60080b13156134125760405162461bcd60e51b81526004016107779061502d565b50602092830151600891820b90910b92019190915250565b602080830151015160009081613447600883810b9086900b615854565b905060008460080b136134795784516060015160010b613466826159c6565b61347091906157d1565b92505050610b97565b60008260080b126134965784516040015160010b613466826159c6565b8451606001516134ad9060010b600884900b6157d1565b85516040015160010b6134c3600887900b6159c6565b6134cd91906157d1565b61347091906156fa565b60006001600160401b038316600883900b82121561352257613502836001600160401b038616615893565b9050836001600160401b03168160080b1315613522576000915050610b97565b60008160080b13613537576000915050610b97565b806001600160401b038116600882900b146122015760405162461bcd60e51b815260040161077790614c69565b600061ffff8216158061357e57506001600160401b038316155b1561358b57506000610b97565b61ffff821661359b600185615920565b6135a591906157ab565b6128b0906001615752565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517fa491c3daa0c7408c73f5c3bbfb2b1501b2a7ace3e155dc9cc059fad331ce844f9190a250565b6001600160a01b0381166000908152602083905260409020805415610feb576001808401805460009261362e91615909565b8154811061364c57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015482546001600160a01b03909116915081906001868101916136799190615909565b8154811061369757634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550836001018054806136e657634e487b7160e01b600052603160045260246000fd5b60008281526020808220600019908401810180546001600160a01b031916905590920190925583546001600160a01b039390931682529490945260408420559190915550565b6000816001600160a01b0316836001600160a01b031614156137605760405162461bcd60e51b81526004016107779061494a565b816001600160a01b0316836001600160a01b031610156137aa57828260405160200161378d9291906146cf565b604051602081830303815290604052805190602001209050610b97565b816001600160a01b0316836001600160a01b031611156137d757818360405160200161378d9291906146cf565b60405162461bcd60e51b815260040161077790614f18565b600160ff1b8114156138135760405162461bcd60e51b815260040161077790615342565b50565b613821600f83613351565b61382c600f82613351565b6001600160a01b0382166000908152600e6020526040902061384e9082613351565b6001600160a01b0381166000908152600e60205260409020610cde9083613351565b6001600160a01b0382166000908152600e6020526040902061389290826135fc565b6001600160a01b0381166000908152600e602052604090206138b490836135fc565b6001600160a01b0382166000908152600e602052604090206138d590613b2d565b6138e4576138e4600f836135fc565b6001600160a01b0381166000908152600e6020526040902061390590613b2d565b610cde57610cde600f826135fc565b60095465010000000000900460ff16613994576009546040820151600190810b6301000000909204810b900b1461395b57634e487b7160e01b600052600160045260246000fd5b6009546060820151600190810b6301000000909204810b900b1461398f57634e487b7160e01b600052600160045260246000fd5b6139e0565b6000816040015160010b12156139ba57634e487b7160e01b600052600160045260246000fd5b6000816060015160010b12156139e057634e487b7160e01b600052600160045260246000fd5b6000600360006139f086866128a4565b81526020808201929092526040908101600020845181549386015192860151606087015160a0880151600180860180546001600160a01b0319166001600160a01b039093169290921790915560809098015167ffffffffffffffff199096166001600160401b03938416176fffffffffffffffff00000000000000001916600160401b93909516929092029390931761ffff60801b1916600160801b93870b61ffff908116949094021761ffff60901b1916600160901b9190960b92909216919091029390931760ff60a01b1916600160a01b9115159190910217909155505050565b600061ffff82161580613aed57506001600160401b038316155b15613afa57506000610b97565b613b056001836158e6565b61ffff1661359b600185615920565b613b1e8787613b34565b6110bf87878787878787613ceb565b6001015490565b6001600160a01b0382811660009081526011602052604090205416613c72576001600160a01b0381811660009081526011602052604090205416613c17576001600160a01b03828116600081815260116020526040808220805460016001600160a01b03199182168117909255948616835281832080549095168117909455519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a36040516001600160a01b038216906001907f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f90600090a3610cde565b6001600160a01b0382811660008181526011602052604080822080546001600160a01b0319169486169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a3610cde565b6001600160a01b0381811660009081526011602052604090205416610cde576001600160a01b0381811660008181526011602052604080822080546001600160a01b0319169487169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a35050565b6000613cf788886129aa565b905080600001516040015160010b8460010b141580613d24575080600001516060015160010b8360010b14155b8015613d395750602080820151015160080b15155b15613d9b57613d47816129fa565b866001600160a01b0316886001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836020015160200151604051613d9291906147cf565b60405180910390a35b613da58888611d96565b80516001600160401b0380881690915281519086166020918201528151600186810b810b604090920191909152825185820b90910b6060909101528151831515608090910152810151613dfb9089908990611cb2565b613e0a88888360000151611a5c565b866001600160a01b0316886001600160a01b03167f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c208888888888604051613e5595949392919061568e565b60405180910390a35050505050505050565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604080518082019091526000808252602082015290565b828054613eb890615957565b90600052602060002090601f016020900481019282613eda5760008555613f20565b82601f10613ef357805160ff1916838001178555613f20565b82800160010185558215613f20579182015b82811115613f20578251825591602001919060010190613f05565b50613f2c929150613f8a565b5090565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b6040518060400160405280613f78613e67565b8152602001613f85613e95565b905290565b5b80821115613f2c5760008155600101613f8b565b80356001600160a01b038116811461074857600080fd5b60008083601f840112613fc7578182fd5b5081356001600160401b03811115613fdd578182fd5b6020830191508360208083028501011115613ff757600080fd5b9250929050565b600082601f83011261400e578081fd5b813560206001600160401b0382111561402957614029615a33565b8082026140378282016156d1565b838152828101908684018388018501891015614051578687fd5b8693505b8584101561407a5761406681613f9f565b835260019390930192918401918401614055565b50979650505050505050565b8035801515811461074857600080fd5b8035600181900b811461074857600080fd5b8035600881900b811461074857600080fd5b600082601f8301126140ca578081fd5b81356001600160401b038111156140e3576140e3615a33565b6140f6601f8201601f19166020016156d1565b81815284602083860101111561410a578283fd5b816020850160208301379081016020019190915292915050565b803561ffff8116811461074857600080fd5b80356001600160401b038116811461074857600080fd5b803560ff8116811461074857600080fd5b60006020828403121561416f578081fd5b6128b082613f9f565b6000806040838503121561418a578081fd5b61419383613f9f565b91506141a160208401613f9f565b90509250929050565b6000806000606084860312156141be578081fd5b6141c784613f9f565b92506141d560208501613f9f565b9150604084013590509250925092565b600080600080600080600060e0888a0312156141ff578283fd5b61420888613f9f565b965061421660208901613f9f565b955061422460408901614136565b945061423260608901614136565b935061424060808901614096565b925061424e60a08901614096565b915061425c60c08901614086565b905092959891949750929550565b60008060008060008060008060006101208a8c031215614288578182fd5b6142918a613f9f565b985061429f60208b01613f9f565b97506142ad60408b01614136565b96506142bb60608b01614136565b95506142c960808b01614096565b94506142d760a08b01614096565b93506142e560c08b01614086565b925060e08a013563ffffffff811681146142fd578283fd5b915061430c6101008b016140a8565b90509295985092959850929598565b6000806040838503121561432d578182fd5b61433683613f9f565b946020939093013593505050565b60008060008060608587031215614359578182fd5b61436285613f9f565b935061437060208601614136565b925060408501356001600160401b0381111561438a578283fd5b61439687828801613fb6565b95989497509550505050565b6000806000606084860312156143b6578081fd5b6143bf84613f9f565b92506143cd60208501614136565b91506143db60408501614136565b90509250925092565b60008060008060008060c087890312156143fc578384fd5b61440587613f9f565b955061441360208801614136565b945061442160408801614136565b935061442f60608801614096565b925061443d60808801614096565b915061444b60a08801614086565b90509295509295509295565b600060208284031215614468578081fd5b5035919050565b600060208284031215614480578081fd5b81356001600160e01b0319811681146128b0578182fd5b600080600080600060a086880312156144ae578283fd5b6144b7866140a8565b945060208601359350604086013592506144d360608701614096565b91506144e160808701614096565b90509295509295909350565b60008060008060008060008060006101208a8c03121561450b578283fd5b89356001600160401b0380821115614521578485fd5b61452d8d838e016140ba565b9a5060208c0135915080821115614542578485fd5b61454e8d838e016140ba565b995061455c60408d0161414d565b985061456a60608d01614124565b975061457860808d01614096565b965061458660a08d01614086565b955061459460c08d01614086565b945060e08c013593506101008c01359150808211156145b1578283fd5b506145be8c828d01613ffe565b9150509295985092959850929598565b600080600080600080608087890312156145e6578384fd5b6145ef87614136565b95506145fd60208801614136565b945060408701356001600160401b0380821115614618578586fd5b6146248a838b01613fb6565b9096509450606089013591508082111561463c578384fd5b818901915089601f83011261464f578384fd5b81358181111561465d578485fd5b8a602082850101111561466e578485fd5b6020830194508093505050509295509295509295565b60008151808452815b818110156146a95760208185018101518683018201520161468d565b818111156146ba5782602083870101525b50601f01601f19169290920160200192915050565b6bffffffffffffffffffffffff19606093841b811682529190921b16601482015260280190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6020808252825182820181905260009190848201906040850190845b8181101561476f5783516001600160a01b03168352928401929184019160010161474a565b50909695505050505050565b901515815260200190565b60019190910b815260200190565b90815260200190565b9687526020870195909552604086019390935260608501919091521515608084015260a083015260c082015260e00190565b60089190910b815260200190565b9485526020850193909352604084019190915260608301521515608082015260a00190565b6000602082526128b06020830184614684565b6020808252603c908201527f546865206e6574776f726b2069732066726f7a656e3b2074727573746c696e6560408201527f73207570646174652063616e6e6f742062652063616e63656c65642e00000000606082015260800190565b60208082526024908201527f5f737461727454696d652073686f756c64206265206265666f7265205f656e6460408201526354696d6560e01b606082015260800190565b60208082526028908201527f42616c616e6365206f6e2074727573746c696e652065786365656473205f6d616040820152677842616c616e636560c01b606082015260800190565b6020808252602c908201527f496e7465726573747320726174652072656365697665642063616e6e6f74206560408201526b3c31b2b2b21015969918129760a11b606082015260800190565b6020808252602e908201527f556e69717565206964656e74696669657273207265717569726520646966666560408201527f72656e7420616464726573736573000000000000000000000000000000000000606082015260800190565b60208082526015908201527f4e6574776f726b206973206e6f742066726f7a656e0000000000000000000000604082015260600190565b60208082526017908201527f43616c6c6572206973206e6f7420746865206f776e6572000000000000000000604082015260600190565b60208082526037908201527f546865206e6574776f726b2069732066726f7a656e20616e642074727573746c60408201527f696e65732063616e6e6f7420626520757064617465642e000000000000000000606082015260800190565b60208082526036908201527f412074727573746c696e652063616e206f6e6c7920626520636c6f736564206960408201527f66206974732062616c616e6365206973207a65726f2e00000000000000000000606082015260800190565b60208082526042908201527f5365636f6e6420746f206c61737420656c656d656e74206f662070617468206460408201527f6f6573206e6f74206d61746368205f6f74686572506172747920616464726573606082015261399760f11b608082015260a00190565b6020808252602f908201527f43616e6e6f74206170706c7920696e746572657374732c20746865207472757360408201527f746c696e652069732066726f7a656e0000000000000000000000000000000000606082015260800190565b6020808252818101527f546172676574206e6f7420617574686f72697a65642062792073656e6465722e604082015260600190565b60208082526023908201527f5468652070617468206d7573742073746172742077697468206d73672e73656e6040820152623232b960e91b606082015260800190565b6020808252603a908201527f54727573746c696e652069732066726f7a656e2c2069742063616e6e6f74206260408201527f65207570646174656420756e6c65737320756e66726f7a656e2e000000000000606082015260800190565b60208082526027908201527f54686520696d62616c616e636520646f6573206e6f742066697420696e746f206040820152663ab4b73a1b1a1760c91b606082015260800190565b6020808252604a908201527f496e74657265737420726174657320676976656e20616e64207265636569766560408201527f64206d75737420626520657175616c20746f2064656661756c7420696e74657260608201526932b9ba103930ba32b99760b11b608082015260a00190565b6020808252602c908201527f5468652073656e646572206f6620746865206d657373616765206973206e6f7460408201526b1030baba3437b934bd32b21760a11b606082015260800190565b6020808252603c908201527f546f6f206c6f7720696d62616c616e6365206665652064697669736f722c206660408201527f6565732063616e206e6f74206265206d6f7265207468616e2035302500000000606082015260800190565b6020808252602f908201527f4c61737420656c656d656e74206f66207061746820646f6573206e6f74206d6160408201527f746368206d73672e73656e6465722e0000000000000000000000000000000000606082015260800190565b60208082526041908201527f546865207061746820676976656e20697320696e636f72726563743a206f6e6560408201527f2074727573746c696e6520696e2074686520706174682069732066726f7a656e6060820152601760f91b608082015260a00190565b60208082526028908201527f42616c616e6365206f6e2074727573746c696e652065786365656473205f6d696040820152676e42616c616e636560c01b606082015260800190565b60208082526023908201527f5061746820676976656e20746f6f2073686f727420746f20626520636f72726560408201526231ba1760e91b606082015260800190565b60208082526011908201527f556e726561636861626c6520636f64652e000000000000000000000000000000604082015260600190565b60208082526015908201527f4e6f207265717565737420746f2064656c6574652e0000000000000000000000604082015260600190565b6020808252602a908201527f5468652063757272656e6379206e6574776f726b2063616e6e6f7420626520666040820152693937bd32b7103cb2ba1760b11b606082015260800190565b6020808252603d908201527f437573746f6d20696e7465726573747320617265207365743b2064656661756c60408201527f7420696e7465726573742072617465206d757374206265207a65726f2e000000606082015260800190565b6020808252603e908201527f546865207472616e736665727265642076616c7565206578636565647320746860408201527f65206361706163697479206f662074686520637265646974206c696e652e0000606082015260800190565b60208082526029908201527f496e74657265737473207261746520676976656e2063616e6e6f74206578636560408201526832b21015969918129760b91b606082015260800190565b6020808252601b908201527f50617468206d757374207374617274206d73672e73656e6465722e0000000000604082015260600190565b6020808252602d908201527f5468652074727573746c696e652069732066726f7a656e20616e642063616e6e60408201526c37ba1031329031b637b9b2b21760991b606082015260800190565b6020808252602b908201527f5468652063757272656e6379206e6574776f726b206861732064697361626c6560408201526a3210333932b2bd34b7339760a91b606082015260800190565b60208082526026908201527f54686520666565732065786365656420746865206d617820666565207061726160408201526536b2ba32b91760d11b606082015260800190565b60208082526045908201527f546865207472616e73666572207761732070726576656e74656420627920746860408201527f652070726576656e74206d65646961746f7220696e7465726573747320737472606082015264617465677960d81b608082015260a00190565b6020808252600f908201527f5061746820746f6f2073686f72742e0000000000000000000000000000000000604082015260600190565b60208082526047908201527f50726576656e74206d65646961746f7220696e7465726573742063616e6e6f7460408201527f2062652073657420776974686f7574207573696e6720637573746f6d20696e7460608201526632b932b9ba399760c91b608082015260a00190565b6020808252602b908201527f4f6e6c7920706f73697469766520696e7465726573742072617465732061726560408201526a1039bab83837b93a32b21760a91b606082015260800190565b60208082526027908201527f50726576656e74207573696e672076616c756520666f72206d696e7573206f7660408201526632b9333637bb9760c91b606082015260800190565b6020808252603a908201527f5365636f6e6420656c656d656e74206f66207061746820646f6573206e6f742060408201527f6d61746368205f6f74686572506172747920616464726573732e000000000000606082015260800190565b6020808252818101527f43616e6e6f74207472616e7366657220746f6f20686967682076616c7565732e604082015260600190565b60208082526033908201527f546865207472616e736665722063616e206f6e6c7920626520696e697469617460408201527f656420627920746865206372656469746f722e00000000000000000000000000606082015260800190565b60208082526025908201527f43757272656e6379204e6574776f726b20616c726561647920696e697469616c60408201526434bd32b21760d91b606082015260800190565b6020808252603d908201527f5468652066756e6374696f6e20726571756972657320746865205f62616c616e60408201527f636520746f2066697420696e746f2061203634206269742076616c7565000000606082015260800190565b60208082526038908201527f5468652073656e64657220646f6573206e6f742068617665207375636820646560408201527f627420746f7761726473207468652072656365697665722e0000000000000000606082015260800190565b6020808252601c908201527f43616e206e6f74206f70656e207a65726f2074727573746c696e652e00000000604082015260600190565b60208082526026908201527f44656661756c7420696e746572657374732063616e6e6f74206578636565642060408201526515969918129760d11b606082015260800190565b60208082526043908201527f45787069726174696f6e2074696d65206d75737420626520656974686572206960408201527f6e2074686520667574757265206f72207a65726f20746f2064697361626c652060608201526234ba1760e91b608082015260a00190565b61ffff91909116815260200190565b60006001600160401b0384168252604060208301526122016040830184614684565b6001600160401b039586168152939094166020840152600191820b6040840152900b6060820152901515608082015260a00190565b60ff91909116815260200190565b6040518181016001600160401b03811182821017156156f2576156f2615a33565b604052919050565b6000808212826001600160ff1b030384138115161561571b5761571b615a07565b600160ff1b839003841281161561573457615734615a07565b50500190565b6000821982111561574d5761574d615a07565b500190565b60006001600160401b0380831681851680830382111561577457615774615a07565b01949350505050565b60008261578c5761578c615a1d565b600160ff1b8214600019841416156157a6576157a6615a07565b500590565b60006001600160401b03808416806157c5576157c5615a1d565b92169190910492915050565b60006001600160ff1b03818413828413858304851182821616156157f7576157f7615a07565b600160ff1b8487128281168783058912161561581557615815615a07565b85871292508782058712848416161561583057615830615a07565b8785058712818416161561584657615846615a07565b505050929093029392505050565b60008083128015600160ff1b85018412161561587257615872615a07565b836001600160ff1b0301831381161561588d5761588d615a07565b50500390565b60008160080b8360080b82811281687fffffffffffffffff19018312811516156158bf576158bf615a07565b81687fffffffffffffffff0183138116156158dc576158dc615a07565b5090039392505050565b600061ffff8381169083168181101561590157615901615a07565b039392505050565b60008282101561591b5761591b615a07565b500390565b60006001600160401b038381169083168181101561590157615901615a07565b60008161594f5761594f615a07565b506000190190565b60028104600182168061596b57607f821691505b6020821081141561598c57634e487b7160e01b600052602260045260246000fd5b50919050565b60006001600160ff1b038214156159ab576159ab615a07565b5060010190565b60006000198214156159ab576159ab615a07565b6000600160ff1b8214156159dc576159dc615a07565b0390565b60008160080b687fffffffffffffffff19811415615a0057615a00615a07565b9003919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212206ecf2f7bd55833bf18a66b1f79dfaa36f6dba6fdfa9c59f91f11a7b85aabc5ee64736f6c63430008000033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061032a5760003560e01c80635cbb7caa116101b2578063ae132d31116100f9578063c0f60d8d116100a2578063de4afd691161007c578063de4afd6914610651578063f2351aa714610664578063f8585db314610677578063fd5908471461068a5761032a565b8063c0f60d8d1461062e578063cc07d30014610641578063da284dcc146106495761032a565b8063b61f3035116100d3578063b61f3035146105e8578063b9015c21146105fb578063bf590d851461060e5761032a565b8063ae132d31146105af578063ae94d130146105c2578063b203bb99146105d55761032a565b80638b5c22891161015b57806395d89b411161013557806395d89b411461058c578063a246e2c314610594578063a884105e1461059c5761032a565b80638b5c22891461055c5780638ba2fdec146105645780638da5cb5b146105775761032a565b806370783a531161018c57806370783a531461052e57806381b0867e1461054157806386c1c74d146105545761032a565b80635cbb7caa146104f557806362f2adb314610508578063707129391461051b5761032a565b806329e9e88211610276578063393ee0891161021f578063447bf085116101f9578063447bf085146104bc578063498b5ae8146104cf5780635c9c1fd1146104e25761032a565b8063393ee0891461047657806340e659e91461048957806342f1181e146104a95761032a565b80633502f73e116102505780633502f73e14610448578063365d1cec1461045b578063392e53cd1461046e5761032a565b806329e9e8821461040d578063313ce5671461042057806334004444146104355761032a565b80630ba36e2a116102d8578063197a8062116102b2578063197a8062146103ea578063238a4ae5146103fd578063246f8b96146104055761032a565b80630ba36e2a146103c55780630bc1c14c146103cd5780631763d4e7146103d55761032a565b806306fdde031161030957806306fdde031461037d5780630951b615146103925780630a4409a7146103a55761032a565b8062ce8e3e1461032c57806301ffc9a71461034a5780630537f6211461036a575b005b6103346106b0565b604051610341919061472e565b60405180910390f35b61035d61035836600461446f565b610715565b604051610341919061477b565b61032a61037836600461426a565b61074d565b6103856108ba565b6040516103419190614802565b61032a6103a03660046145ce565b610948565b6103b86103b3366004614178565b610a33565b6040516103419190614794565b61035d610a52565b61035d610a5b565b6103dd610a6d565b604051610341919061565d565b6103346103f836600461415e565b610a7c565b61035d610af5565b61032a610b08565b61035d61041b366004614178565b610b6d565b610428610b9d565b60405161034191906156c3565b61035d610443366004614178565b610ba6565b61032a610456366004614344565b610bc6565b6103b8610469366004614457565b610c0a565b61035d610c1c565b61032a6104843660046144ed565b610c25565b61049c610497366004614178565b610c60565b6040516103419190614786565b61032a6104b736600461415e565b610c79565b61032a6104ca36600461415e565b610cd3565b6103b86104dd366004614178565b610ce2565b61032a6104f036600461415e565b610d4f565b61033461050336600461415e565b610def565b61032a61051636600461415e565b610e66565b61032a61052936600461415e565b610f09565b61035d61053c36600461415e565b610fa1565b61032a61054f3660046141aa565b610fb6565b61049c610ff0565b61032a611000565b61032a6105723660046141e5565b611086565b61057f6110c8565b60405161034191906146f6565b6103856110d7565b6103346110e4565b61032a6105aa3660046145ce565b611147565b61057f6105bd36600461415e565b61122a565b61032a6105d03660046143a2565b611245565b6103b86105e3366004614178565b61139e565b61032a6105f63660046145ce565b6113ba565b61032a610609366004614178565b61145e565b61062161061c366004614497565b6114e2565b60405161034191906147cf565b61032a61063c3660046143a2565b6117c2565b61032a6117cf565b6103b8611848565b61032a61065f3660046145ce565b61184e565b61032a6106723660046143e4565b6119b5565b61032a61068536600461431b565b6119c5565b61069d610698366004614178565b6119d1565b604051610341979695949392919061479d565b6060600560010180548060200260200160405190810160405280929190818152602001828054801561070b57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116106ed575b5050505050905090565b60006001600160e01b031982166301ffc9a760e01b148061074557506001600160e01b03198216624c532760e41b145b90505b919050565b6012546001600160a01b031633146107805760405162461bcd60e51b8152600401610777906149de565b60405180910390fd5b610788613e67565b6001600160401b03808916825287166020820152600186810b810b604083015285810b900b606082015283151560808201526107c2613e95565b63ffffffff4281811683526000916107e09186918816908b8b6114e2565b600881810b900b602084015290506107f98c8c85611a5c565b6108048c8c84611cb2565b61080e8c8c611d96565b8a6001600160a01b03168c6001600160a01b03167f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c208c8c8c8c8c60405161085995949392919061568e565b60405180910390a38a6001600160a01b03168c6001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836040516108a491906147cf565b60405180910390a3505050505050505050505050565b600a80546108c790615957565b80601f01602080910402602001604051908101604052809291908181526020018280546108f390615957565b80156109405780601f1061091557610100808354040283529160200191610940565b820191906000526020600020905b81548152906001019060200180831161092357829003601f168201915b505050505081565b821580159061099d57508383600081811061097357634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610988919061415e565b6001600160a01b0316336001600160a01b0316145b6109b95760405162461bcd60e51b815260040161077790614bc9565b610a2b868686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8a018190048102820181019092528881529250889150879081908401838280828437600092019190915250611df092505050565b505050505050565b600080610a4084846120ff565b516001600160401b0316949350505050565b60095460ff1681565b60095465010000000000900460ff1681565b600954610100900461ffff1681565b6001600160a01b0381166000908152600e6020908152604091829020600101805483518184028101840190945280845260609392830182828015610ae957602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610acb575b50505050509050919050565b6009546601000000000000900460ff1681565b6012546001600160a01b03163314610b325760405162461bcd60e51b8152600401610777906149de565b601280546001600160a01b03191690556040517f85c61b2c3289f917426c03e630bbb09a3762d42c2080cc1ea57803fcd479bb6f90600090a1565b60095460009060ff1615610b8357506001610b97565b6000610b8f84846120ff565b608001519150505b92915050565b600c5460ff1681565b600160209081526000928352604080842090915290825290205460ff1681565b610c04848484848080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061220992505050565b50505050565b600d6020526000908152604090205481565b60075460ff1681565b601280546001600160a01b031916331790556009805460ff19166001179055610c5589898989898989898961252f565b505050505050505050565b600080610c6d84846120ff565b60400151949350505050565b3360008181526001602081815260408084206001600160a01b0387168086529252808420805460ff1916909317909255905190917ff92a3df90be9663e4fa8008da5af16eff9e227303d0a59fd3e7bd9fa2980d39b91a350565b33610cde8183612739565b5050565b6000816001600160a01b0316836001600160a01b03161015610d2257600d6000610d0c85856128a4565b8152602001908152602001600020549050610b97565b600d6000610d3085856128a4565b815260200190815260200160002054610d48906159c6565b9050610b97565b60095460ff1615610d725760405162461bcd60e51b815260040161077790614815565b6000610d7e33836128b7565b60a08101519091506001600160a01b0316610dab5760405162461bcd60e51b815260040161077790614f4f565b610db5338361295b565b6040516001600160a01b0383169033907f46814aaabccd0d590a16aa6c0f88ee4cfd871d7beb692b2998fda70433510a3290600090a35050565b6001600160a01b038116600090815260046020908152604091829020600101805483518184028101840190945280845260609392830182828015610ae9576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610acb5750505050509050919050565b6000610e7233836129aa565b9050610e8181600001516129dc565b15610e9e5760405162461bcd60e51b815260040161077790614b37565b610ea7816129fa565b816001600160a01b0316336001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836020015160200151604051610ef291906147cf565b60405180910390a3610cde33838360200151611cb2565b3360009081526001602090815260408083206001600160a01b038516845290915290205460ff16610f4c5760405162461bcd60e51b815260040161077790614b94565b3360008181526001602090815260408083206001600160a01b0386168085529252808320805460ff191690555190917ffe3265421a7458af9570e66dd7a92be646934442be69fa65895b948a0e20f0a091a350565b60006020819052908152604090205460ff1681565b6012546001600160a01b03163314610fe05760405162461bcd60e51b8152600401610777906149de565b610feb838383612a46565b505050565b6009546301000000900460010b81565b6012546001600160a01b0316331461102a5760405162461bcd60e51b8152600401610777906149de565b60095460ff1615156001146110515760405162461bcd60e51b8152600401610777906149a7565b6009805460ff191690556040517f1cf27a9544d54369d4ec6b136f8521f807c310e33c00115f99d9863871b55a4590600090a1565b6012546001600160a01b031633146110b05760405162461bcd60e51b8152600401610777906149de565b6110bf87878787878787612b9a565b50505050505050565b6012546001600160a01b031681565b600b80546108c790615957565b6060600f60010180548060200260200160405190810160405280929190818152602001828054801561070b576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116106ed575050505050905090565b821580159061119c57508383600081811061117257634e487b7160e01b600052603260045260246000fd5b9050602002016020810190611187919061415e565b6001600160a01b0316336001600160a01b0316145b6111b85760405162461bcd60e51b815260040161077790614bc9565b610a2b868686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8a018190048102820181019092528881529250889150879081908401838280828437600092019190915250612c5092505050565b6011602052600090815260409020546001600160a01b031681565b600061125133856129aa565b905061125c816129fa565b816001600160401b031681602001516020015160080b13156112905760405162461bcd60e51b8152600401610777906148b6565b826001600160401b031681602001516020015160080b12156112c45760405162461bcd60e51b815260040161077790614e8d565b604080516002808252606082018352600092602083019080368337019050509050338160008151811061130757634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050848160018151811061134957634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505061138d82602001516020015160008360405180602001604052806000815250612c50565b6113973386612739565b5050505050565b6000806113ab8484612ebb565b6020015160080b949350505050565b3360009081526020819052604090205460ff1680611442575082158015906114425750600160008585600081811061140257634e487b7160e01b600052603260045260246000fd5b9050602002016020810190611417919061415e565b6001600160a01b031681526020808201929092526040908101600090812033825290925290205460ff165b6111b85760405162461bcd60e51b815260040161077790614d20565b6012546001600160a01b031633146114885760405162461bcd60e51b8152600401610777906149de565b6001600160a01b0382811660008181526011602052604080822080546001600160a01b0319169486169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a35050565b60006001600160401b03600887900b13801590611514575061150a6001600160401b036159e0565b60080b8660080b12155b6115305760405162461bcd60e51b8152600401610777906154bd565b838511156115505760405162461bcd60e51b815260040161077790614872565b6000808760080b1315611564575082611573565b60008760080b12156115735750815b8060010b6000141561158857869150506117b9565b60006115948787615909565b9050600888900b8060008312156115bb57634e487b7160e01b600052600160045260246000fd5b60015b600f81136116fb576000846115d7600188900b866157d1565b6115e191906157d1565b905080158015906116095750836115fc86600189900b6157d1565b611606908361577d565b14155b1561165b5760008660010b13156116505760008c60080b1315611635576001600160401b03925061164b565b6116456001600160401b036159e0565b60080b92505b611655565b600092505b506116fb565b8161166c6301e133806127106157d1565b61167691906157d1565b611680908261577d565b93508361168d57506116fb565b8261169885826156fa565b93506000811380156116aa5750600085135b156116c057600084136116c05792506116fb9050565b6000811280156116d05750600085125b156116e657600084126116e65792506116fb9050565b505080806116f390615992565b9150506115be565b5060008460010b1315611751576001600160401b0381131561172157506001600160401b035b6117316001600160401b036159e0565b60080b8112156117515761174b6001600160401b036159e0565b60080b90505b60008460010b12156117995760008a60080b13801561177257508960080b81135b1561177b575060005b60008a60080b12801561179057508960080b81125b15611799575060005b60006117a960088c900b836157d1565b12156117b3575060005b93505050505b95945050505050565b33610c0481858585612f6a565b6008546117ee5760405162461bcd60e51b815260040161077790615157565b4260085411156118105760405162461bcd60e51b815260040161077790614f86565b6009805460ff191660011790556040517f8d522fe0692f19bce789ee1908909a9da1d904e3b1d504672ab601bd5b25841d90600090a1565b60085481565b60008484600081811061187157634e487b7160e01b600052603260045260246000fd5b9050602002016020810190611886919061415e565b905060008585611897600182615909565b8181106118b457634e487b7160e01b600052603260045260246000fd5b90506020020160208101906118c9919061415e565b90506001600160a01b03811633146118f35760405162461bcd60e51b81526004016107779061541b565b876001600160401b03166119078383610ce2565b12156119255760405162461bcd60e51b81526004016107779061551a565b61193982828a6001600160401b0316612fbf565b6119ab888888888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a9150899081908401838280828437600092019190915250611df092505050565b5050505050505050565b336110bf81888888888888612fd3565b80610feb338483612a46565b6000806000806000806000806119e78a8a6129aa565b80518051602082015160408301516060840151608090940151949550919390929080611a15575060095460ff165b60209586015180519601516001600160401b039586169d50939094169a50600191820b9950900b965090945063ffffffff909116925060080b905092959891949750929550565b60095465010000000000900460ff16611adc576009546040820151600190810b6301000000909204810b900b14611aa357634e487b7160e01b600052600160045260246000fd5b6009546060820151600190810b6301000000909204810b900b14611ad757634e487b7160e01b600052600160045260246000fd5b611b28565b6000816040015160010b1215611b0257634e487b7160e01b600052600160045260246000fd5b6000816060015160010b1215611b2857634e487b7160e01b600052600160045260246000fd5b600060026000611b3886866128a4565b81526020019081526020016000206000019050826001600160a01b0316846001600160a01b03161015611c0b578151815460208401516040850151606086015160808701511515600160a01b0260ff60a01b19600192830b61ffff908116600160901b0261ffff60901b199590940b16600160801b0261ffff60801b196001600160401b03968716600160401b026fffffffffffffffff0000000000000000199790991667ffffffffffffffff199098169790971795909516969096179490941692909217161791909116178155610c04565b6020820151815483516060850151604086015160808701511515600160a01b0260ff60a01b19600192830b61ffff908116600160901b0261ffff60901b199590940b16600160801b0261ffff60801b196001600160401b03968716600160401b026fffffffffffffffff0000000000000000199790991667ffffffffffffffff19909816979097179590951696909617949094169290921716179190911617815550505050565b600060026000611cc286866128a4565b81526020019081526020016000206001019050826001600160a01b0316846001600160a01b03161015611d3d5781518154602084015160080b68ffffffffffffffffff16640100000000026cffffffffffffffffff000000001963ffffffff90931663ffffffff199092169190911791909116178155610c04565b8151815463ffffffff191663ffffffff9091161781556020820151611d61906159e0565b815460089190910b68ffffffffffffffffff16640100000000026cffffffffffffffffff000000001990911617815550505050565b611da1600583613351565b611dac600582613351565b6001600160a01b0382166000908152600460205260409020611dce9082613351565b6001600160a01b0381166000908152600460205260409020610cde9083613351565b6001825111611e115760405162461bcd60e51b815260040161077790615253565b836000600160ff1b806001835b60018851611e2c9190615909565b81101561204a57600088611e4183600161573a565b81518110611e5f57634e487b7160e01b600052603260045260246000fd5b602002602001015190506000898381518110611e8b57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600080611ea283856129aa565b9050611eb181600001516129dc565b15611ece5760405162461bcd60e51b815260040161077790614e26565b611ed7816129fa565b6020808201510151611ee9828c6133b6565b6009546601000000000000900460ff1615611f4757889750611f0b828261342a565b9850600082602001516020015160080b121596508789121580611f2b5750865b611f475760405162461bcd60e51b8152600401610777906151e8565b611f5684868460200151611cb2565b846001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a846020015160200151604051611fa191906147cf565b60405180910390a360028d51611fb79190615909565b861415611fc857505050505061204a565b611fe6611fd58c836134d7565b600954610100900461ffff16613564565b9250611ff2838c615920565b9a50611ffe838b615752565b99508d6001600160401b03168a6001600160401b031611156120325760405162461bcd60e51b8152600401610777906151a2565b50505050508080612042906159b2565b915050611e1e565b50866001885161205a9190615909565b8151811061207857634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316876000815181106120aa57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c168b896040516120ec92919061566c565b60405180910390a3505050505050505050565b612107613e67565b60006002600061211786866128a4565b81526020808201929092526040908101600020815160a08101835290546001600160401b038082168352600160401b82041693820193909352600160801b8304600190810b810b810b92820192909252600160901b8304820b820b90910b6060820152600160a01b90910460ff16151560808201529050612196613e67565b836001600160a01b0316856001600160a01b031610156121b7575080612201565b81516001600160401b03908116602080840191909152830151168152604080830151600190810b810b606080850191909152840151810b900b908201526080808301511515908201525b949350505050565b60038151101561222b5760405162461bcd60e51b815260040161077790614ed5565b8060008151811061224c57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316336001600160a01b0316146122845760405162461bcd60e51b8152600401610777906150d3565b80600182516122939190615909565b815181106122b157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316336001600160a01b0316146122e95760405162461bcd60e51b815260040161077790614dc9565b600061231d8260008151811061230f57634e487b7160e01b600052603260045260246000fd5b6020026020010151856129aa565b905061232c81600001516129dc565b156123495760405162461bcd60e51b81526004016107779061510a565b612352816129fa565b6000816020015190506000816020015160080b131561241b57846001600160a01b03168360018151811061239657634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316146123c45760405162461bcd60e51b815260040161077790615389565b806020015160080b81602001516001600160401b0316146123f75760405162461bcd60e51b8152600401610777906153e6565b6124168160200151858560405180602001604052806000815250611df0565b6124fd565b6000816020015160080b12156124fd57846001600160a01b031683600285516124449190615909565b8151811061246257634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316146124905760405162461bcd60e51b815260040161077790614acf565b806020015161249e906159e0565b60080b81602001516124af906159e0565b6001600160401b0316146124d55760405162461bcd60e51b8152600401610777906153e6565b6124fd81602001516124e6906159e0565b858560405180602001604052806000815250612c50565b6113978360008151811061252157634e487b7160e01b600052603260045260246000fd5b602002602001015186612739565b60075460ff16156125525760405162461bcd60e51b815260040161077790615478565b6007805460ff1916600190811790915585900b158015906125705750835b1561258d5760405162461bcd60e51b815260040161077790614fd0565b6107d08560010b131580156125a857506107cf198560010b12155b6125c45760405162461bcd60e51b8152600401610777906155ae565b8215806125d657508280156125d65750835b6125f25760405162461bcd60e51b81526004016107779061528a565b8115806125fe57504282115b61261a5760405162461bcd60e51b8152600401610777906155f4565b8561ffff166001141561263f5760405162461bcd60e51b815260040161077790614d6c565b885161265290600a9060208c0190613eac565b50875161266690600b9060208b0190613eac565b50600c805460ff191660ff89161790556009805462ffff00191661010061ffff898116919091029190911764ffff00000019166301000000600189900b92909216919091021765ff0000000000191665010000000000861515021766ff0000000000001916660100000000000085151502179055600882905560005b815181101561272d5761271b82828151811061270e57634e487b7160e01b600052603260045260246000fd5b60200260200101516135b0565b80612725816159b2565b9150506126e2565b50505050505050505050565b60006127458383612ebb565b9050806020015160080b60001461276e5760405162461bcd60e51b815260040161077790614a72565b6127788383610b6d565b156127955760405162461bcd60e51b81526004016107779061510a565b60006127a184846128a4565b6000818152600360209081526040808320805474ffffffffffffffffffffffffffffffffffffffffff199081168255600191820180546001600160a01b031916905560028452828520805490911681550180546cffffffffffffffffffffffffff191690556001600160a01b03881683526004909152902090915061282690846135fc565b6001600160a01b038316600090815260046020526040902061284890856135fc565b826001600160a01b0316846001600160a01b03167f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c2060008060008060006040516128969594939291906147dd565b60405180910390a350505050565b60006128b0838361372c565b9392505050565b6128bf613f30565b6000600360006128cf86866128a4565b81526020808201929092526040908101600020815160c08101835281546001600160401b038082168352600160401b82041694820194909452600160801b8404600190810b810b810b93820193909352600160901b8404830b830b830b6060820152600160a01b90930460ff161515608084015201546001600160a01b031660a0820152949350505050565b6003600061296984846128a4565b81526020810191909152604001600020805474ffffffffffffffffffffffffffffffffffffffffff1916815560010180546001600160a01b03191690555050565b6129b2613f65565b6129ba613f65565b6129c484846120ff565b81526129d08484612ebb565b60208201529392505050565b60095460009060ff16156129f257506001610748565b506080015190565b60208082015190810151905182516040810151606090910151612a26939263ffffffff169142916114e2565b60209182018051600892830b90920b91909201525163ffffffff42169052565b6000600d6000612a5686866128a4565b81526020019081526020016000205490506000836001600160a01b0316856001600160a01b03161015612af957612a8d83836156fa565b9050612a98816137ef565b80600d6000612aa788886128a4565b8152602001908152602001600020819055507fb0fd525375cf2d63db200a0701eb5b6f384df5d85b2ed3abb8460b7c51a8128e858583604051612aec9392919061470a565b60405180910390a1612b7b565b612b02836159c6565b612b0c90836156fa565b9050612b17816137ef565b80600d6000612b2688886128a4565b81526020810191909152604001600020557fb0fd525375cf2d63db200a0701eb5b6f384df5d85b2ed3abb8460b7c51a8128e8585612b63846159c6565b604051612b729392919061470a565b60405180910390a15b8015612b9057612b8b8585613816565b611397565b6113978585613870565b612bf487876040518060c00160405280896001600160401b03168152602001886001600160401b031681526020018760010b81526020018660010b815260200185151581526020018b6001600160a01b0316815250613914565b856001600160a01b0316876001600160a01b03167f5a556eea24d64e436a7874b016114fc608d6c738dbf507317c581a363931f0228787878787604051612c3f95949392919061568e565b60405180910390a350505050505050565b6001825111612c715760405162461bcd60e51b815260040161077790615253565b600084905060008060008060019050600060018851612c909190615909565b90505b801561204a576000888281518110612cbb57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600089600184612cd59190615909565b81518110612cf357634e487b7160e01b600052603260045260246000fd5b60200260200101519050600080612d0a83856129aa565b9050612d1981600001516129dc565b15612d365760405162461bcd60e51b815260040161077790614e26565b612d3f816129fa565b60018c51612d4d9190615909565b851415612d5d5760009150612d86565b612d83612d728b8360200151602001516134d7565b600954610100900461ffff16613ad3565b91505b612d90828b615752565b9950612d9c828a615752565b98508c6001600160401b0316896001600160401b03161115612dd05760405162461bcd60e51b8152600401610777906151a2565b6020808201510151612de2828c6133b6565b6009546601000000000000900460ff1615612e4157889750612e04828261342a565b98508789131580612e125750865b612e2e5760405162461bcd60e51b8152600401610777906151e8565b600082602001516020015160080b121596505b612e5084868460200151611cb2565b846001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a846020015160200151604051612e9b91906147cf565b60405180910390a350505050508080612eb390615940565b915050612c93565b612ec3613e95565b600060026000612ed386866128a4565b8152602080820192909252604090810160002081518083019092526001015463ffffffff811682526401000000009004600890810b810b900b918101919091529050612f1d613e95565b836001600160a01b0316856001600160a01b03161015612f3e575080612201565b815163ffffffff1681526020820151612f56906159e0565b600890810b900b6020820152949350505050565b6009546301000000900460010b806000612f8487876120ff565b60808101516009549192509065010000000000900460ff1615612fb05781604001519350816060015192505b6119ab88888888888887612fd3565b80610c048484612fce846159c6565b612a46565b60095460ff1615612ff65760405162461bcd60e51b815260040161077790614a15565b600061300288886120ff565b905061300d816129dc565b156130305781156130305760405162461bcd60e51b815260040161077790614c0c565b60095465010000000000900460ff16806130775750600954600185810b6301000000909204810b900b1480156130775750600954600184810b6301000000909204810b900b145b6130935760405162461bcd60e51b815260040161077790614cb0565b60095465010000000000900460ff16156131495760008460010b121580156130bf575060008360010b12155b6130db5760405162461bcd60e51b8152600401610777906152f7565b6107d08460010b131580156130f657506107cf198460010b12155b6131125760405162461bcd60e51b81526004016107779061508a565b6107d08360010b1315801561312d57506107cf198360010b12155b6131495760405162461bcd60e51b8152600401610777906148fe565b80600001516001600160401b0316866001600160401b031611158015613185575080602001516001600160401b0316856001600160401b031611155b801561319b5750806040015160010b8460010b13155b80156131b05750806060015160010b8360010b145b80156131c3575080608001511515821515145b80156131d157508060800151155b156132655780516001600160401b03161580156131f9575060208101516001600160401b0316155b801561320a5750604081015160010b155b801561321b5750606081015160010b155b801561322957506080810151155b156132465760405162461bcd60e51b815260040161077790615577565b613250888861295b565b61325f88888888888888613b14565b506110bf565b600061327189896128b7565b9050876001600160a01b03168160a001516001600160a01b031614156133425780600001516001600160401b0316866001600160401b0316111580156132cd575080602001516001600160401b0316876001600160401b031611155b80156132e35750806060015160010b8560010b13155b80156132f85750806040015160010b8460010b145b801561330b575080608001511515831515145b1561332e5761331a898961295b565b613329888a888a888a89613b14565b61333d565b61333d89898989898989612b9a565b610c55565b610c5589898989898989612b9a565b6001600160a01b03811660009081526020839052604090208054610feb5760018084015461337e9161573a565b81556001808401805491820181556000908152602090200180546001600160a01b0384166001600160a01b0319909116179055505050565b6000816001600160401b03168360200151602001516133d59190615893565b8351602001519091506001600160401b0381166133f1836159e0565b60080b13156134125760405162461bcd60e51b81526004016107779061502d565b50602092830151600891820b90910b92019190915250565b602080830151015160009081613447600883810b9086900b615854565b905060008460080b136134795784516060015160010b613466826159c6565b61347091906157d1565b92505050610b97565b60008260080b126134965784516040015160010b613466826159c6565b8451606001516134ad9060010b600884900b6157d1565b85516040015160010b6134c3600887900b6159c6565b6134cd91906157d1565b61347091906156fa565b60006001600160401b038316600883900b82121561352257613502836001600160401b038616615893565b9050836001600160401b03168160080b1315613522576000915050610b97565b60008160080b13613537576000915050610b97565b806001600160401b038116600882900b146122015760405162461bcd60e51b815260040161077790614c69565b600061ffff8216158061357e57506001600160401b038316155b1561358b57506000610b97565b61ffff821661359b600185615920565b6135a591906157ab565b6128b0906001615752565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517fa491c3daa0c7408c73f5c3bbfb2b1501b2a7ace3e155dc9cc059fad331ce844f9190a250565b6001600160a01b0381166000908152602083905260409020805415610feb576001808401805460009261362e91615909565b8154811061364c57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015482546001600160a01b03909116915081906001868101916136799190615909565b8154811061369757634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550836001018054806136e657634e487b7160e01b600052603160045260246000fd5b60008281526020808220600019908401810180546001600160a01b031916905590920190925583546001600160a01b039390931682529490945260408420559190915550565b6000816001600160a01b0316836001600160a01b031614156137605760405162461bcd60e51b81526004016107779061494a565b816001600160a01b0316836001600160a01b031610156137aa57828260405160200161378d9291906146cf565b604051602081830303815290604052805190602001209050610b97565b816001600160a01b0316836001600160a01b031611156137d757818360405160200161378d9291906146cf565b60405162461bcd60e51b815260040161077790614f18565b600160ff1b8114156138135760405162461bcd60e51b815260040161077790615342565b50565b613821600f83613351565b61382c600f82613351565b6001600160a01b0382166000908152600e6020526040902061384e9082613351565b6001600160a01b0381166000908152600e60205260409020610cde9083613351565b6001600160a01b0382166000908152600e6020526040902061389290826135fc565b6001600160a01b0381166000908152600e602052604090206138b490836135fc565b6001600160a01b0382166000908152600e602052604090206138d590613b2d565b6138e4576138e4600f836135fc565b6001600160a01b0381166000908152600e6020526040902061390590613b2d565b610cde57610cde600f826135fc565b60095465010000000000900460ff16613994576009546040820151600190810b6301000000909204810b900b1461395b57634e487b7160e01b600052600160045260246000fd5b6009546060820151600190810b6301000000909204810b900b1461398f57634e487b7160e01b600052600160045260246000fd5b6139e0565b6000816040015160010b12156139ba57634e487b7160e01b600052600160045260246000fd5b6000816060015160010b12156139e057634e487b7160e01b600052600160045260246000fd5b6000600360006139f086866128a4565b81526020808201929092526040908101600020845181549386015192860151606087015160a0880151600180860180546001600160a01b0319166001600160a01b039093169290921790915560809098015167ffffffffffffffff199096166001600160401b03938416176fffffffffffffffff00000000000000001916600160401b93909516929092029390931761ffff60801b1916600160801b93870b61ffff908116949094021761ffff60901b1916600160901b9190960b92909216919091029390931760ff60a01b1916600160a01b9115159190910217909155505050565b600061ffff82161580613aed57506001600160401b038316155b15613afa57506000610b97565b613b056001836158e6565b61ffff1661359b600185615920565b613b1e8787613b34565b6110bf87878787878787613ceb565b6001015490565b6001600160a01b0382811660009081526011602052604090205416613c72576001600160a01b0381811660009081526011602052604090205416613c17576001600160a01b03828116600081815260116020526040808220805460016001600160a01b03199182168117909255948616835281832080549095168117909455519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a36040516001600160a01b038216906001907f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f90600090a3610cde565b6001600160a01b0382811660008181526011602052604080822080546001600160a01b0319169486169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a3610cde565b6001600160a01b0381811660009081526011602052604090205416610cde576001600160a01b0381811660008181526011602052604080822080546001600160a01b0319169487169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a35050565b6000613cf788886129aa565b905080600001516040015160010b8460010b141580613d24575080600001516060015160010b8360010b14155b8015613d395750602080820151015160080b15155b15613d9b57613d47816129fa565b866001600160a01b0316886001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836020015160200151604051613d9291906147cf565b60405180910390a35b613da58888611d96565b80516001600160401b0380881690915281519086166020918201528151600186810b810b604090920191909152825185820b90910b6060909101528151831515608090910152810151613dfb9089908990611cb2565b613e0a88888360000151611a5c565b866001600160a01b0316886001600160a01b03167f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c208888888888604051613e5595949392919061568e565b60405180910390a35050505050505050565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604080518082019091526000808252602082015290565b828054613eb890615957565b90600052602060002090601f016020900481019282613eda5760008555613f20565b82601f10613ef357805160ff1916838001178555613f20565b82800160010185558215613f20579182015b82811115613f20578251825591602001919060010190613f05565b50613f2c929150613f8a565b5090565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b6040518060400160405280613f78613e67565b8152602001613f85613e95565b905290565b5b80821115613f2c5760008155600101613f8b565b80356001600160a01b038116811461074857600080fd5b60008083601f840112613fc7578182fd5b5081356001600160401b03811115613fdd578182fd5b6020830191508360208083028501011115613ff757600080fd5b9250929050565b600082601f83011261400e578081fd5b813560206001600160401b0382111561402957614029615a33565b8082026140378282016156d1565b838152828101908684018388018501891015614051578687fd5b8693505b8584101561407a5761406681613f9f565b835260019390930192918401918401614055565b50979650505050505050565b8035801515811461074857600080fd5b8035600181900b811461074857600080fd5b8035600881900b811461074857600080fd5b600082601f8301126140ca578081fd5b81356001600160401b038111156140e3576140e3615a33565b6140f6601f8201601f19166020016156d1565b81815284602083860101111561410a578283fd5b816020850160208301379081016020019190915292915050565b803561ffff8116811461074857600080fd5b80356001600160401b038116811461074857600080fd5b803560ff8116811461074857600080fd5b60006020828403121561416f578081fd5b6128b082613f9f565b6000806040838503121561418a578081fd5b61419383613f9f565b91506141a160208401613f9f565b90509250929050565b6000806000606084860312156141be578081fd5b6141c784613f9f565b92506141d560208501613f9f565b9150604084013590509250925092565b600080600080600080600060e0888a0312156141ff578283fd5b61420888613f9f565b965061421660208901613f9f565b955061422460408901614136565b945061423260608901614136565b935061424060808901614096565b925061424e60a08901614096565b915061425c60c08901614086565b905092959891949750929550565b60008060008060008060008060006101208a8c031215614288578182fd5b6142918a613f9f565b985061429f60208b01613f9f565b97506142ad60408b01614136565b96506142bb60608b01614136565b95506142c960808b01614096565b94506142d760a08b01614096565b93506142e560c08b01614086565b925060e08a013563ffffffff811681146142fd578283fd5b915061430c6101008b016140a8565b90509295985092959850929598565b6000806040838503121561432d578182fd5b61433683613f9f565b946020939093013593505050565b60008060008060608587031215614359578182fd5b61436285613f9f565b935061437060208601614136565b925060408501356001600160401b0381111561438a578283fd5b61439687828801613fb6565b95989497509550505050565b6000806000606084860312156143b6578081fd5b6143bf84613f9f565b92506143cd60208501614136565b91506143db60408501614136565b90509250925092565b60008060008060008060c087890312156143fc578384fd5b61440587613f9f565b955061441360208801614136565b945061442160408801614136565b935061442f60608801614096565b925061443d60808801614096565b915061444b60a08801614086565b90509295509295509295565b600060208284031215614468578081fd5b5035919050565b600060208284031215614480578081fd5b81356001600160e01b0319811681146128b0578182fd5b600080600080600060a086880312156144ae578283fd5b6144b7866140a8565b945060208601359350604086013592506144d360608701614096565b91506144e160808701614096565b90509295509295909350565b60008060008060008060008060006101208a8c03121561450b578283fd5b89356001600160401b0380821115614521578485fd5b61452d8d838e016140ba565b9a5060208c0135915080821115614542578485fd5b61454e8d838e016140ba565b995061455c60408d0161414d565b985061456a60608d01614124565b975061457860808d01614096565b965061458660a08d01614086565b955061459460c08d01614086565b945060e08c013593506101008c01359150808211156145b1578283fd5b506145be8c828d01613ffe565b9150509295985092959850929598565b600080600080600080608087890312156145e6578384fd5b6145ef87614136565b95506145fd60208801614136565b945060408701356001600160401b0380821115614618578586fd5b6146248a838b01613fb6565b9096509450606089013591508082111561463c578384fd5b818901915089601f83011261464f578384fd5b81358181111561465d578485fd5b8a602082850101111561466e578485fd5b6020830194508093505050509295509295509295565b60008151808452815b818110156146a95760208185018101518683018201520161468d565b818111156146ba5782602083870101525b50601f01601f19169290920160200192915050565b6bffffffffffffffffffffffff19606093841b811682529190921b16601482015260280190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6020808252825182820181905260009190848201906040850190845b8181101561476f5783516001600160a01b03168352928401929184019160010161474a565b50909695505050505050565b901515815260200190565b60019190910b815260200190565b90815260200190565b9687526020870195909552604086019390935260608501919091521515608084015260a083015260c082015260e00190565b60089190910b815260200190565b9485526020850193909352604084019190915260608301521515608082015260a00190565b6000602082526128b06020830184614684565b6020808252603c908201527f546865206e6574776f726b2069732066726f7a656e3b2074727573746c696e6560408201527f73207570646174652063616e6e6f742062652063616e63656c65642e00000000606082015260800190565b60208082526024908201527f5f737461727454696d652073686f756c64206265206265666f7265205f656e6460408201526354696d6560e01b606082015260800190565b60208082526028908201527f42616c616e6365206f6e2074727573746c696e652065786365656473205f6d616040820152677842616c616e636560c01b606082015260800190565b6020808252602c908201527f496e7465726573747320726174652072656365697665642063616e6e6f74206560408201526b3c31b2b2b21015969918129760a11b606082015260800190565b6020808252602e908201527f556e69717565206964656e74696669657273207265717569726520646966666560408201527f72656e7420616464726573736573000000000000000000000000000000000000606082015260800190565b60208082526015908201527f4e6574776f726b206973206e6f742066726f7a656e0000000000000000000000604082015260600190565b60208082526017908201527f43616c6c6572206973206e6f7420746865206f776e6572000000000000000000604082015260600190565b60208082526037908201527f546865206e6574776f726b2069732066726f7a656e20616e642074727573746c60408201527f696e65732063616e6e6f7420626520757064617465642e000000000000000000606082015260800190565b60208082526036908201527f412074727573746c696e652063616e206f6e6c7920626520636c6f736564206960408201527f66206974732062616c616e6365206973207a65726f2e00000000000000000000606082015260800190565b60208082526042908201527f5365636f6e6420746f206c61737420656c656d656e74206f662070617468206460408201527f6f6573206e6f74206d61746368205f6f74686572506172747920616464726573606082015261399760f11b608082015260a00190565b6020808252602f908201527f43616e6e6f74206170706c7920696e746572657374732c20746865207472757360408201527f746c696e652069732066726f7a656e0000000000000000000000000000000000606082015260800190565b6020808252818101527f546172676574206e6f7420617574686f72697a65642062792073656e6465722e604082015260600190565b60208082526023908201527f5468652070617468206d7573742073746172742077697468206d73672e73656e6040820152623232b960e91b606082015260800190565b6020808252603a908201527f54727573746c696e652069732066726f7a656e2c2069742063616e6e6f74206260408201527f65207570646174656420756e6c65737320756e66726f7a656e2e000000000000606082015260800190565b60208082526027908201527f54686520696d62616c616e636520646f6573206e6f742066697420696e746f206040820152663ab4b73a1b1a1760c91b606082015260800190565b6020808252604a908201527f496e74657265737420726174657320676976656e20616e64207265636569766560408201527f64206d75737420626520657175616c20746f2064656661756c7420696e74657260608201526932b9ba103930ba32b99760b11b608082015260a00190565b6020808252602c908201527f5468652073656e646572206f6620746865206d657373616765206973206e6f7460408201526b1030baba3437b934bd32b21760a11b606082015260800190565b6020808252603c908201527f546f6f206c6f7720696d62616c616e6365206665652064697669736f722c206660408201527f6565732063616e206e6f74206265206d6f7265207468616e2035302500000000606082015260800190565b6020808252602f908201527f4c61737420656c656d656e74206f66207061746820646f6573206e6f74206d6160408201527f746368206d73672e73656e6465722e0000000000000000000000000000000000606082015260800190565b60208082526041908201527f546865207061746820676976656e20697320696e636f72726563743a206f6e6560408201527f2074727573746c696e6520696e2074686520706174682069732066726f7a656e6060820152601760f91b608082015260a00190565b60208082526028908201527f42616c616e6365206f6e2074727573746c696e652065786365656473205f6d696040820152676e42616c616e636560c01b606082015260800190565b60208082526023908201527f5061746820676976656e20746f6f2073686f727420746f20626520636f72726560408201526231ba1760e91b606082015260800190565b60208082526011908201527f556e726561636861626c6520636f64652e000000000000000000000000000000604082015260600190565b60208082526015908201527f4e6f207265717565737420746f2064656c6574652e0000000000000000000000604082015260600190565b6020808252602a908201527f5468652063757272656e6379206e6574776f726b2063616e6e6f7420626520666040820152693937bd32b7103cb2ba1760b11b606082015260800190565b6020808252603d908201527f437573746f6d20696e7465726573747320617265207365743b2064656661756c60408201527f7420696e7465726573742072617465206d757374206265207a65726f2e000000606082015260800190565b6020808252603e908201527f546865207472616e736665727265642076616c7565206578636565647320746860408201527f65206361706163697479206f662074686520637265646974206c696e652e0000606082015260800190565b60208082526029908201527f496e74657265737473207261746520676976656e2063616e6e6f74206578636560408201526832b21015969918129760b91b606082015260800190565b6020808252601b908201527f50617468206d757374207374617274206d73672e73656e6465722e0000000000604082015260600190565b6020808252602d908201527f5468652074727573746c696e652069732066726f7a656e20616e642063616e6e60408201526c37ba1031329031b637b9b2b21760991b606082015260800190565b6020808252602b908201527f5468652063757272656e6379206e6574776f726b206861732064697361626c6560408201526a3210333932b2bd34b7339760a91b606082015260800190565b60208082526026908201527f54686520666565732065786365656420746865206d617820666565207061726160408201526536b2ba32b91760d11b606082015260800190565b60208082526045908201527f546865207472616e73666572207761732070726576656e74656420627920746860408201527f652070726576656e74206d65646961746f7220696e7465726573747320737472606082015264617465677960d81b608082015260a00190565b6020808252600f908201527f5061746820746f6f2073686f72742e0000000000000000000000000000000000604082015260600190565b60208082526047908201527f50726576656e74206d65646961746f7220696e7465726573742063616e6e6f7460408201527f2062652073657420776974686f7574207573696e6720637573746f6d20696e7460608201526632b932b9ba399760c91b608082015260a00190565b6020808252602b908201527f4f6e6c7920706f73697469766520696e7465726573742072617465732061726560408201526a1039bab83837b93a32b21760a91b606082015260800190565b60208082526027908201527f50726576656e74207573696e672076616c756520666f72206d696e7573206f7660408201526632b9333637bb9760c91b606082015260800190565b6020808252603a908201527f5365636f6e6420656c656d656e74206f66207061746820646f6573206e6f742060408201527f6d61746368205f6f74686572506172747920616464726573732e000000000000606082015260800190565b6020808252818101527f43616e6e6f74207472616e7366657220746f6f20686967682076616c7565732e604082015260600190565b60208082526033908201527f546865207472616e736665722063616e206f6e6c7920626520696e697469617460408201527f656420627920746865206372656469746f722e00000000000000000000000000606082015260800190565b60208082526025908201527f43757272656e6379204e6574776f726b20616c726561647920696e697469616c60408201526434bd32b21760d91b606082015260800190565b6020808252603d908201527f5468652066756e6374696f6e20726571756972657320746865205f62616c616e60408201527f636520746f2066697420696e746f2061203634206269742076616c7565000000606082015260800190565b60208082526038908201527f5468652073656e64657220646f6573206e6f742068617665207375636820646560408201527f627420746f7761726473207468652072656365697665722e0000000000000000606082015260800190565b6020808252601c908201527f43616e206e6f74206f70656e207a65726f2074727573746c696e652e00000000604082015260600190565b60208082526026908201527f44656661756c7420696e746572657374732063616e6e6f74206578636565642060408201526515969918129760d11b606082015260800190565b60208082526043908201527f45787069726174696f6e2074696d65206d75737420626520656974686572206960408201527f6e2074686520667574757265206f72207a65726f20746f2064697361626c652060608201526234ba1760e91b608082015260a00190565b61ffff91909116815260200190565b60006001600160401b0384168252604060208301526122016040830184614684565b6001600160401b039586168152939094166020840152600191820b6040840152900b6060820152901515608082015260a00190565b60ff91909116815260200190565b6040518181016001600160401b03811182821017156156f2576156f2615a33565b604052919050565b6000808212826001600160ff1b030384138115161561571b5761571b615a07565b600160ff1b839003841281161561573457615734615a07565b50500190565b6000821982111561574d5761574d615a07565b500190565b60006001600160401b0380831681851680830382111561577457615774615a07565b01949350505050565b60008261578c5761578c615a1d565b600160ff1b8214600019841416156157a6576157a6615a07565b500590565b60006001600160401b03808416806157c5576157c5615a1d565b92169190910492915050565b60006001600160ff1b03818413828413858304851182821616156157f7576157f7615a07565b600160ff1b8487128281168783058912161561581557615815615a07565b85871292508782058712848416161561583057615830615a07565b8785058712818416161561584657615846615a07565b505050929093029392505050565b60008083128015600160ff1b85018412161561587257615872615a07565b836001600160ff1b0301831381161561588d5761588d615a07565b50500390565b60008160080b8360080b82811281687fffffffffffffffff19018312811516156158bf576158bf615a07565b81687fffffffffffffffff0183138116156158dc576158dc615a07565b5090039392505050565b600061ffff8381169083168181101561590157615901615a07565b039392505050565b60008282101561591b5761591b615a07565b500390565b60006001600160401b038381169083168181101561590157615901615a07565b60008161594f5761594f615a07565b506000190190565b60028104600182168061596b57607f821691505b6020821081141561598c57634e487b7160e01b600052602260045260246000fd5b50919050565b60006001600160ff1b038214156159ab576159ab615a07565b5060010190565b60006000198214156159ab576159ab615a07565b6000600160ff1b8214156159dc576159dc615a07565b0390565b60008160080b687fffffffffffffffff19811415615a0057615a00615a07565b9003919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212206ecf2f7bd55833bf18a66b1f79dfaa36f6dba6fdfa9c59f91f11a7b85aabc5ee64736f6c63430008000033",
    "metadata": {
      "compiler": {
        "version": "0.8.0+commit.c7dfd78e"
      },
      "language": "Solidity",
      "output": {
        "abi": [
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "authorized",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
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
                "internalType": "address",
                "name": "authorized",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "allower",
                "type": "address"
              }
            ],
            "name": "AuthorizedAddressRemove",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "_from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "_to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "int256",
                "name": "_value",
                "type": "int256"
              }
            ],
            "name": "BalanceUpdate",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_debtor",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "_creditor",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "int256",
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
                "internalType": "address",
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
                "internalType": "address",
                "name": "authorized",
                "type": "address"
              }
            ],
            "name": "GlobalAuthorizedAddressRemove",
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
            "inputs": [],
            "name": "NetworkUnfreeze",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "_onboarder",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "_onboardee",
                "type": "address"
              }
            ],
            "name": "Onboard",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [],
            "name": "OwnerRemoval",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "_from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "_to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "bytes",
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
                "internalType": "address",
                "name": "_creditor",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "_debtor",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "_creditlineGiven",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "_creditlineReceived",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "int256",
                "name": "_interestRateGiven",
                "type": "int256"
              },
              {
                "indexed": false,
                "internalType": "int256",
                "name": "_interestRateReceived",
                "type": "int256"
              },
              {
                "indexed": false,
                "internalType": "bool",
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
                "internalType": "address",
                "name": "_initiator",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
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
                "internalType": "address",
                "name": "_creditor",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "_debtor",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "_creditlineGiven",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "_creditlineReceived",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "int256",
                "name": "_interestRateGiven",
                "type": "int256"
              },
              {
                "indexed": false,
                "internalType": "int256",
                "name": "_interestRateReceived",
                "type": "int256"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "_isFrozen",
                "type": "bool"
              }
            ],
            "name": "TrustlineUpdateRequest",
            "type": "event"
          },
          {
            "stateMutability": "nonpayable",
            "type": "fallback"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "target",
                "type": "address"
              }
            ],
            "name": "addAuthorizedAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_counterParty",
                "type": "address"
              }
            ],
            "name": "applyInterests",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "authorizedBy",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_a",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "_b",
                "type": "address"
              }
            ],
            "name": "balance",
            "outputs": [
              {
                "internalType": "int256",
                "name": "_balance",
                "type": "int256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "int72",
                "name": "_balance",
                "type": "int72"
              },
              {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
              },
              {
                "internalType": "int16",
                "name": "_interestRateGiven",
                "type": "int16"
              },
              {
                "internalType": "int16",
                "name": "_interestRateReceived",
                "type": "int16"
              }
            ],
            "name": "calculateBalanceWithInterests",
            "outputs": [
              {
                "internalType": "int72",
                "name": "",
                "type": "int72"
              }
            ],
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_counterparty",
                "type": "address"
              }
            ],
            "name": "cancelTrustlineUpdate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "capacityImbalanceFeeDivisor",
            "outputs": [
              {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_otherParty",
                "type": "address"
              }
            ],
            "name": "closeTrustline",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_otherParty",
                "type": "address"
              },
              {
                "internalType": "uint64",
                "name": "_minBalance",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "_maxBalance",
                "type": "uint64"
              }
            ],
            "name": "closeTrustlineByDirectTransfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_otherParty",
                "type": "address"
              },
              {
                "internalType": "uint64",
                "name": "_maxFee",
                "type": "uint64"
              },
              {
                "internalType": "address[]",
                "name": "_path",
                "type": "address[]"
              }
            ],
            "name": "closeTrustlineByTriangularTransfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_creditor",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "_debtor",
                "type": "address"
              }
            ],
            "name": "creditline",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "_creditline",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "customInterests",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint64",
                "name": "_value",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "_maxFee",
                "type": "uint64"
              },
              {
                "internalType": "address[]",
                "name": "_path",
                "type": "address[]"
              },
              {
                "internalType": "bytes",
                "name": "_extraData",
                "type": "bytes"
              }
            ],
            "name": "debitTransfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "name": "debt",
            "outputs": [
              {
                "internalType": "int256",
                "name": "",
                "type": "int256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "decimals",
            "outputs": [
              {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "defaultInterestRate",
            "outputs": [
              {
                "internalType": "int16",
                "name": "",
                "type": "int16"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "expirationTime",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "freezeNetwork",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_a",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "_b",
                "type": "address"
              }
            ],
            "name": "getAccount",
            "outputs": [
              {
                "internalType": "int256",
                "name": "",
                "type": "int256"
              },
              {
                "internalType": "int256",
                "name": "",
                "type": "int256"
              },
              {
                "internalType": "int256",
                "name": "",
                "type": "int256"
              },
              {
                "internalType": "int256",
                "name": "",
                "type": "int256"
              },
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              },
              {
                "internalType": "int256",
                "name": "",
                "type": "int256"
              },
              {
                "internalType": "int256",
                "name": "",
                "type": "int256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getAllDebtors",
            "outputs": [
              {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "debtor",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "creditor",
                "type": "address"
              }
            ],
            "name": "getDebt",
            "outputs": [
              {
                "internalType": "int256",
                "name": "",
                "type": "int256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_user",
                "type": "address"
              }
            ],
            "name": "getDebtorsOfUser",
            "outputs": [
              {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_user",
                "type": "address"
              }
            ],
            "name": "getFriends",
            "outputs": [
              {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getUsers",
            "outputs": [
              {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "globalAuthorized",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "creditor",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "increaseDebt",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
              },
              {
                "internalType": "uint8",
                "name": "_decimals",
                "type": "uint8"
              },
              {
                "internalType": "uint16",
                "name": "_capacityImbalanceFeeDivisor",
                "type": "uint16"
              },
              {
                "internalType": "int16",
                "name": "_defaultInterestRate",
                "type": "int16"
              },
              {
                "internalType": "bool",
                "name": "_customInterests",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "_preventMediatorInterests",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "_expirationTime",
                "type": "uint256"
              },
              {
                "internalType": "address[]",
                "name": "authorizedAddresses",
                "type": "address[]"
              }
            ],
            "name": "init",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_creditor",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "_debtor",
                "type": "address"
              }
            ],
            "name": "interestRate",
            "outputs": [
              {
                "internalType": "int16",
                "name": "_interestRate",
                "type": "int16"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "isInitialized",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "isNetworkFrozen",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "a",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "b",
                "type": "address"
              }
            ],
            "name": "isTrustlineFrozen",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "onboarder",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "owner",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "preventMediatorInterests",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "target",
                "type": "address"
              }
            ],
            "name": "removeAuthorizedAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "removeOwner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_creditor",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "_debtor",
                "type": "address"
              },
              {
                "internalType": "uint64",
                "name": "_creditlineGiven",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "_creditlineReceived",
                "type": "uint64"
              },
              {
                "internalType": "int16",
                "name": "_interestRateGiven",
                "type": "int16"
              },
              {
                "internalType": "int16",
                "name": "_interestRateReceived",
                "type": "int16"
              },
              {
                "internalType": "bool",
                "name": "_isFrozen",
                "type": "bool"
              },
              {
                "internalType": "uint32",
                "name": "_mtime",
                "type": "uint32"
              },
              {
                "internalType": "int72",
                "name": "_balance",
                "type": "int72"
              }
            ],
            "name": "setAccount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "debtor",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "creditor",
                "type": "address"
              },
              {
                "internalType": "int256",
                "name": "value",
                "type": "int256"
              }
            ],
            "name": "setDebt",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "user",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "onBoarder",
                "type": "address"
              }
            ],
            "name": "setOnboarder",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_creditor",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "_debtor",
                "type": "address"
              },
              {
                "internalType": "uint64",
                "name": "_creditlineGiven",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "_creditlineReceived",
                "type": "uint64"
              },
              {
                "internalType": "int16",
                "name": "_interestRateGiven",
                "type": "int16"
              },
              {
                "internalType": "int16",
                "name": "_interestRateReceived",
                "type": "int16"
              },
              {
                "internalType": "bool",
                "name": "_isFrozen",
                "type": "bool"
              }
            ],
            "name": "setTrustlineRequest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "bytes4",
                "name": "interfaceID",
                "type": "bytes4"
              }
            ],
            "name": "supportsInterface",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "symbol",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint64",
                "name": "_value",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "_maxFee",
                "type": "uint64"
              },
              {
                "internalType": "address[]",
                "name": "_path",
                "type": "address[]"
              },
              {
                "internalType": "bytes",
                "name": "_extraData",
                "type": "bytes"
              }
            ],
            "name": "transfer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint64",
                "name": "_value",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "_maxFee",
                "type": "uint64"
              },
              {
                "internalType": "address[]",
                "name": "_path",
                "type": "address[]"
              },
              {
                "internalType": "bytes",
                "name": "_extraData",
                "type": "bytes"
              }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint64",
                "name": "_value",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "_maxFee",
                "type": "uint64"
              },
              {
                "internalType": "address[]",
                "name": "_path",
                "type": "address[]"
              },
              {
                "internalType": "bytes",
                "name": "_extraData",
                "type": "bytes"
              }
            ],
            "name": "transferReceiverPays",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "unfreezeNetwork",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_debtor",
                "type": "address"
              },
              {
                "internalType": "uint64",
                "name": "_creditlineGiven",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "_creditlineReceived",
                "type": "uint64"
              }
            ],
            "name": "updateCreditlimits",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_debtor",
                "type": "address"
              },
              {
                "internalType": "uint64",
                "name": "_creditlineGiven",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "_creditlineReceived",
                "type": "uint64"
              },
              {
                "internalType": "int16",
                "name": "_interestRateGiven",
                "type": "int16"
              },
              {
                "internalType": "int16",
                "name": "_interestRateReceived",
                "type": "int16"
              },
              {
                "internalType": "bool",
                "name": "_isFrozen",
                "type": "bool"
              }
            ],
            "name": "updateTrustline",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        "devdoc": {
          "kind": "dev",
          "methods": {
            "addAuthorizedAddress(address)": {
              "details": "Authorizes an address.",
              "params": {
                "target": "Address to authorize."
              }
            },
            "applyInterests(address)": {
              "params": {
                "_counterParty": "The counterparty with which to update the interests"
              }
            },
            "balance(address,address)": {
              "params": {
                "_a": "First address that defines the trustline",
                "_b": "second address that defines the trustline"
              },
              "returns": {
                "_balance": "the amount _b owes to _a on the trustline between _a and _b*"
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
            "closeTrustlineByDirectTransfer(address,uint64,uint64)": {
              "params": {
                "_maxBalance": "The minimum balance the trustline should have to close it",
                "_minBalance": "The maximum balance the trustline should have to close it",
                "_otherParty": "Address of the other party to close the trustline with"
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
              "params": {
                "_creditor": "the creditor of the queried trustline",
                "_debtor": "the debtor of the queried trustline"
              },
              "returns": {
                "_creditline": "credit limit given by creditor to debtor"
              }
            },
            "debitTransfer(uint64,uint64,address[],bytes)": {
              "params": {
                "_extraData": "extra data bytes to be logged in the Transfer event*",
                "_maxFee": "Maximum fee the receiver wants to pay",
                "_path": "Path of transfer starting with debtor and ending with creditor (msg.sender)",
                "_value": "The amount of token to be transferred"
              }
            },
            "getAccount(address,address)": {
              "details": "Can be removed once structs are supported in the ABI",
              "params": {
                "_a": "First address that defines the trustline",
                "_b": "second address that defines the trustline"
              }
            },
            "getDebt(address,address)": {
              "params": {
                "creditor": "The address towards which the debtor owes money",
                "debtor": "The address of which we query the debt"
              },
              "returns": {
                "_0": "the debt of the debtor to the creditor, equal to the opposite of the debt of the creditor to the debtor"
              }
            },
            "getFriends(address)": {
              "params": {
                "_user": "The user to query the list of friends for*"
              }
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
                "_defaultInterestRate": "The default interests for every trustlines in 0.01% per year",
                "_expirationTime": "Time after which the currency network is frozen and cannot be used anymore. Setting         this value to zero disables freezing.",
                "_name": "The name of the currency",
                "_preventMediatorInterests": "Flag to allow or disallow transactions resulting in loss of interests for         intermediaries, unless the transaction exclusively reduces balances",
                "_symbol": "The symbol of the currency"
              }
            },
            "interestRate(address,address)": {
              "params": {
                "_creditor": "the creditor of the queried trustline",
                "_debtor": "the debtor of the queried trustline"
              },
              "returns": {
                "_interestRate": "Interest rate given by creditor to debtor on the balance of the line"
              }
            },
            "removeAuthorizedAddress(address)": {
              "details": "Removes authorizion of an address.",
              "params": {
                "target": "Address to remove authorization from."
              }
            },
            "setAccount(address,address,uint64,uint64,int16,int16,bool,uint32,int72)": {
              "details": "Set an account for two users, the final balance will be _balance plus the interests accrued on _balance in between _mtime and now.",
              "params": {
                "_balance": "The balance of the trustline at time _mtime as seen by _creditor",
                "_creditlineGiven": "The creditline limit given by _creditor",
                "_creditlineReceived": "The creditline limit given _debtor",
                "_creditor": "The first party of the trustline agreement",
                "_debtor": "The other party of the trustline agreement",
                "_interestRateGiven": "The interest given by _creditor",
                "_interestRateReceived": "The interest given by _debtor",
                "_isFrozen": "Whether the trustline should be frozen",
                "_mtime": "The last modification time of the balance"
              }
            },
            "setTrustlineRequest(address,address,uint64,uint64,int16,int16,bool)": {
              "details": "Set a trustline request in between two users",
              "params": {
                "_creditlineGiven": "The creditline limit given by _creditor",
                "_creditlineReceived": "The creditline limit given _debtor",
                "_creditor": "The first party of the trustline request",
                "_debtor": "The other party of the trustline request",
                "_interestRateGiven": "The interest given by _creditor",
                "_interestRateReceived": "The interest given by _debtor",
                "_isFrozen": "Whether the trustline should be frozen"
              }
            },
            "supportsInterface(bytes4)": {
              "details": "This needs to be in sync with CurrencyNetworkInterface.sol*",
              "params": {
                "interfaceID": "the queried interface id"
              },
              "returns": {
                "_0": "A boolean for whether the interface id is supported"
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
          },
          "version": 1
        },
        "userdoc": {
          "kind": "user",
          "methods": {
            "applyInterests(address)": {
              "notice": "Updates the balance of the trustline between `msg.sender` and `_counterParty` by applying the outstanding interests"
            },
            "balance(address,address)": {
              "notice": "returns what _b owes to _a"
            },
            "cancelTrustlineUpdate(address)": {
              "notice": "`msg.sender` cancels a trustline update it initiated with _debtor"
            },
            "closeTrustline(address)": {
              "notice": "`msg.sender` closes a trustline with `_otherParty` For this to succeed the balance of this trustline needs to be zero"
            },
            "closeTrustlineByDirectTransfer(address,uint64,uint64)": {
              "notice": "Close the trustline between `msg.sender` and `_otherParty` by doing a transfer from msg.sender to _otherParty to bring balance to zero"
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
            "freezeNetwork()": {
              "notice": "Freezes the network once the expirationTime has been reached it can no longer be used after that*"
            },
            "getAccount(address,address)": {
              "notice": "Query the trustline between two users."
            },
            "getAllDebtors()": {
              "notice": "returns the list of all the debtors, That is a list of all the addresses that currently have a debt (positive or negative)*"
            },
            "getDebt(address,address)": {
              "notice": "Get the debt owed by debtor to creditor, may be negative if creditor owes debtor"
            },
            "getDebtorsOfUser(address)": {
              "notice": "returns the list of debtors of a user That is the list of addresses towards with the user has a debt (positive or negative)*"
            },
            "getFriends(address)": {
              "notice": "returns the list of friends of _user, that is the list of addresses with which _user has an open trustline"
            },
            "getUsers()": {
              "notice": "returns the list of all the users of trustlines, that is all the addresses that ever opened a trustline*"
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
            "supportsInterface(bytes4)": {
              "notice": "Queries whether the contract supports the given interfaceID (see ERC165)"
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
          "version": 1
        }
      },
      "settings": {
        "compilationTarget": {
          "contracts/currency-network/CurrencyNetworkOwnable.sol": "CurrencyNetworkOwnable"
        },
        "evmVersion": "petersburg",
        "libraries": {},
        "metadata": {
          "bytecodeHash": "ipfs"
        },
        "optimizer": {
          "enabled": true,
          "runs": 500
        },
        "remappings": []
      },
      "sources": {
        "contracts/currency-network/CurrencyNetwork.sol": {
          "keccak256": "0x3d2ad951b7e3fe1251e75dacfaf83b57daf9ff6386ec3a5137988c71acebe48b",
          "license": "MIT",
          "urls": [
            "bzz-raw://c085bf6b031c132db1650130871ce71bb9111d91c6f9d0707701c7b694f348d8",
            "dweb:/ipfs/QmXC8CdZmN3m7ax1sfodu1x5GKAA6FdACGfbjb9kBZ5dA4"
          ]
        },
        "contracts/currency-network/CurrencyNetworkBasic.sol": {
          "keccak256": "0x892b708c9d119208bc94b2027fa14fc56670c985135282e301fb9928ae8e5ce3",
          "license": "MIT",
          "urls": [
            "bzz-raw://ad9857c51e8c2b0de01ad948115323b0592c11f72a4b4b915379dbac7ef8ab41",
            "dweb:/ipfs/QmYxaUQBiFcPcg3chsB52oe6wPG6aMWTU5ndpmUBU7bPsW"
          ]
        },
        "contracts/currency-network/CurrencyNetworkInterface.sol": {
          "keccak256": "0x97d1624a373750c036781655549315f07fa003eb870b463a3054f5b2c415fb40",
          "license": "MIT",
          "urls": [
            "bzz-raw://bf97bc69a9491fabc3ce08f696a79928c4fa27d4fe60c55b4b477d6aea25bc1c",
            "dweb:/ipfs/Qmd3GDjkq7BTzrCgoAFzCBeFeAdL4hpBKHHQDzLiYt2ny4"
          ]
        },
        "contracts/currency-network/CurrencyNetworkOwnable.sol": {
          "keccak256": "0xb85c2c75b04701a91f730ab4bc8b1f32074b7352e5df187d5cb07be3dc3c7844",
          "license": "MIT",
          "urls": [
            "bzz-raw://691b5fa113f6a61c5ecd8dedb472ca3e9cfb7d34aa7f877f77718d67bcfc0f15",
            "dweb:/ipfs/QmabcQrCU6rCQ4Ai1xqeHbQtoPXJxc5CPCgrhVAHNBLkPH"
          ]
        },
        "contracts/currency-network/DebtTracking.sol": {
          "keccak256": "0xaae80b07727ae9e4c82464248206639a3fbb5a52ecc73814a607d23b5d3faa16",
          "license": "MIT",
          "urls": [
            "bzz-raw://594f40e0b7d4bf76a73dc771e8e75c38c09910d75279f0dcc69908cab3af8235",
            "dweb:/ipfs/QmeLGkbD34dThLAkdwp3b7xvMUwZhVj2ZP8gFBsrGduQ9f"
          ]
        },
        "contracts/currency-network/Onboarding.sol": {
          "keccak256": "0xd438ad2fed091ac7c1ef3302283ab90f9b3ce2de5cb2a59bfd73da1ac51708aa",
          "license": "MIT",
          "urls": [
            "bzz-raw://91891718a38da2f8cf231c95e53b0351741eab78cb2cbb00b5a32813aaad56d3",
            "dweb:/ipfs/QmNNnbVuQpRCqw3VATqamZiqguvRqNkoeXoguYTMv273MA"
          ]
        },
        "contracts/lib/Authorizable.sol": {
          "keccak256": "0x2383d1c0eb2f4c8805ac05cd20bda9fd25815e61d191721d8ace942c70e2c545",
          "license": "MIT",
          "urls": [
            "bzz-raw://9e705ee34adb92ab81adcd965cfc283bd73afc874fc9c92b38d4c72b53287d48",
            "dweb:/ipfs/Qmc4c7EHriDo8BJDDxX5ZK9LTsThJw5gp7iuE5z5fPa5FC"
          ]
        },
        "contracts/lib/ERC165.sol": {
          "keccak256": "0x3a8f48fc5b0ec6d6f749988dc5e251292a618e05de5174e6abac5bc7fb086a7d",
          "license": "MIT",
          "urls": [
            "bzz-raw://030f865a506c4b0746cd460fdb557567e31cfdd1f819cfdeb9d103e16ef3fd99",
            "dweb:/ipfs/QmNtGQVoupbefYbkTakGWcnHCYHRtKtBighuFCZXweVEd4"
          ]
        },
        "contracts/lib/it_set_lib.sol": {
          "keccak256": "0xd041d0f8588f3f6ba1358535e121948643f7200afeed16be324900325d3ed26e",
          "license": "MIT",
          "urls": [
            "bzz-raw://fe2df45bb79100fa5709fbbf1b2d704443a45caa8e81eabfe274b1167370c936",
            "dweb:/ipfs/QmXefFzpBczJ9cHBGWd8URnd5WLzHPDgccUJfbAPY12X9W"
          ]
        }
      },
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {
        "applyInterests(address)": {
          "notice": "Updates the balance of the trustline between `msg.sender` and `_counterParty` by applying the outstanding interests"
        },
        "balance(address,address)": {
          "notice": "returns what _b owes to _a"
        },
        "cancelTrustlineUpdate(address)": {
          "notice": "`msg.sender` cancels a trustline update it initiated with _debtor"
        },
        "closeTrustline(address)": {
          "notice": "`msg.sender` closes a trustline with `_otherParty` For this to succeed the balance of this trustline needs to be zero"
        },
        "closeTrustlineByDirectTransfer(address,uint64,uint64)": {
          "notice": "Close the trustline between `msg.sender` and `_otherParty` by doing a transfer from msg.sender to _otherParty to bring balance to zero"
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
        "freezeNetwork()": {
          "notice": "Freezes the network once the expirationTime has been reached it can no longer be used after that*"
        },
        "getAccount(address,address)": {
          "notice": "Query the trustline between two users."
        },
        "getAllDebtors()": {
          "notice": "returns the list of all the debtors, That is a list of all the addresses that currently have a debt (positive or negative)*"
        },
        "getDebt(address,address)": {
          "notice": "Get the debt owed by debtor to creditor, may be negative if creditor owes debtor"
        },
        "getDebtorsOfUser(address)": {
          "notice": "returns the list of debtors of a user That is the list of addresses towards with the user has a debt (positive or negative)*"
        },
        "getFriends(address)": {
          "notice": "returns the list of friends of _user, that is the list of addresses with which _user has an open trustline"
        },
        "getUsers()": {
          "notice": "returns the list of all the users of trustlines, that is all the addresses that ever opened a trustline*"
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
        "supportsInterface(bytes4)": {
          "notice": "Queries whether the contract supports the given interfaceID (see ERC165)"
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
      "version": 1
    }
  }
}
```
