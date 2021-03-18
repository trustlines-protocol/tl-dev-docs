(window.webpackJsonp=window.webpackJsonp||[]).push([[466],{538:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(3),l=a(8),n=(a(0),a(664)),b={id:"_wallets_walletfromethers_.walletfromethers",title:"Class: WalletFromEthers",sidebar_label:"WalletFromEthers"},c={unversionedId:"api/classes/_wallets_walletfromethers_.walletfromethers",id:"version-0.14.0/api/classes/_wallets_walletfromethers_.walletfromethers",isDocsHomePage:!1,title:"Class: WalletFromEthers",description:'"wallets/WalletFromEthers".WalletFromEthers',source:"@site/clientlib_versioned_docs/version-0.14.0/api/classes/_wallets_walletfromethers_.walletfromethers.md",slug:"/api/classes/_wallets_walletfromethers_.walletfromethers",permalink:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib_versioned_docs/version-0.14.0/api/classes/_wallets_walletfromethers_.walletfromethers.md",version:"0.14.0",sidebar_label:"WalletFromEthers",sidebar:"version-0.14.0/clientlib",previous:{title:"Class: IdentityWallet",permalink:"/clientlib/api/classes/_wallets_identitywallet_.identitywallet"},next:{title:"Interface: ExtraData",permalink:"/clientlib/api/interfaces/_extradata_.extradata"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"address",id:"address",children:[]},{value:"mnemonic",id:"mnemonic",children:[]},{value:"path",id:"path",children:[]},{value:"privateKey",id:"privatekey",children:[]},{value:"provider",id:"provider",children:[]}]},{value:"Methods",id:"methods",children:[{value:"connect",id:"connect",children:[]},{value:"encrypt",id:"encrypt",children:[]},{value:"getAddress",id:"getaddress",children:[]},{value:"getBalance",id:"getbalance",children:[]},{value:"getTransactionCount",id:"gettransactioncount",children:[]},{value:"sendTransaction",id:"sendtransaction",children:[]},{value:"sign",id:"sign",children:[]},{value:"signMessage",id:"signmessage",children:[]},{value:"toEthersWalletData",id:"toetherswalletdata",children:[]},{value:"toIdentityWalletData",id:"toidentitywalletdata",children:[]},{value:"createRandom",id:"createrandom",children:[]},{value:"fromEncryptedJson",id:"fromencryptedjson",children:[]},{value:"fromMnemonic",id:"frommnemonic",children:[]},{value:"fromWalletData",id:"fromwalletdata",children:[]},{value:"isSigner",id:"issigner",children:[]}]}],i={rightToc:s};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/modules/_wallets_walletfromethers_"}),'"wallets/WalletFromEthers"'),".WalletFromEthers"),Object(n.b)("p",null,"This is a wrapper class for ",Object(n.b)("inlineCode",{parentName:"p"},"ethers.Wallet"),". It allows us to customize some of the methods provided by\n",Object(n.b)("inlineCode",{parentName:"p"},"ethers.Wallet"),". We also use this to add some conversion methods adapted to our internal types."),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Wallet"),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"WalletFromEthers")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new WalletFromEthers"),"(",Object(n.b)("inlineCode",{parentName:"p"},"privateKey"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"mnemonic?"),": string): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/WalletFromEthers.ts#L46"}),"src/wallets/WalletFromEthers.ts:46"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"privateKey")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"mnemonic?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"address"},"address"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"address"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#address"}),"address"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:14")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"mnemonic"},"mnemonic"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"mnemonic"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#mnemonic"}),"mnemonic"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:15")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"path"},"path"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"path"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#path"}),"path"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:16")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"privatekey"},"privateKey"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"privateKey"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#privatekey"}),"privateKey"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:17")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"provider"},"provider"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"provider"),": Provider"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#provider"}),"provider"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:11")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"connect"},"connect"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"connect"),"(",Object(n.b)("inlineCode",{parentName:"p"},"provider"),": Provider): Wallet"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#connect"}),"connect"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:21")),Object(n.b)("p",null," Create a new instance of this Wallet connected to provider."),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"provider")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Provider")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Wallet"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"encrypt"},"encrypt"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"encrypt"),"(",Object(n.b)("inlineCode",{parentName:"p"},"password"),": Arrayish ","|"," string, ",Object(n.b)("inlineCode",{parentName:"p"},"options?"),": any, ",Object(n.b)("inlineCode",{parentName:"p"},"progressCallback?"),": ProgressCallback): Promise","<","string>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#encrypt"}),"encrypt"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:28")),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"password")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Arrayish ","|"," string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"options?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"progressCallback?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ProgressCallback")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getaddress"},"getAddress"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getAddress"),"(): Promise","<","string>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#getaddress"}),"getAddress"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:22")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getbalance"},"getBalance"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getBalance"),"(",Object(n.b)("inlineCode",{parentName:"p"},"blockTag?"),": BlockTag): Promise","<","BigNumber>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#getbalance"}),"getBalance"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:25")),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"blockTag?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BlockTag")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","BigNumber>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"gettransactioncount"},"getTransactionCount"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getTransactionCount"),"(",Object(n.b)("inlineCode",{parentName:"p"},"blockTag?"),": BlockTag): Promise","<","number>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#gettransactioncount"}),"getTransactionCount"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:26")),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"blockTag?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BlockTag")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","number>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"sendtransaction"},"sendTransaction"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"sendTransaction"),"(",Object(n.b)("inlineCode",{parentName:"p"},"transaction"),": TransactionRequest): Promise","<","TransactionResponse>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#sendtransaction"}),"sendTransaction"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:27")),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"transaction")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TransactionRequest")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","TransactionResponse>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"sign"},"sign"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"sign"),"(",Object(n.b)("inlineCode",{parentName:"p"},"transaction"),": TransactionRequest): Promise","<","string>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#sign"}),"sign"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:23")),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"transaction")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TransactionRequest")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"signmessage"},"signMessage"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"signMessage"),"(",Object(n.b)("inlineCode",{parentName:"p"},"message"),": Arrayish ","|"," string): Promise","<","string>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#signmessage"}),"signMessage"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/wallet.d.ts:24")),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"message")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Arrayish ","|"," string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"toetherswalletdata"},"toEthersWalletData"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toEthersWalletData"),"(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.etherswalletdata"}),"EthersWalletData")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/WalletFromEthers.ts#L57"}),"src/wallets/WalletFromEthers.ts:57"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.etherswalletdata"}),"EthersWalletData")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"toidentitywalletdata"},"toIdentityWalletData"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toIdentityWalletData"),"(",Object(n.b)("inlineCode",{parentName:"p"},"identityAddress"),": string): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.identitywalletdata"}),"IdentityWalletData")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/WalletFromEthers.ts#L71"}),"src/wallets/WalletFromEthers.ts:71"))),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"identityAddress")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.identitywalletdata"}),"IdentityWalletData")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"createrandom"},"createRandom"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"createRandom"),"(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/WalletFromEthers.ts#L25"}),"src/wallets/WalletFromEthers.ts:25"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"fromencryptedjson"},"fromEncryptedJson"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"fromEncryptedJson"),"(",Object(n.b)("inlineCode",{parentName:"p"},"encryptedJson"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"password"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"progressCallback?"),": (progress: number) => any): Promise","<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),">"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/WalletFromEthers.ts#L30"}),"src/wallets/WalletFromEthers.ts:30"))),Object(n.b)("h4",{id:"parameters-9"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"encryptedJson")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"password")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"progressCallback?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(progress: number) => any")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),">"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"frommnemonic"},"fromMnemonic"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"fromMnemonic"),"(",Object(n.b)("inlineCode",{parentName:"p"},"mnemonic"),": string): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/WalletFromEthers.ts#L43"}),"src/wallets/WalletFromEthers.ts:43"))),Object(n.b)("h4",{id:"parameters-10"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"mnemonic")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"fromwalletdata"},"fromWalletData"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"fromWalletData"),"(",Object(n.b)("inlineCode",{parentName:"p"},"walletData"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.etherswalletdata"}),"EthersWalletData")," ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.identitywalletdata"}),"IdentityWalletData"),"): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/wallets/WalletFromEthers.ts#L17"}),"src/wallets/WalletFromEthers.ts:17"))),Object(n.b)("h4",{id:"parameters-11"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"walletData")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/clientlib/api/interfaces/_typings_.etherswalletdata"}),"EthersWalletData")," ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/clientlib/api/interfaces/_typings_.identitywalletdata"}),"IdentityWalletData"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"issigner"},"isSigner"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"isSigner"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": any): value is Signer"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers"}),"WalletFromEthers"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/clientlib/api/classes/_wallets_walletfromethers_.walletfromethers#issigner"}),"isSigner"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/ethers/abstract-signer.d.ts:10")),Object(n.b)("h4",{id:"parameters-12"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," value is Signer"))}p.isMDXComponent=!0},664:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),l=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=l.a.createContext({}),p=function(e){var t=l.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=l.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,b=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(a),O=r,j=m["".concat(b,".").concat(O)]||m[O]||o[O]||n;return a?l.a.createElement(j,c(c({ref:t},i),{},{components:a})):l.a.createElement(j,c({ref:t},i))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,b=new Array(n);b[0]=O;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var i=2;i<n;i++)b[i]=a[i];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);