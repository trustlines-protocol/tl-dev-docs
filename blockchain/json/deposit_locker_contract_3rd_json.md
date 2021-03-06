---
title: Deposit Locker Contract (Third).json
---

```json
"TokenDepositLocker": {
        "abi": [
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "totalValue",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "valuePerDepositor",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "numberOfDepositors",
                        "type": "uint256"
                    }
                ],
                "name": "Deposit",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "depositorAddress",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "numberOfDepositors",
                        "type": "uint256"
                    }
                ],
                "name": "DepositorRegistered",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "slashedDepositor",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "slashedValue",
                        "type": "uint256"
                    }
                ],
                "name": "Slash",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "withdrawer",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Withdraw",
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
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "canWithdraw",
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
                        "internalType": "uint256",
                        "name": "_valuePerDepositor",
                        "type": "uint256"
                    }
                ],
                "name": "deposit",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "deposited",
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
                "name": "depositorsProxy",
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
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_releaseTimestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_slasher",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_depositorsProxy",
                        "type": "address"
                    },
                    {
                        "internalType": "contract IERC20",
                        "name": "_token",
                        "type": "address"
                    }
                ],
                "name": "init",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "initialized",
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
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_depositor",
                        "type": "address"
                    }
                ],
                "name": "registerDepositor",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "releaseTimestamp",
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
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_depositorToBeSlashed",
                        "type": "address"
                    }
                ],
                "name": "slash",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "slasher",
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
                "name": "token",
                "outputs": [
                    {
                        "internalType": "contract IERC20",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
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
                "inputs": [],
                "name": "withdraw",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        "devdoc": {
            "kind": "dev",
            "methods": {},
            "version": 1
        },
        "bytecode": "0x60806040526000805461ffff60a01b1916815560055534801561002157600080fd5b50600080546001600160a01b03191633179055611094806100436000396000f3fe6080604052600436106100bd5760003560e01c8063b6b55f251161006f578063b6b55f25146101a7578063c96be4cb146101ba578063dc890da9146101da578063e8823af1146101fa578063eef49ee31461020f578063f2fde38b14610224578063fc0c546a14610244576100bd565b80630a3f013f146100cc578063158ef93e146100f757806319262d301461011957806338c56be1146101395780633ccfd60b1461015b5780638da5cb5b14610170578063b134427114610192575b3480156100c957600080fd5b50005b3480156100d857600080fd5b506100e1610259565b6040516100ee9190610fbd565b60405180910390f35b34801561010357600080fd5b5061010c61025f565b6040516100ee9190610b86565b34801561012557600080fd5b5061010c610134366004610a88565b61026f565b34801561014557600080fd5b50610159610154366004610a88565b610284565b005b34801561016757600080fd5b506101596103c0565b34801561017c57600080fd5b506101856104c4565b6040516100ee9190610b35565b34801561019e57600080fd5b506101856104d3565b6101596101b5366004610acb565b6104e2565b3480156101c657600080fd5b506101596101d5366004610a88565b610642565b3480156101e657600080fd5b506101596101f5366004610ae3565b610755565b34801561020657600080fd5b506101856107d5565b34801561021b57600080fd5b5061010c6107e4565b34801561023057600080fd5b5061015961023f366004610a88565b6107f4565b34801561025057600080fd5b5061018561084c565b60035481565b600054600160a01b900460ff1681565b60046020526000908152604090205460ff1681565b600054600160a01b900460ff166102b65760405162461bcd60e51b81526004016102ad90610bb8565b60405180910390fd5b600054600160a81b900460ff16156102e05760405162461bcd60e51b81526004016102ad90610ec7565b6002546001600160a01b0316331461030a5760405162461bcd60e51b81526004016102ad90610d35565b6001600160a01b03811660009081526004602052604090205460ff16156103435760405162461bcd60e51b81526004016102ad90610d00565b6001600160a01b0381166000908152600460205260408120805460ff19166001908117909155600580549192909161037c908490610fdc565b90915550506005546040517f2f2ecba9464c960a79dc691961ff2965ab0b5d7a25b776931686d50094c4d1b8916103b591849190610b49565b60405180910390a150565b600054600160a01b900460ff166103e95760405162461bcd60e51b81526004016102ad90610bb8565b600054600160a81b900460ff166104125760405162461bcd60e51b81526004016102ad90610e5b565b6003544210156104345760405162461bcd60e51b81526004016102ad90610e17565b3360009081526004602052604090205460ff166104635760405162461bcd60e51b81526004016102ad90610f86565b336000818152600460205260409020805460ff19169055600654610487919061085b565b7f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364336006546040516104ba929190610b49565b60405180910390a1565b6000546001600160a01b031681565b6001546001600160a01b031681565b600054600160a01b900460ff1661050b5760405162461bcd60e51b81526004016102ad90610bb8565b600054600160a81b900460ff16156105355760405162461bcd60e51b81526004016102ad90610ec7565b6002546001600160a01b0316331461055f5760405162461bcd60e51b81526004016102ad90610d35565b6000600554116105815760405162461bcd60e51b81526004016102ad90610b91565b600081116105a15760405162461bcd60e51b81526004016102ad90610e84565b6000816005546105b19190611014565b9050600554816105c19190610ff4565b82146105df5760405162461bcd60e51b81526004016102ad90610cbb565b60068290556000805460ff60a81b1916600160a81b179055610600816108e4565b6006546005546040517f33da4f9b82b3e18a281ca2cabbe2f076925692abb593b7ea3f850009e8ec977092610636928592610fc6565b60405180910390a15050565b600054600160a01b900460ff1661066b5760405162461bcd60e51b81526004016102ad90610bb8565b600054600160a81b900460ff166106945760405162461bcd60e51b81526004016102ad90610e5b565b6001546001600160a01b031633146106be5760405162461bcd60e51b81526004016102ad90610c27565b6001600160a01b03811660009081526004602052604090205460ff166106f65760405162461bcd60e51b81526004016102ad90610bf9565b6001600160a01b0381166000908152600460205260409020805460ff191690556006546107229061098c565b7fa69f22d963cb7981f842db8c1aafcc93d915ba2a95dcf26dcc333a9c2a09be26816006546040516103b5929190610b49565b6000546001600160a01b0316331461077f5760405162461bcd60e51b81526004016102ad90610c6f565b61078a8484846109f1565b6001600160a01b0381166107b05760405162461bcd60e51b81526004016102ad90610dc9565b600780546001600160a01b0319166001600160a01b0392909216919091179055505050565b6002546001600160a01b031681565b600054600160a81b900460ff1681565b6000546001600160a01b0316331461081e5760405162461bcd60e51b81526004016102ad90610c6f565b6001600160a01b0381161561084957600080546001600160a01b0319166001600160a01b0383161790555b50565b6007546001600160a01b031681565b60075460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb9061088d9085908590600401610b49565b602060405180830381600087803b1580156108a757600080fd5b505af11580156108bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108df9190610aab565b505050565b34156109025760405162461bcd60e51b81526004016102ad90610f3d565b6007546040516323b872dd60e01b81526001600160a01b03909116906323b872dd9061093690339030908690600401610b62565b602060405180830381600087803b15801561095057600080fd5b505af1158015610964573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109889190610aab565b5050565b600754604051630852cd8d60e31b81526001600160a01b03909116906342966c68906109bc908490600401610fbd565b600060405180830381600087803b1580156109d657600080fd5b505af11580156109ea573d6000803e3d6000fd5b5050505050565b600054600160a01b900460ff1615610a1b5760405162461bcd60e51b81526004016102ad90610d85565b428311610a3a5760405162461bcd60e51b81526004016102ad90610ef2565b600392909255600180546001600160a01b039283166001600160a01b03199182161790915560028054939092169281169290921790556000805460ff60a01b1916600160a01b179091169055565b600060208284031215610a99578081fd5b8135610aa481611049565b9392505050565b600060208284031215610abc578081fd5b81518015158114610aa4578182fd5b600060208284031215610adc578081fd5b5035919050565b60008060008060808587031215610af8578283fd5b843593506020850135610b0a81611049565b92506040850135610b1a81611049565b91506060850135610b2a81611049565b939692955090935050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b901515815260200190565b6020808252600d908201526c6e6f206465706f7369746f727360981b604082015260600190565b60208082526021908201527f54686520636f6e747261637420776173206e6f7420696e697469616c697a65646040820152601760f91b606082015260800190565b60208082526014908201527363616e6e6f7420736c617368206164647265737360601b604082015260600190565b60208082526028908201527f4f6e6c792074686520736c61736865722063616e2063616c6c207468697320666040820152673ab731ba34b7b71760c11b606082015260800190565b6020808252602c908201527f5468652066756e6374696f6e2063616e206f6e6c792062652063616c6c65642060408201526b313c903a34329037bbb732b960a11b606082015260800190565b60208082526025908201527f4f766572666c6f7720696e206465706f736974416d6f756e742063616c63756c60408201526430ba34b7b760d91b606082015260800190565b6020808252818101527f63616e206f6e6c79207265676973746572204465706f7369746f72206f6e6365604082015260600190565b60208082526030908201527f4f6e6c7920746865206465706f7369746f727350726f78792063616e2063616c60408201526f36103a3434b990333ab731ba34b7b71760811b606082015260800190565b60208082526024908201527f54686520636f6e747261637420697320616c726561647920696e697469616c6960408201526339b2b21760e11b606082015260800190565b6020808252602e908201527f546f6b656e20636f6e74726163742063616e206e6f74206265206f6e2074686560408201526d207a65726f20616464726573732160901b606082015260800190565b60208082526024908201527f546865206465706f7369742063616e6e6f742062652077697468647261776e206040820152633cb2ba1760e11b606082015260800190565b6020808252600f908201526e1b9bc819195c1bdcda5d1cc81e595d608a1b604082015260600190565b60208082526023908201527f5f76616c75655065724465706f7369746f72206d75737420626520706f73697460408201526269766560e81b606082015260800190565b602080825260119082015270185b1c9958591e4819195c1bdcda5d1959607a1b604082015260600190565b6020808252602b908201527f5468652072656c656173652074696d657374616d70206d75737420626520696e60408201526a207468652066757475726560a81b606082015260800190565b60208082526029908201527f546f6b656e206c6f636b657220636f6e747261637420646f6573206e6f7420616040820152680c6c6cae0e8408aa8960bb1b606082015260800190565b6020808252601b908201527f63616e6e6f742077697468647261772066726f6d2073656e6465720000000000604082015260600190565b90815260200190565b9283526020830191909152604082015260600190565b60008219821115610fef57610fef611033565b500190565b60008261100f57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561102e5761102e611033565b500290565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461084957600080fdfea2646970667358221220a4f72ed75464667809bcdbbe26a0656038e4da55225835ba3ab5caf32388fb3f64736f6c63430008000033",
        "deployedBytecode": "0x6080604052600436106100bd5760003560e01c8063b6b55f251161006f578063b6b55f25146101a7578063c96be4cb146101ba578063dc890da9146101da578063e8823af1146101fa578063eef49ee31461020f578063f2fde38b14610224578063fc0c546a14610244576100bd565b80630a3f013f146100cc578063158ef93e146100f757806319262d301461011957806338c56be1146101395780633ccfd60b1461015b5780638da5cb5b14610170578063b134427114610192575b3480156100c957600080fd5b50005b3480156100d857600080fd5b506100e1610259565b6040516100ee9190610fbd565b60405180910390f35b34801561010357600080fd5b5061010c61025f565b6040516100ee9190610b86565b34801561012557600080fd5b5061010c610134366004610a88565b61026f565b34801561014557600080fd5b50610159610154366004610a88565b610284565b005b34801561016757600080fd5b506101596103c0565b34801561017c57600080fd5b506101856104c4565b6040516100ee9190610b35565b34801561019e57600080fd5b506101856104d3565b6101596101b5366004610acb565b6104e2565b3480156101c657600080fd5b506101596101d5366004610a88565b610642565b3480156101e657600080fd5b506101596101f5366004610ae3565b610755565b34801561020657600080fd5b506101856107d5565b34801561021b57600080fd5b5061010c6107e4565b34801561023057600080fd5b5061015961023f366004610a88565b6107f4565b34801561025057600080fd5b5061018561084c565b60035481565b600054600160a01b900460ff1681565b60046020526000908152604090205460ff1681565b600054600160a01b900460ff166102b65760405162461bcd60e51b81526004016102ad90610bb8565b60405180910390fd5b600054600160a81b900460ff16156102e05760405162461bcd60e51b81526004016102ad90610ec7565b6002546001600160a01b0316331461030a5760405162461bcd60e51b81526004016102ad90610d35565b6001600160a01b03811660009081526004602052604090205460ff16156103435760405162461bcd60e51b81526004016102ad90610d00565b6001600160a01b0381166000908152600460205260408120805460ff19166001908117909155600580549192909161037c908490610fdc565b90915550506005546040517f2f2ecba9464c960a79dc691961ff2965ab0b5d7a25b776931686d50094c4d1b8916103b591849190610b49565b60405180910390a150565b600054600160a01b900460ff166103e95760405162461bcd60e51b81526004016102ad90610bb8565b600054600160a81b900460ff166104125760405162461bcd60e51b81526004016102ad90610e5b565b6003544210156104345760405162461bcd60e51b81526004016102ad90610e17565b3360009081526004602052604090205460ff166104635760405162461bcd60e51b81526004016102ad90610f86565b336000818152600460205260409020805460ff19169055600654610487919061085b565b7f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364336006546040516104ba929190610b49565b60405180910390a1565b6000546001600160a01b031681565b6001546001600160a01b031681565b600054600160a01b900460ff1661050b5760405162461bcd60e51b81526004016102ad90610bb8565b600054600160a81b900460ff16156105355760405162461bcd60e51b81526004016102ad90610ec7565b6002546001600160a01b0316331461055f5760405162461bcd60e51b81526004016102ad90610d35565b6000600554116105815760405162461bcd60e51b81526004016102ad90610b91565b600081116105a15760405162461bcd60e51b81526004016102ad90610e84565b6000816005546105b19190611014565b9050600554816105c19190610ff4565b82146105df5760405162461bcd60e51b81526004016102ad90610cbb565b60068290556000805460ff60a81b1916600160a81b179055610600816108e4565b6006546005546040517f33da4f9b82b3e18a281ca2cabbe2f076925692abb593b7ea3f850009e8ec977092610636928592610fc6565b60405180910390a15050565b600054600160a01b900460ff1661066b5760405162461bcd60e51b81526004016102ad90610bb8565b600054600160a81b900460ff166106945760405162461bcd60e51b81526004016102ad90610e5b565b6001546001600160a01b031633146106be5760405162461bcd60e51b81526004016102ad90610c27565b6001600160a01b03811660009081526004602052604090205460ff166106f65760405162461bcd60e51b81526004016102ad90610bf9565b6001600160a01b0381166000908152600460205260409020805460ff191690556006546107229061098c565b7fa69f22d963cb7981f842db8c1aafcc93d915ba2a95dcf26dcc333a9c2a09be26816006546040516103b5929190610b49565b6000546001600160a01b0316331461077f5760405162461bcd60e51b81526004016102ad90610c6f565b61078a8484846109f1565b6001600160a01b0381166107b05760405162461bcd60e51b81526004016102ad90610dc9565b600780546001600160a01b0319166001600160a01b0392909216919091179055505050565b6002546001600160a01b031681565b600054600160a81b900460ff1681565b6000546001600160a01b0316331461081e5760405162461bcd60e51b81526004016102ad90610c6f565b6001600160a01b0381161561084957600080546001600160a01b0319166001600160a01b0383161790555b50565b6007546001600160a01b031681565b60075460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb9061088d9085908590600401610b49565b602060405180830381600087803b1580156108a757600080fd5b505af11580156108bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108df9190610aab565b505050565b34156109025760405162461bcd60e51b81526004016102ad90610f3d565b6007546040516323b872dd60e01b81526001600160a01b03909116906323b872dd9061093690339030908690600401610b62565b602060405180830381600087803b15801561095057600080fd5b505af1158015610964573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109889190610aab565b5050565b600754604051630852cd8d60e31b81526001600160a01b03909116906342966c68906109bc908490600401610fbd565b600060405180830381600087803b1580156109d657600080fd5b505af11580156109ea573d6000803e3d6000fd5b5050505050565b600054600160a01b900460ff1615610a1b5760405162461bcd60e51b81526004016102ad90610d85565b428311610a3a5760405162461bcd60e51b81526004016102ad90610ef2565b600392909255600180546001600160a01b039283166001600160a01b03199182161790915560028054939092169281169290921790556000805460ff60a01b1916600160a01b179091169055565b600060208284031215610a99578081fd5b8135610aa481611049565b9392505050565b600060208284031215610abc578081fd5b81518015158114610aa4578182fd5b600060208284031215610adc578081fd5b5035919050565b60008060008060808587031215610af8578283fd5b843593506020850135610b0a81611049565b92506040850135610b1a81611049565b91506060850135610b2a81611049565b939692955090935050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b901515815260200190565b6020808252600d908201526c6e6f206465706f7369746f727360981b604082015260600190565b60208082526021908201527f54686520636f6e747261637420776173206e6f7420696e697469616c697a65646040820152601760f91b606082015260800190565b60208082526014908201527363616e6e6f7420736c617368206164647265737360601b604082015260600190565b60208082526028908201527f4f6e6c792074686520736c61736865722063616e2063616c6c207468697320666040820152673ab731ba34b7b71760c11b606082015260800190565b6020808252602c908201527f5468652066756e6374696f6e2063616e206f6e6c792062652063616c6c65642060408201526b313c903a34329037bbb732b960a11b606082015260800190565b60208082526025908201527f4f766572666c6f7720696e206465706f736974416d6f756e742063616c63756c60408201526430ba34b7b760d91b606082015260800190565b6020808252818101527f63616e206f6e6c79207265676973746572204465706f7369746f72206f6e6365604082015260600190565b60208082526030908201527f4f6e6c7920746865206465706f7369746f727350726f78792063616e2063616c60408201526f36103a3434b990333ab731ba34b7b71760811b606082015260800190565b60208082526024908201527f54686520636f6e747261637420697320616c726561647920696e697469616c6960408201526339b2b21760e11b606082015260800190565b6020808252602e908201527f546f6b656e20636f6e74726163742063616e206e6f74206265206f6e2074686560408201526d207a65726f20616464726573732160901b606082015260800190565b60208082526024908201527f546865206465706f7369742063616e6e6f742062652077697468647261776e206040820152633cb2ba1760e11b606082015260800190565b6020808252600f908201526e1b9bc819195c1bdcda5d1cc81e595d608a1b604082015260600190565b60208082526023908201527f5f76616c75655065724465706f7369746f72206d75737420626520706f73697460408201526269766560e81b606082015260800190565b602080825260119082015270185b1c9958591e4819195c1bdcda5d1959607a1b604082015260600190565b6020808252602b908201527f5468652072656c656173652074696d657374616d70206d75737420626520696e60408201526a207468652066757475726560a81b606082015260800190565b60208082526029908201527f546f6b656e206c6f636b657220636f6e747261637420646f6573206e6f7420616040820152680c6c6cae0e8408aa8960bb1b606082015260800190565b6020808252601b908201527f63616e6e6f742077697468647261772066726f6d2073656e6465720000000000604082015260600190565b90815260200190565b9283526020830191909152604082015260600190565b60008219821115610fef57610fef611033565b500190565b60008261100f57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561102e5761102e611033565b500290565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461084957600080fdfea2646970667358221220a4f72ed75464667809bcdbbe26a0656038e4da55225835ba3ab5caf32388fb3f64736f6c63430008000033",
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
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "totalValue",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "valuePerDepositor",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "numberOfDepositors",
                                "type": "uint256"
                            }
                        ],
                        "name": "Deposit",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "address",
                                "name": "depositorAddress",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "numberOfDepositors",
                                "type": "uint256"
                            }
                        ],
                        "name": "DepositorRegistered",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "address",
                                "name": "slashedDepositor",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "slashedValue",
                                "type": "uint256"
                            }
                        ],
                        "name": "Slash",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "address",
                                "name": "withdrawer",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Withdraw",
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
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "canWithdraw",
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
                                "internalType": "uint256",
                                "name": "_valuePerDepositor",
                                "type": "uint256"
                            }
                        ],
                        "name": "deposit",
                        "outputs": [],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "deposited",
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
                        "name": "depositorsProxy",
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
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "_releaseTimestamp",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "_slasher",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "_depositorsProxy",
                                "type": "address"
                            },
                            {
                                "internalType": "contract IERC20",
                                "name": "_token",
                                "type": "address"
                            }
                        ],
                        "name": "init",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "initialized",
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
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "_depositor",
                                "type": "address"
                            }
                        ],
                        "name": "registerDepositor",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "releaseTimestamp",
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
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "_depositorToBeSlashed",
                                "type": "address"
                            }
                        ],
                        "name": "slash",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "slasher",
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
                        "name": "token",
                        "outputs": [
                            {
                                "internalType": "contract IERC20",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
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
                        "inputs": [],
                        "name": "withdraw",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "devdoc": {
                    "kind": "dev",
                    "methods": {},
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
                    "/home/tlnauction3/blockchain/contracts/contracts/auction/TokenDepositLocker.sol": "TokenDepositLocker"
                },
                "evmVersion": "petersburg",
                "libraries": {},
                "metadata": {
                    "bytecodeHash": "ipfs"
                },
                "optimizer": {
                    "enabled": true,
                    "runs": 100
                },
                "remappings": []
            },
            "sources": {
                "/home/tlnauction3/blockchain/contracts/contracts/auction/BaseDepositLocker.sol": {
                    "keccak256": "0x0eef01aa26c757534b058ea7824ca587e2dc00205ce81507dbed0348927fe9d9",
                    "license": "MIT",
                    "urls": [
                        "bzz-raw://08b6094ce7585195e645479b4869d41341371ae7550bddc03c868d85c021bf1f",
                        "dweb:/ipfs/QmSsm4s5LHdJGJDKotj13z76fnq4E28yxBEg5AEK4RwYiL"
                    ]
                },
                "/home/tlnauction3/blockchain/contracts/contracts/auction/DepositLockerInterface.sol": {
                    "keccak256": "0xabca3c0b1452d80561309b7b128b0f0ffdb55bdd71367b8cf6584597cfc2de60",
                    "license": "MIT",
                    "urls": [
                        "bzz-raw://ce86f5731f6a4907c5902cad06885ca76cbbf6d19e38278b0f251934b5158cc1",
                        "dweb:/ipfs/QmUsFEY1iNtxTHb1nMpZpb5zNv1fJQfgJGYqtT2MLMTU84"
                    ]
                },
                "/home/tlnauction3/blockchain/contracts/contracts/auction/TokenDepositLocker.sol": {
                    "keccak256": "0xc6e8204710819665275c2a6a2f6998895147ae53c098718c34465c00175009f2",
                    "license": "MIT",
                    "urls": [
                        "bzz-raw://6e27469f1cf06f03e6fa7629f5392772c5d6f5551bb531b7325c4b5dc8408a4d",
                        "dweb:/ipfs/QmUEFgbKqSnNCeuRtNa15mAebxBzWTatxc9p5NV1bfz4NT"
                    ]
                },
                "/home/tlnauction3/blockchain/contracts/contracts/lib/Ownable.sol": {
                    "keccak256": "0x214019ce5ff3182ea6e1dd56487eed10c0d85e36628e168e55dee32f29fd3e7d",
                    "license": "MIT",
                    "urls": [
                        "bzz-raw://f096971349f5744d542c6bd363a5297fa048b56d0a62591e2471f74747347a5c",
                        "dweb:/ipfs/QmZm54MDobg3R89V7DzYXZCPHj9XZGoTy9N7QMewEubijC"
                    ]
                },
                "/home/tlnauction3/blockchain/contracts/contracts/token/IERC20.sol": {
                    "keccak256": "0x9d38bb8dc33aa3bbfec8ebc22dee81bc71894fd8ef3950abfa9a4d89d8b41e80",
                    "license": "MIT",
                    "urls": [
                        "bzz-raw://be2a068f140678b88e6b88e113325d05851782278076b697a1f1e6ea8a353ce9",
                        "dweb:/ipfs/QmWBziWuCDRZwBVG9LcgNvzWooEAshha2ZwEcPiZvypx6j"
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
```
