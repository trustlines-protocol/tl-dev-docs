---
layout: contracts
title: First Validator Set contracts.json
---

```json
[
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{ "type": "address", "name": "" }],
    "name": "validatorProxy",
    "inputs": [],
    "constant": true
  },
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{ "type": "bool", "name": "" }],
    "name": "initialized",
    "inputs": [],
    "constant": true
  },
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{ "type": "address", "name": "" }],
    "name": "pendingValidators",
    "inputs": [{ "type": "uint256", "name": "" }],
    "constant": true
  },
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{ "type": "address[]", "name": "" }],
    "name": "getValidators",
    "inputs": [{ "type": "uint256", "name": "_epochStart" }],
    "constant": true
  },
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{ "type": "uint256[]", "name": "" }],
    "name": "getEpochStartHeights",
    "inputs": [],
    "constant": true
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "finalizeChange",
    "inputs": [],
    "constant": false
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "init",
    "inputs": [
      { "type": "address[]", "name": "_validators" },
      { "type": "address", "name": "_validatorProxy" }
    ],
    "constant": false
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "reportMaliciousValidator",
    "inputs": [
      { "type": "bytes", "name": "_rlpUnsignedHeaderOne" },
      { "type": "bytes", "name": "_signatureOne" },
      { "type": "bytes", "name": "_rlpUnsignedHeaderTwo" },
      { "type": "bytes", "name": "_signatureTwo" }
    ],
    "constant": false
  },
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{ "type": "bool", "name": "" }],
    "name": "finalized",
    "inputs": [],
    "constant": true
  },
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{ "type": "address[]", "name": "_validators" }],
    "name": "getValidators",
    "inputs": [],
    "constant": true
  },
  {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{ "type": "address", "name": "" }],
    "name": "systemAddress",
    "inputs": [],
    "constant": true
  },
  {
    "type": "event",
    "name": "InitiateChange",
    "inputs": [
      { "type": "bytes32", "name": "_parentHash", "indexed": true },
      { "type": "address[]", "name": "_newSet", "indexed": false }
    ],
    "anonymous": false
  }
]
```
