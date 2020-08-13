---
layout: contracts
title: Foreign Bridge contracts.json
---

```json
{
  "ForeignBridge": {
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "requiredBlockConfirmations",
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
        "inputs": [],
        "name": "burn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "trustlinesNetworkToken",
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
        "inputs": [
          {
            "name": "_trustlinesNetworkToken",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }
    ],
    "devdoc": {
      "methods": {}
    },
    "bytecode": "0x6080604052600860005534801561001557600080fd5b5060405160208061030a8339810180604052602081101561003557600080fd5b50516001600160a01b038116610096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806102dc602e913960400191505060405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055610217806100c56000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633f0a9f651461004657806344df8e7014610060578063cd1df0ed1461006a575b600080fd5b61004e61009b565b60408051918252519081900360200190f35b6100686100a1565b005b6100726101cf565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005481565b600154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b15801561011257600080fd5b505afa158015610126573d6000803e3d6000fd5b505050506040513d602081101561013c57600080fd5b5051600154604080517f42966c6800000000000000000000000000000000000000000000000000000000815260048101849052905192935073ffffffffffffffffffffffffffffffffffffffff909116916342966c689160248082019260009290919082900301818387803b1580156101b457600080fd5b505af11580156101c8573d6000803e3d6000fd5b5050505050565b60015473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a7230582028baa351f7ad7dbb9f17aa63b3a23cbfc19904f31e4fb2c0ad97bb4d245079460029546f6b656e20636f6e74726163742063616e206e6f74206265206f6e20746865207a65726f206164647265737321",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80633f0a9f651461004657806344df8e7014610060578063cd1df0ed1461006a575b600080fd5b61004e61009b565b60408051918252519081900360200190f35b6100686100a1565b005b6100726101cf565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005481565b600154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b15801561011257600080fd5b505afa158015610126573d6000803e3d6000fd5b505050506040513d602081101561013c57600080fd5b5051600154604080517f42966c6800000000000000000000000000000000000000000000000000000000815260048101849052905192935073ffffffffffffffffffffffffffffffffffffffff909116916342966c689160248082019260009290919082900301818387803b1580156101b457600080fd5b505af11580156101c8573d6000803e3d6000fd5b5050505050565b60015473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a7230582028baa351f7ad7dbb9f17aa63b3a23cbfc19904f31e4fb2c0ad97bb4d245079460029",
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
            "name": "requiredBlockConfirmations",
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
            "inputs": [],
            "name": "burn",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "trustlinesNetworkToken",
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
            "inputs": [
              {
                "name": "_trustlinesNetworkToken",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          }
        ],
        "devdoc": {
          "methods": {}
        },
        "userdoc": {
          "methods": {}
        }
      },
      "settings": {
        "compilationTarget": {
          "contracts/bridge/ForeignBridge.sol": "ForeignBridge"
        },
        "evmVersion": "petersburg",
        "libraries": {},
        "optimizer": {
          "enabled": true,
          "runs": 5000
        },
        "remappings": []
      },
      "sources": {
        "contracts/bridge/ForeignBridge.sol": {
          "keccak256": "0x5ef1d004a8db4f6f11a5a263bc3a62a3712ffca55af45b5c595d8f20cbbff2c9",
          "urls": [
            "bzzr://08697052681a06aeb8f4bdf678a05df56337327bf303797432f66632f3262202"
          ]
        },
        "contracts/lib/SafeMath.sol": {
          "keccak256": "0x5507b51bb4039ad2d45625f6289d8c4ff460f86270057d0e9971ef2720c92233",
          "urls": [
            "bzzr://1c0c2c679ae48dbaaffc67da8cac3096cf8aa13dbd0811226015b37ec68db3ed"
          ]
        },
        "contracts/token/TrustlinesNetworkToken.sol": {
          "keccak256": "0x9d510b2a26ea6dcb13cbeec4321100ce018f129b84725922b32d5a125cc7ee1f",
          "urls": [
            "bzzr://ee81a4dbaa366e098be555b5381c43c4990042411d0f108c5088919b43ef5f78"
          ]
        }
      },
      "version": 1
    },
    "userdoc": {
      "methods": {}
    }
  }
}
```
