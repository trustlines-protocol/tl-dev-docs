(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{144:function(n,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return f})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return d})),a.d(e,"default",(function(){return o}));var t=a(3),b=a(8),r=(a(0),a(664)),f={layout:"contracts",title:"Currency NetworksRegistry contracts.json"},c={unversionedId:"json/currency_networks_registry_contracts_json",id:"version-1.3.0/json/currency_networks_registry_contracts_json",isDocsHomePage:!1,title:"Currency NetworksRegistry contracts.json",description:"`json",source:"@site/contracts_versioned_docs/version-1.3.0/json/currency_networks_registry_contracts_json.md",slug:"/json/currency_networks_registry_contracts_json",permalink:"/contracts/json/currency_networks_registry_contracts_json",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/contracts_versioned_docs/version-1.3.0/json/currency_networks_registry_contracts_json.md",version:"1.3.0"},d=[],s={rightToc:d};function o(n){var e=n.components,a=Object(b.a)(n,["components"]);return Object(r.b)("wrapper",Object(t.a)({},s,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'"CurrencyNetworkRegistry": {\n        "abi": [\n            {\n                "constant": true,\n                "inputs": [],\n                "name": "getCurrencyNetworkCount",\n                "outputs": [\n                    {\n                        "name": "",\n                        "type": "uint256"\n                    }\n                ],\n                "payable": false,\n                "stateMutability": "view",\n                "type": "function"\n            },\n            {\n                "constant": true,\n                "inputs": [\n                    {\n                        "name": "_index",\n                        "type": "uint256"\n                    }\n                ],\n                "name": "getCurrencyNetworkAddress",\n                "outputs": [\n                    {\n                        "name": "",\n                        "type": "address"\n                    }\n                ],\n                "payable": false,\n                "stateMutability": "view",\n                "type": "function"\n            },\n            {\n                "constant": true,\n                "inputs": [\n                    {\n                        "name": "_address",\n                        "type": "address"\n                    }\n                ],\n                "name": "getCurrencyNetworkMetadata",\n                "outputs": [\n                    {\n                        "name": "_firstRegistrationBy",\n                        "type": "address"\n                    },\n                    {\n                        "name": "_name",\n                        "type": "string"\n                    },\n                    {\n                        "name": "_symbol",\n                        "type": "string"\n                    },\n                    {\n                        "name": "_decimals",\n                        "type": "uint8"\n                    }\n                ],\n                "payable": false,\n                "stateMutability": "view",\n                "type": "function"\n            },\n            {\n                "constant": true,\n                "inputs": [\n                    {\n                        "name": "_contract",\n                        "type": "address"\n                    },\n                    {\n                        "name": "_interfaceId",\n                        "type": "bytes4"\n                    }\n                ],\n                "name": "doesContractImplementInterface",\n                "outputs": [\n                    {\n                        "name": "",\n                        "type": "bool"\n                    }\n                ],\n                "payable": false,\n                "stateMutability": "view",\n                "type": "function"\n            },\n            {\n                "constant": false,\n                "inputs": [\n                    {\n                        "name": "_address",\n                        "type": "address"\n                    }\n                ],\n                "name": "addCurrencyNetwork",\n                "outputs": [],\n                "payable": false,\n                "stateMutability": "nonpayable",\n                "type": "function"\n            },\n            {\n                "constant": true,\n                "inputs": [\n                    {\n                        "name": "_address",\n                        "type": "address"\n                    }\n                ],\n                "name": "getCurrencyNetworksRegisteredBy",\n                "outputs": [\n                    {\n                        "name": "",\n                        "type": "address[]"\n                    }\n                ],\n                "payable": false,\n                "stateMutability": "view",\n                "type": "function"\n            },\n            {\n                "anonymous": false,\n                "inputs": [\n                    {\n                        "indexed": true,\n                        "name": "_address",\n                        "type": "address"\n                    },\n                    {\n                        "indexed": true,\n                        "name": "_registeredBy",\n                        "type": "address"\n                    },\n                    {\n                        "indexed": false,\n                        "name": "_name",\n                        "type": "string"\n                    },\n                    {\n                        "indexed": false,\n                        "name": "_symbol",\n                        "type": "string"\n                    },\n                    {\n                        "indexed": false,\n                        "name": "_decimals",\n                        "type": "uint8"\n                    }\n                ],\n                "name": "CurrencyNetworkAdded",\n                "type": "event"\n            }\n        ],\n        "devdoc": {\n            "methods": {}\n        },\n        "bytecode": "0x608060405234801561001057600080fd5b50610ce4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063e9c5438411610050578063e9c54384146101f4578063eab2c99f1461023e578063f36d35da1461026657610072565b806391721ead14610077578063bc9e9b8914610091578063e4ad33c6146100ca575b600080fd5b61007f6102dc565b60408051918252519081900360200190f35b6100ae600480360360208110156100a757600080fd5b50356102e3565b604080516001600160a01b039092168252519081900360200190f35b6100f0600480360360208110156100e057600080fd5b50356001600160a01b031661030d565b60405180856001600160a01b03166001600160a01b0316815260200180602001806020018460ff1660ff168152602001838103835286818151815260200191508051906020019080838360005b8381101561015557818101518382015260200161013d565b50505050905090810190601f1680156101825780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156101b557818101518382015260200161019d565b50505050905090810190601f1680156101e25780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b61022a6004803603604081101561020a57600080fd5b5080356001600160a01b031690602001356001600160e01b031916610471565b604080519115158252519081900360200190f35b6102646004803603602081101561025457600080fd5b50356001600160a01b0316610518565b005b61028c6004803603602081101561027c57600080fd5b50356001600160a01b0316610b2d565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156102c85781810151838201526020016102b0565b505050509050019250505060405180910390f35b6001545b90565b6000600182815481106102f257fe5b6000918252602090912001546001600160a01b031692915050565b6001600160a01b03818116600090815260208181526040808320805460038201546001808401805486516002610100948316159490940260001901909116839004601f8101899004890282018901909752868152979860609889988b9896909216969295939092019360ff169285918301828280156103cd5780601f106103a2576101008083540402835291602001916103cd565b820191906000526020600020905b8154815290600101906020018083116103b057829003601f168201915b5050855460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529598508794509250840190508282801561045b5780601f106104305761010080835404028352916020019161045b565b820191906000526020600020905b81548152906001019060200180831161043e57829003601f168201915b5050505050915093509350935093509193509193565b6000808061048985600160e01b6301ffc9a702610ba3565b9092509050811580610499575080155b156104a957600092505050610512565b6104bb856001600160e01b0319610ba3565b90925090508115806104cc57508015155b156104dc57600092505050610512565b6104e68585610ba3565b90925090506001821480156104fb5750806001145b1561050b57600192505050610512565b6000925050505b92915050565b604080517fe9c543840000000000000000000000000000000000000000000000000000000081526001600160a01b03831660048201527f04c5327000000000000000000000000000000000000000000000000000000000602482015290518291309163e9c5438491604480820192602092909190829003018186803b1580156105a057600080fd5b505afa1580156105b4573d6000803e3d6000fd5b505050506040513d60208110156105ca57600080fd5b5051610621576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526046815260200180610c736046913960600191505060405180910390fd5b6001600160a01b038281166000908152602081905260409020541615801561067457506001600160a01b038216600090815260208190526040902060019081015460029181161561010002600019011604155b80156106aa57506001600160a01b0382166000908152602081905260409020600290810154600019610100600183161502011604155b1561098e576040518060800160405280336001600160a01b03168152602001826001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561070257600080fd5b505afa158015610716573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561073f57600080fd5b81019080805164010000000081111561075757600080fd5b8201602081018481111561076a57600080fd5b815164010000000081118282018710171561078457600080fd5b50509291905050508152602001826001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156107ca57600080fd5b505afa1580156107de573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561080757600080fd5b81019080805164010000000081111561081f57600080fd5b8201602081018481111561083257600080fd5b815164010000000081118282018710171561084c57600080fd5b50509291905050508152602001826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561089257600080fd5b505afa1580156108a6573d6000803e3d6000fd5b505050506040513d60208110156108bc57600080fd5b505160ff1690526001600160a01b03838116600090815260208181526040909120835181546001600160a01b03191693169290921782558281015180516109099260018501920190610bda565b5060408201518051610925916002840191602090910190610bda565b50606091909101516003909101805460ff191660ff9092169190911790556001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0384161790555b6001600160a01b038216600081815260208181526040918290206003810154835160ff9091169381018490526060808252600180840180546002600019938216156101000293909301168290049284018390523397967fc0b59e31d1504a897208830d6019a803174697e8b89d2c748743633d371a5390969195929092019391928291820190608083019087908015610a685780601f10610a3d57610100808354040283529160200191610a68565b820191906000526020600020905b815481529060010190602001808311610a4b57829003601f168201915b5050838103825285546002600019610100600184161502019091160480825260209091019086908015610adc5780601f10610ab157610100808354040283529160200191610adc565b820191906000526020600020905b815481529060010190602001808311610abf57829003601f168201915b50509550505050505060405180910390a3503360009081526002602090815260408220805460018101825590835291200180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038116600090815260026020908152604091829020805483518184028101840190945280845260609392830182828015610b9757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610b79575b50505050509050919050565b604051600160e01b6301ffc9a7028082526004820183905260009182919060208160248189617530fa905190969095509350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c1b57805160ff1916838001178555610c48565b82800160010185558215610c48579182015b82811115610c48578251825591602001919060010190610c2d565b50610c54929150610c58565b5090565b6102e091905b80821115610c545760008155600101610c5e56fe43757272656e63794e6574776f726b73206e65656420746f20696d706c656d656e742045524331363520616e642043757272656e63794e6574776f726b496e74657266616365a165627a7a72305820c8b4158f3d13038c191121ba0c1cdd4116521b6605b425a7011c38e5dc4b7e780029",\n        "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100725760003560e01c8063e9c5438411610050578063e9c54384146101f4578063eab2c99f1461023e578063f36d35da1461026657610072565b806391721ead14610077578063bc9e9b8914610091578063e4ad33c6146100ca575b600080fd5b61007f6102dc565b60408051918252519081900360200190f35b6100ae600480360360208110156100a757600080fd5b50356102e3565b604080516001600160a01b039092168252519081900360200190f35b6100f0600480360360208110156100e057600080fd5b50356001600160a01b031661030d565b60405180856001600160a01b03166001600160a01b0316815260200180602001806020018460ff1660ff168152602001838103835286818151815260200191508051906020019080838360005b8381101561015557818101518382015260200161013d565b50505050905090810190601f1680156101825780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838360005b838110156101b557818101518382015260200161019d565b50505050905090810190601f1680156101e25780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b61022a6004803603604081101561020a57600080fd5b5080356001600160a01b031690602001356001600160e01b031916610471565b604080519115158252519081900360200190f35b6102646004803603602081101561025457600080fd5b50356001600160a01b0316610518565b005b61028c6004803603602081101561027c57600080fd5b50356001600160a01b0316610b2d565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156102c85781810151838201526020016102b0565b505050509050019250505060405180910390f35b6001545b90565b6000600182815481106102f257fe5b6000918252602090912001546001600160a01b031692915050565b6001600160a01b03818116600090815260208181526040808320805460038201546001808401805486516002610100948316159490940260001901909116839004601f8101899004890282018901909752868152979860609889988b9896909216969295939092019360ff169285918301828280156103cd5780601f106103a2576101008083540402835291602001916103cd565b820191906000526020600020905b8154815290600101906020018083116103b057829003601f168201915b5050855460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529598508794509250840190508282801561045b5780601f106104305761010080835404028352916020019161045b565b820191906000526020600020905b81548152906001019060200180831161043e57829003601f168201915b5050505050915093509350935093509193509193565b6000808061048985600160e01b6301ffc9a702610ba3565b9092509050811580610499575080155b156104a957600092505050610512565b6104bb856001600160e01b0319610ba3565b90925090508115806104cc57508015155b156104dc57600092505050610512565b6104e68585610ba3565b90925090506001821480156104fb5750806001145b1561050b57600192505050610512565b6000925050505b92915050565b604080517fe9c543840000000000000000000000000000000000000000000000000000000081526001600160a01b03831660048201527f04c5327000000000000000000000000000000000000000000000000000000000602482015290518291309163e9c5438491604480820192602092909190829003018186803b1580156105a057600080fd5b505afa1580156105b4573d6000803e3d6000fd5b505050506040513d60208110156105ca57600080fd5b5051610621576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526046815260200180610c736046913960600191505060405180910390fd5b6001600160a01b038281166000908152602081905260409020541615801561067457506001600160a01b038216600090815260208190526040902060019081015460029181161561010002600019011604155b80156106aa57506001600160a01b0382166000908152602081905260409020600290810154600019610100600183161502011604155b1561098e576040518060800160405280336001600160a01b03168152602001826001600160a01b03166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561070257600080fd5b505afa158015610716573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561073f57600080fd5b81019080805164010000000081111561075757600080fd5b8201602081018481111561076a57600080fd5b815164010000000081118282018710171561078457600080fd5b50509291905050508152602001826001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156107ca57600080fd5b505afa1580156107de573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561080757600080fd5b81019080805164010000000081111561081f57600080fd5b8201602081018481111561083257600080fd5b815164010000000081118282018710171561084c57600080fd5b50509291905050508152602001826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561089257600080fd5b505afa1580156108a6573d6000803e3d6000fd5b505050506040513d60208110156108bc57600080fd5b505160ff1690526001600160a01b03838116600090815260208181526040909120835181546001600160a01b03191693169290921782558281015180516109099260018501920190610bda565b5060408201518051610925916002840191602090910190610bda565b50606091909101516003909101805460ff191660ff9092169190911790556001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0384161790555b6001600160a01b038216600081815260208181526040918290206003810154835160ff9091169381018490526060808252600180840180546002600019938216156101000293909301168290049284018390523397967fc0b59e31d1504a897208830d6019a803174697e8b89d2c748743633d371a5390969195929092019391928291820190608083019087908015610a685780601f10610a3d57610100808354040283529160200191610a68565b820191906000526020600020905b815481529060010190602001808311610a4b57829003601f168201915b5050838103825285546002600019610100600184161502019091160480825260209091019086908015610adc5780601f10610ab157610100808354040283529160200191610adc565b820191906000526020600020905b815481529060010190602001808311610abf57829003601f168201915b50509550505050505060405180910390a3503360009081526002602090815260408220805460018101825590835291200180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038116600090815260026020908152604091829020805483518184028101840190945280845260609392830182828015610b9757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610b79575b50505050509050919050565b604051600160e01b6301ffc9a7028082526004820183905260009182919060208160248189617530fa905190969095509350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c1b57805160ff1916838001178555610c48565b82800160010185558215610c48579182015b82811115610c48578251825591602001919060010190610c2d565b50610c54929150610c58565b5090565b6102e091905b80821115610c545760008155600101610c5e56fe43757272656e63794e6574776f726b73206e65656420746f20696d706c656d656e742045524331363520616e642043757272656e63794e6574776f726b496e74657266616365a165627a7a72305820c8b4158f3d13038c191121ba0c1cdd4116521b6605b425a7011c38e5dc4b7e780029",\n        "metadata": {\n            "compiler": {\n                "version": "0.5.8+commit.23d335f2"\n            },\n            "language": "Solidity",\n            "output": {\n                "abi": [\n                    {\n                        "constant": true,\n                        "inputs": [],\n                        "name": "getCurrencyNetworkCount",\n                        "outputs": [\n                            {\n                                "name": "",\n                                "type": "uint256"\n                            }\n                        ],\n                        "payable": false,\n                        "stateMutability": "view",\n                        "type": "function"\n                    },\n                    {\n                        "constant": true,\n                        "inputs": [\n                            {\n                                "name": "_index",\n                                "type": "uint256"\n                            }\n                        ],\n                        "name": "getCurrencyNetworkAddress",\n                        "outputs": [\n                            {\n                                "name": "",\n                                "type": "address"\n                            }\n                        ],\n                        "payable": false,\n                        "stateMutability": "view",\n                        "type": "function"\n                    },\n                    {\n                        "constant": true,\n                        "inputs": [\n                            {\n                                "name": "_address",\n                                "type": "address"\n                            }\n                        ],\n                        "name": "getCurrencyNetworkMetadata",\n                        "outputs": [\n                            {\n                                "name": "_firstRegistrationBy",\n                                "type": "address"\n                            },\n                            {\n                                "name": "_name",\n                                "type": "string"\n                            },\n                            {\n                                "name": "_symbol",\n                                "type": "string"\n                            },\n                            {\n                                "name": "_decimals",\n                                "type": "uint8"\n                            }\n                        ],\n                        "payable": false,\n                        "stateMutability": "view",\n                        "type": "function"\n                    },\n                    {\n                        "constant": true,\n                        "inputs": [\n                            {\n                                "name": "_contract",\n                                "type": "address"\n                            },\n                            {\n                                "name": "_interfaceId",\n                                "type": "bytes4"\n                            }\n                        ],\n                        "name": "doesContractImplementInterface",\n                        "outputs": [\n                            {\n                                "name": "",\n                                "type": "bool"\n                            }\n                        ],\n                        "payable": false,\n                        "stateMutability": "view",\n                        "type": "function"\n                    },\n                    {\n                        "constant": false,\n                        "inputs": [\n                            {\n                                "name": "_address",\n                                "type": "address"\n                            }\n                        ],\n                        "name": "addCurrencyNetwork",\n                        "outputs": [],\n                        "payable": false,\n                        "stateMutability": "nonpayable",\n                        "type": "function"\n                    },\n                    {\n                        "constant": true,\n                        "inputs": [\n                            {\n                                "name": "_address",\n                                "type": "address"\n                            }\n                        ],\n                        "name": "getCurrencyNetworksRegisteredBy",\n                        "outputs": [\n                            {\n                                "name": "",\n                                "type": "address[]"\n                            }\n                        ],\n                        "payable": false,\n                        "stateMutability": "view",\n                        "type": "function"\n                    },\n                    {\n                        "anonymous": false,\n                        "inputs": [\n                            {\n                                "indexed": true,\n                                "name": "_address",\n                                "type": "address"\n                            },\n                            {\n                                "indexed": true,\n                                "name": "_registeredBy",\n                                "type": "address"\n                            },\n                            {\n                                "indexed": false,\n                                "name": "_name",\n                                "type": "string"\n                            },\n                            {\n                                "indexed": false,\n                                "name": "_symbol",\n                                "type": "string"\n                            },\n                            {\n                                "indexed": false,\n                                "name": "_decimals",\n                                "type": "uint8"\n                            }\n                        ],\n                        "name": "CurrencyNetworkAdded",\n                        "type": "event"\n                    }\n                ],\n                "devdoc": {\n                    "methods": {}\n                },\n                "userdoc": {\n                    "methods": {}\n                }\n            },\n            "settings": {\n                "compilationTarget": {\n                    "contracts/currency-network/CurrencyNetworkRegistry.sol": "CurrencyNetworkRegistry"\n                },\n                "evmVersion": "petersburg",\n                "libraries": {},\n                "optimizer": {\n                    "enabled": true,\n                    "runs": 500\n                },\n                "remappings": []\n            },\n            "sources": {\n                "contracts/currency-network/CurrencyNetworkInterface.sol": {\n                    "keccak256": "0x5a69c6a6ec114f401a0fdbe5e6ea008303e9c2904c3b0cd09ebc51776ec36e6d",\n                    "urls": [\n                        "bzzr://6296df9989c5ed1879d868e6297610a6c65ba86b69150b1c7909dffec7a9a85e"\n                    ]\n                },\n                "contracts/currency-network/CurrencyNetworkRegistry.sol": {\n                    "keccak256": "0xd0083e8a94be76e9ef750941e744f06b2eaaae4110b8372e75bfff2813697895",\n                    "urls": [\n                        "bzzr://c4c312e8b3a6a9dabb964e39ac1be8daf8ce1df597e98c35187f8b58b2145f14"\n                    ]\n                },\n                "contracts/lib/ERC165Query.sol": {\n                    "keccak256": "0xee29c2ce20652cffedadfe7654568261ae0eb47bc2ee10b81a3449751251515f",\n                    "urls": [\n                        "bzzr://a93ad694d246c4601f74580bdeae30860a77ec94562878e2b6bfaffc6291dab0"\n                    ]\n                }\n            },\n            "version": 1\n        },\n        "userdoc": {\n            "methods": {}\n        }\n    }\n')))}o.isMDXComponent=!0},664:function(n,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return p}));var t=a(0),b=a.n(t);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function f(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function c(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function d(n,e){if(null==n)return{};var a,t,b=function(n,e){if(null==n)return{};var a,t,b={},r=Object.keys(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||(b[a]=n[a]);return b}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(b[a]=n[a])}return b}var s=b.a.createContext({}),o=function(n){var e=b.a.useContext(s),a=e;return n&&(a="function"==typeof n?n(e):c(c({},e),n)),a},i=function(n){var e=o(n.components);return b.a.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return b.a.createElement(b.a.Fragment,{},e)}},y=b.a.forwardRef((function(n,e){var a=n.components,t=n.mdxType,r=n.originalType,f=n.parentName,s=d(n,["components","mdxType","originalType","parentName"]),i=o(a),y=t,p=i["".concat(f,".").concat(y)]||i[y]||u[y]||r;return a?b.a.createElement(p,c(c({ref:e},s),{},{components:a})):b.a.createElement(p,c({ref:e},s))}));function p(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var r=a.length,f=new Array(r);f[0]=y;var c={};for(var d in e)hasOwnProperty.call(e,d)&&(c[d]=e[d]);c.originalType=n,c.mdxType="string"==typeof n?n:t,f[1]=c;for(var s=2;s<r;s++)f[s]=a[s];return b.a.createElement.apply(null,f)}return b.a.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);