---
layout: contracts
title: Merkle Drop contracts.json
---

```json
{
  "DroppedToken": {
    "abi": [
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
            "name": "spender",
            "type": "address"
          },
          {
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
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
            "name": "sender",
            "type": "address"
          },
          {
            "name": "recipient",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
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
        "constant": false,
        "inputs": [
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_merkleDrop",
            "type": "address"
          }
        ],
        "name": "storeAddressOfMerkleDrop",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
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
        "constant": true,
        "inputs": [],
        "name": "merkleDrop",
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
            "name": "recipient",
            "type": "address"
          },
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
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
        "inputs": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "decimals",
            "type": "uint8"
          },
          {
            "name": "preMintAddress",
            "type": "address"
          },
          {
            "name": "preMintAmount",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
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
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      }
    ],
    "devdoc": {
      "methods": {}
    },
    "bytecode": "0x60806040523480156200001157600080fd5b506040516200102a3803806200102a833981018060405260a08110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b50506020808301516040840151606090940151875193965090945091620000f99160009190880190620002d8565b5083516200010f906001906020870190620002d8565b506002805460ff191660ff85161790556200013282826200013d602090811b901c565b50505050506200037d565b6001600160a01b038216620001b357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620001cf816003546200025c60201b62000b211790919060201c565b6003556001600160a01b0382166000908152600560209081526040909120546200020491839062000b216200025c821b17901c565b6001600160a01b03831660008181526005602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600082820183811015620002d157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200031b57805160ff19168380011785556200034b565b828001600101855582156200034b579182015b828111156200034b5782518255916020019190600101906200032e565b50620003599291506200035d565b5090565b6200037a91905b8082111562000359576000815560010162000364565b90565b610c9d806200038d6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80636c8496761161008157806395d89b411161005b57806395d89b4114610293578063a9059cbb1461029b578063dd62ed3e146102c7576100d4565b80636c8496761461022357806370a08231146102495780638ac8df811461026f576100d4565b806323b872dd116100b257806323b872dd146101b0578063313ce567146101e657806342966c6814610204576100d4565b806306fdde03146100d9578063095ea7b31461015657806318160ddd14610196575b600080fd5b6100e16102f5565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561011b578181015183820152602001610103565b50505050905090810190601f1680156101485780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101826004803603604081101561016c57600080fd5b506001600160a01b03813516906020013561038b565b604080519115158252519081900360200190f35b61019e610424565b60408051918252519081900360200190f35b610182600480360360608110156101c657600080fd5b506001600160a01b0381358116916020810135909116906040013561042a565b6101ee61048f565b6040805160ff9092168252519081900360200190f35b6102216004803603602081101561021a57600080fd5b5035610498565b005b6102216004803603602081101561023957600080fd5b50356001600160a01b0316610597565b61019e6004803603602081101561025f57600080fd5b50356001600160a01b03166105d6565b6102776105f1565b604080516001600160a01b039092168252519081900360200190f35b6100e1610605565b610182600480360360408110156102b157600080fd5b506001600160a01b038135169060200135610665565b61019e600480360360408110156102dd57600080fd5b506001600160a01b03813581169160200135166106f2565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103815780601f1061035657610100808354040283529160200191610381565b820191906000526020600020905b81548152906001019060200180831161036457829003601f168201915b5050505050905090565b60008115806103bb57503360009081526006602090815260408083206001600160a01b0387168452909152902054155b610410576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610be26026913960400191505060405180910390fd5b61041b33848461071d565b50600192915050565b60035490565b600061043784848461083d565b6001600160a01b03841660009081526006602090815260408083203384529091528120549061046c828563ffffffff6109b516565b90506000198210156104835761048386338361071d565b50600195945050505050565b60025460ff1690565b60045460ff161580156104ba575060045461010090046001600160a01b031615155b15610562576004805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911617808255604080517fc3c7e33600000000000000000000000000000000000000000000000000000000815290516101009092046001600160a01b03169263c3c7e33692828201926000929082900301818387803b15801561054957600080fd5b505af115801561055d573d6000803e3d6000fd5b505050505b61056c3382610a2c565b50600480547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b600480546001600160a01b03909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b6001600160a01b031660009081526005602052604090205490565b60045461010090046001600160a01b031681565b60018054604080516020601f600260001961010087891615020190951694909404938401819004810282018101909252828152606093909290918301828280156103815780601f1061035657610100808354040283529160200191610381565b60045460009061010090046001600160a01b0316156106e757600460019054906101000a90046001600160a01b03166001600160a01b031663c3c7e3366040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156106ce57600080fd5b505af11580156106e2573d6000803e3d6000fd5b505050505b61041b33848461083d565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b6001600160a01b03831661077c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610c4e6024913960400191505060405180910390fd5b6001600160a01b0382166107db576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610bc06022913960400191505060405180910390fd5b6001600160a01b03808416600081815260066020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661089c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610c296025913960400191505060405180910390fd5b6001600160a01b0382166108fb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610b9d6023913960400191505060405180910390fd5b6001600160a01b038316600090815260056020526040902054610924908263ffffffff6109b516565b6001600160a01b038085166000908152600560205260408082209390935590841681522054610959908263ffffffff610b2116565b6001600160a01b0380841660008181526005602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600082821115610a2657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6001600160a01b038216610a8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610c086021913960400191505060405180910390fd5b600354610a9e908263ffffffff6109b516565b6003556001600160a01b038216600090815260056020526040902054610aca908263ffffffff6109b516565b6001600160a01b0383166000818152600560209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b600082820183811015610b9557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a20617070726f7665206f6e6c7920746f206f722066726f6d20302076616c756545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a7230582033695bef76a362d37d8ce8f5052b49a1d0dbed8d393fb018e2692915c12be5210029",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100d45760003560e01c80636c8496761161008157806395d89b411161005b57806395d89b4114610293578063a9059cbb1461029b578063dd62ed3e146102c7576100d4565b80636c8496761461022357806370a08231146102495780638ac8df811461026f576100d4565b806323b872dd116100b257806323b872dd146101b0578063313ce567146101e657806342966c6814610204576100d4565b806306fdde03146100d9578063095ea7b31461015657806318160ddd14610196575b600080fd5b6100e16102f5565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561011b578181015183820152602001610103565b50505050905090810190601f1680156101485780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101826004803603604081101561016c57600080fd5b506001600160a01b03813516906020013561038b565b604080519115158252519081900360200190f35b61019e610424565b60408051918252519081900360200190f35b610182600480360360608110156101c657600080fd5b506001600160a01b0381358116916020810135909116906040013561042a565b6101ee61048f565b6040805160ff9092168252519081900360200190f35b6102216004803603602081101561021a57600080fd5b5035610498565b005b6102216004803603602081101561023957600080fd5b50356001600160a01b0316610597565b61019e6004803603602081101561025f57600080fd5b50356001600160a01b03166105d6565b6102776105f1565b604080516001600160a01b039092168252519081900360200190f35b6100e1610605565b610182600480360360408110156102b157600080fd5b506001600160a01b038135169060200135610665565b61019e600480360360408110156102dd57600080fd5b506001600160a01b03813581169160200135166106f2565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103815780601f1061035657610100808354040283529160200191610381565b820191906000526020600020905b81548152906001019060200180831161036457829003601f168201915b5050505050905090565b60008115806103bb57503360009081526006602090815260408083206001600160a01b0387168452909152902054155b610410576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610be26026913960400191505060405180910390fd5b61041b33848461071d565b50600192915050565b60035490565b600061043784848461083d565b6001600160a01b03841660009081526006602090815260408083203384529091528120549061046c828563ffffffff6109b516565b90506000198210156104835761048386338361071d565b50600195945050505050565b60025460ff1690565b60045460ff161580156104ba575060045461010090046001600160a01b031615155b15610562576004805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911617808255604080517fc3c7e33600000000000000000000000000000000000000000000000000000000815290516101009092046001600160a01b03169263c3c7e33692828201926000929082900301818387803b15801561054957600080fd5b505af115801561055d573d6000803e3d6000fd5b505050505b61056c3382610a2c565b50600480547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b600480546001600160a01b03909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b6001600160a01b031660009081526005602052604090205490565b60045461010090046001600160a01b031681565b60018054604080516020601f600260001961010087891615020190951694909404938401819004810282018101909252828152606093909290918301828280156103815780601f1061035657610100808354040283529160200191610381565b60045460009061010090046001600160a01b0316156106e757600460019054906101000a90046001600160a01b03166001600160a01b031663c3c7e3366040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156106ce57600080fd5b505af11580156106e2573d6000803e3d6000fd5b505050505b61041b33848461083d565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b6001600160a01b03831661077c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610c4e6024913960400191505060405180910390fd5b6001600160a01b0382166107db576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610bc06022913960400191505060405180910390fd5b6001600160a01b03808416600081815260066020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661089c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610c296025913960400191505060405180910390fd5b6001600160a01b0382166108fb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610b9d6023913960400191505060405180910390fd5b6001600160a01b038316600090815260056020526040902054610924908263ffffffff6109b516565b6001600160a01b038085166000908152600560205260408082209390935590841681522054610959908263ffffffff610b2116565b6001600160a01b0380841660008181526005602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600082821115610a2657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6001600160a01b038216610a8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610c086021913960400191505060405180910390fd5b600354610a9e908263ffffffff6109b516565b6003556001600160a01b038216600090815260056020526040902054610aca908263ffffffff6109b516565b6001600160a01b0383166000818152600560209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b600082820183811015610b9557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a20617070726f7665206f6e6c7920746f206f722066726f6d20302076616c756545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a7230582033695bef76a362d37d8ce8f5052b49a1d0dbed8d393fb018e2692915c12be5210029",
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
                "name": "spender",
                "type": "address"
              },
              {
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
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
                "name": "sender",
                "type": "address"
              },
              {
                "name": "recipient",
                "type": "address"
              },
              {
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
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
            "constant": false,
            "inputs": [
              {
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "burn",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "name": "_merkleDrop",
                "type": "address"
              }
            ],
            "name": "storeAddressOfMerkleDrop",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "account",
                "type": "address"
              }
            ],
            "name": "balanceOf",
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
            "constant": true,
            "inputs": [],
            "name": "merkleDrop",
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
                "name": "recipient",
                "type": "address"
              },
              {
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "name": "",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "owner",
                "type": "address"
              },
              {
                "name": "spender",
                "type": "address"
              }
            ],
            "name": "allowance",
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
            "inputs": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "symbol",
                "type": "string"
              },
              {
                "name": "decimals",
                "type": "uint8"
              },
              {
                "name": "preMintAddress",
                "type": "address"
              },
              {
                "name": "preMintAmount",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "value",
                "type": "uint256"
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
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "spender",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
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
          "./contracts/contracts/DroppedToken.sol": "DroppedToken"
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
        "./contracts/contracts/DroppedToken.sol": {
          "keccak256": "0xa77c43d3602c7c48b73de56e43d31b773d1e6214ade13f245f5d7d9123eec583",
          "urls": [
            "bzzr://edf9d3a025bd02ddfc219fc22d5bf4b38107a5d1535bc6f9d0e2241fb4b23fd1"
          ]
        },
        "./contracts/contracts/ERC20Interface.sol": {
          "keccak256": "0x74d607df0b2b30c472396949a1d0b6730db51b63d440376a8781a318480278ff",
          "urls": [
            "bzzr://f1869a4f0fa1252fedb7be12e5dc17523391c4530806f3764635d6e5d9063f06"
          ]
        },
        "./contracts/contracts/MerkleDrop.sol": {
          "keccak256": "0xa2c39a11ab3294c93bffed0cb33308864f808989382be4dbd5ac401a4911d593",
          "urls": [
            "bzzr://cda73db0b93238125c7efc6ab83f96f3b0bf56b785c00800d20962e618265f02"
          ]
        },
        "./contracts/contracts/SafeMath.sol": {
          "keccak256": "0xf3e4a830c05e9a9a6d0b0f21338d29b18bf35cd1ce828b0879238ead256f4b7e",
          "urls": [
            "bzzr://0e59747124807c2179801d7a428c5daa87e2ba23570db5756099ceac7aaf8d9a"
          ]
        }
      },
      "version": 1
    },
    "userdoc": {
      "methods": {}
    }
  },
  "ERC20Interface": {
    "abi": [
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
            "name": "spender",
            "type": "address"
          },
          {
            "name": "tokens",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
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
            "name": "from",
            "type": "address"
          },
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokens",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
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
        "constant": false,
        "inputs": [
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "tokenOwner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "balance",
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
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokens",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "name": "success",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "tokenOwner",
            "type": "address"
          },
          {
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "remaining",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "tokens",
            "type": "uint256"
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
            "name": "tokenOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "tokens",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      }
    ],
    "devdoc": {
      "methods": {}
    },
    "bytecode": "0x",
    "deployedBytecode": "0x",
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
                "name": "spender",
                "type": "address"
              },
              {
                "name": "tokens",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [
              {
                "name": "success",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
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
                "name": "from",
                "type": "address"
              },
              {
                "name": "to",
                "type": "address"
              },
              {
                "name": "tokens",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [
              {
                "name": "success",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
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
            "constant": false,
            "inputs": [
              {
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "burn",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "tokenOwner",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "name": "balance",
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
                "name": "to",
                "type": "address"
              },
              {
                "name": "tokens",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "name": "success",
                "type": "bool"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "name": "tokenOwner",
                "type": "address"
              },
              {
                "name": "spender",
                "type": "address"
              }
            ],
            "name": "allowance",
            "outputs": [
              {
                "name": "remaining",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "tokens",
                "type": "uint256"
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
                "name": "tokenOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "name": "spender",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "tokens",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
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
          "./contracts/contracts/ERC20Interface.sol": "ERC20Interface"
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
        "./contracts/contracts/ERC20Interface.sol": {
          "keccak256": "0x74d607df0b2b30c472396949a1d0b6730db51b63d440376a8781a318480278ff",
          "urls": [
            "bzzr://f1869a4f0fa1252fedb7be12e5dc17523391c4530806f3764635d6e5d9063f06"
          ]
        }
      },
      "version": 1
    },
    "userdoc": {
      "methods": {}
    }
  },
  "MerkleDrop": {
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "name": "value",
            "type": "uint256"
          },
          {
            "name": "time",
            "type": "uint256"
          },
          {
            "name": "roundUp",
            "type": "bool"
          }
        ],
        "name": "decayedEntitlementAtTime",
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
        "constant": true,
        "inputs": [],
        "name": "initialBalance",
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
        "constant": true,
        "inputs": [],
        "name": "remainingValue",
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
            "name": "value",
            "type": "uint256"
          },
          {
            "name": "proof",
            "type": "bytes32[]"
          }
        ],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "deleteContract",
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
        "name": "withdrawn",
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
        "name": "decayStartTime",
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
        "constant": true,
        "inputs": [
          {
            "name": "recipient",
            "type": "address"
          },
          {
            "name": "value",
            "type": "uint256"
          },
          {
            "name": "proof",
            "type": "bytes32[]"
          }
        ],
        "name": "verifyEntitled",
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
        "inputs": [],
        "name": "burnUnusableTokens",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "decayDurationInSeconds",
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
        "constant": true,
        "inputs": [],
        "name": "droppedToken",
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
        "name": "root",
        "outputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "spentTokens",
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
        "inputs": [
          {
            "name": "_droppedToken",
            "type": "address"
          },
          {
            "name": "_initialBalance",
            "type": "uint256"
          },
          {
            "name": "_root",
            "type": "bytes32"
          },
          {
            "name": "_decayStartTime",
            "type": "uint256"
          },
          {
            "name": "_decayDurationInSeconds",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "originalValue",
            "type": "uint256"
          }
        ],
        "name": "Withdraw",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Burn",
        "type": "event"
      }
    ],
    "devdoc": {
      "methods": {}
    },
    "bytecode": "0x608060405234801561001057600080fd5b5060405160a080610be7833981018060405260a081101561003057600080fd5b508051602082015160408301516060840151608090940151600180546001600160a01b039095166001600160a01b0319909516949094179093556004829055600591909155600055600291909155600355610b57806100906000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063c17e608f1161008c578063d1a1023311610066578063d1a1023314610301578063e9e0129c14610309578063ebf0c7171461033a578063f440343314610342576100df565b8063c17e608f1461022c578063c3709caf14610234578063c3c7e336146102f9576100df565b806336317972116100bd57806336317972146101315780635a58cd4c146101dd5780636ef61092146101e5576100df565b8063102aa42f146100e457806318369a2a14610121578063273ad1ca14610129575b600080fd5b61010f600480360360608110156100fa57600080fd5b5080359060208101359060400135151561034a565b60408051918252519081900360200190f35b61010f6103a9565b61010f6103af565b6101db6004803603604081101561014757600080fd5b8135919081019060408101602082013564010000000081111561016957600080fd5b82018360208201111561017b57600080fd5b8035906020019184602083028401116401000000008311171561019d57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506103b5945050505050565b005b6101db61073d565b610218600480360360208110156101fb57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166107a8565b604080519115158252519081900360200190f35b61010f6107bd565b6102186004803603606081101561024a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561028757600080fd5b82018360208201111561029957600080fd5b803590602001918460208302840111640100000000831117156102bb57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506107c3945050505050565b6101db61081f565b61010f61086e565b610311610874565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61010f610890565b61010f610896565b6000600254831161035c5750826103a2565b600354600254018310610371575060006103a2565b600060025484039050600061038b8683600354871561089c565b90508581111561039757fe5b850391506103a29050565b9392505050565b60045481565b60055481565b6103c03383836107c3565b61042b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5468652070726f6f6620636f756c64206e6f742062652076657269666965642e604482015290519081900360640190fd5b3360009081526007602052604090205460ff1615610494576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180610afd602f913960400191505060405180910390fd5b61049c61081f565b60006104aa8342600061034a565b9050828111156104b657fe5b600154604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051839273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b15801561052657600080fd5b505afa15801561053a573d6000803e3d6000fd5b505050506040513d602081101561055057600080fd5b505110156105a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180610a9c603a913960400191505060405180910390fd5b806105ff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180610ad66027913960400191505060405180910390fd5b33600081815260076020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915560058054899003905560068054870190555481517fa9059cbb000000000000000000000000000000000000000000000000000000008152600481019590955260248501869052905173ffffffffffffffffffffffffffffffffffffffff919091169363a9059cbb9360448083019493928390030190829087803b1580156106c357600080fd5b505af11580156106d7573d6000803e3d6000fd5b505050506040513d60208110156106ed57600080fd5b50516106f857600080fd5b604080513381526020810183905280820185905290517ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360600190a1505050565b6003546002540142101561079c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526040815260200180610a5c6040913960400191505060405180910390fd5b6107a461081f565b6000ff5b60076020526000908152604090205460ff1681565b60025481565b6040805173ffffffffffffffffffffffffffffffffffffffff851660601b6020808301919091526034808301869052835180840390910181526054909201909252805191012060009061081681846108e6565b95945050505050565b600254421161082d5761086c565b600061083d60055442600161034a565b60065460045491925090038082111561085257fe5b6006805483830390810190915561086881610929565b5050505b565b60035481565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60005481565b60065481565b60008082156108bd57836001858789020103816108b557fe5b0490506108cc565b83858702816108c857fe5b0490505b858110156108da57806108dc565b855b9695505050505050565b600082815b835181101561091b576109118285838151811061090457fe5b60200260200101516109f5565b91506001016108eb565b506000541490505b92915050565b80610933576109f2565b6040805182815290517fb90306ad06b2a6ff86ddc9327db583062895ef6540e62dc50add009db5b356eb9181900360200190a1600154604080517f42966c6800000000000000000000000000000000000000000000000000000000815260048101849052905173ffffffffffffffffffffffffffffffffffffffff909216916342966c689160248082019260009290919082900301818387803b1580156109d957600080fd5b505af11580156109ed573d6000803e3d6000fd5b505050505b50565b600081831015610a2d575060408051602080820185905281830184905282518083038401815260609092019092528051910120610923565b506040805160208082018490528183018590528251808303840181526060909201909252805191012061092356fe5468652073746f726167652063616e6e6f742062652064656c65746564206265666f72652074686520656e64206f6620746865206d65726b6c652064726f702e546865204d65726b6c6544726f7020646f6573206e6f74206861766520746f6b656e7320746f2064726f7020796574202f20616e796d6f72652e546865206465636179656420656e7469746c65642076616c7565206973206e6f77207a65726f2e596f75206861766520616c72656164792077697468647261776e20796f757220656e7469746c656420746f6b656e2ea165627a7a723058201d09d48e627765528b71a4ef83baffaae0258e4f2d01067899699d5f17ed6aec0029",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100df5760003560e01c8063c17e608f1161008c578063d1a1023311610066578063d1a1023314610301578063e9e0129c14610309578063ebf0c7171461033a578063f440343314610342576100df565b8063c17e608f1461022c578063c3709caf14610234578063c3c7e336146102f9576100df565b806336317972116100bd57806336317972146101315780635a58cd4c146101dd5780636ef61092146101e5576100df565b8063102aa42f146100e457806318369a2a14610121578063273ad1ca14610129575b600080fd5b61010f600480360360608110156100fa57600080fd5b5080359060208101359060400135151561034a565b60408051918252519081900360200190f35b61010f6103a9565b61010f6103af565b6101db6004803603604081101561014757600080fd5b8135919081019060408101602082013564010000000081111561016957600080fd5b82018360208201111561017b57600080fd5b8035906020019184602083028401116401000000008311171561019d57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506103b5945050505050565b005b6101db61073d565b610218600480360360208110156101fb57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166107a8565b604080519115158252519081900360200190f35b61010f6107bd565b6102186004803603606081101561024a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561028757600080fd5b82018360208201111561029957600080fd5b803590602001918460208302840111640100000000831117156102bb57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506107c3945050505050565b6101db61081f565b61010f61086e565b610311610874565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61010f610890565b61010f610896565b6000600254831161035c5750826103a2565b600354600254018310610371575060006103a2565b600060025484039050600061038b8683600354871561089c565b90508581111561039757fe5b850391506103a29050565b9392505050565b60045481565b60055481565b6103c03383836107c3565b61042b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5468652070726f6f6620636f756c64206e6f742062652076657269666965642e604482015290519081900360640190fd5b3360009081526007602052604090205460ff1615610494576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180610afd602f913960400191505060405180910390fd5b61049c61081f565b60006104aa8342600061034a565b9050828111156104b657fe5b600154604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051839273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b15801561052657600080fd5b505afa15801561053a573d6000803e3d6000fd5b505050506040513d602081101561055057600080fd5b505110156105a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180610a9c603a913960400191505060405180910390fd5b806105ff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180610ad66027913960400191505060405180910390fd5b33600081815260076020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915560058054899003905560068054870190555481517fa9059cbb000000000000000000000000000000000000000000000000000000008152600481019590955260248501869052905173ffffffffffffffffffffffffffffffffffffffff919091169363a9059cbb9360448083019493928390030190829087803b1580156106c357600080fd5b505af11580156106d7573d6000803e3d6000fd5b505050506040513d60208110156106ed57600080fd5b50516106f857600080fd5b604080513381526020810183905280820185905290517ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360600190a1505050565b6003546002540142101561079c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526040815260200180610a5c6040913960400191505060405180910390fd5b6107a461081f565b6000ff5b60076020526000908152604090205460ff1681565b60025481565b6040805173ffffffffffffffffffffffffffffffffffffffff851660601b6020808301919091526034808301869052835180840390910181526054909201909252805191012060009061081681846108e6565b95945050505050565b600254421161082d5761086c565b600061083d60055442600161034a565b60065460045491925090038082111561085257fe5b6006805483830390810190915561086881610929565b5050505b565b60035481565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60005481565b60065481565b60008082156108bd57836001858789020103816108b557fe5b0490506108cc565b83858702816108c857fe5b0490505b858110156108da57806108dc565b855b9695505050505050565b600082815b835181101561091b576109118285838151811061090457fe5b60200260200101516109f5565b91506001016108eb565b506000541490505b92915050565b80610933576109f2565b6040805182815290517fb90306ad06b2a6ff86ddc9327db583062895ef6540e62dc50add009db5b356eb9181900360200190a1600154604080517f42966c6800000000000000000000000000000000000000000000000000000000815260048101849052905173ffffffffffffffffffffffffffffffffffffffff909216916342966c689160248082019260009290919082900301818387803b1580156109d957600080fd5b505af11580156109ed573d6000803e3d6000fd5b505050505b50565b600081831015610a2d575060408051602080820185905281830184905282518083038401815260609092019092528051910120610923565b506040805160208082018490528183018590528251808303840181526060909201909252805191012061092356fe5468652073746f726167652063616e6e6f742062652064656c65746564206265666f72652074686520656e64206f6620746865206d65726b6c652064726f702e546865204d65726b6c6544726f7020646f6573206e6f74206861766520746f6b656e7320746f2064726f7020796574202f20616e796d6f72652e546865206465636179656420656e7469746c65642076616c7565206973206e6f77207a65726f2e596f75206861766520616c72656164792077697468647261776e20796f757220656e7469746c656420746f6b656e2ea165627a7a723058201d09d48e627765528b71a4ef83baffaae0258e4f2d01067899699d5f17ed6aec0029",
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
                "name": "value",
                "type": "uint256"
              },
              {
                "name": "time",
                "type": "uint256"
              },
              {
                "name": "roundUp",
                "type": "bool"
              }
            ],
            "name": "decayedEntitlementAtTime",
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
            "constant": true,
            "inputs": [],
            "name": "initialBalance",
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
            "constant": true,
            "inputs": [],
            "name": "remainingValue",
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
                "name": "value",
                "type": "uint256"
              },
              {
                "name": "proof",
                "type": "bytes32[]"
              }
            ],
            "name": "withdraw",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "deleteContract",
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
            "name": "withdrawn",
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
            "name": "decayStartTime",
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
            "constant": true,
            "inputs": [
              {
                "name": "recipient",
                "type": "address"
              },
              {
                "name": "value",
                "type": "uint256"
              },
              {
                "name": "proof",
                "type": "bytes32[]"
              }
            ],
            "name": "verifyEntitled",
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
            "inputs": [],
            "name": "burnUnusableTokens",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "decayDurationInSeconds",
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
            "constant": true,
            "inputs": [],
            "name": "droppedToken",
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
            "name": "root",
            "outputs": [
              {
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "spentTokens",
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
            "inputs": [
              {
                "name": "_droppedToken",
                "type": "address"
              },
              {
                "name": "_initialBalance",
                "type": "uint256"
              },
              {
                "name": "_root",
                "type": "bytes32"
              },
              {
                "name": "_decayStartTime",
                "type": "uint256"
              },
              {
                "name": "_decayDurationInSeconds",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "recipient",
                "type": "address"
              },
              {
                "indexed": false,
                "name": "value",
                "type": "uint256"
              },
              {
                "indexed": false,
                "name": "originalValue",
                "type": "uint256"
              }
            ],
            "name": "Withdraw",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Burn",
            "type": "event"
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
          "./contracts/contracts/MerkleDrop.sol": "MerkleDrop"
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
        "./contracts/contracts/ERC20Interface.sol": {
          "keccak256": "0x74d607df0b2b30c472396949a1d0b6730db51b63d440376a8781a318480278ff",
          "urls": [
            "bzzr://f1869a4f0fa1252fedb7be12e5dc17523391c4530806f3764635d6e5d9063f06"
          ]
        },
        "./contracts/contracts/MerkleDrop.sol": {
          "keccak256": "0xa2c39a11ab3294c93bffed0cb33308864f808989382be4dbd5ac401a4911d593",
          "urls": [
            "bzzr://cda73db0b93238125c7efc6ab83f96f3b0bf56b785c00800d20962e618265f02"
          ]
        }
      },
      "version": 1
    },
    "userdoc": {
      "methods": {}
    }
  },
  "SafeMath": {
    "abi": [],
    "devdoc": {
      "details": "Wrappers over Solidity's arithmetic operations with added overflow checks. * Arithmetic operations in Solidity wrap on overflow. This can easily result in bugs, because programmers usually assume that an overflow raises an error, which is the standard behavior in high level programming languages. `SafeMath` restores this intuition by reverting the transaction when an operation overflows. * Using this library instead of the unchecked operations eliminates an entire class of bugs, so it's recommended to use it always.",
      "methods": {}
    },
    "bytecode": "0x604c6023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a7230582080ac3a46e0a0afcc7b4607e85f77c19258dfa67b310cd7ca573f9e5908a32e9f0029",
    "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a7230582080ac3a46e0a0afcc7b4607e85f77c19258dfa67b310cd7ca573f9e5908a32e9f0029",
    "metadata": {
      "compiler": {
        "version": "0.5.8+commit.23d335f2"
      },
      "language": "Solidity",
      "output": {
        "abi": [],
        "devdoc": {
          "details": "Wrappers over Solidity's arithmetic operations with added overflow checks. * Arithmetic operations in Solidity wrap on overflow. This can easily result in bugs, because programmers usually assume that an overflow raises an error, which is the standard behavior in high level programming languages. `SafeMath` restores this intuition by reverting the transaction when an operation overflows. * Using this library instead of the unchecked operations eliminates an entire class of bugs, so it's recommended to use it always.",
          "methods": {}
        },
        "userdoc": {
          "methods": {}
        }
      },
      "settings": {
        "compilationTarget": {
          "./contracts/contracts/SafeMath.sol": "SafeMath"
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
        "./contracts/contracts/SafeMath.sol": {
          "keccak256": "0xf3e4a830c05e9a9a6d0b0f21338d29b18bf35cd1ce828b0879238ead256f4b7e",
          "urls": [
            "bzzr://0e59747124807c2179801d7a428c5daa87e2ba23570db5756099ceac7aaf8d9a"
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
