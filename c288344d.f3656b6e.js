(window.webpackJsonp=window.webpackJsonp||[]).push([[511],{582:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return f})),a.d(n,"metadata",(function(){return i})),a.d(n,"rightToc",(function(){return c})),a.d(n,"default",(function(){return r}));var t=a(3),d=a(8),b=(a(0),a(735)),f={title:"AdministrativeProxy.json"},i={unversionedId:"json/administrative_proxy_json",id:"version-3.0.0/json/administrative_proxy_json",isDocsHomePage:!1,title:"AdministrativeProxy.json",description:"`json",source:"@site/contracts_versioned_docs/version-3.0.0/json/administrative_proxy_json.md",slug:"/json/administrative_proxy_json",permalink:"/contracts/json/administrative_proxy_json",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/contracts_versioned_docs/version-3.0.0/json/administrative_proxy_json.md",version:"3.0.0"},c=[],s={rightToc:c};function r(e){var n=e.components,a=Object(d.a)(e,["components"]);return Object(b.b)("wrapper",Object(t.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(b.b)("pre",null,Object(b.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n      "AdministrativeProxy": {\n        "abi": [\n            {\n                "inputs": [\n                    {\n                        "internalType": "address",\n                        "name": "beacon_",\n                        "type": "address"\n                    },\n                    {\n                        "internalType": "bytes",\n                        "name": "data",\n                        "type": "bytes"\n                    }\n                ],\n                "stateMutability": "payable",\n                "type": "constructor"\n            },\n            {\n                "anonymous": false,\n                "inputs": [\n                    {\n                        "indexed": false,\n                        "internalType": "address",\n                        "name": "previousAdmin",\n                        "type": "address"\n                    },\n                    {\n                        "indexed": false,\n                        "internalType": "address",\n                        "name": "newAdmin",\n                        "type": "address"\n                    }\n                ],\n                "name": "AdminChanged",\n                "type": "event"\n            },\n            {\n                "anonymous": false,\n                "inputs": [\n                    {\n                        "indexed": false,\n                        "internalType": "address",\n                        "name": "previousBeacon",\n                        "type": "address"\n                    },\n                    {\n                        "indexed": false,\n                        "internalType": "address",\n                        "name": "newBeacon",\n                        "type": "address"\n                    }\n                ],\n                "name": "BeaconChanged",\n                "type": "event"\n            },\n            {\n                "stateMutability": "payable",\n                "type": "fallback"\n            },\n            {\n                "inputs": [],\n                "name": "admin",\n                "outputs": [\n                    {\n                        "internalType": "address",\n                        "name": "admin_",\n                        "type": "address"\n                    }\n                ],\n                "stateMutability": "nonpayable",\n                "type": "function"\n            },\n            {\n                "inputs": [],\n                "name": "beacon",\n                "outputs": [\n                    {\n                        "internalType": "address",\n                        "name": "beacon_",\n                        "type": "address"\n                    }\n                ],\n                "stateMutability": "nonpayable",\n                "type": "function"\n            },\n            {\n                "inputs": [\n                    {\n                        "internalType": "address",\n                        "name": "newAdmin",\n                        "type": "address"\n                    }\n                ],\n                "name": "changeAdmin",\n                "outputs": [],\n                "stateMutability": "nonpayable",\n                "type": "function"\n            },\n            {\n                "inputs": [\n                    {\n                        "internalType": "address",\n                        "name": "newBeacon",\n                        "type": "address"\n                    }\n                ],\n                "name": "changeBeacon",\n                "outputs": [],\n                "stateMutability": "nonpayable",\n                "type": "function"\n            },\n            {\n                "inputs": [\n                    {\n                        "internalType": "address",\n                        "name": "newBeacon",\n                        "type": "address"\n                    },\n                    {\n                        "internalType": "bytes",\n                        "name": "data",\n                        "type": "bytes"\n                    }\n                ],\n                "name": "changeBeaconAndCall",\n                "outputs": [],\n                "stateMutability": "payable",\n                "type": "function"\n            },\n            {\n                "inputs": [],\n                "name": "implementation",\n                "outputs": [\n                    {\n                        "internalType": "address",\n                        "name": "impl",\n                        "type": "address"\n                    }\n                ],\n                "stateMutability": "nonpayable",\n                "type": "function"\n            },\n            {\n                "stateMutability": "payable",\n                "type": "receive"\n            }\n        ],\n        "devdoc": {\n            "details": "This contract implements a proxy that gets the implementation address for each call from a {UpgradeableBeacon}. The beacon address is stored in storage slot `uint256(keccak256(\'eip1967.proxy.beacon\')) - 1`, so that it doesn\'t conflict with the storage layout of the implementation behind the proxy.",\n            "events": {\n                "AdminChanged(address,address)": {\n                    "details": "Emitted when the admin account has changed."\n                },\n                "BeaconChanged(address,address)": {\n                    "details": "Emitted when the beacon address has changed."\n                }\n            },\n            "kind": "dev",\n            "methods": {\n                "admin()": {\n                    "details": "Returns the current admin. NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}. TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`"\n                },\n                "beacon()": {\n                    "details": "Returns the current beacon. NOTE: Only the admin can call this function. TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50`"\n                },\n                "changeAdmin(address)": {\n                    "details": "Changes the admin of the proxy. Emits an {AdminChanged} event. NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}."\n                },\n                "changeBeacon(address)": {\n                    "details": "Upgrade the implementation of the proxy. NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}."\n                },\n                "changeBeaconAndCall(address,bytes)": {\n                    "details": "Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract. NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}."\n                },\n                "constructor": {\n                    "details": "Initializes the proxy with `beacon`. If `data` is nonempty, it\'s used as data in a delegate call to the implementation returned by the beacon. This will typically be an encoded function call, and allows initializating the storage of the proxy like a Solidity constructor. Requirements: - `beacon` must be a contract with the interface {IBeacon}."\n                },\n                "implementation()": {\n                    "details": "Returns the current implementation address of the associated beacon."\n                }\n            },\n            "stateVariables": {\n                "_ADMIN_SLOT": {\n                    "details": "Storage slot with the admin of the contract. This is the keccak-256 hash of \\"eip1967.proxy.admin\\" subtracted by 1, and is validated in the constructor."\n                },\n                "_BEACON_SLOT": {\n                    "details": "The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy. This is bytes32(uint256(keccak256(\'eip1967.proxy.beacon\')) - 1)) and is validated in the constructor."\n                }\n            },\n            "version": 1\n        },\n        "bytecode": "0x60806040526040516200122f3803806200122f8339810160408190526200002691620004b1565b6200005360017fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d51620006df565b600080516020620011c68339815191521462000098577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b620000c560017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6104620006df565b600080516020620011e6833981519152146200010a577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b62000116828262000129565b62000121336200017c565b50506200077e565b62000134826200018f565b8051156200017857620001766200014a620002bd565b8260405180606001604052806029815260200162001206602991396200034260201b620003f11760201c565b505b5050565b600080516020620011e683398151915255565b620001a5816200040660201b6200048f1760201c565b620001e7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001de90620005c8565b60405180910390fd5b62000271816001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200022557600080fd5b505afa1580156200023a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000260919062000494565b6200040660201b6200048f1760201c565b620002aa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001de9062000682565b600080516020620011c683398151915255565b6000620002c962000410565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200030257600080fd5b505afa15801562000317573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200033d919062000494565b905090565b60606200034f8462000406565b62000388576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001de9062000625565b600080856001600160a01b031685604051620003a5919062000575565b600060405180830381855af49150503d8060008114620003e2576040519150601f19603f3d011682016040523d82523d6000602084013e620003e7565b606091505b509092509050620003fa82828662000424565b925050505b9392505050565b803b15155b919050565b600080516020620011c68339815191525490565b6060831562000435575081620003ff565b825115620004465782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001de919062000593565b80516001600160a01b03811681146200040b57600080fd5b600060208284031215620004a6578081fd5b620003ff826200047c565b60008060408385031215620004c4578081fd5b620004cf836200047c565b60208401519092506001600160401b0380821115620004ec578283fd5b818501915085601f83011262000500578283fd5b8151818111156200051557620005156200074f565b604051601f8201601f1916810160200183811182821017156200053c576200053c6200074f565b60405281815283820160200188101562000554578485fd5b620005678260208301602087016200071c565b809450505050509250929050565b60008251620005898184602087016200071c565b9190910192915050565b6000602082528251806020840152620005b48160408501602087016200071c565b601f01601f19169190910160400192915050565b60208082526025908201527f426561636f6e50726f78793a20626561636f6e206973206e6f74206120636f6e60408201527f7472616374000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60408201527f6e74726163740000000000000000000000000000000000000000000000000000606082015260800190565b60208082526034908201527f426561636f6e50726f78793a20626561636f6e20696d706c656d656e7461746960408201527f6f6e206973206e6f74206120636f6e7472616374000000000000000000000000606082015260800190565b60008282101562000717577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500390565b60005b83811015620007395781810151838201526020016200071f565b8381111562000749576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a38806200078e6000396000f3fe6080604052600436106100695760003560e01c80638f283970116100435780638f28397014610115578063d14823f814610135578063f851a44014610155576100ba565b806359659e90146100c25780635c60da1b146100ed57806366ff41d314610102576100ba565b366100ba5761007661016a565b6001600160a01b0316336001600160a01b031614156100b05760405162461bcd60e51b81526004016100a7906108ad565b60405180910390fd5b6100b861018f565b005b61007661016a565b3480156100ce57600080fd5b506100d76101a1565b6040516100e491906107aa565b60405180910390f35b3480156100f957600080fd5b506100d76101de565b6100b861011036600461070e565b610209565b34801561012157600080fd5b506100b86101303660046106d6565b6102bc565b34801561014157600080fd5b506100b86101503660046106d6565b61035c565b34801561016157600080fd5b506100d76103c6565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b61019f61019a610495565b610514565b565b60006101ab61016a565b6001600160a01b0316336001600160a01b031614156101d3576101cc610538565b90506101db565b6101db61018f565b90565b60006101e861016a565b6001600160a01b0316336001600160a01b031614156101d3576101cc610495565b61021161016a565b6001600160a01b0316336001600160a01b031614156102af577fbe0ef9e6d5d3d5709366e217891363222543e107a017b4fd3191d99ea69ec66e610253610538565b846040516102629291906107be565b60405180910390a16102aa8383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061055d92505050565b6102b7565b6102b761018f565b505050565b6102c461016a565b6001600160a01b0316336001600160a01b03161415610351576001600160a01b0381166103035760405162461bcd60e51b81526004016100a790610850565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61032c61016a565b8260405161033b9291906107be565b60405180910390a161034c8161059b565b610359565b61035961018f565b50565b61036461016a565b6001600160a01b0316336001600160a01b03161415610351577fbe0ef9e6d5d3d5709366e217891363222543e107a017b4fd3191d99ea69ec66e6103a6610538565b826040516103b59291906107be565b60405180910390a161034c816105bf565b60006103d061016a565b6001600160a01b0316336001600160a01b031614156101d3576101cc61016a565b60606103fc8461048f565b6104185760405162461bcd60e51b81526004016100a7906108f1565b600080856001600160a01b031685604051610433919061078e565b600060405180830381855af49150503d806000811461046e576040519150601f19603f3d011682016040523d82523d6000602084013e610473565b606091505b509150915061048382828661069d565b925050505b9392505050565b3b151590565b600061049f610538565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104d757600080fd5b505afa1580156104eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050f91906106f2565b905090565b3660008037600080366000845af43d6000803e808015610533573d6000f35b3d6000fd5b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d505490565b610566826105bf565b805115610597576102b7610578610495565b826040518060600160405280602981526020016109da602991396103f1565b5050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b6105c88161048f565b6105e45760405162461bcd60e51b81526004016100a79061080b565b61065d816001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561062057600080fd5b505afa158015610634573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065891906106f2565b61048f565b6106795760405162461bcd60e51b81526004016100a790610937565b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5055565b606083156106ac575081610488565b8251156106bc5782518084602001fd5b8160405162461bcd60e51b81526004016100a791906107d8565b6000602082840312156106e7578081fd5b8135610488816109c4565b600060208284031215610703578081fd5b8151610488816109c4565b600080600060408486031215610722578182fd5b833561072d816109c4565b9250602084013567ffffffffffffffff80821115610749578384fd5b818601915086601f83011261075c578384fd5b81358181111561076a578485fd5b87602082850101111561077b578485fd5b6020830194508093505050509250925092565b600082516107a0818460208701610994565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b60006020825282518060208401526107f7816040850160208701610994565b601f01601f19169190910160400192915050565b60208082526025908201527f426561636f6e50726f78793a20626561636f6e206973206e6f74206120636f6e6040820152641d1c9858dd60da1b606082015260800190565b6020808252603a908201527f5472616e73706172656e745570677261646561626c6550726f78793a206e657760408201527f2061646d696e20697320746865207a65726f2061646472657373000000000000606082015260800190565b60208082526024908201527f41646d696e2063616e6e6f742063616c6c2066616c6c6261636b2066756e637460408201526334b7b71760e11b606082015260800190565b60208082526026908201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6040820152651b9d1c9858dd60d21b606082015260800190565b60208082526034908201527f426561636f6e50726f78793a20626561636f6e20696d706c656d656e7461746960408201527f6f6e206973206e6f74206120636f6e7472616374000000000000000000000000606082015260800190565b60005b838110156109af578181015183820152602001610997565b838111156109be576000848401525b50505050565b6001600160a01b038116811461035957600080fdfe41646d696e69737472617469766550726f78793a2066756e6374696f6e2063616c6c206661696c6564a2646970667358221220b17d4845c79421355d947c25b2d738666fb9f240286a849f751dfe968e5426d064736f6c63430008000033a3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610341646d696e69737472617469766550726f78793a2066756e6374696f6e2063616c6c206661696c6564",\n        "deployedBytecode": "0x6080604052600436106100695760003560e01c80638f283970116100435780638f28397014610115578063d14823f814610135578063f851a44014610155576100ba565b806359659e90146100c25780635c60da1b146100ed57806366ff41d314610102576100ba565b366100ba5761007661016a565b6001600160a01b0316336001600160a01b031614156100b05760405162461bcd60e51b81526004016100a7906108ad565b60405180910390fd5b6100b861018f565b005b61007661016a565b3480156100ce57600080fd5b506100d76101a1565b6040516100e491906107aa565b60405180910390f35b3480156100f957600080fd5b506100d76101de565b6100b861011036600461070e565b610209565b34801561012157600080fd5b506100b86101303660046106d6565b6102bc565b34801561014157600080fd5b506100b86101503660046106d6565b61035c565b34801561016157600080fd5b506100d76103c6565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b61019f61019a610495565b610514565b565b60006101ab61016a565b6001600160a01b0316336001600160a01b031614156101d3576101cc610538565b90506101db565b6101db61018f565b90565b60006101e861016a565b6001600160a01b0316336001600160a01b031614156101d3576101cc610495565b61021161016a565b6001600160a01b0316336001600160a01b031614156102af577fbe0ef9e6d5d3d5709366e217891363222543e107a017b4fd3191d99ea69ec66e610253610538565b846040516102629291906107be565b60405180910390a16102aa8383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061055d92505050565b6102b7565b6102b761018f565b505050565b6102c461016a565b6001600160a01b0316336001600160a01b03161415610351576001600160a01b0381166103035760405162461bcd60e51b81526004016100a790610850565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61032c61016a565b8260405161033b9291906107be565b60405180910390a161034c8161059b565b610359565b61035961018f565b50565b61036461016a565b6001600160a01b0316336001600160a01b03161415610351577fbe0ef9e6d5d3d5709366e217891363222543e107a017b4fd3191d99ea69ec66e6103a6610538565b826040516103b59291906107be565b60405180910390a161034c816105bf565b60006103d061016a565b6001600160a01b0316336001600160a01b031614156101d3576101cc61016a565b60606103fc8461048f565b6104185760405162461bcd60e51b81526004016100a7906108f1565b600080856001600160a01b031685604051610433919061078e565b600060405180830381855af49150503d806000811461046e576040519150601f19603f3d011682016040523d82523d6000602084013e610473565b606091505b509150915061048382828661069d565b925050505b9392505050565b3b151590565b600061049f610538565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104d757600080fd5b505afa1580156104eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050f91906106f2565b905090565b3660008037600080366000845af43d6000803e808015610533573d6000f35b3d6000fd5b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d505490565b610566826105bf565b805115610597576102b7610578610495565b826040518060600160405280602981526020016109da602991396103f1565b5050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b6105c88161048f565b6105e45760405162461bcd60e51b81526004016100a79061080b565b61065d816001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561062057600080fd5b505afa158015610634573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065891906106f2565b61048f565b6106795760405162461bcd60e51b81526004016100a790610937565b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5055565b606083156106ac575081610488565b8251156106bc5782518084602001fd5b8160405162461bcd60e51b81526004016100a791906107d8565b6000602082840312156106e7578081fd5b8135610488816109c4565b600060208284031215610703578081fd5b8151610488816109c4565b600080600060408486031215610722578182fd5b833561072d816109c4565b9250602084013567ffffffffffffffff80821115610749578384fd5b818601915086601f83011261075c578384fd5b81358181111561076a578485fd5b87602082850101111561077b578485fd5b6020830194508093505050509250925092565b600082516107a0818460208701610994565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b60006020825282518060208401526107f7816040850160208701610994565b601f01601f19169190910160400192915050565b60208082526025908201527f426561636f6e50726f78793a20626561636f6e206973206e6f74206120636f6e6040820152641d1c9858dd60da1b606082015260800190565b6020808252603a908201527f5472616e73706172656e745570677261646561626c6550726f78793a206e657760408201527f2061646d696e20697320746865207a65726f2061646472657373000000000000606082015260800190565b60208082526024908201527f41646d696e2063616e6e6f742063616c6c2066616c6c6261636b2066756e637460408201526334b7b71760e11b606082015260800190565b60208082526026908201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6040820152651b9d1c9858dd60d21b606082015260800190565b60208082526034908201527f426561636f6e50726f78793a20626561636f6e20696d706c656d656e7461746960408201527f6f6e206973206e6f74206120636f6e7472616374000000000000000000000000606082015260800190565b60005b838110156109af578181015183820152602001610997565b838111156109be576000848401525b50505050565b6001600160a01b038116811461035957600080fdfe41646d696e69737472617469766550726f78793a2066756e6374696f6e2063616c6c206661696c6564a2646970667358221220b17d4845c79421355d947c25b2d738666fb9f240286a849f751dfe968e5426d064736f6c63430008000033",\n        "metadata": {\n            "compiler": {\n                "version": "0.8.0+commit.c7dfd78e"\n            },\n            "language": "Solidity",\n            "output": {\n                "abi": [\n                    {\n                        "inputs": [\n                            {\n                                "internalType": "address",\n                                "name": "beacon_",\n                                "type": "address"\n                            },\n                            {\n                                "internalType": "bytes",\n                                "name": "data",\n                                "type": "bytes"\n                            }\n                        ],\n                        "stateMutability": "payable",\n                        "type": "constructor"\n                    },\n                    {\n                        "anonymous": false,\n                        "inputs": [\n                            {\n                                "indexed": false,\n                                "internalType": "address",\n                                "name": "previousAdmin",\n                                "type": "address"\n                            },\n                            {\n                                "indexed": false,\n                                "internalType": "address",\n                                "name": "newAdmin",\n                                "type": "address"\n                            }\n                        ],\n                        "name": "AdminChanged",\n                        "type": "event"\n                    },\n                    {\n                        "anonymous": false,\n                        "inputs": [\n                            {\n                                "indexed": false,\n                                "internalType": "address",\n                                "name": "previousBeacon",\n                                "type": "address"\n                            },\n                            {\n                                "indexed": false,\n                                "internalType": "address",\n                                "name": "newBeacon",\n                                "type": "address"\n                            }\n                        ],\n                        "name": "BeaconChanged",\n                        "type": "event"\n                    },\n                    {\n                        "stateMutability": "payable",\n                        "type": "fallback"\n                    },\n                    {\n                        "inputs": [],\n                        "name": "admin",\n                        "outputs": [\n                            {\n                                "internalType": "address",\n                                "name": "admin_",\n                                "type": "address"\n                            }\n                        ],\n                        "stateMutability": "nonpayable",\n                        "type": "function"\n                    },\n                    {\n                        "inputs": [],\n                        "name": "beacon",\n                        "outputs": [\n                            {\n                                "internalType": "address",\n                                "name": "beacon_",\n                                "type": "address"\n                            }\n                        ],\n                        "stateMutability": "nonpayable",\n                        "type": "function"\n                    },\n                    {\n                        "inputs": [\n                            {\n                                "internalType": "address",\n                                "name": "newAdmin",\n                                "type": "address"\n                            }\n                        ],\n                        "name": "changeAdmin",\n                        "outputs": [],\n                        "stateMutability": "nonpayable",\n                        "type": "function"\n                    },\n                    {\n                        "inputs": [\n                            {\n                                "internalType": "address",\n                                "name": "newBeacon",\n                                "type": "address"\n                            }\n                        ],\n                        "name": "changeBeacon",\n                        "outputs": [],\n                        "stateMutability": "nonpayable",\n                        "type": "function"\n                    },\n                    {\n                        "inputs": [\n                            {\n                                "internalType": "address",\n                                "name": "newBeacon",\n                                "type": "address"\n                            },\n                            {\n                                "internalType": "bytes",\n                                "name": "data",\n                                "type": "bytes"\n                            }\n                        ],\n                        "name": "changeBeaconAndCall",\n                        "outputs": [],\n                        "stateMutability": "payable",\n                        "type": "function"\n                    },\n                    {\n                        "inputs": [],\n                        "name": "implementation",\n                        "outputs": [\n                            {\n                                "internalType": "address",\n                                "name": "impl",\n                                "type": "address"\n                            }\n                        ],\n                        "stateMutability": "nonpayable",\n                        "type": "function"\n                    },\n                    {\n                        "stateMutability": "payable",\n                        "type": "receive"\n                    }\n                ],\n                "devdoc": {\n                    "details": "This contract implements a proxy that gets the implementation address for each call from a {UpgradeableBeacon}. The beacon address is stored in storage slot `uint256(keccak256(\'eip1967.proxy.beacon\')) - 1`, so that it doesn\'t conflict with the storage layout of the implementation behind the proxy.",\n                    "events": {\n                        "AdminChanged(address,address)": {\n                            "details": "Emitted when the admin account has changed."\n                        },\n                        "BeaconChanged(address,address)": {\n                            "details": "Emitted when the beacon address has changed."\n                        }\n                    },\n                    "kind": "dev",\n                    "methods": {\n                        "admin()": {\n                            "details": "Returns the current admin. NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}. TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`"\n                        },\n                        "beacon()": {\n                            "details": "Returns the current beacon. NOTE: Only the admin can call this function. TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50`"\n                        },\n                        "changeAdmin(address)": {\n                            "details": "Changes the admin of the proxy. Emits an {AdminChanged} event. NOTE: Only the admin can call this function. See {ProxyAdmin-changeProxyAdmin}."\n                        },\n                        "changeBeacon(address)": {\n                            "details": "Upgrade the implementation of the proxy. NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}."\n                        },\n                        "changeBeaconAndCall(address,bytes)": {\n                            "details": "Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract. NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}."\n                        },\n                        "constructor": {\n                            "details": "Initializes the proxy with `beacon`. If `data` is nonempty, it\'s used as data in a delegate call to the implementation returned by the beacon. This will typically be an encoded function call, and allows initializating the storage of the proxy like a Solidity constructor. Requirements: - `beacon` must be a contract with the interface {IBeacon}."\n                        },\n                        "implementation()": {\n                            "details": "Returns the current implementation address of the associated beacon."\n                        }\n                    },\n                    "stateVariables": {\n                        "_ADMIN_SLOT": {\n                            "details": "Storage slot with the admin of the contract. This is the keccak-256 hash of \\"eip1967.proxy.admin\\" subtracted by 1, and is validated in the constructor."\n                        },\n                        "_BEACON_SLOT": {\n                            "details": "The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy. This is bytes32(uint256(keccak256(\'eip1967.proxy.beacon\')) - 1)) and is validated in the constructor."\n                        }\n                    },\n                    "version": 1\n                },\n                "userdoc": {\n                    "kind": "user",\n                    "methods": {},\n                    "version": 1\n                }\n            },\n            "settings": {\n                "compilationTarget": {\n                    "contracts/currency-network/upgradeable/AdministrativeProxy.sol": "AdministrativeProxy"\n                },\n                "evmVersion": "petersburg",\n                "libraries": {},\n                "metadata": {\n                    "bytecodeHash": "ipfs"\n                },\n                "optimizer": {\n                    "enabled": true,\n                    "runs": 500\n                },\n                "remappings": []\n            },\n            "sources": {\n                "contracts/currency-network/upgradeable/AdministrativeProxy.sol": {\n                    "keccak256": "0x3cd3b0f703ba9b40dfd874ef46941df0b7013d32481cf6a3a34fdf60f30118f4",\n                    "license": "MIT",\n                    "urls": [\n                        "bzz-raw://fc694bf751ff7d4537afc046611ea008328f2d19db5ca6a6c58f5480e541d72c",\n                        "dweb:/ipfs/QmXr4onkfERMtLf51H6NFeZ42EfRzfL1mMAo1nxTUStQR7"\n                    ]\n                },\n                "contracts/currency-network/upgradeable/IBeacon.sol": {\n                    "keccak256": "0x641b24c47e4a2165d332ee293849900d9faeff2bf65d52c1cf40cd414a4bed50",\n                    "license": "MIT",\n                    "urls": [\n                        "bzz-raw://2582524f685e23b1166c454890a2d677d3c9fee73bcacac224db2e83727e40ed",\n                        "dweb:/ipfs/QmWnevvBRJPFCYCapHMLuAWsrD1hH2EbFURxNPH7g8p1Lj"\n                    ]\n                },\n                "contracts/lib/Address.sol": {\n                    "keccak256": "0x5c682158b7ffb18600bea0eaecd9ff81d1cafbaa8c45aa818f47d499710bb1ba",\n                    "license": "MIT",\n                    "urls": [\n                        "bzz-raw://f323eb142e522dffdaaf2ccc70169d97b5d84dda736e07c44da2730553dd0841",\n                        "dweb:/ipfs/QmcQCcaYUKJ4pxYT4NVoVkBdm18nCqcetYeuzKdPKdpXiP"\n                    ]\n                }\n            },\n            "version": 1\n        },\n        "userdoc": {\n            "kind": "user",\n            "methods": {},\n            "version": 1\n        }\n    }\n}\n')))}r.isMDXComponent=!0},735:function(e,n,a){"use strict";a.d(n,"a",(function(){return o})),a.d(n,"b",(function(){return y}));var t=a(0),d=a.n(t);function b(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function f(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?f(Object(a),!0).forEach((function(n){b(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,d=function(e,n){if(null==e)return{};var a,t,d={},b=Object.keys(e);for(t=0;t<b.length;t++)a=b[t],n.indexOf(a)>=0||(d[a]=e[a]);return d}(e,n);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(t=0;t<b.length;t++)a=b[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var s=d.a.createContext({}),r=function(e){var n=d.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},o=function(e){var n=r(e.components);return d.a.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return d.a.createElement(d.a.Fragment,{},n)}},p=d.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,b=e.originalType,f=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),o=r(a),p=t,y=o["".concat(f,".").concat(p)]||o[p]||l[p]||b;return a?d.a.createElement(y,i(i({ref:n},s),{},{components:a})):d.a.createElement(y,i({ref:n},s))}));function y(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var b=a.length,f=new Array(b);f[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,f[1]=i;for(var s=2;s<b;s++)f[s]=a[s];return d.a.createElement.apply(null,f)}return d.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);