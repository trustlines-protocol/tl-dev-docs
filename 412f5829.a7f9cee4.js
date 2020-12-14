(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{155:function(f,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return o})),e.d(n,"metadata",(function(){return c})),e.d(n,"rightToc",(function(){return i})),e.d(n,"default",(function(){return s}));var t=e(3),a=e(7),r=(e(0),e(413)),o={layout:"contracts",title:"Foreign Bridge contracts.json"},c={unversionedId:"json/foreign_bridge_contracts_json",id:"json/foreign_bridge_contracts_json",isDocsHomePage:!1,title:"Foreign Bridge contracts.json",description:"`json",source:"@site/contracts/json/foreign_bridge_contracts_json.md",slug:"/json/foreign_bridge_contracts_json",permalink:"/contracts/json/foreign_bridge_contracts_json",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/contracts/json/foreign_bridge_contracts_json.md",version:"current"},i=[],b={rightToc:i};function s(f){var n=f.components,e=Object(a.a)(f,["components"]);return Object(r.b)("wrapper",Object(t.a)({},b,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ForeignBridge": {\n    "abi": [\n      {\n        "constant": true,\n        "inputs": [],\n        "name": "requiredBlockConfirmations",\n        "outputs": [\n          {\n            "name": "",\n            "type": "uint256"\n          }\n        ],\n        "payable": false,\n        "stateMutability": "view",\n        "type": "function"\n      },\n      {\n        "constant": false,\n        "inputs": [],\n        "name": "burn",\n        "outputs": [],\n        "payable": false,\n        "stateMutability": "nonpayable",\n        "type": "function"\n      },\n      {\n        "constant": true,\n        "inputs": [],\n        "name": "trustlinesNetworkToken",\n        "outputs": [\n          {\n            "name": "",\n            "type": "address"\n          }\n        ],\n        "payable": false,\n        "stateMutability": "view",\n        "type": "function"\n      },\n      {\n        "inputs": [\n          {\n            "name": "_trustlinesNetworkToken",\n            "type": "address"\n          }\n        ],\n        "payable": false,\n        "stateMutability": "nonpayable",\n        "type": "constructor"\n      }\n    ],\n    "devdoc": {\n      "methods": {}\n    },\n    "bytecode": "0x6080604052600860005534801561001557600080fd5b5060405160208061030a8339810180604052602081101561003557600080fd5b50516001600160a01b038116610096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806102dc602e913960400191505060405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055610217806100c56000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633f0a9f651461004657806344df8e7014610060578063cd1df0ed1461006a575b600080fd5b61004e61009b565b60408051918252519081900360200190f35b6100686100a1565b005b6100726101cf565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005481565b600154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b15801561011257600080fd5b505afa158015610126573d6000803e3d6000fd5b505050506040513d602081101561013c57600080fd5b5051600154604080517f42966c6800000000000000000000000000000000000000000000000000000000815260048101849052905192935073ffffffffffffffffffffffffffffffffffffffff909116916342966c689160248082019260009290919082900301818387803b1580156101b457600080fd5b505af11580156101c8573d6000803e3d6000fd5b5050505050565b60015473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a7230582028baa351f7ad7dbb9f17aa63b3a23cbfc19904f31e4fb2c0ad97bb4d245079460029546f6b656e20636f6e74726163742063616e206e6f74206265206f6e20746865207a65726f206164647265737321",\n    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80633f0a9f651461004657806344df8e7014610060578063cd1df0ed1461006a575b600080fd5b61004e61009b565b60408051918252519081900360200190f35b6100686100a1565b005b6100726101cf565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005481565b600154604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b15801561011257600080fd5b505afa158015610126573d6000803e3d6000fd5b505050506040513d602081101561013c57600080fd5b5051600154604080517f42966c6800000000000000000000000000000000000000000000000000000000815260048101849052905192935073ffffffffffffffffffffffffffffffffffffffff909116916342966c689160248082019260009290919082900301818387803b1580156101b457600080fd5b505af11580156101c8573d6000803e3d6000fd5b5050505050565b60015473ffffffffffffffffffffffffffffffffffffffff168156fea165627a7a7230582028baa351f7ad7dbb9f17aa63b3a23cbfc19904f31e4fb2c0ad97bb4d245079460029",\n    "metadata": {\n      "compiler": {\n        "version": "0.5.8+commit.23d335f2"\n      },\n      "language": "Solidity",\n      "output": {\n        "abi": [\n          {\n            "constant": true,\n            "inputs": [],\n            "name": "requiredBlockConfirmations",\n            "outputs": [\n              {\n                "name": "",\n                "type": "uint256"\n              }\n            ],\n            "payable": false,\n            "stateMutability": "view",\n            "type": "function"\n          },\n          {\n            "constant": false,\n            "inputs": [],\n            "name": "burn",\n            "outputs": [],\n            "payable": false,\n            "stateMutability": "nonpayable",\n            "type": "function"\n          },\n          {\n            "constant": true,\n            "inputs": [],\n            "name": "trustlinesNetworkToken",\n            "outputs": [\n              {\n                "name": "",\n                "type": "address"\n              }\n            ],\n            "payable": false,\n            "stateMutability": "view",\n            "type": "function"\n          },\n          {\n            "inputs": [\n              {\n                "name": "_trustlinesNetworkToken",\n                "type": "address"\n              }\n            ],\n            "payable": false,\n            "stateMutability": "nonpayable",\n            "type": "constructor"\n          }\n        ],\n        "devdoc": {\n          "methods": {}\n        },\n        "userdoc": {\n          "methods": {}\n        }\n      },\n      "settings": {\n        "compilationTarget": {\n          "contracts/bridge/ForeignBridge.sol": "ForeignBridge"\n        },\n        "evmVersion": "petersburg",\n        "libraries": {},\n        "optimizer": {\n          "enabled": true,\n          "runs": 5000\n        },\n        "remappings": []\n      },\n      "sources": {\n        "contracts/bridge/ForeignBridge.sol": {\n          "keccak256": "0x5ef1d004a8db4f6f11a5a263bc3a62a3712ffca55af45b5c595d8f20cbbff2c9",\n          "urls": [\n            "bzzr://08697052681a06aeb8f4bdf678a05df56337327bf303797432f66632f3262202"\n          ]\n        },\n        "contracts/lib/SafeMath.sol": {\n          "keccak256": "0x5507b51bb4039ad2d45625f6289d8c4ff460f86270057d0e9971ef2720c92233",\n          "urls": [\n            "bzzr://1c0c2c679ae48dbaaffc67da8cac3096cf8aa13dbd0811226015b37ec68db3ed"\n          ]\n        },\n        "contracts/token/TrustlinesNetworkToken.sol": {\n          "keccak256": "0x9d510b2a26ea6dcb13cbeec4321100ce018f129b84725922b32d5a125cc7ee1f",\n          "urls": [\n            "bzzr://ee81a4dbaa366e098be555b5381c43c4990042411d0f108c5088919b43ef5f78"\n          ]\n        }\n      },\n      "version": 1\n    },\n    "userdoc": {\n      "methods": {}\n    }\n  }\n}\n')))}s.isMDXComponent=!0},413:function(f,n,e){"use strict";e.d(n,"a",(function(){return d})),e.d(n,"b",(function(){return p}));var t=e(0),a=e.n(t);function r(f,n,e){return n in f?Object.defineProperty(f,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):f[n]=e,f}function o(f,n){var e=Object.keys(f);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(f);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(f,n).enumerable}))),e.push.apply(e,t)}return e}function c(f){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(f,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(f,n,Object.getOwnPropertyDescriptor(e,n))}))}return f}function i(f,n){if(null==f)return{};var e,t,a=function(f,n){if(null==f)return{};var e,t,a={},r=Object.keys(f);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||(a[e]=f[e]);return a}(f,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(f);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(f,e)&&(a[e]=f[e])}return a}var b=a.a.createContext({}),s=function(f){var n=a.a.useContext(b),e=n;return f&&(e="function"==typeof f?f(n):c(c({},n),f)),e},d=function(f){var n=s(f.components);return a.a.createElement(b.Provider,{value:n},f.children)},u={inlineCode:"code",wrapper:function(f){var n=f.children;return a.a.createElement(a.a.Fragment,{},n)}},l=a.a.forwardRef((function(f,n){var e=f.components,t=f.mdxType,r=f.originalType,o=f.parentName,b=i(f,["components","mdxType","originalType","parentName"]),d=s(e),l=t,p=d["".concat(o,".").concat(l)]||d[l]||u[l]||r;return e?a.a.createElement(p,c(c({ref:n},b),{},{components:e})):a.a.createElement(p,c({ref:n},b))}));function p(f,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof f||t){var r=e.length,o=new Array(r);o[0]=l;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=f,c.mdxType="string"==typeof f?f:t,o[1]=c;for(var b=2;b<r;b++)o[b]=e[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,e)}l.displayName="MDXCreateElement"}}]);