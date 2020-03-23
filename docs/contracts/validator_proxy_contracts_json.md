---
layout: contracts
title: Validator Proxy contracts.json
---

```json
{
   "ValidatorProxy": {
        "abi": [
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "validators",
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
                "inputs": [],
                "name": "getValidators",
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
                "inputs": [],
                "name": "systemAddress",
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
                "inputs": [],
                "name": "numberOfValidators",
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
                        "name": "newValidators",
                        "type": "address[]"
                    }
                ],
                "name": "updateValidators",
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
                "name": "isValidator",
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
                "inputs": [
                    {
                        "name": "_validators",
                        "type": "address[]"
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
        "bytecode": "0x6080604052600180546001600160a01b0319166002600160a01b0317905534801561002957600080fd5b506040516106ab3803806106ab8339810180604052602081101561004c57600080fd5b81019080805164010000000081111561006457600080fd5b8201602081018481111561007757600080fd5b815185602082028301116401000000008211171561009457600080fd5b505080519093506100ae925060029150602084019061010d565b5060005b81518110156101065760016000808484815181106100cc57fe5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff19169115159190911790556001016100b2565b5050610199565b828054828255906000526020600020908101928215610162579160200282015b8281111561016257825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061012d565b5061016e929150610172565b5090565b61019691905b8082111561016e5780546001600160a01b0319168155600101610178565b90565b610503806101a86000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063d6832ea911610050578063d6832ea914610110578063e71731e41461012a578063facd743b146101cf57610072565b806335aa2e4414610077578063b7ab4db5146100b0578063d3e848f114610108575b600080fd5b6100946004803603602081101561008d57600080fd5b5035610209565b604080516001600160a01b039092168252519081900360200190f35b6100b8610230565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156100f45781810151838201526020016100dc565b505050509050019250505060405180910390f35b610094610293565b6101186102a2565b60408051918252519081900360200190f35b6101cd6004803603602081101561014057600080fd5b81019060208101813564010000000081111561015b57600080fd5b82018360208201111561016d57600080fd5b8035906020019184602083028401116401000000008311171561018f57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506102a8945050505050565b005b6101f5600480360360208110156101e557600080fd5b50356001600160a01b03166103d6565b604080519115158252519081900360200190f35b6002818154811061021657fe5b6000918252602090912001546001600160a01b0316905081565b6060600280548060200260200160405190810160405280929190818152602001828054801561028857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161026a575b505050505090505b90565b6001546001600160a01b031681565b60025490565b6001546001600160a01b0316321461030b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604981526020018061048f6049913960600191505060405180910390fd5b60005b6002548110156103665760008060006002848154811061032a57fe5b6000918252602080832091909101546001600160a01b031683528201929092526040019020805460ff191691151591909117905560010161030e565b5060005b81518110156103be57600160008084848151811061038457fe5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905560010161036a565b5080516103d29060029060208401906103eb565b5050565b60006020819052908152604090205460ff1681565b82805482825590600052602060002090810192821561044d579160200282015b8281111561044d578251825473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0390911617825560209092019160019091019061040b565b5061045992915061045d565b5090565b61029091905b8082111561045957805473ffffffffffffffffffffffffffffffffffffffff1916815560010161046356fe4f6e6c79207468652073797374656d20616464726573732063616e20626520726573706f6e7369626c6520666f72207468652063616c6c206f6620746869732066756e6374696f6e2ea165627a7a72305820a6911408304e0b6f50417988a66324da491bddd180ad1bf1ce16d88f6fec09af0029",
        "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100725760003560e01c8063d6832ea911610050578063d6832ea914610110578063e71731e41461012a578063facd743b146101cf57610072565b806335aa2e4414610077578063b7ab4db5146100b0578063d3e848f114610108575b600080fd5b6100946004803603602081101561008d57600080fd5b5035610209565b604080516001600160a01b039092168252519081900360200190f35b6100b8610230565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156100f45781810151838201526020016100dc565b505050509050019250505060405180910390f35b610094610293565b6101186102a2565b60408051918252519081900360200190f35b6101cd6004803603602081101561014057600080fd5b81019060208101813564010000000081111561015b57600080fd5b82018360208201111561016d57600080fd5b8035906020019184602083028401116401000000008311171561018f57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506102a8945050505050565b005b6101f5600480360360208110156101e557600080fd5b50356001600160a01b03166103d6565b604080519115158252519081900360200190f35b6002818154811061021657fe5b6000918252602090912001546001600160a01b0316905081565b6060600280548060200260200160405190810160405280929190818152602001828054801561028857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161026a575b505050505090505b90565b6001546001600160a01b031681565b60025490565b6001546001600160a01b0316321461030b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604981526020018061048f6049913960600191505060405180910390fd5b60005b6002548110156103665760008060006002848154811061032a57fe5b6000918252602080832091909101546001600160a01b031683528201929092526040019020805460ff191691151591909117905560010161030e565b5060005b81518110156103be57600160008084848151811061038457fe5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905560010161036a565b5080516103d29060029060208401906103eb565b5050565b60006020819052908152604090205460ff1681565b82805482825590600052602060002090810192821561044d579160200282015b8281111561044d578251825473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0390911617825560209092019160019091019061040b565b5061045992915061045d565b5090565b61029091905b8082111561045957805473ffffffffffffffffffffffffffffffffffffffff1916815560010161046356fe4f6e6c79207468652073797374656d20616464726573732063616e20626520726573706f6e7369626c6520666f72207468652063616c6c206f6620746869732066756e6374696f6e2ea165627a7a72305820a6911408304e0b6f50417988a66324da491bddd180ad1bf1ce16d88f6fec09af0029",
        "metadata": {
            "compiler": {
                "version": "0.5.8+commit.23d335f2"
            },
            "language": "Solidity",
            "output": {
                "abi": [
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "validators",
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
                        "inputs": [],
                        "name": "getValidators",
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
                        "inputs": [],
                        "name": "systemAddress",
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
                        "inputs": [],
                        "name": "numberOfValidators",
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
                                "name": "newValidators",
                                "type": "address[]"
                            }
                        ],
                        "name": "updateValidators",
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
                        "name": "isValidator",
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
                        "inputs": [
                            {
                                "name": "_validators",
                                "type": "address[]"
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
                    "methods": {},
                    "notice": "This contract gives access to an up to date validator set on chain, that can be used by any other contracts. Its validator set is to be updated by validators contracts when the system address calls finalizeChange(). This way, the `validators` array in this contract should remain correct throughout forks."
                }
            },
            "settings": {
                "compilationTarget": {
                    "/home/oizo/tl-protocol/blockchain/contracts/contracts/tlc-validator/ValidatorProxy.sol": "ValidatorProxy"
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
                "/home/oizo/tl-protocol/blockchain/contracts/contracts/tlc-validator/ValidatorProxy.sol": {
                    "keccak256": "0xeec906ae78272ff69eb23879fd3b2a3d2044e1cbc3bafa79f0c017b3d57edb77",
                    "urls": [
                        "bzzr://539f038353920d87103a59af4bca78786a19b7aea916b3af9e2c5e8f79d3d52c"
                    ]
                }
            },
            "version": 1
        },
        "userdoc": {
            "methods": {},
            "notice": "This contract gives access to an up to date validator set on chain, that can be used by any other contracts. Its validator set is to be updated by validators contracts when the system address calls finalizeChange(). This way, the `validators` array in this contract should remain correct throughout forks."
        }
    }
}
```
