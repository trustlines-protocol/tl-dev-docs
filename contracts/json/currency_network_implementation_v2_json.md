---
title: Currency Network Implementation v2.json
---

```json
"CurrencyNetworkOwnableV2": {
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
                },
                {
                    "indexed": false,
                    "internalType": "int72",
                    "name": "_transfer",
                    "type": "int72"
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
                },
                {
                    "internalType": "int72",
                    "name": "_transfer",
                    "type": "int72"
                }
            ],
            "name": "updateTrustline",
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
            },
            "updateTrustline(address,uint64,uint64,int16,int16,bool,int72)": {
                "params": {
                    "_creditlineGiven": "The creditline limit given by msg.sender",
                    "_creditlineReceived": "The creditline limit given _debtor",
                    "_debtor": "The other party of the trustline agreement",
                    "_interestRateGiven": "The interest given by msg.sender",
                    "_interestRateReceived": "The interest given by _debtor",
                    "_isFrozen": "Whether the initiator asks for freezing the trustline",
                    "_transfer": "To apply a transfer when the trustline is accepted, >0 for a transfer from msg.sender to _debtor, <0 for the other way around"
                }
            }
        },
        "version": 1
    },
    "bytecode": "0x608060405234801561001057600080fd5b50615e9c80620000216000396000f3fe608060405234801561001057600080fd5b50600436106103355760003560e01c80635cbb7caa116101b2578063ae132d31116100f9578063c0f60d8d116100a2578063de4afd691161007c578063de4afd691461066f578063f2351aa714610682578063f8585db314610695578063fd590847146106a857610335565b8063c0f60d8d1461064c578063cc07d3001461065f578063da284dcc1461066757610335565b8063b61f3035116100d3578063b61f303514610606578063b9015c2114610619578063bf590d851461062c57610335565b8063ae132d31146105cd578063ae94d130146105e0578063b203bb99146105f357610335565b80638b5c22891161015b57806395d89b411161013557806395d89b41146105aa578063a246e2c3146105b2578063a884105e146105ba57610335565b80638b5c22891461057a5780638ba2fdec146105825780638da5cb5b1461059557610335565b806370783a531161018c57806370783a531461054c57806381b0867e1461055f57806386c1c74d1461057257610335565b80635cbb7caa1461051357806362f2adb314610526578063707129391461053957610335565b806329e9e88211610281578063393ee0891161022a578063447bf08511610204578063447bf085146104c7578063498b5ae8146104da5780634f34e169146104ed5780635c9c1fd11461050057610335565b8063393ee0891461048157806340e659e91461049457806342f1181e146104b457610335565b80633502f73e1161025b5780633502f73e14610453578063365d1cec14610466578063392e53cd1461047957610335565b806329e9e88214610418578063313ce5671461042b578063340044441461044057610335565b80630ba36e2a116102e3578063197a8062116102bd578063197a8062146103f5578063238a4ae514610408578063246f8b961461041057610335565b80630ba36e2a146103d05780630bc1c14c146103d85780631763d4e7146103e057610335565b806306fdde031161031457806306fdde03146103885780630951b6151461039d5780630a4409a7146103b057610335565b8062ce8e3e1461033757806301ffc9a7146103555780630537f62114610375575b005b61033f6106ce565b60405161034c9190614a4f565b60405180910390f35b610368610363366004614790565b610733565b60405161034c9190614a9c565b610335610383366004614514565b61076b565b6103906108d8565b60405161034c9190614b23565b6103356103ab3660046148ef565b610966565b6103c36103be366004614422565b610a51565b60405161034c9190614ab5565b610368610a70565b610368610a79565b6103e8610a8b565b60405161034c9190615a23565b61033f610403366004614408565b610a9a565b610368610b13565b610335610b26565b610368610426366004614422565b610b8b565b610433610bbb565b60405161034c9190615ae0565b61036861044e366004614422565b610bc4565b6103356104613660046145ee565b610be4565b6103c3610474366004614778565b610c28565b610368610c3a565b61033561048f36600461480e565b610c43565b6104a76104a2366004614422565b610c7e565b60405161034c9190614aa7565b6103356104c2366004614408565b610c97565b6103356104d5366004614408565b610cf1565b6103c36104e8366004614422565b610d00565b6103356104fb366004614701565b610d6d565b61033561050e366004614408565b610e1e565b61033f610521366004614408565b610ebe565b610335610534366004614408565b610f35565b610335610547366004614408565b610fd8565b61036861055a366004614408565b611070565b61033561056d366004614454565b611085565b6104a76110bf565b6103356110cf565b61033561059036600461448f565b611155565b61059d611199565b60405161034c9190614a17565b6103906111a8565b61033f6111b5565b6103356105c83660046148ef565b611218565b61059d6105db366004614408565b6112fb565b6103356105ee36600461464c565b611316565b6103c3610601366004614422565b61146f565b6103356106143660046148ef565b61148b565b610335610627366004614422565b61152f565b61063f61063a3660046147b8565b6115b3565b60405161034c9190614af0565b61033561065a36600461464c565b611893565b6103356118a0565b6103c3611919565b61033561067d3660046148ef565b61191f565b61033561069036600461468e565b611a7c565b6103356106a33660046145c5565b611a8e565b6106bb6106b6366004614422565b611a9a565b60405161034c9796959493929190614abe565b6060600560010180548060200260200160405190810160405280929190818152602001828054801561072957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161070b575b5050505050905090565b60006001600160e01b031982166301ffc9a760e01b148061076357506001600160e01b03198216624c532760e41b145b90505b919050565b6012546001600160a01b0316331461079e5760405162461bcd60e51b815260040161079590614cff565b60405180910390fd5b6107a661410a565b6001600160401b03808916825287166020820152600186810b810b604083015285810b900b606082015283151560808201526107e0614138565b63ffffffff4281811683526000916107fe9186918816908b8b6115b3565b600881810b900b602084015290506108178c8c85611b25565b6108228c8c84611d7b565b61082c8c8c611e5f565b8a6001600160a01b03168c6001600160a01b03167f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c208c8c8c8c8c604051610877959493929190615a6c565b60405180910390a38a6001600160a01b03168c6001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836040516108c29190614af0565b60405180910390a3505050505050505050505050565b600a80546108e590615d74565b80601f016020809104026020016040519081016040528092919081815260200182805461091190615d74565b801561095e5780601f106109335761010080835404028352916020019161095e565b820191906000526020600020905b81548152906001019060200180831161094157829003601f168201915b505050505081565b82158015906109bb57508383600081811061099157634e487b7160e01b600052603260045260246000fd5b90506020020160208101906109a69190614408565b6001600160a01b0316336001600160a01b0316145b6109d75760405162461bcd60e51b815260040161079590614f21565b610a49868686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8a018190048102820181019092528881529250889150879081908401838280828437600092019190915250611eb992505050565b505050505050565b600080610a5e84846121c8565b516001600160401b0316949350505050565b60095460ff1681565b60095465010000000000900460ff1681565b600954610100900461ffff1681565b6001600160a01b0381166000908152600e6020908152604091829020600101805483518184028101840190945280845260609392830182828015610b0757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610ae9575b50505050509050919050565b6009546601000000000000900460ff1681565b6012546001600160a01b03163314610b505760405162461bcd60e51b815260040161079590614cff565b601280546001600160a01b03191690556040517f85c61b2c3289f917426c03e630bbb09a3762d42c2080cc1ea57803fcd479bb6f90600090a1565b60095460009060ff1615610ba157506001610bb5565b6000610bad84846121c8565b608001519150505b92915050565b600c5460ff1681565b600160209081526000928352604080842090915290825290205460ff1681565b610c2284848484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506122d292505050565b50505050565b600d6020526000908152604090205481565b60075460ff1681565b601280546001600160a01b031916331790556009805460ff19166001179055610c738989898989898989896125f8565b505050505050505050565b600080610c8b84846121c8565b60400151949350505050565b3360008181526001602081815260408084206001600160a01b0387168086529252808420805460ff1916909317909255905190917ff92a3df90be9663e4fa8008da5af16eff9e227303d0a59fd3e7bd9fa2980d39b91a350565b33610cfc8183612802565b5050565b6000816001600160a01b0316836001600160a01b03161015610d4057600d6000610d2a858561296d565b8152602001908152602001600020549050610bb5565b600d6000610d4e858561296d565b815260200190815260200160002054610d6690615de3565b9050610bb5565b336000818152600460205260409020610d869089612980565b15610da35760405162461bcd60e51b8152600401610795906158a9565b8160080b6001600160401b03610db890615dfd565b60080b1315610dd95760405162461bcd60e51b8152600401610795906153e2565b600882900b6001600160401b031215610e045760405162461bcd60e51b815260040161079590614eea565b610e14818989898989898961299e565b5050505050505050565b60095460ff1615610e415760405162461bcd60e51b815260040161079590614b36565b6000610e4d3383612e1d565b60a08101519091506001600160a01b0316610e7a5760405162461bcd60e51b8152600401610795906152a7565b610e843383612ed6565b6040516001600160a01b0383169033907f46814aaabccd0d590a16aa6c0f88ee4cfd871d7beb692b2998fda70433510a3290600090a35050565b6001600160a01b038116600090815260046020908152604091829020600101805483518184028101840190945280845260609392830182828015610b07576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610ae95750505050509050919050565b6000610f413383612f25565b9050610f508160000151612f57565b15610f6d5760405162461bcd60e51b815260040161079590614e58565b610f7681612f75565b816001600160a01b0316336001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836020015160200151604051610fc19190614af0565b60405180910390a3610cfc33838360200151611d7b565b3360009081526001602090815260408083206001600160a01b038516845290915290205460ff1661101b5760405162461bcd60e51b815260040161079590614eb5565b3360008181526001602090815260408083206001600160a01b0386168085529252808320805460ff191690555190917ffe3265421a7458af9570e66dd7a92be646934442be69fa65895b948a0e20f0a091a350565b60006020819052908152604090205460ff1681565b6012546001600160a01b031633146110af5760405162461bcd60e51b815260040161079590614cff565b6110ba838383612fc1565b505050565b6009546301000000900460010b81565b6012546001600160a01b031633146110f95760405162461bcd60e51b815260040161079590614cff565b60095460ff1615156001146111205760405162461bcd60e51b815260040161079590614cc8565b6009805460ff191690556040517f1cf27a9544d54369d4ec6b136f8521f807c310e33c00115f99d9863871b55a4590600090a1565b6012546001600160a01b0316331461117f5760405162461bcd60e51b815260040161079590614cff565b611190878787878787876000613115565b50505050505050565b6012546001600160a01b031681565b600b80546108e590615d74565b6060600f600101805480602002602001604051908101604052809291908181526020018280548015610729576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161070b575050505050905090565b821580159061126d57508383600081811061124357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906112589190614408565b6001600160a01b0316336001600160a01b0316145b6112895760405162461bcd60e51b815260040161079590614f21565b610a49868686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8a0181900481028201810190925288815292508891508790819084018382808284376000920191909152506131d792505050565b6011602052600090815260409020546001600160a01b031681565b60006113223385612f25565b905061132d81612f75565b816001600160401b031681602001516020015160080b13156113615760405162461bcd60e51b815260040161079590614bd7565b826001600160401b031681602001516020015160080b12156113955760405162461bcd60e51b8152600401610795906151e5565b60408051600280825260608201835260009260208301908036833701905050905033816000815181106113d857634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050848160018151811061141a57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505061145e826020015160200151600083604051806020016040528060008152506131d7565b6114683386612802565b5050505050565b60008061147c8484613442565b6020015160080b949350505050565b3360009081526020819052604090205460ff168061151357508215801590611513575060016000858560008181106114d357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906114e89190614408565b6001600160a01b031681526020808201929092526040908101600090812033825290925290205460ff165b6112895760405162461bcd60e51b815260040161079590615078565b6012546001600160a01b031633146115595760405162461bcd60e51b815260040161079590614cff565b6001600160a01b0382811660008181526011602052604080822080546001600160a01b0319169486169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a35050565b60006001600160401b03600887900b138015906115e557506115db6001600160401b03615dfd565b60080b8660080b12155b6116015760405162461bcd60e51b81526004016107959061584c565b838511156116215760405162461bcd60e51b815260040161079590614b93565b6000808760080b1315611635575082611644565b60008760080b12156116445750815b8060010b60001415611659578691505061188a565b60006116658787615d26565b9050600888900b80600083121561168c57634e487b7160e01b600052600160045260246000fd5b60015b600f81136117cc576000846116a8600188900b86615bee565b6116b29190615bee565b905080158015906116da5750836116cd86600189900b615bee565b6116d79083615b9a565b14155b1561172c5760008660010b13156117215760008c60080b1315611706576001600160401b03925061171c565b6117166001600160401b03615dfd565b60080b92505b611726565b600092505b506117cc565b8161173d6301e13380612710615bee565b6117479190615bee565b6117519082615b9a565b93508361175e57506117cc565b826117698582615b17565b935060008113801561177b5750600085135b1561179157600084136117915792506117cc9050565b6000811280156117a15750600085125b156117b757600084126117b75792506117cc9050565b505080806117c490615daf565b91505061168f565b5060008460010b1315611822576001600160401b038113156117f257506001600160401b035b6118026001600160401b03615dfd565b60080b8112156118225761181c6001600160401b03615dfd565b60080b90505b60008460010b121561186a5760008a60080b13801561184357508960080b81135b1561184c575060005b60008a60080b12801561186157508960080b81125b1561186a575060005b600061187a60088c900b83615bee565b1215611884575060005b93505050505b95945050505050565b33610c22818585856134f1565b6008546118bf5760405162461bcd60e51b8152600401610795906154e6565b4260085411156118e15760405162461bcd60e51b8152600401610795906152de565b6009805460ff191660011790556040517f8d522fe0692f19bce789ee1908909a9da1d904e3b1d504672ab601bd5b25841d90600090a1565b60085481565b60008484600081811061194257634e487b7160e01b600052603260045260246000fd5b90506020020160208101906119579190614408565b905060008585611968600182615d26565b81811061198557634e487b7160e01b600052603260045260246000fd5b905060200201602081019061199a9190614408565b90506001600160a01b03811633146119c45760405162461bcd60e51b8152600401610795906157aa565b876001600160401b03166119d88383610d00565b12156119f65760405162461bcd60e51b8152600401610795906158e0565b611a0a82828a6001600160401b0316613548565b610e14888888888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a9150899081908401838280828437600092019190915250611eb992505050565b3361119081888888888888600061299e565b806110ba338483612fc1565b600080600080600080600080611ab08a8a612f25565b80518051602082015160408301516060840151608090940151949550919390929080611ade575060095460ff165b60209586015180519601516001600160401b039586169d50939094169a50600191820b9950900b965090945063ffffffff909116925060080b905092959891949750929550565b60095465010000000000900460ff16611ba5576009546040820151600190810b6301000000909204810b900b14611b6c57634e487b7160e01b600052600160045260246000fd5b6009546060820151600190810b6301000000909204810b900b14611ba057634e487b7160e01b600052600160045260246000fd5b611bf1565b6000816040015160010b1215611bcb57634e487b7160e01b600052600160045260246000fd5b6000816060015160010b1215611bf157634e487b7160e01b600052600160045260246000fd5b600060026000611c01868661296d565b81526020019081526020016000206000019050826001600160a01b0316846001600160a01b03161015611cd4578151815460208401516040850151606086015160808701511515600160a01b0260ff60a01b19600192830b61ffff908116600160901b0261ffff60901b199590940b16600160801b0261ffff60801b196001600160401b03968716600160401b026fffffffffffffffff0000000000000000199790991667ffffffffffffffff199098169790971795909516969096179490941692909217161791909116178155610c22565b6020820151815483516060850151604086015160808701511515600160a01b0260ff60a01b19600192830b61ffff908116600160901b0261ffff60901b199590940b16600160801b0261ffff60801b196001600160401b03968716600160401b026fffffffffffffffff0000000000000000199790991667ffffffffffffffff19909816979097179590951696909617949094169290921716179190911617815550505050565b600060026000611d8b868661296d565b81526020019081526020016000206001019050826001600160a01b0316846001600160a01b03161015611e065781518154602084015160080b68ffffffffffffffffff16640100000000026cffffffffffffffffff000000001963ffffffff90931663ffffffff199092169190911791909116178155610c22565b8151815463ffffffff191663ffffffff9091161781556020820151611e2a90615dfd565b815460089190910b68ffffffffffffffffff16640100000000026cffffffffffffffffff000000001990911617815550505050565b611e6a60058361355c565b611e7560058261355c565b6001600160a01b0382166000908152600460205260409020611e97908261355c565b6001600160a01b0381166000908152600460205260409020610cfc908361355c565b6001825111611eda5760405162461bcd60e51b8152600401610795906155e2565b836000600160ff1b806001835b60018851611ef59190615d26565b81101561211357600088611f0a836001615b57565b81518110611f2857634e487b7160e01b600052603260045260246000fd5b602002602001015190506000898381518110611f5457634e487b7160e01b600052603260045260246000fd5b60200260200101519050600080611f6b8385612f25565b9050611f7a8160000151612f57565b15611f975760405162461bcd60e51b81526004016107959061517e565b611fa081612f75565b6020808201510151611fb2828c6135c1565b6009546601000000000000900460ff161561201057889750611fd48282613635565b9850600082602001516020015160080b121596508789121580611ff45750865b6120105760405162461bcd60e51b815260040161079590615577565b61201f84868460200151611d7b565b846001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a84602001516020015160405161206a9190614af0565b60405180910390a360028d516120809190615d26565b861415612091575050505050612113565b6120af61209e8c836136e2565b600954610100900461ffff1661376f565b92506120bb838c615d3d565b9a506120c7838b615b6f565b99508d6001600160401b03168a6001600160401b031611156120fb5760405162461bcd60e51b815260040161079590615531565b5050505050808061210b90615dcf565b915050611ee7565b5086600188516121239190615d26565b8151811061214157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03168760008151811061217357634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c168b896040516121b5929190615a4a565b60405180910390a3505050505050505050565b6121d061410a565b6000600260006121e0868661296d565b81526020808201929092526040908101600020815160a08101835290546001600160401b038082168352600160401b82041693820193909352600160801b8304600190810b810b810b92820192909252600160901b8304820b820b90910b6060820152600160a01b90910460ff1615156080820152905061225f61410a565b836001600160a01b0316856001600160a01b031610156122805750806122ca565b81516001600160401b03908116602080840191909152830151168152604080830151600190810b810b606080850191909152840151810b900b908201526080808301511515908201525b949350505050565b6003815110156122f45760405162461bcd60e51b81526004016107959061522d565b8060008151811061231557634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316336001600160a01b03161461234d5760405162461bcd60e51b815260040161079590615462565b806001825161235c9190615d26565b8151811061237a57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316336001600160a01b0316146123b25760405162461bcd60e51b815260040161079590615121565b60006123e6826000815181106123d857634e487b7160e01b600052603260045260246000fd5b602002602001015185612f25565b90506123f58160000151612f57565b156124125760405162461bcd60e51b815260040161079590615499565b61241b81612f75565b6000816020015190506000816020015160080b13156124e457846001600160a01b03168360018151811061245f57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03161461248d5760405162461bcd60e51b815260040161079590615718565b806020015160080b81602001516001600160401b0316146124c05760405162461bcd60e51b815260040161079590615775565b6124df8160200151858560405180602001604052806000815250611eb9565b6125c6565b6000816020015160080b12156125c657846001600160a01b0316836002855161250d9190615d26565b8151811061252b57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316146125595760405162461bcd60e51b815260040161079590614df0565b806020015161256790615dfd565b60080b816020015161257890615dfd565b6001600160401b03161461259e5760405162461bcd60e51b815260040161079590615775565b6125c681602001516125af90615dfd565b8585604051806020016040528060008152506131d7565b611468836000815181106125ea57634e487b7160e01b600052603260045260246000fd5b602002602001015186612802565b60075460ff161561261b5760405162461bcd60e51b815260040161079590615807565b6007805460ff1916600190811790915585900b158015906126395750835b156126565760405162461bcd60e51b815260040161079590615328565b6107d08560010b1315801561267157506107cf198560010b12155b61268d5760405162461bcd60e51b815260040161079590615974565b82158061269f575082801561269f5750835b6126bb5760405162461bcd60e51b815260040161079590615619565b8115806126c757504282115b6126e35760405162461bcd60e51b8152600401610795906159ba565b8561ffff16600114156127085760405162461bcd60e51b8152600401610795906150c4565b885161271b90600a9060208c019061414f565b50875161272f90600b9060208b019061414f565b50600c805460ff191660ff89161790556009805462ffff00191661010061ffff898116919091029190911764ffff00000019166301000000600189900b92909216919091021765ff0000000000191665010000000000861515021766ff0000000000001916660100000000000085151502179055600882905560005b81518110156127f6576127e48282815181106127d757634e487b7160e01b600052603260045260246000fd5b60200260200101516137bb565b806127ee81615dcf565b9150506127ab565b50505050505050505050565b600061280e8383613442565b9050806020015160080b6000146128375760405162461bcd60e51b815260040161079590614d93565b6128418383610b8b565b1561285e5760405162461bcd60e51b815260040161079590615499565b600061286a848461296d565b6000818152600360209081526040808320805474ffffffffffffffffffffffffffffffffffffffffff199081168255600191820180546001600160e81b031916905560028452828520805490911681550180546cffffffffffffffffffffffffff191690556001600160a01b0388168352600490915290209091506128ef9084613807565b6001600160a01b03831660009081526004602052604090206129119085613807565b826001600160a01b0316846001600160a01b03167f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c20600080600080600060405161295f959493929190614afe565b60405180910390a350505050565b60006129798383613937565b9392505050565b6001600160a01b031660009081526020919091526040902054151590565b60095460ff16156129c15760405162461bcd60e51b815260040161079590614d36565b60006129cd89896121c8565b90506129d881612f57565b156129fb5782156129fb5760405162461bcd60e51b815260040161079590614f64565b60095465010000000000900460ff1680612a425750600954600186810b6301000000909204810b900b148015612a425750600954600185810b6301000000909204810b900b145b612a5e5760405162461bcd60e51b815260040161079590615008565b60095465010000000000900460ff1615612b145760008560010b12158015612a8a575060008460010b12155b612aa65760405162461bcd60e51b815260040161079590615686565b6107d08560010b13158015612ac157506107cf198560010b12155b612add5760405162461bcd60e51b815260040161079590615419565b6107d08460010b13158015612af857506107cf198460010b12155b612b145760405162461bcd60e51b815260040161079590614c1f565b80600001516001600160401b0316876001600160401b031611158015612b50575080602001516001600160401b0316866001600160401b031611155b8015612b665750806040015160010b8560010b13155b8015612b7b5750806060015160010b8460010b145b8015612b8e575080608001511515831515145b8015612b9c57508060800151155b15612c305780516001600160401b0316158015612bc4575060208101516001600160401b0316155b8015612bd55750604081015160010b155b8015612be65750606081015160010b155b8015612bf457506080810151155b15612c115760405162461bcd60e51b81526004016107959061593d565b612c1b8989612ed6565b612c2a898989898989896139fa565b50610e14565b6000612c3c8a8a612e1d565b9050886001600160a01b03168160a001516001600160a01b03161415612e0d5780600001516001600160401b0316876001600160401b031611158015612c98575080602001516001600160401b0316886001600160401b031611155b8015612cae5750806060015160010b8660010b13155b8015612cc35750806040015160010b8560010b145b8015612cd6575080608001511515841515145b8015612cf457508060c00151612ceb90615dfd565b60080b8360080b145b15612df857612d038a8a612ed6565b612d12898b898b898b8a6139fa565b60008360080b1315612d8457612d318a8a612d2c86615dfd565b613a13565b886001600160a01b03168a6001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c168560080b604051612d779190615a32565b60405180910390a3612df3565b60008360080b1215612df357612d9b898b85613a13565b896001600160a01b0316896001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685612dda90615dfd565b60080b604051612dea9190615a32565b60405180910390a35b612e08565b612e088a8a8a8a8a8a8a8a613115565b6127f6565b6127f68a8a8a8a8a8a8a8a613115565b612e256141d3565b600060036000612e35868661296d565b81526020808201929092526040908101600020815160e08101835281546001600160401b038082168352600160401b82041694820194909452600160801b8404600190810b810b810b93820193909352600160901b8404830b830b830b6060820152600160a01b9384900460ff16151560808201529101546001600160a01b03811660a083015291909104600890810b810b900b60c0820152949350505050565b60036000612ee4848461296d565b81526020810191909152604001600020805474ffffffffffffffffffffffffffffffffffffffffff1916815560010180546001600160e81b03191690555050565b612f2d61420f565b612f3561420f565b612f3f84846121c8565b8152612f4b8484613442565b60208201529392505050565b60095460009060ff1615612f6d57506001610766565b506080015190565b60208082015190810151905182516040810151606090910151612fa1939263ffffffff169142916115b3565b60209182018051600892830b90920b91909201525163ffffffff42169052565b6000600d6000612fd1868661296d565b81526020019081526020016000205490506000836001600160a01b0316856001600160a01b03161015613074576130088383615b17565b905061301381613a7e565b80600d6000613022888861296d565b8152602001908152602001600020819055507fb0fd525375cf2d63db200a0701eb5b6f384df5d85b2ed3abb8460b7c51a8128e85858360405161306793929190614a2b565b60405180910390a16130f6565b61307d83615de3565b6130879083615b17565b905061309281613a7e565b80600d60006130a1888861296d565b81526020810191909152604001600020557fb0fd525375cf2d63db200a0701eb5b6f384df5d85b2ed3abb8460b7c51a8128e85856130de84615de3565b6040516130ed93929190614a2b565b60405180910390a15b801561310b576131068585613aa5565b611468565b6114688585613aff565b61317888886040518060e001604052808a6001600160401b03168152602001896001600160401b031681526020018860010b81526020018760010b815260200186151581526020018c6001600160a01b031681526020018560080b815250613ba3565b866001600160a01b0316886001600160a01b03167f1bccbaa34c639b945bc7bf65a7461f2570dc411ef7574cf37ab4724f886723098888888888886040516131c596959493929190615aa1565b60405180910390a35050505050505050565b60018251116131f85760405162461bcd60e51b8152600401610795906155e2565b6000849050600080600080600190506000600188516132179190615d26565b90505b801561211357600088828151811061324257634e487b7160e01b600052603260045260246000fd5b6020026020010151905060008960018461325c9190615d26565b8151811061327a57634e487b7160e01b600052603260045260246000fd5b602002602001015190506000806132918385612f25565b90506132a08160000151612f57565b156132bd5760405162461bcd60e51b81526004016107959061517e565b6132c681612f75565b60018c516132d49190615d26565b8514156132e4576000915061330d565b61330a6132f98b8360200151602001516136e2565b600954610100900461ffff16613da1565b91505b613317828b615b6f565b9950613323828a615b6f565b98508c6001600160401b0316896001600160401b031611156133575760405162461bcd60e51b815260040161079590615531565b6020808201510151613369828c6135c1565b6009546601000000000000900460ff16156133c85788975061338b8282613635565b985087891315806133995750865b6133b55760405162461bcd60e51b815260040161079590615577565b600082602001516020015160080b121596505b6133d784868460200151611d7b565b846001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a8460200151602001516040516134229190614af0565b60405180910390a35050505050808061343a90615d5d565b91505061321a565b61344a614138565b60006002600061345a868661296d565b8152602080820192909252604090810160002081518083019092526001015463ffffffff811682526401000000009004600890810b810b900b9181019190915290506134a4614138565b836001600160a01b0316856001600160a01b031610156134c55750806122ca565b815163ffffffff16815260208201516134dd90615dfd565b600890810b900b6020820152949350505050565b6009546301000000900460010b80600061350b87876121c8565b60808101516009549192509065010000000000900460ff16156135375781604001519350816060015192505b610e1488888888888887600061299e565b80610c22848461355784615de3565b612fc1565b6001600160a01b038116600090815260208390526040902080546110ba5760018084015461358991615b57565b81556001808401805491820181556000908152602090200180546001600160a01b0384166001600160a01b0319909116179055505050565b6000816001600160401b03168360200151602001516135e09190615cb0565b8351602001519091506001600160401b0381166135fc83615dfd565b60080b131561361d5760405162461bcd60e51b815260040161079590615385565b50602092830151600891820b90910b92019190915250565b602080830151015160009081613652600883810b9086900b615c71565b905060008460080b136136845784516060015160010b61367182615de3565b61367b9190615bee565b92505050610bb5565b60008260080b126136a15784516040015160010b61367182615de3565b8451606001516136b89060010b600884900b615bee565b85516040015160010b6136ce600887900b615de3565b6136d89190615bee565b61367b9190615b17565b60006001600160401b038316600883900b82121561372d5761370d836001600160401b038616615cb0565b9050836001600160401b03168160080b131561372d576000915050610bb5565b60008160080b13613742576000915050610bb5565b806001600160401b038116600882900b146122ca5760405162461bcd60e51b815260040161079590614fc1565b600061ffff8216158061378957506001600160401b038316155b1561379657506000610bb5565b61ffff82166137a6600185615d3d565b6137b09190615bc8565b612979906001615b6f565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517fa491c3daa0c7408c73f5c3bbfb2b1501b2a7ace3e155dc9cc059fad331ce844f9190a250565b6001600160a01b03811660009081526020839052604090208054156110ba576001808401805460009261383991615d26565b8154811061385757634e487b7160e01b600052603260045260246000fd5b60009182526020909120015482546001600160a01b03909116915081906001868101916138849190615d26565b815481106138a257634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550836001018054806138f157634e487b7160e01b600052603160045260246000fd5b60008281526020808220600019908401810180546001600160a01b031916905590920190925583546001600160a01b039390931682529490945260408420559190915550565b6000816001600160a01b0316836001600160a01b0316141561396b5760405162461bcd60e51b815260040161079590614c6b565b816001600160a01b0316836001600160a01b031610156139b55782826040516020016139989291906149f0565b604051602081830303815290604052805190602001209050610bb5565b816001600160a01b0316836001600160a01b031611156139e25781836040516020016139989291906149f0565b60405162461bcd60e51b815260040161079590615270565b613a048787613de2565b61119087878787878787613f99565b613a1b614138565b600882810b900b602082015263ffffffff42168152613a3b848483611d7b565b826001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a8460405161295f9190614af0565b600160ff1b811415613aa25760405162461bcd60e51b8152600401610795906156d1565b50565b613ab0600f8361355c565b613abb600f8261355c565b6001600160a01b0382166000908152600e60205260409020613add908261355c565b6001600160a01b0381166000908152600e60205260409020610cfc908361355c565b6001600160a01b0382166000908152600e60205260409020613b219082613807565b6001600160a01b0381166000908152600e60205260409020613b439083613807565b6001600160a01b0382166000908152600e60205260409020613b6490614103565b613b7357613b73600f83613807565b6001600160a01b0381166000908152600e60205260409020613b9490614103565b610cfc57610cfc600f82613807565b60095465010000000000900460ff16613c23576009546040820151600190810b6301000000909204810b900b14613bea57634e487b7160e01b600052600160045260246000fd5b6009546060820151600190810b6301000000909204810b900b14613c1e57634e487b7160e01b600052600160045260246000fd5b613c6f565b6000816040015160010b1215613c4957634e487b7160e01b600052600160045260246000fd5b6000816060015160010b1215613c6f57634e487b7160e01b600052600160045260246000fd5b600060036000613c7f868661296d565b81526020808201929092526040908101600020845181549386015192860151606087015160a08801516001808601805460808c015167ffffffffffffffff19909a166001600160401b03978816176fffffffffffffffff00000000000000001916600160401b97909916969096029790971761ffff60801b1916600160801b94820b61ffff908116959095021761ffff60901b1916600160901b9390910b93909316919091029190911760ff60a01b1916600160a01b95151586021790925560c0909501516001600160a01b03199095166001600160a01b03909116177fffffff000000000000000000ffffffffffffffffffffffffffffffffffffffff1668ffffffffffffffffff60089590950b9490941690910292909217909155505050565b600061ffff82161580613dbb57506001600160401b038316155b15613dc857506000610bb5565b613dd3600183615d03565b61ffff166137a6600185615d3d565b6001600160a01b0382811660009081526011602052604090205416613f20576001600160a01b0381811660009081526011602052604090205416613ec5576001600160a01b03828116600081815260116020526040808220805460016001600160a01b03199182168117909255948616835281832080549095168117909455519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a36040516001600160a01b038216906001907f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f90600090a3610cfc565b6001600160a01b0382811660008181526011602052604080822080546001600160a01b0319169486169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a3610cfc565b6001600160a01b0381811660009081526011602052604090205416610cfc576001600160a01b0381811660008181526011602052604080822080546001600160a01b0319169487169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a35050565b6000613fa58888612f25565b905080600001516040015160010b8460010b141580613fd2575080600001516060015160010b8360010b14155b8015613fe75750602080820151015160080b15155b1561404957613ff581612f75565b866001600160a01b0316886001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a8360200151602001516040516140409190614af0565b60405180910390a35b6140538888611e5f565b80516001600160401b0380881690915281519086166020918201528151600186810b810b604090920191909152825185820b90910b60609091015281518315156080909101528101516140a99089908990611d7b565b6140b888888360000151611b25565b866001600160a01b0316886001600160a01b03167f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c2088888888886040516131c5959493929190615a6c565b6001015490565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604080518082019091526000808252602082015290565b82805461415b90615d74565b90600052602060002090601f01602090048101928261417d57600085556141c3565b82601f1061419657805160ff19168380011785556141c3565b828001600101855582156141c3579182015b828111156141c35782518255916020019190600101906141a8565b506141cf929150614234565b5090565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b604051806040016040528061422261410a565b815260200161422f614138565b905290565b5b808211156141cf5760008155600101614235565b80356001600160a01b038116811461076657600080fd5b60008083601f840112614271578182fd5b5081356001600160401b03811115614287578182fd5b60208301915083602080830285010111156142a157600080fd5b9250929050565b600082601f8301126142b8578081fd5b813560206001600160401b038211156142d3576142d3615e50565b8082026142e1828201615aee565b8381528281019086840183880185018910156142fb578687fd5b8693505b858410156143245761431081614249565b8352600193909301929184019184016142ff565b50979650505050505050565b8035801515811461076657600080fd5b8035600181900b811461076657600080fd5b8035600881900b811461076657600080fd5b600082601f830112614374578081fd5b81356001600160401b0381111561438d5761438d615e50565b6143a0601f8201601f1916602001615aee565b8181528460208386010111156143b4578283fd5b816020850160208301379081016020019190915292915050565b803561ffff8116811461076657600080fd5b80356001600160401b038116811461076657600080fd5b803560ff8116811461076657600080fd5b600060208284031215614419578081fd5b61297982614249565b60008060408385031215614434578081fd5b61443d83614249565b915061444b60208401614249565b90509250929050565b600080600060608486031215614468578081fd5b61447184614249565b925061447f60208501614249565b9150604084013590509250925092565b600080600080600080600060e0888a0312156144a9578283fd5b6144b288614249565b96506144c060208901614249565b95506144ce604089016143e0565b94506144dc606089016143e0565b93506144ea60808901614340565b92506144f860a08901614340565b915061450660c08901614330565b905092959891949750929550565b60008060008060008060008060006101208a8c031215614532578182fd5b61453b8a614249565b985061454960208b01614249565b975061455760408b016143e0565b965061456560608b016143e0565b955061457360808b01614340565b945061458160a08b01614340565b935061458f60c08b01614330565b925060e08a013563ffffffff811681146145a7578283fd5b91506145b66101008b01614352565b90509295985092959850929598565b600080604083850312156145d7578182fd5b6145e083614249565b946020939093013593505050565b60008060008060608587031215614603578182fd5b61460c85614249565b935061461a602086016143e0565b925060408501356001600160401b03811115614634578283fd5b61464087828801614260565b95989497509550505050565b600080600060608486031215614660578081fd5b61466984614249565b9250614677602085016143e0565b9150614685604085016143e0565b90509250925092565b60008060008060008060c087890312156146a6578384fd5b6146af87614249565b95506146bd602088016143e0565b94506146cb604088016143e0565b93506146d960608801614340565b92506146e760808801614340565b91506146f560a08801614330565b90509295509295509295565b600080600080600080600060e0888a03121561471b578081fd5b61472488614249565b9650614732602089016143e0565b9550614740604089016143e0565b945061474e60608901614340565b935061475c60808901614340565b925061476a60a08901614330565b915061450660c08901614352565b600060208284031215614789578081fd5b5035919050565b6000602082840312156147a1578081fd5b81356001600160e01b031981168114612979578182fd5b600080600080600060a086880312156147cf578283fd5b6147d886614352565b945060208601359350604086013592506147f460608701614340565b915061480260808701614340565b90509295509295909350565b60008060008060008060008060006101208a8c03121561482c578283fd5b89356001600160401b0380821115614842578485fd5b61484e8d838e01614364565b9a5060208c0135915080821115614863578485fd5b61486f8d838e01614364565b995061487d60408d016143f7565b985061488b60608d016143ce565b975061489960808d01614340565b96506148a760a08d01614330565b95506148b560c08d01614330565b945060e08c013593506101008c01359150808211156148d2578283fd5b506148df8c828d016142a8565b9150509295985092959850929598565b60008060008060008060808789031215614907578384fd5b614910876143e0565b955061491e602088016143e0565b945060408701356001600160401b0380821115614939578586fd5b6149458a838b01614260565b9096509450606089013591508082111561495d578384fd5b818901915089601f830112614970578384fd5b81358181111561497e578485fd5b8a602082850101111561498f578485fd5b6020830194508093505050509295509295509295565b60008151808452815b818110156149ca576020818501810151868301820152016149ae565b818111156149db5782602083870101525b50601f01601f19169290920160200192915050565b6bffffffffffffffffffffffff19606093841b811682529190921b16601482015260280190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6020808252825182820181905260009190848201906040850190845b81811015614a905783516001600160a01b031683529284019291840191600101614a6b565b50909695505050505050565b901515815260200190565b60019190910b815260200190565b90815260200190565b9687526020870195909552604086019390935260608501919091521515608084015260a083015260c082015260e00190565b60089190910b815260200190565b9485526020850193909352604084019190915260608301521515608082015260a00190565b60006020825261297960208301846149a5565b6020808252603c908201527f546865206e6574776f726b2069732066726f7a656e3b2074727573746c696e6560408201527f73207570646174652063616e6e6f742062652063616e63656c65642e00000000606082015260800190565b60208082526024908201527f5f737461727454696d652073686f756c64206265206265666f7265205f656e6460408201526354696d6560e01b606082015260800190565b60208082526028908201527f42616c616e6365206f6e2074727573746c696e652065786365656473205f6d616040820152677842616c616e636560c01b606082015260800190565b6020808252602c908201527f496e7465726573747320726174652072656365697665642063616e6e6f74206560408201526b3c31b2b2b21015969918129760a11b606082015260800190565b6020808252602e908201527f556e69717565206964656e74696669657273207265717569726520646966666560408201527f72656e7420616464726573736573000000000000000000000000000000000000606082015260800190565b60208082526015908201527f4e6574776f726b206973206e6f742066726f7a656e0000000000000000000000604082015260600190565b60208082526017908201527f43616c6c6572206973206e6f7420746865206f776e6572000000000000000000604082015260600190565b60208082526037908201527f546865206e6574776f726b2069732066726f7a656e20616e642074727573746c60408201527f696e65732063616e6e6f7420626520757064617465642e000000000000000000606082015260800190565b60208082526036908201527f412074727573746c696e652063616e206f6e6c7920626520636c6f736564206960408201527f66206974732062616c616e6365206973207a65726f2e00000000000000000000606082015260800190565b60208082526042908201527f5365636f6e6420746f206c61737420656c656d656e74206f662070617468206460408201527f6f6573206e6f74206d61746368205f6f74686572506172747920616464726573606082015261399760f11b608082015260a00190565b6020808252602f908201527f43616e6e6f74206170706c7920696e746572657374732c20746865207472757360408201527f746c696e652069732066726f7a656e0000000000000000000000000000000000606082015260800190565b6020808252818101527f546172676574206e6f7420617574686f72697a65642062792073656e6465722e604082015260600190565b6020808252601c908201527f5472616e736665722065786365656473206d61782062616c616e636500000000604082015260600190565b60208082526023908201527f5468652070617468206d7573742073746172742077697468206d73672e73656e6040820152623232b960e91b606082015260800190565b6020808252603a908201527f54727573746c696e652069732066726f7a656e2c2069742063616e6e6f74206260408201527f65207570646174656420756e6c65737320756e66726f7a656e2e000000000000606082015260800190565b60208082526027908201527f54686520696d62616c616e636520646f6573206e6f742066697420696e746f206040820152663ab4b73a1b1a1760c91b606082015260800190565b6020808252604a908201527f496e74657265737420726174657320676976656e20616e64207265636569766560408201527f64206d75737420626520657175616c20746f2064656661756c7420696e74657260608201526932b9ba103930ba32b99760b11b608082015260a00190565b6020808252602c908201527f5468652073656e646572206f6620746865206d657373616765206973206e6f7460408201526b1030baba3437b934bd32b21760a11b606082015260800190565b6020808252603c908201527f546f6f206c6f7720696d62616c616e6365206665652064697669736f722c206660408201527f6565732063616e206e6f74206265206d6f7265207468616e2035302500000000606082015260800190565b6020808252602f908201527f4c61737420656c656d656e74206f66207061746820646f6573206e6f74206d6160408201527f746368206d73672e73656e6465722e0000000000000000000000000000000000606082015260800190565b60208082526041908201527f546865207061746820676976656e20697320696e636f72726563743a206f6e6560408201527f2074727573746c696e6520696e2074686520706174682069732066726f7a656e6060820152601760f91b608082015260a00190565b60208082526028908201527f42616c616e6365206f6e2074727573746c696e652065786365656473205f6d696040820152676e42616c616e636560c01b606082015260800190565b60208082526023908201527f5061746820676976656e20746f6f2073686f727420746f20626520636f72726560408201526231ba1760e91b606082015260800190565b60208082526011908201527f556e726561636861626c6520636f64652e000000000000000000000000000000604082015260600190565b60208082526015908201527f4e6f207265717565737420746f2064656c6574652e0000000000000000000000604082015260600190565b6020808252602a908201527f5468652063757272656e6379206e6574776f726b2063616e6e6f7420626520666040820152693937bd32b7103cb2ba1760b11b606082015260800190565b6020808252603d908201527f437573746f6d20696e7465726573747320617265207365743b2064656661756c60408201527f7420696e7465726573742072617465206d757374206265207a65726f2e000000606082015260800190565b6020808252603e908201527f546865207472616e736665727265642076616c7565206578636565647320746860408201527f65206361706163697479206f662074686520637265646974206c696e652e0000606082015260800190565b6020808252601c908201527f5472616e736665722065786365656473206d696e2062616c616e636500000000604082015260600190565b60208082526029908201527f496e74657265737473207261746520676976656e2063616e6e6f74206578636560408201526832b21015969918129760b91b606082015260800190565b6020808252601b908201527f50617468206d757374207374617274206d73672e73656e6465722e0000000000604082015260600190565b6020808252602d908201527f5468652074727573746c696e652069732066726f7a656e20616e642063616e6e60408201526c37ba1031329031b637b9b2b21760991b606082015260800190565b6020808252602b908201527f5468652063757272656e6379206e6574776f726b206861732064697361626c6560408201526a3210333932b2bd34b7339760a91b606082015260800190565b60208082526026908201527f54686520666565732065786365656420746865206d617820666565207061726160408201526536b2ba32b91760d11b606082015260800190565b60208082526045908201527f546865207472616e73666572207761732070726576656e74656420627920746860408201527f652070726576656e74206d65646961746f7220696e7465726573747320737472606082015264617465677960d81b608082015260a00190565b6020808252600f908201527f5061746820746f6f2073686f72742e0000000000000000000000000000000000604082015260600190565b60208082526047908201527f50726576656e74206d65646961746f7220696e7465726573742063616e6e6f7460408201527f2062652073657420776974686f7574207573696e6720637573746f6d20696e7460608201526632b932b9ba399760c91b608082015260a00190565b6020808252602b908201527f4f6e6c7920706f73697469766520696e7465726573742072617465732061726560408201526a1039bab83837b93a32b21760a91b606082015260800190565b60208082526027908201527f50726576656e74207573696e672076616c756520666f72206d696e7573206f7660408201526632b9333637bb9760c91b606082015260800190565b6020808252603a908201527f5365636f6e6420656c656d656e74206f66207061746820646f6573206e6f742060408201527f6d61746368205f6f74686572506172747920616464726573732e000000000000606082015260800190565b6020808252818101527f43616e6e6f74207472616e7366657220746f6f20686967682076616c7565732e604082015260600190565b60208082526033908201527f546865207472616e736665722063616e206f6e6c7920626520696e697469617460408201527f656420627920746865206372656469746f722e00000000000000000000000000606082015260800190565b60208082526025908201527f43757272656e6379204e6574776f726b20616c726561647920696e697469616c60408201526434bd32b21760d91b606082015260800190565b6020808252603d908201527f5468652066756e6374696f6e20726571756972657320746865205f62616c616e60408201527f636520746f2066697420696e746f2061203634206269742076616c7565000000606082015260800190565b6020808252601a908201527f412074727573746c696e6520616c726561647920657869737473000000000000604082015260600190565b60208082526038908201527f5468652073656e64657220646f6573206e6f742068617665207375636820646560408201527f627420746f7761726473207468652072656365697665722e0000000000000000606082015260800190565b6020808252601c908201527f43616e206e6f74206f70656e207a65726f2074727573746c696e652e00000000604082015260600190565b60208082526026908201527f44656661756c7420696e746572657374732063616e6e6f74206578636565642060408201526515969918129760d11b606082015260800190565b60208082526043908201527f45787069726174696f6e2074696d65206d75737420626520656974686572206960408201527f6e2074686520667574757265206f72207a65726f20746f2064697361626c652060608201526234ba1760e91b608082015260a00190565b61ffff91909116815260200190565b90815260406020820181905260009082015260600190565b60006001600160401b0384168252604060208301526122ca60408301846149a5565b6001600160401b039586168152939094166020840152600191820b6040840152900b6060820152901515608082015260a00190565b6001600160401b039687168152949095166020850152600192830b6040850152910b60608301521515608082015260089190910b60a082015260c00190565b60ff91909116815260200190565b6040518181016001600160401b0381118282101715615b0f57615b0f615e50565b604052919050565b6000808212826001600160ff1b0303841381151615615b3857615b38615e24565b600160ff1b8390038412811615615b5157615b51615e24565b50500190565b60008219821115615b6a57615b6a615e24565b500190565b60006001600160401b03808316818516808303821115615b9157615b91615e24565b01949350505050565b600082615ba957615ba9615e3a565b600160ff1b821460001984141615615bc357615bc3615e24565b500590565b60006001600160401b0380841680615be257615be2615e3a565b92169190910492915050565b60006001600160ff1b0381841382841385830485118282161615615c1457615c14615e24565b600160ff1b84871282811687830589121615615c3257615c32615e24565b858712925087820587128484161615615c4d57615c4d615e24565b87850587128184161615615c6357615c63615e24565b505050929093029392505050565b60008083128015600160ff1b850184121615615c8f57615c8f615e24565b836001600160ff1b03018313811615615caa57615caa615e24565b50500390565b60008160080b8360080b82811281687fffffffffffffffff1901831281151615615cdc57615cdc615e24565b81687fffffffffffffffff018313811615615cf957615cf9615e24565b5090039392505050565b600061ffff83811690831681811015615d1e57615d1e615e24565b039392505050565b600082821015615d3857615d38615e24565b500390565b60006001600160401b0383811690831681811015615d1e57615d1e615e24565b600081615d6c57615d6c615e24565b506000190190565b600281046001821680615d8857607f821691505b60208210811415615da957634e487b7160e01b600052602260045260246000fd5b50919050565b60006001600160ff1b03821415615dc857615dc8615e24565b5060010190565b6000600019821415615dc857615dc8615e24565b6000600160ff1b821415615df957615df9615e24565b0390565b60008160080b687fffffffffffffffff19811415615e1d57615e1d615e24565b9003919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220c9b27455f8f1873b3a29ccd574e03a8f06f5276427a686f411c8f68395ef4b5064736f6c63430008000033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106103355760003560e01c80635cbb7caa116101b2578063ae132d31116100f9578063c0f60d8d116100a2578063de4afd691161007c578063de4afd691461066f578063f2351aa714610682578063f8585db314610695578063fd590847146106a857610335565b8063c0f60d8d1461064c578063cc07d3001461065f578063da284dcc1461066757610335565b8063b61f3035116100d3578063b61f303514610606578063b9015c2114610619578063bf590d851461062c57610335565b8063ae132d31146105cd578063ae94d130146105e0578063b203bb99146105f357610335565b80638b5c22891161015b57806395d89b411161013557806395d89b41146105aa578063a246e2c3146105b2578063a884105e146105ba57610335565b80638b5c22891461057a5780638ba2fdec146105825780638da5cb5b1461059557610335565b806370783a531161018c57806370783a531461054c57806381b0867e1461055f57806386c1c74d1461057257610335565b80635cbb7caa1461051357806362f2adb314610526578063707129391461053957610335565b806329e9e88211610281578063393ee0891161022a578063447bf08511610204578063447bf085146104c7578063498b5ae8146104da5780634f34e169146104ed5780635c9c1fd11461050057610335565b8063393ee0891461048157806340e659e91461049457806342f1181e146104b457610335565b80633502f73e1161025b5780633502f73e14610453578063365d1cec14610466578063392e53cd1461047957610335565b806329e9e88214610418578063313ce5671461042b578063340044441461044057610335565b80630ba36e2a116102e3578063197a8062116102bd578063197a8062146103f5578063238a4ae514610408578063246f8b961461041057610335565b80630ba36e2a146103d05780630bc1c14c146103d85780631763d4e7146103e057610335565b806306fdde031161031457806306fdde03146103885780630951b6151461039d5780630a4409a7146103b057610335565b8062ce8e3e1461033757806301ffc9a7146103555780630537f62114610375575b005b61033f6106ce565b60405161034c9190614a4f565b60405180910390f35b610368610363366004614790565b610733565b60405161034c9190614a9c565b610335610383366004614514565b61076b565b6103906108d8565b60405161034c9190614b23565b6103356103ab3660046148ef565b610966565b6103c36103be366004614422565b610a51565b60405161034c9190614ab5565b610368610a70565b610368610a79565b6103e8610a8b565b60405161034c9190615a23565b61033f610403366004614408565b610a9a565b610368610b13565b610335610b26565b610368610426366004614422565b610b8b565b610433610bbb565b60405161034c9190615ae0565b61036861044e366004614422565b610bc4565b6103356104613660046145ee565b610be4565b6103c3610474366004614778565b610c28565b610368610c3a565b61033561048f36600461480e565b610c43565b6104a76104a2366004614422565b610c7e565b60405161034c9190614aa7565b6103356104c2366004614408565b610c97565b6103356104d5366004614408565b610cf1565b6103c36104e8366004614422565b610d00565b6103356104fb366004614701565b610d6d565b61033561050e366004614408565b610e1e565b61033f610521366004614408565b610ebe565b610335610534366004614408565b610f35565b610335610547366004614408565b610fd8565b61036861055a366004614408565b611070565b61033561056d366004614454565b611085565b6104a76110bf565b6103356110cf565b61033561059036600461448f565b611155565b61059d611199565b60405161034c9190614a17565b6103906111a8565b61033f6111b5565b6103356105c83660046148ef565b611218565b61059d6105db366004614408565b6112fb565b6103356105ee36600461464c565b611316565b6103c3610601366004614422565b61146f565b6103356106143660046148ef565b61148b565b610335610627366004614422565b61152f565b61063f61063a3660046147b8565b6115b3565b60405161034c9190614af0565b61033561065a36600461464c565b611893565b6103356118a0565b6103c3611919565b61033561067d3660046148ef565b61191f565b61033561069036600461468e565b611a7c565b6103356106a33660046145c5565b611a8e565b6106bb6106b6366004614422565b611a9a565b60405161034c9796959493929190614abe565b6060600560010180548060200260200160405190810160405280929190818152602001828054801561072957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161070b575b5050505050905090565b60006001600160e01b031982166301ffc9a760e01b148061076357506001600160e01b03198216624c532760e41b145b90505b919050565b6012546001600160a01b0316331461079e5760405162461bcd60e51b815260040161079590614cff565b60405180910390fd5b6107a661410a565b6001600160401b03808916825287166020820152600186810b810b604083015285810b900b606082015283151560808201526107e0614138565b63ffffffff4281811683526000916107fe9186918816908b8b6115b3565b600881810b900b602084015290506108178c8c85611b25565b6108228c8c84611d7b565b61082c8c8c611e5f565b8a6001600160a01b03168c6001600160a01b03167f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c208c8c8c8c8c604051610877959493929190615a6c565b60405180910390a38a6001600160a01b03168c6001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836040516108c29190614af0565b60405180910390a3505050505050505050505050565b600a80546108e590615d74565b80601f016020809104026020016040519081016040528092919081815260200182805461091190615d74565b801561095e5780601f106109335761010080835404028352916020019161095e565b820191906000526020600020905b81548152906001019060200180831161094157829003601f168201915b505050505081565b82158015906109bb57508383600081811061099157634e487b7160e01b600052603260045260246000fd5b90506020020160208101906109a69190614408565b6001600160a01b0316336001600160a01b0316145b6109d75760405162461bcd60e51b815260040161079590614f21565b610a49868686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8a018190048102820181019092528881529250889150879081908401838280828437600092019190915250611eb992505050565b505050505050565b600080610a5e84846121c8565b516001600160401b0316949350505050565b60095460ff1681565b60095465010000000000900460ff1681565b600954610100900461ffff1681565b6001600160a01b0381166000908152600e6020908152604091829020600101805483518184028101840190945280845260609392830182828015610b0757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610ae9575b50505050509050919050565b6009546601000000000000900460ff1681565b6012546001600160a01b03163314610b505760405162461bcd60e51b815260040161079590614cff565b601280546001600160a01b03191690556040517f85c61b2c3289f917426c03e630bbb09a3762d42c2080cc1ea57803fcd479bb6f90600090a1565b60095460009060ff1615610ba157506001610bb5565b6000610bad84846121c8565b608001519150505b92915050565b600c5460ff1681565b600160209081526000928352604080842090915290825290205460ff1681565b610c2284848484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506122d292505050565b50505050565b600d6020526000908152604090205481565b60075460ff1681565b601280546001600160a01b031916331790556009805460ff19166001179055610c738989898989898989896125f8565b505050505050505050565b600080610c8b84846121c8565b60400151949350505050565b3360008181526001602081815260408084206001600160a01b0387168086529252808420805460ff1916909317909255905190917ff92a3df90be9663e4fa8008da5af16eff9e227303d0a59fd3e7bd9fa2980d39b91a350565b33610cfc8183612802565b5050565b6000816001600160a01b0316836001600160a01b03161015610d4057600d6000610d2a858561296d565b8152602001908152602001600020549050610bb5565b600d6000610d4e858561296d565b815260200190815260200160002054610d6690615de3565b9050610bb5565b336000818152600460205260409020610d869089612980565b15610da35760405162461bcd60e51b8152600401610795906158a9565b8160080b6001600160401b03610db890615dfd565b60080b1315610dd95760405162461bcd60e51b8152600401610795906153e2565b600882900b6001600160401b031215610e045760405162461bcd60e51b815260040161079590614eea565b610e14818989898989898961299e565b5050505050505050565b60095460ff1615610e415760405162461bcd60e51b815260040161079590614b36565b6000610e4d3383612e1d565b60a08101519091506001600160a01b0316610e7a5760405162461bcd60e51b8152600401610795906152a7565b610e843383612ed6565b6040516001600160a01b0383169033907f46814aaabccd0d590a16aa6c0f88ee4cfd871d7beb692b2998fda70433510a3290600090a35050565b6001600160a01b038116600090815260046020908152604091829020600101805483518184028101840190945280845260609392830182828015610b07576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610ae95750505050509050919050565b6000610f413383612f25565b9050610f508160000151612f57565b15610f6d5760405162461bcd60e51b815260040161079590614e58565b610f7681612f75565b816001600160a01b0316336001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a836020015160200151604051610fc19190614af0565b60405180910390a3610cfc33838360200151611d7b565b3360009081526001602090815260408083206001600160a01b038516845290915290205460ff1661101b5760405162461bcd60e51b815260040161079590614eb5565b3360008181526001602090815260408083206001600160a01b0386168085529252808320805460ff191690555190917ffe3265421a7458af9570e66dd7a92be646934442be69fa65895b948a0e20f0a091a350565b60006020819052908152604090205460ff1681565b6012546001600160a01b031633146110af5760405162461bcd60e51b815260040161079590614cff565b6110ba838383612fc1565b505050565b6009546301000000900460010b81565b6012546001600160a01b031633146110f95760405162461bcd60e51b815260040161079590614cff565b60095460ff1615156001146111205760405162461bcd60e51b815260040161079590614cc8565b6009805460ff191690556040517f1cf27a9544d54369d4ec6b136f8521f807c310e33c00115f99d9863871b55a4590600090a1565b6012546001600160a01b0316331461117f5760405162461bcd60e51b815260040161079590614cff565b611190878787878787876000613115565b50505050505050565b6012546001600160a01b031681565b600b80546108e590615d74565b6060600f600101805480602002602001604051908101604052809291908181526020018280548015610729576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161070b575050505050905090565b821580159061126d57508383600081811061124357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906112589190614408565b6001600160a01b0316336001600160a01b0316145b6112895760405162461bcd60e51b815260040161079590614f21565b610a49868686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8a0181900481028201810190925288815292508891508790819084018382808284376000920191909152506131d792505050565b6011602052600090815260409020546001600160a01b031681565b60006113223385612f25565b905061132d81612f75565b816001600160401b031681602001516020015160080b13156113615760405162461bcd60e51b815260040161079590614bd7565b826001600160401b031681602001516020015160080b12156113955760405162461bcd60e51b8152600401610795906151e5565b60408051600280825260608201835260009260208301908036833701905050905033816000815181106113d857634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050848160018151811061141a57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505061145e826020015160200151600083604051806020016040528060008152506131d7565b6114683386612802565b5050505050565b60008061147c8484613442565b6020015160080b949350505050565b3360009081526020819052604090205460ff168061151357508215801590611513575060016000858560008181106114d357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906114e89190614408565b6001600160a01b031681526020808201929092526040908101600090812033825290925290205460ff165b6112895760405162461bcd60e51b815260040161079590615078565b6012546001600160a01b031633146115595760405162461bcd60e51b815260040161079590614cff565b6001600160a01b0382811660008181526011602052604080822080546001600160a01b0319169486169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a35050565b60006001600160401b03600887900b138015906115e557506115db6001600160401b03615dfd565b60080b8660080b12155b6116015760405162461bcd60e51b81526004016107959061584c565b838511156116215760405162461bcd60e51b815260040161079590614b93565b6000808760080b1315611635575082611644565b60008760080b12156116445750815b8060010b60001415611659578691505061188a565b60006116658787615d26565b9050600888900b80600083121561168c57634e487b7160e01b600052600160045260246000fd5b60015b600f81136117cc576000846116a8600188900b86615bee565b6116b29190615bee565b905080158015906116da5750836116cd86600189900b615bee565b6116d79083615b9a565b14155b1561172c5760008660010b13156117215760008c60080b1315611706576001600160401b03925061171c565b6117166001600160401b03615dfd565b60080b92505b611726565b600092505b506117cc565b8161173d6301e13380612710615bee565b6117479190615bee565b6117519082615b9a565b93508361175e57506117cc565b826117698582615b17565b935060008113801561177b5750600085135b1561179157600084136117915792506117cc9050565b6000811280156117a15750600085125b156117b757600084126117b75792506117cc9050565b505080806117c490615daf565b91505061168f565b5060008460010b1315611822576001600160401b038113156117f257506001600160401b035b6118026001600160401b03615dfd565b60080b8112156118225761181c6001600160401b03615dfd565b60080b90505b60008460010b121561186a5760008a60080b13801561184357508960080b81135b1561184c575060005b60008a60080b12801561186157508960080b81125b1561186a575060005b600061187a60088c900b83615bee565b1215611884575060005b93505050505b95945050505050565b33610c22818585856134f1565b6008546118bf5760405162461bcd60e51b8152600401610795906154e6565b4260085411156118e15760405162461bcd60e51b8152600401610795906152de565b6009805460ff191660011790556040517f8d522fe0692f19bce789ee1908909a9da1d904e3b1d504672ab601bd5b25841d90600090a1565b60085481565b60008484600081811061194257634e487b7160e01b600052603260045260246000fd5b90506020020160208101906119579190614408565b905060008585611968600182615d26565b81811061198557634e487b7160e01b600052603260045260246000fd5b905060200201602081019061199a9190614408565b90506001600160a01b03811633146119c45760405162461bcd60e51b8152600401610795906157aa565b876001600160401b03166119d88383610d00565b12156119f65760405162461bcd60e51b8152600401610795906158e0565b611a0a82828a6001600160401b0316613548565b610e14888888888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a9150899081908401838280828437600092019190915250611eb992505050565b3361119081888888888888600061299e565b806110ba338483612fc1565b600080600080600080600080611ab08a8a612f25565b80518051602082015160408301516060840151608090940151949550919390929080611ade575060095460ff165b60209586015180519601516001600160401b039586169d50939094169a50600191820b9950900b965090945063ffffffff909116925060080b905092959891949750929550565b60095465010000000000900460ff16611ba5576009546040820151600190810b6301000000909204810b900b14611b6c57634e487b7160e01b600052600160045260246000fd5b6009546060820151600190810b6301000000909204810b900b14611ba057634e487b7160e01b600052600160045260246000fd5b611bf1565b6000816040015160010b1215611bcb57634e487b7160e01b600052600160045260246000fd5b6000816060015160010b1215611bf157634e487b7160e01b600052600160045260246000fd5b600060026000611c01868661296d565b81526020019081526020016000206000019050826001600160a01b0316846001600160a01b03161015611cd4578151815460208401516040850151606086015160808701511515600160a01b0260ff60a01b19600192830b61ffff908116600160901b0261ffff60901b199590940b16600160801b0261ffff60801b196001600160401b03968716600160401b026fffffffffffffffff0000000000000000199790991667ffffffffffffffff199098169790971795909516969096179490941692909217161791909116178155610c22565b6020820151815483516060850151604086015160808701511515600160a01b0260ff60a01b19600192830b61ffff908116600160901b0261ffff60901b199590940b16600160801b0261ffff60801b196001600160401b03968716600160401b026fffffffffffffffff0000000000000000199790991667ffffffffffffffff19909816979097179590951696909617949094169290921716179190911617815550505050565b600060026000611d8b868661296d565b81526020019081526020016000206001019050826001600160a01b0316846001600160a01b03161015611e065781518154602084015160080b68ffffffffffffffffff16640100000000026cffffffffffffffffff000000001963ffffffff90931663ffffffff199092169190911791909116178155610c22565b8151815463ffffffff191663ffffffff9091161781556020820151611e2a90615dfd565b815460089190910b68ffffffffffffffffff16640100000000026cffffffffffffffffff000000001990911617815550505050565b611e6a60058361355c565b611e7560058261355c565b6001600160a01b0382166000908152600460205260409020611e97908261355c565b6001600160a01b0381166000908152600460205260409020610cfc908361355c565b6001825111611eda5760405162461bcd60e51b8152600401610795906155e2565b836000600160ff1b806001835b60018851611ef59190615d26565b81101561211357600088611f0a836001615b57565b81518110611f2857634e487b7160e01b600052603260045260246000fd5b602002602001015190506000898381518110611f5457634e487b7160e01b600052603260045260246000fd5b60200260200101519050600080611f6b8385612f25565b9050611f7a8160000151612f57565b15611f975760405162461bcd60e51b81526004016107959061517e565b611fa081612f75565b6020808201510151611fb2828c6135c1565b6009546601000000000000900460ff161561201057889750611fd48282613635565b9850600082602001516020015160080b121596508789121580611ff45750865b6120105760405162461bcd60e51b815260040161079590615577565b61201f84868460200151611d7b565b846001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a84602001516020015160405161206a9190614af0565b60405180910390a360028d516120809190615d26565b861415612091575050505050612113565b6120af61209e8c836136e2565b600954610100900461ffff1661376f565b92506120bb838c615d3d565b9a506120c7838b615b6f565b99508d6001600160401b03168a6001600160401b031611156120fb5760405162461bcd60e51b815260040161079590615531565b5050505050808061210b90615dcf565b915050611ee7565b5086600188516121239190615d26565b8151811061214157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03168760008151811061217357634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c168b896040516121b5929190615a4a565b60405180910390a3505050505050505050565b6121d061410a565b6000600260006121e0868661296d565b81526020808201929092526040908101600020815160a08101835290546001600160401b038082168352600160401b82041693820193909352600160801b8304600190810b810b810b92820192909252600160901b8304820b820b90910b6060820152600160a01b90910460ff1615156080820152905061225f61410a565b836001600160a01b0316856001600160a01b031610156122805750806122ca565b81516001600160401b03908116602080840191909152830151168152604080830151600190810b810b606080850191909152840151810b900b908201526080808301511515908201525b949350505050565b6003815110156122f45760405162461bcd60e51b81526004016107959061522d565b8060008151811061231557634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316336001600160a01b03161461234d5760405162461bcd60e51b815260040161079590615462565b806001825161235c9190615d26565b8151811061237a57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316336001600160a01b0316146123b25760405162461bcd60e51b815260040161079590615121565b60006123e6826000815181106123d857634e487b7160e01b600052603260045260246000fd5b602002602001015185612f25565b90506123f58160000151612f57565b156124125760405162461bcd60e51b815260040161079590615499565b61241b81612f75565b6000816020015190506000816020015160080b13156124e457846001600160a01b03168360018151811061245f57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03161461248d5760405162461bcd60e51b815260040161079590615718565b806020015160080b81602001516001600160401b0316146124c05760405162461bcd60e51b815260040161079590615775565b6124df8160200151858560405180602001604052806000815250611eb9565b6125c6565b6000816020015160080b12156125c657846001600160a01b0316836002855161250d9190615d26565b8151811061252b57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316146125595760405162461bcd60e51b815260040161079590614df0565b806020015161256790615dfd565b60080b816020015161257890615dfd565b6001600160401b03161461259e5760405162461bcd60e51b815260040161079590615775565b6125c681602001516125af90615dfd565b8585604051806020016040528060008152506131d7565b611468836000815181106125ea57634e487b7160e01b600052603260045260246000fd5b602002602001015186612802565b60075460ff161561261b5760405162461bcd60e51b815260040161079590615807565b6007805460ff1916600190811790915585900b158015906126395750835b156126565760405162461bcd60e51b815260040161079590615328565b6107d08560010b1315801561267157506107cf198560010b12155b61268d5760405162461bcd60e51b815260040161079590615974565b82158061269f575082801561269f5750835b6126bb5760405162461bcd60e51b815260040161079590615619565b8115806126c757504282115b6126e35760405162461bcd60e51b8152600401610795906159ba565b8561ffff16600114156127085760405162461bcd60e51b8152600401610795906150c4565b885161271b90600a9060208c019061414f565b50875161272f90600b9060208b019061414f565b50600c805460ff191660ff89161790556009805462ffff00191661010061ffff898116919091029190911764ffff00000019166301000000600189900b92909216919091021765ff0000000000191665010000000000861515021766ff0000000000001916660100000000000085151502179055600882905560005b81518110156127f6576127e48282815181106127d757634e487b7160e01b600052603260045260246000fd5b60200260200101516137bb565b806127ee81615dcf565b9150506127ab565b50505050505050505050565b600061280e8383613442565b9050806020015160080b6000146128375760405162461bcd60e51b815260040161079590614d93565b6128418383610b8b565b1561285e5760405162461bcd60e51b815260040161079590615499565b600061286a848461296d565b6000818152600360209081526040808320805474ffffffffffffffffffffffffffffffffffffffffff199081168255600191820180546001600160e81b031916905560028452828520805490911681550180546cffffffffffffffffffffffffff191690556001600160a01b0388168352600490915290209091506128ef9084613807565b6001600160a01b03831660009081526004602052604090206129119085613807565b826001600160a01b0316846001600160a01b03167f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c20600080600080600060405161295f959493929190614afe565b60405180910390a350505050565b60006129798383613937565b9392505050565b6001600160a01b031660009081526020919091526040902054151590565b60095460ff16156129c15760405162461bcd60e51b815260040161079590614d36565b60006129cd89896121c8565b90506129d881612f57565b156129fb5782156129fb5760405162461bcd60e51b815260040161079590614f64565b60095465010000000000900460ff1680612a425750600954600186810b6301000000909204810b900b148015612a425750600954600185810b6301000000909204810b900b145b612a5e5760405162461bcd60e51b815260040161079590615008565b60095465010000000000900460ff1615612b145760008560010b12158015612a8a575060008460010b12155b612aa65760405162461bcd60e51b815260040161079590615686565b6107d08560010b13158015612ac157506107cf198560010b12155b612add5760405162461bcd60e51b815260040161079590615419565b6107d08460010b13158015612af857506107cf198460010b12155b612b145760405162461bcd60e51b815260040161079590614c1f565b80600001516001600160401b0316876001600160401b031611158015612b50575080602001516001600160401b0316866001600160401b031611155b8015612b665750806040015160010b8560010b13155b8015612b7b5750806060015160010b8460010b145b8015612b8e575080608001511515831515145b8015612b9c57508060800151155b15612c305780516001600160401b0316158015612bc4575060208101516001600160401b0316155b8015612bd55750604081015160010b155b8015612be65750606081015160010b155b8015612bf457506080810151155b15612c115760405162461bcd60e51b81526004016107959061593d565b612c1b8989612ed6565b612c2a898989898989896139fa565b50610e14565b6000612c3c8a8a612e1d565b9050886001600160a01b03168160a001516001600160a01b03161415612e0d5780600001516001600160401b0316876001600160401b031611158015612c98575080602001516001600160401b0316886001600160401b031611155b8015612cae5750806060015160010b8660010b13155b8015612cc35750806040015160010b8560010b145b8015612cd6575080608001511515841515145b8015612cf457508060c00151612ceb90615dfd565b60080b8360080b145b15612df857612d038a8a612ed6565b612d12898b898b898b8a6139fa565b60008360080b1315612d8457612d318a8a612d2c86615dfd565b613a13565b886001600160a01b03168a6001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c168560080b604051612d779190615a32565b60405180910390a3612df3565b60008360080b1215612df357612d9b898b85613a13565b896001600160a01b0316896001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685612dda90615dfd565b60080b604051612dea9190615a32565b60405180910390a35b612e08565b612e088a8a8a8a8a8a8a8a613115565b6127f6565b6127f68a8a8a8a8a8a8a8a613115565b612e256141d3565b600060036000612e35868661296d565b81526020808201929092526040908101600020815160e08101835281546001600160401b038082168352600160401b82041694820194909452600160801b8404600190810b810b810b93820193909352600160901b8404830b830b830b6060820152600160a01b9384900460ff16151560808201529101546001600160a01b03811660a083015291909104600890810b810b900b60c0820152949350505050565b60036000612ee4848461296d565b81526020810191909152604001600020805474ffffffffffffffffffffffffffffffffffffffffff1916815560010180546001600160e81b03191690555050565b612f2d61420f565b612f3561420f565b612f3f84846121c8565b8152612f4b8484613442565b60208201529392505050565b60095460009060ff1615612f6d57506001610766565b506080015190565b60208082015190810151905182516040810151606090910151612fa1939263ffffffff169142916115b3565b60209182018051600892830b90920b91909201525163ffffffff42169052565b6000600d6000612fd1868661296d565b81526020019081526020016000205490506000836001600160a01b0316856001600160a01b03161015613074576130088383615b17565b905061301381613a7e565b80600d6000613022888861296d565b8152602001908152602001600020819055507fb0fd525375cf2d63db200a0701eb5b6f384df5d85b2ed3abb8460b7c51a8128e85858360405161306793929190614a2b565b60405180910390a16130f6565b61307d83615de3565b6130879083615b17565b905061309281613a7e565b80600d60006130a1888861296d565b81526020810191909152604001600020557fb0fd525375cf2d63db200a0701eb5b6f384df5d85b2ed3abb8460b7c51a8128e85856130de84615de3565b6040516130ed93929190614a2b565b60405180910390a15b801561310b576131068585613aa5565b611468565b6114688585613aff565b61317888886040518060e001604052808a6001600160401b03168152602001896001600160401b031681526020018860010b81526020018760010b815260200186151581526020018c6001600160a01b031681526020018560080b815250613ba3565b866001600160a01b0316886001600160a01b03167f1bccbaa34c639b945bc7bf65a7461f2570dc411ef7574cf37ab4724f886723098888888888886040516131c596959493929190615aa1565b60405180910390a35050505050505050565b60018251116131f85760405162461bcd60e51b8152600401610795906155e2565b6000849050600080600080600190506000600188516132179190615d26565b90505b801561211357600088828151811061324257634e487b7160e01b600052603260045260246000fd5b6020026020010151905060008960018461325c9190615d26565b8151811061327a57634e487b7160e01b600052603260045260246000fd5b602002602001015190506000806132918385612f25565b90506132a08160000151612f57565b156132bd5760405162461bcd60e51b81526004016107959061517e565b6132c681612f75565b60018c516132d49190615d26565b8514156132e4576000915061330d565b61330a6132f98b8360200151602001516136e2565b600954610100900461ffff16613da1565b91505b613317828b615b6f565b9950613323828a615b6f565b98508c6001600160401b0316896001600160401b031611156133575760405162461bcd60e51b815260040161079590615531565b6020808201510151613369828c6135c1565b6009546601000000000000900460ff16156133c85788975061338b8282613635565b985087891315806133995750865b6133b55760405162461bcd60e51b815260040161079590615577565b600082602001516020015160080b121596505b6133d784868460200151611d7b565b846001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a8460200151602001516040516134229190614af0565b60405180910390a35050505050808061343a90615d5d565b91505061321a565b61344a614138565b60006002600061345a868661296d565b8152602080820192909252604090810160002081518083019092526001015463ffffffff811682526401000000009004600890810b810b900b9181019190915290506134a4614138565b836001600160a01b0316856001600160a01b031610156134c55750806122ca565b815163ffffffff16815260208201516134dd90615dfd565b600890810b900b6020820152949350505050565b6009546301000000900460010b80600061350b87876121c8565b60808101516009549192509065010000000000900460ff16156135375781604001519350816060015192505b610e1488888888888887600061299e565b80610c22848461355784615de3565b612fc1565b6001600160a01b038116600090815260208390526040902080546110ba5760018084015461358991615b57565b81556001808401805491820181556000908152602090200180546001600160a01b0384166001600160a01b0319909116179055505050565b6000816001600160401b03168360200151602001516135e09190615cb0565b8351602001519091506001600160401b0381166135fc83615dfd565b60080b131561361d5760405162461bcd60e51b815260040161079590615385565b50602092830151600891820b90910b92019190915250565b602080830151015160009081613652600883810b9086900b615c71565b905060008460080b136136845784516060015160010b61367182615de3565b61367b9190615bee565b92505050610bb5565b60008260080b126136a15784516040015160010b61367182615de3565b8451606001516136b89060010b600884900b615bee565b85516040015160010b6136ce600887900b615de3565b6136d89190615bee565b61367b9190615b17565b60006001600160401b038316600883900b82121561372d5761370d836001600160401b038616615cb0565b9050836001600160401b03168160080b131561372d576000915050610bb5565b60008160080b13613742576000915050610bb5565b806001600160401b038116600882900b146122ca5760405162461bcd60e51b815260040161079590614fc1565b600061ffff8216158061378957506001600160401b038316155b1561379657506000610bb5565b61ffff82166137a6600185615d3d565b6137b09190615bc8565b612979906001615b6f565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517fa491c3daa0c7408c73f5c3bbfb2b1501b2a7ace3e155dc9cc059fad331ce844f9190a250565b6001600160a01b03811660009081526020839052604090208054156110ba576001808401805460009261383991615d26565b8154811061385757634e487b7160e01b600052603260045260246000fd5b60009182526020909120015482546001600160a01b03909116915081906001868101916138849190615d26565b815481106138a257634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550836001018054806138f157634e487b7160e01b600052603160045260246000fd5b60008281526020808220600019908401810180546001600160a01b031916905590920190925583546001600160a01b039390931682529490945260408420559190915550565b6000816001600160a01b0316836001600160a01b0316141561396b5760405162461bcd60e51b815260040161079590614c6b565b816001600160a01b0316836001600160a01b031610156139b55782826040516020016139989291906149f0565b604051602081830303815290604052805190602001209050610bb5565b816001600160a01b0316836001600160a01b031611156139e25781836040516020016139989291906149f0565b60405162461bcd60e51b815260040161079590615270565b613a048787613de2565b61119087878787878787613f99565b613a1b614138565b600882810b900b602082015263ffffffff42168152613a3b848483611d7b565b826001600160a01b0316846001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a8460405161295f9190614af0565b600160ff1b811415613aa25760405162461bcd60e51b8152600401610795906156d1565b50565b613ab0600f8361355c565b613abb600f8261355c565b6001600160a01b0382166000908152600e60205260409020613add908261355c565b6001600160a01b0381166000908152600e60205260409020610cfc908361355c565b6001600160a01b0382166000908152600e60205260409020613b219082613807565b6001600160a01b0381166000908152600e60205260409020613b439083613807565b6001600160a01b0382166000908152600e60205260409020613b6490614103565b613b7357613b73600f83613807565b6001600160a01b0381166000908152600e60205260409020613b9490614103565b610cfc57610cfc600f82613807565b60095465010000000000900460ff16613c23576009546040820151600190810b6301000000909204810b900b14613bea57634e487b7160e01b600052600160045260246000fd5b6009546060820151600190810b6301000000909204810b900b14613c1e57634e487b7160e01b600052600160045260246000fd5b613c6f565b6000816040015160010b1215613c4957634e487b7160e01b600052600160045260246000fd5b6000816060015160010b1215613c6f57634e487b7160e01b600052600160045260246000fd5b600060036000613c7f868661296d565b81526020808201929092526040908101600020845181549386015192860151606087015160a08801516001808601805460808c015167ffffffffffffffff19909a166001600160401b03978816176fffffffffffffffff00000000000000001916600160401b97909916969096029790971761ffff60801b1916600160801b94820b61ffff908116959095021761ffff60901b1916600160901b9390910b93909316919091029190911760ff60a01b1916600160a01b95151586021790925560c0909501516001600160a01b03199095166001600160a01b03909116177fffffff000000000000000000ffffffffffffffffffffffffffffffffffffffff1668ffffffffffffffffff60089590950b9490941690910292909217909155505050565b600061ffff82161580613dbb57506001600160401b038316155b15613dc857506000610bb5565b613dd3600183615d03565b61ffff166137a6600185615d3d565b6001600160a01b0382811660009081526011602052604090205416613f20576001600160a01b0381811660009081526011602052604090205416613ec5576001600160a01b03828116600081815260116020526040808220805460016001600160a01b03199182168117909255948616835281832080549095168117909455519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a36040516001600160a01b038216906001907f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f90600090a3610cfc565b6001600160a01b0382811660008181526011602052604080822080546001600160a01b0319169486169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a3610cfc565b6001600160a01b0381811660009081526011602052604090205416610cfc576001600160a01b0381811660008181526011602052604080822080546001600160a01b0319169487169485179055519192917f1f403a71b91b70f8124e060d794b5b4ccd0ab67c6f049b1f141f469d1aa3e86f9190a35050565b6000613fa58888612f25565b905080600001516040015160010b8460010b141580613fd2575080600001516060015160010b8360010b14155b8015613fe75750602080820151015160080b15155b1561404957613ff581612f75565b866001600160a01b0316886001600160a01b03167f90496e8ae1151e3218a7f81bfa88e883bcd6fd5695aac012f6e49ac0cdf7b56a8360200151602001516040516140409190614af0565b60405180910390a35b6140538888611e5f565b80516001600160401b0380881690915281519086166020918201528151600186810b810b604090920191909152825185820b90910b60609091015281518315156080909101528101516140a99089908990611d7b565b6140b888888360000151611b25565b866001600160a01b0316886001600160a01b03167f7d7e48d5a1170addc67e1c897f2b22d44ddfe222d99ebaae22ac4c6f69484c2088888888886040516131c5959493929190615a6c565b6001015490565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604080518082019091526000808252602082015290565b82805461415b90615d74565b90600052602060002090601f01602090048101928261417d57600085556141c3565b82601f1061419657805160ff19168380011785556141c3565b828001600101855582156141c3579182015b828111156141c35782518255916020019190600101906141a8565b506141cf929150614234565b5090565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b604051806040016040528061422261410a565b815260200161422f614138565b905290565b5b808211156141cf5760008155600101614235565b80356001600160a01b038116811461076657600080fd5b60008083601f840112614271578182fd5b5081356001600160401b03811115614287578182fd5b60208301915083602080830285010111156142a157600080fd5b9250929050565b600082601f8301126142b8578081fd5b813560206001600160401b038211156142d3576142d3615e50565b8082026142e1828201615aee565b8381528281019086840183880185018910156142fb578687fd5b8693505b858410156143245761431081614249565b8352600193909301929184019184016142ff565b50979650505050505050565b8035801515811461076657600080fd5b8035600181900b811461076657600080fd5b8035600881900b811461076657600080fd5b600082601f830112614374578081fd5b81356001600160401b0381111561438d5761438d615e50565b6143a0601f8201601f1916602001615aee565b8181528460208386010111156143b4578283fd5b816020850160208301379081016020019190915292915050565b803561ffff8116811461076657600080fd5b80356001600160401b038116811461076657600080fd5b803560ff8116811461076657600080fd5b600060208284031215614419578081fd5b61297982614249565b60008060408385031215614434578081fd5b61443d83614249565b915061444b60208401614249565b90509250929050565b600080600060608486031215614468578081fd5b61447184614249565b925061447f60208501614249565b9150604084013590509250925092565b600080600080600080600060e0888a0312156144a9578283fd5b6144b288614249565b96506144c060208901614249565b95506144ce604089016143e0565b94506144dc606089016143e0565b93506144ea60808901614340565b92506144f860a08901614340565b915061450660c08901614330565b905092959891949750929550565b60008060008060008060008060006101208a8c031215614532578182fd5b61453b8a614249565b985061454960208b01614249565b975061455760408b016143e0565b965061456560608b016143e0565b955061457360808b01614340565b945061458160a08b01614340565b935061458f60c08b01614330565b925060e08a013563ffffffff811681146145a7578283fd5b91506145b66101008b01614352565b90509295985092959850929598565b600080604083850312156145d7578182fd5b6145e083614249565b946020939093013593505050565b60008060008060608587031215614603578182fd5b61460c85614249565b935061461a602086016143e0565b925060408501356001600160401b03811115614634578283fd5b61464087828801614260565b95989497509550505050565b600080600060608486031215614660578081fd5b61466984614249565b9250614677602085016143e0565b9150614685604085016143e0565b90509250925092565b60008060008060008060c087890312156146a6578384fd5b6146af87614249565b95506146bd602088016143e0565b94506146cb604088016143e0565b93506146d960608801614340565b92506146e760808801614340565b91506146f560a08801614330565b90509295509295509295565b600080600080600080600060e0888a03121561471b578081fd5b61472488614249565b9650614732602089016143e0565b9550614740604089016143e0565b945061474e60608901614340565b935061475c60808901614340565b925061476a60a08901614330565b915061450660c08901614352565b600060208284031215614789578081fd5b5035919050565b6000602082840312156147a1578081fd5b81356001600160e01b031981168114612979578182fd5b600080600080600060a086880312156147cf578283fd5b6147d886614352565b945060208601359350604086013592506147f460608701614340565b915061480260808701614340565b90509295509295909350565b60008060008060008060008060006101208a8c03121561482c578283fd5b89356001600160401b0380821115614842578485fd5b61484e8d838e01614364565b9a5060208c0135915080821115614863578485fd5b61486f8d838e01614364565b995061487d60408d016143f7565b985061488b60608d016143ce565b975061489960808d01614340565b96506148a760a08d01614330565b95506148b560c08d01614330565b945060e08c013593506101008c01359150808211156148d2578283fd5b506148df8c828d016142a8565b9150509295985092959850929598565b60008060008060008060808789031215614907578384fd5b614910876143e0565b955061491e602088016143e0565b945060408701356001600160401b0380821115614939578586fd5b6149458a838b01614260565b9096509450606089013591508082111561495d578384fd5b818901915089601f830112614970578384fd5b81358181111561497e578485fd5b8a602082850101111561498f578485fd5b6020830194508093505050509295509295509295565b60008151808452815b818110156149ca576020818501810151868301820152016149ae565b818111156149db5782602083870101525b50601f01601f19169290920160200192915050565b6bffffffffffffffffffffffff19606093841b811682529190921b16601482015260280190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6020808252825182820181905260009190848201906040850190845b81811015614a905783516001600160a01b031683529284019291840191600101614a6b565b50909695505050505050565b901515815260200190565b60019190910b815260200190565b90815260200190565b9687526020870195909552604086019390935260608501919091521515608084015260a083015260c082015260e00190565b60089190910b815260200190565b9485526020850193909352604084019190915260608301521515608082015260a00190565b60006020825261297960208301846149a5565b6020808252603c908201527f546865206e6574776f726b2069732066726f7a656e3b2074727573746c696e6560408201527f73207570646174652063616e6e6f742062652063616e63656c65642e00000000606082015260800190565b60208082526024908201527f5f737461727454696d652073686f756c64206265206265666f7265205f656e6460408201526354696d6560e01b606082015260800190565b60208082526028908201527f42616c616e6365206f6e2074727573746c696e652065786365656473205f6d616040820152677842616c616e636560c01b606082015260800190565b6020808252602c908201527f496e7465726573747320726174652072656365697665642063616e6e6f74206560408201526b3c31b2b2b21015969918129760a11b606082015260800190565b6020808252602e908201527f556e69717565206964656e74696669657273207265717569726520646966666560408201527f72656e7420616464726573736573000000000000000000000000000000000000606082015260800190565b60208082526015908201527f4e6574776f726b206973206e6f742066726f7a656e0000000000000000000000604082015260600190565b60208082526017908201527f43616c6c6572206973206e6f7420746865206f776e6572000000000000000000604082015260600190565b60208082526037908201527f546865206e6574776f726b2069732066726f7a656e20616e642074727573746c60408201527f696e65732063616e6e6f7420626520757064617465642e000000000000000000606082015260800190565b60208082526036908201527f412074727573746c696e652063616e206f6e6c7920626520636c6f736564206960408201527f66206974732062616c616e6365206973207a65726f2e00000000000000000000606082015260800190565b60208082526042908201527f5365636f6e6420746f206c61737420656c656d656e74206f662070617468206460408201527f6f6573206e6f74206d61746368205f6f74686572506172747920616464726573606082015261399760f11b608082015260a00190565b6020808252602f908201527f43616e6e6f74206170706c7920696e746572657374732c20746865207472757360408201527f746c696e652069732066726f7a656e0000000000000000000000000000000000606082015260800190565b6020808252818101527f546172676574206e6f7420617574686f72697a65642062792073656e6465722e604082015260600190565b6020808252601c908201527f5472616e736665722065786365656473206d61782062616c616e636500000000604082015260600190565b60208082526023908201527f5468652070617468206d7573742073746172742077697468206d73672e73656e6040820152623232b960e91b606082015260800190565b6020808252603a908201527f54727573746c696e652069732066726f7a656e2c2069742063616e6e6f74206260408201527f65207570646174656420756e6c65737320756e66726f7a656e2e000000000000606082015260800190565b60208082526027908201527f54686520696d62616c616e636520646f6573206e6f742066697420696e746f206040820152663ab4b73a1b1a1760c91b606082015260800190565b6020808252604a908201527f496e74657265737420726174657320676976656e20616e64207265636569766560408201527f64206d75737420626520657175616c20746f2064656661756c7420696e74657260608201526932b9ba103930ba32b99760b11b608082015260a00190565b6020808252602c908201527f5468652073656e646572206f6620746865206d657373616765206973206e6f7460408201526b1030baba3437b934bd32b21760a11b606082015260800190565b6020808252603c908201527f546f6f206c6f7720696d62616c616e6365206665652064697669736f722c206660408201527f6565732063616e206e6f74206265206d6f7265207468616e2035302500000000606082015260800190565b6020808252602f908201527f4c61737420656c656d656e74206f66207061746820646f6573206e6f74206d6160408201527f746368206d73672e73656e6465722e0000000000000000000000000000000000606082015260800190565b60208082526041908201527f546865207061746820676976656e20697320696e636f72726563743a206f6e6560408201527f2074727573746c696e6520696e2074686520706174682069732066726f7a656e6060820152601760f91b608082015260a00190565b60208082526028908201527f42616c616e6365206f6e2074727573746c696e652065786365656473205f6d696040820152676e42616c616e636560c01b606082015260800190565b60208082526023908201527f5061746820676976656e20746f6f2073686f727420746f20626520636f72726560408201526231ba1760e91b606082015260800190565b60208082526011908201527f556e726561636861626c6520636f64652e000000000000000000000000000000604082015260600190565b60208082526015908201527f4e6f207265717565737420746f2064656c6574652e0000000000000000000000604082015260600190565b6020808252602a908201527f5468652063757272656e6379206e6574776f726b2063616e6e6f7420626520666040820152693937bd32b7103cb2ba1760b11b606082015260800190565b6020808252603d908201527f437573746f6d20696e7465726573747320617265207365743b2064656661756c60408201527f7420696e7465726573742072617465206d757374206265207a65726f2e000000606082015260800190565b6020808252603e908201527f546865207472616e736665727265642076616c7565206578636565647320746860408201527f65206361706163697479206f662074686520637265646974206c696e652e0000606082015260800190565b6020808252601c908201527f5472616e736665722065786365656473206d696e2062616c616e636500000000604082015260600190565b60208082526029908201527f496e74657265737473207261746520676976656e2063616e6e6f74206578636560408201526832b21015969918129760b91b606082015260800190565b6020808252601b908201527f50617468206d757374207374617274206d73672e73656e6465722e0000000000604082015260600190565b6020808252602d908201527f5468652074727573746c696e652069732066726f7a656e20616e642063616e6e60408201526c37ba1031329031b637b9b2b21760991b606082015260800190565b6020808252602b908201527f5468652063757272656e6379206e6574776f726b206861732064697361626c6560408201526a3210333932b2bd34b7339760a91b606082015260800190565b60208082526026908201527f54686520666565732065786365656420746865206d617820666565207061726160408201526536b2ba32b91760d11b606082015260800190565b60208082526045908201527f546865207472616e73666572207761732070726576656e74656420627920746860408201527f652070726576656e74206d65646961746f7220696e7465726573747320737472606082015264617465677960d81b608082015260a00190565b6020808252600f908201527f5061746820746f6f2073686f72742e0000000000000000000000000000000000604082015260600190565b60208082526047908201527f50726576656e74206d65646961746f7220696e7465726573742063616e6e6f7460408201527f2062652073657420776974686f7574207573696e6720637573746f6d20696e7460608201526632b932b9ba399760c91b608082015260a00190565b6020808252602b908201527f4f6e6c7920706f73697469766520696e7465726573742072617465732061726560408201526a1039bab83837b93a32b21760a91b606082015260800190565b60208082526027908201527f50726576656e74207573696e672076616c756520666f72206d696e7573206f7660408201526632b9333637bb9760c91b606082015260800190565b6020808252603a908201527f5365636f6e6420656c656d656e74206f66207061746820646f6573206e6f742060408201527f6d61746368205f6f74686572506172747920616464726573732e000000000000606082015260800190565b6020808252818101527f43616e6e6f74207472616e7366657220746f6f20686967682076616c7565732e604082015260600190565b60208082526033908201527f546865207472616e736665722063616e206f6e6c7920626520696e697469617460408201527f656420627920746865206372656469746f722e00000000000000000000000000606082015260800190565b60208082526025908201527f43757272656e6379204e6574776f726b20616c726561647920696e697469616c60408201526434bd32b21760d91b606082015260800190565b6020808252603d908201527f5468652066756e6374696f6e20726571756972657320746865205f62616c616e60408201527f636520746f2066697420696e746f2061203634206269742076616c7565000000606082015260800190565b6020808252601a908201527f412074727573746c696e6520616c726561647920657869737473000000000000604082015260600190565b60208082526038908201527f5468652073656e64657220646f6573206e6f742068617665207375636820646560408201527f627420746f7761726473207468652072656365697665722e0000000000000000606082015260800190565b6020808252601c908201527f43616e206e6f74206f70656e207a65726f2074727573746c696e652e00000000604082015260600190565b60208082526026908201527f44656661756c7420696e746572657374732063616e6e6f74206578636565642060408201526515969918129760d11b606082015260800190565b60208082526043908201527f45787069726174696f6e2074696d65206d75737420626520656974686572206960408201527f6e2074686520667574757265206f72207a65726f20746f2064697361626c652060608201526234ba1760e91b608082015260a00190565b61ffff91909116815260200190565b90815260406020820181905260009082015260600190565b60006001600160401b0384168252604060208301526122ca60408301846149a5565b6001600160401b039586168152939094166020840152600191820b6040840152900b6060820152901515608082015260a00190565b6001600160401b039687168152949095166020850152600192830b6040850152910b60608301521515608082015260089190910b60a082015260c00190565b60ff91909116815260200190565b6040518181016001600160401b0381118282101715615b0f57615b0f615e50565b604052919050565b6000808212826001600160ff1b0303841381151615615b3857615b38615e24565b600160ff1b8390038412811615615b5157615b51615e24565b50500190565b60008219821115615b6a57615b6a615e24565b500190565b60006001600160401b03808316818516808303821115615b9157615b91615e24565b01949350505050565b600082615ba957615ba9615e3a565b600160ff1b821460001984141615615bc357615bc3615e24565b500590565b60006001600160401b0380841680615be257615be2615e3a565b92169190910492915050565b60006001600160ff1b0381841382841385830485118282161615615c1457615c14615e24565b600160ff1b84871282811687830589121615615c3257615c32615e24565b858712925087820587128484161615615c4d57615c4d615e24565b87850587128184161615615c6357615c63615e24565b505050929093029392505050565b60008083128015600160ff1b850184121615615c8f57615c8f615e24565b836001600160ff1b03018313811615615caa57615caa615e24565b50500390565b60008160080b8360080b82811281687fffffffffffffffff1901831281151615615cdc57615cdc615e24565b81687fffffffffffffffff018313811615615cf957615cf9615e24565b5090039392505050565b600061ffff83811690831681811015615d1e57615d1e615e24565b039392505050565b600082821015615d3857615d38615e24565b500390565b60006001600160401b0383811690831681811015615d1e57615d1e615e24565b600081615d6c57615d6c615e24565b506000190190565b600281046001821680615d8857607f821691505b60208210811415615da957634e487b7160e01b600052602260045260246000fd5b50919050565b60006001600160ff1b03821415615dc857615dc8615e24565b5060010190565b6000600019821415615dc857615dc8615e24565b6000600160ff1b821415615df957615df9615e24565b0390565b60008160080b687fffffffffffffffff19811415615e1d57615e1d615e24565b9003919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220c9b27455f8f1873b3a29ccd574e03a8f06f5276427a686f411c8f68395ef4b5064736f6c63430008000033",
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
                        },
                        {
                            "indexed": false,
                            "internalType": "int72",
                            "name": "_transfer",
                            "type": "int72"
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
                        },
                        {
                            "internalType": "int72",
                            "name": "_transfer",
                            "type": "int72"
                        }
                    ],
                    "name": "updateTrustline",
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
                    },
                    "updateTrustline(address,uint64,uint64,int16,int16,bool,int72)": {
                        "params": {
                            "_creditlineGiven": "The creditline limit given by msg.sender",
                            "_creditlineReceived": "The creditline limit given _debtor",
                            "_debtor": "The other party of the trustline agreement",
                            "_interestRateGiven": "The interest given by msg.sender",
                            "_interestRateReceived": "The interest given by _debtor",
                            "_isFrozen": "Whether the initiator asks for freezing the trustline",
                            "_transfer": "To apply a transfer when the trustline is accepted, >0 for a transfer from msg.sender to _debtor, <0 for the other way around"
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
                    },
                    "updateTrustline(address,uint64,uint64,int16,int16,bool,int72)": {
                        "notice": "`msg.sender` offers a trustline update to `_debtor` of `_creditlineGiven` tokens for `_creditlineReceived` token Needs to be accepted by the other party, unless we reduce both values."
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "compilationTarget": {
                "contracts/currency-network/version2/CurrencyNetworkOwnableV2.sol": "CurrencyNetworkOwnableV2"
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
            "contracts/currency-network/CurrencyNetworkInterface.sol": {
                "keccak256": "0x97d1624a373750c036781655549315f07fa003eb870b463a3054f5b2c415fb40",
                "license": "MIT",
                "urls": [
                    "bzz-raw://bf97bc69a9491fabc3ce08f696a79928c4fa27d4fe60c55b4b477d6aea25bc1c",
                    "dweb:/ipfs/Qmd3GDjkq7BTzrCgoAFzCBeFeAdL4hpBKHHQDzLiYt2ny4"
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
            "contracts/currency-network/version2/CurrencyNetworkBasicV2.sol": {
                "keccak256": "0x3423928a2d244df9eeb695046d4477c0d6f7bdd425498d3fff1206ba801868fe",
                "license": "MIT",
                "urls": [
                    "bzz-raw://37555594fc32fb956e6fbbd3e1d51ff9f129195aa12f867e844ac9431e5c713b",
                    "dweb:/ipfs/QmVophcYqiYHfejwEmvfFkmAqRSzCDGntiKGjVnJNTdHXA"
                ]
            },
            "contracts/currency-network/version2/CurrencyNetworkOwnableV2.sol": {
                "keccak256": "0x6dfc7012a224c046973a750a2f76f0cfd146efd638f839b15e343b1a890a032e",
                "license": "MIT",
                "urls": [
                    "bzz-raw://7d65b313df706125d4de493be7f697c900b74811e6ad8d74a003d6f9317e5518",
                    "dweb:/ipfs/QmSiik4knPD2UaNE7zjVrtHj84LJw6KQTwVBHLSrMSzrJg"
                ]
            },
            "contracts/currency-network/version2/CurrencyNetworkV2.sol": {
                "keccak256": "0x24f74e284cdb32df52d16bf50690f49c14f335c03fe35decfa8778c9aa1a18c5",
                "license": "MIT",
                "urls": [
                    "bzz-raw://ba29c75a68b7b37d2b4a95bf1e233515bef4254a2a0e7a0caea897a3213d4988",
                    "dweb:/ipfs/QmPmWTUEkVQJZHNQ5pGEaqZRujbFXZxUgbsngbtN8VaBy6"
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
            },
            "updateTrustline(address,uint64,uint64,int16,int16,bool,int72)": {
                "notice": "`msg.sender` offers a trustline update to `_debtor` of `_creditlineGiven` tokens for `_creditlineReceived` token Needs to be accepted by the other party, unless we reduce both values."
            }
        },
        "version": 1
    }
}
```