---
title: Beacon.json
---

```json
{
  "ProxyBeacon": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "implementation_",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "implementation",
            "type": "address"
          }
        ],
        "name": "Upgraded",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "implementation",
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
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          }
        ],
        "name": "upgradeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "devdoc": {
      "details": "This contract is used in conjunction with one or more instances of {BeaconProxy} to determine their implementation contract, which is where they will delegate all function calls. An owner is able to change the implementation the beacon points to, thus upgrading the proxies that use this beacon.",
      "events": {
        "Upgraded(address)": {
          "details": "Emitted when the implementation returned by the beacon is changed."
        }
      },
      "kind": "dev",
      "methods": {
        "constructor": {
          "details": "Sets the address of the initial implementation, and the deployer account as the owner who can upgrade the beacon."
        },
        "implementation()": {
          "details": "Returns the current implementation address."
        },
        "owner()": {
          "details": "Returns the address of the current owner."
        },
        "renounceOwnership()": {
          "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
        },
        "transferOwnership(address)": {
          "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
        },
        "upgradeTo(address)": {
          "details": "Upgrades the beacon to a new implementation. Emits an {Upgraded} event. Requirements: - msg.sender must be the owner of the contract. - `newImplementation` must be a contract."
        }
      },
      "version": 1
    },
    "bytecode": "0x608060405234801561001057600080fd5b5060405161059a38038061059a83398101604081905261002f91610101565b600080546001600160a01b03191633178082556040516001600160a01b039190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a361008181610087565b5061018c565b61009a816100fb60201b6102621760201c565b6100d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100d09061012f565b60405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b600060208284031215610112578081fd5b81516001600160a01b0381168114610128578182fd5b9392505050565b60208082526033908201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60408201527f6e206973206e6f74206120636f6e747261637400000000000000000000000000606082015260800190565b6103ff8061019b6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633659cfe61461005c5780635c60da1b14610071578063715018a61461008f5780638da5cb5b14610097578063f2fde38b1461009f575b600080fd5b61006f61006a3660046102af565b6100b2565b005b610079610125565b60405161008691906102dd565b60405180910390f35b61006f610134565b6100796101a8565b61006f6100ad3660046102af565b6101b7565b6000546001600160a01b031633146100e55760405162461bcd60e51b81526004016100dc90610394565b60405180910390fd5b6100ee81610268565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001546001600160a01b031690565b6000546001600160a01b0316331461015e5760405162461bcd60e51b81526004016100dc90610394565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6000546001600160a01b031633146101e15760405162461bcd60e51b81526004016100dc90610394565b6001600160a01b0381166102075760405162461bcd60e51b81526004016100dc906102f1565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b61027181610262565b61028d5760405162461bcd60e51b81526004016100dc90610337565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000602082840312156102c0578081fd5b81356001600160a01b03811681146102d6578182fd5b9392505050565b6001600160a01b0391909116815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526033908201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60408201527f6e206973206e6f74206120636f6e747261637400000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea2646970667358221220f9d59648335096e1666bae7de66cd3b89838d30cb55eb7a66f870f80d816fec664736f6c63430008000033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c80633659cfe61461005c5780635c60da1b14610071578063715018a61461008f5780638da5cb5b14610097578063f2fde38b1461009f575b600080fd5b61006f61006a3660046102af565b6100b2565b005b610079610125565b60405161008691906102dd565b60405180910390f35b61006f610134565b6100796101a8565b61006f6100ad3660046102af565b6101b7565b6000546001600160a01b031633146100e55760405162461bcd60e51b81526004016100dc90610394565b60405180910390fd5b6100ee81610268565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001546001600160a01b031690565b6000546001600160a01b0316331461015e5760405162461bcd60e51b81526004016100dc90610394565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6000546001600160a01b031633146101e15760405162461bcd60e51b81526004016100dc90610394565b6001600160a01b0381166102075760405162461bcd60e51b81526004016100dc906102f1565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b61027181610262565b61028d5760405162461bcd60e51b81526004016100dc90610337565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000602082840312156102c0578081fd5b81356001600160a01b03811681146102d6578182fd5b9392505050565b6001600160a01b0391909116815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526033908201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60408201527f6e206973206e6f74206120636f6e747261637400000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea2646970667358221220f9d59648335096e1666bae7de66cd3b89838d30cb55eb7a66f870f80d816fec664736f6c63430008000033",
    "metadata": {
      "compiler": {
        "version": "0.8.0+commit.c7dfd78e"
      },
      "language": "Solidity",
      "output": {
        "abi": [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "implementation_",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "implementation",
                "type": "address"
              }
            ],
            "name": "Upgraded",
            "type": "event"
          },
          {
            "inputs": [],
            "name": "implementation",
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
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
              }
            ],
            "name": "upgradeTo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        "devdoc": {
          "details": "This contract is used in conjunction with one or more instances of {BeaconProxy} to determine their implementation contract, which is where they will delegate all function calls. An owner is able to change the implementation the beacon points to, thus upgrading the proxies that use this beacon.",
          "events": {
            "Upgraded(address)": {
              "details": "Emitted when the implementation returned by the beacon is changed."
            }
          },
          "kind": "dev",
          "methods": {
            "constructor": {
              "details": "Sets the address of the initial implementation, and the deployer account as the owner who can upgrade the beacon."
            },
            "implementation()": {
              "details": "Returns the current implementation address."
            },
            "owner()": {
              "details": "Returns the address of the current owner."
            },
            "renounceOwnership()": {
              "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
            },
            "transferOwnership(address)": {
              "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
            },
            "upgradeTo(address)": {
              "details": "Upgrades the beacon to a new implementation. Emits an {Upgraded} event. Requirements: - msg.sender must be the owner of the contract. - `newImplementation` must be a contract."
            }
          },
          "version": 1
        },
        "userdoc": {
          "kind": "user",
          "methods": {},
          "version": 1
        }
      },
      "settings": {
        "compilationTarget": {
          "contracts/currency-network/upgradeable/ProxyBeacon.sol": "ProxyBeacon"
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
        "contracts/currency-network/upgradeable/IBeacon.sol": {
          "keccak256": "0x641b24c47e4a2165d332ee293849900d9faeff2bf65d52c1cf40cd414a4bed50",
          "license": "MIT",
          "urls": [
            "bzz-raw://2582524f685e23b1166c454890a2d677d3c9fee73bcacac224db2e83727e40ed",
            "dweb:/ipfs/QmWnevvBRJPFCYCapHMLuAWsrD1hH2EbFURxNPH7g8p1Lj"
          ]
        },
        "contracts/currency-network/upgradeable/ProxyBeacon.sol": {
          "keccak256": "0x521263ff821d03c5f25d95ae0e61edfe11e2de7826ae8e09ea62394fc7ac0567",
          "license": "MIT",
          "urls": [
            "bzz-raw://5c73afe9c07dcbd165fa739b456fcd11620fd44a1624dc924c3b745d2fcb9e5b",
            "dweb:/ipfs/QmWc1kDEMdBuvSZ9vzxmSRYbWYNtkCQXc1pLwS8gwk2UYL"
          ]
        },
        "contracts/lib/Address.sol": {
          "keccak256": "0x5c682158b7ffb18600bea0eaecd9ff81d1cafbaa8c45aa818f47d499710bb1ba",
          "license": "MIT",
          "urls": [
            "bzz-raw://f323eb142e522dffdaaf2ccc70169d97b5d84dda736e07c44da2730553dd0841",
            "dweb:/ipfs/QmcQCcaYUKJ4pxYT4NVoVkBdm18nCqcetYeuzKdPKdpXiP"
          ]
        },
        "contracts/lib/Ownable.sol": {
          "keccak256": "0xfb781e63c39ded182c5babf0f25fb7ece8541caf01055070c5a0ff5447c7145b",
          "license": "MIT",
          "urls": [
            "bzz-raw://94aa56d98dffc1be1ace3f47d05b8e4a722d8d5d6647f946ab07e986513d622f",
            "dweb:/ipfs/QmY3KjeznXi5cKB6PzAKt4a4LDPQFokhSfVrFemR5PFydb"
          ]
        }
      },
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }
}
```
