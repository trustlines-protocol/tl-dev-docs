(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{565:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),b=(a(0),a(735)),p={id:"_ethwrapper_.ethwrapper",title:"Class: EthWrapper",sidebar_label:"EthWrapper"},c={unversionedId:"api/classes/_ethwrapper_.ethwrapper",id:"api/classes/_ethwrapper_.ethwrapper",isDocsHomePage:!1,title:"Class: EthWrapper",description:'"EthWrapper".EthWrapper',source:"@site/clientlib/api/classes/_ethwrapper_.ethwrapper.md",slug:"/api/classes/_ethwrapper_.ethwrapper",permalink:"/clientlib/next/api/classes/_ethwrapper_.ethwrapper",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib/api/classes/_ethwrapper_.ethwrapper.md",version:"current",sidebar_label:"EthWrapper",sidebar:"clientlib",previous:{title:"Class: CurrencyNetwork",permalink:"/clientlib/next/api/classes/_currencynetwork_.currencynetwork"},next:{title:"Class: Event",permalink:"/clientlib/next/api/classes/_event_.event"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"confirm",id:"confirm",children:[]},{value:"getAddresses",id:"getaddresses",children:[]},{value:"getBalance",id:"getbalance",children:[]},{value:"getLogs",id:"getlogs",children:[]},{value:"prepDeposit",id:"prepdeposit",children:[]},{value:"prepTransfer",id:"preptransfer",children:[]},{value:"prepWithdraw",id:"prepwithdraw",children:[]}]}],i={rightToc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/modules/_ethwrapper_"}),'"EthWrapper"'),".EthWrapper"),Object(b.b)("p",null,"The class EthWrapper contains all methods for depositing, withdrawing and transferring wrapped ETH."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"EthWrapper"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new EthWrapper"),"(",Object(b.b)("inlineCode",{parentName:"p"},"params"),": { provider: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_providers_tlprovider_.tlprovider"}),"TLProvider")," ; transaction: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/classes/_transaction_.transaction"}),"Transaction")," ; user: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/classes/_user_.user"}),"User"),"  }): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/classes/_ethwrapper_.ethwrapper"}),"EthWrapper")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/EthWrapper.ts#L27"}),"src/EthWrapper.ts:27"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"params")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{ provider: ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_providers_tlprovider_.tlprovider"}),"TLProvider")," ; transaction: ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/clientlib/next/api/classes/_transaction_.transaction"}),"Transaction")," ; user: ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/clientlib/next/api/classes/_user_.user"}),"User"),"  }")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/classes/_ethwrapper_.ethwrapper"}),"EthWrapper")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"confirm"},"confirm"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"confirm"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/EthWrapper.ts#L161"}),"src/EthWrapper.ts:161"))),Object(b.b)("p",null,"Signs a raw transaction object as returned by ",Object(b.b)("inlineCode",{parentName:"p"},"prepTransfer"),", ",Object(b.b)("inlineCode",{parentName:"p"},"prepDeposit")," or ",Object(b.b)("inlineCode",{parentName:"p"},"prepWithdraw"),"\nand sends the signed transaction."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Raw transaction object.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getaddresses"},"getAddresses"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getAddresses"),"(): Promise","<","string[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/EthWrapper.ts#L42"}),"src/EthWrapper.ts:42"))),Object(b.b)("p",null,"Returns all known ETH wrapper contract addresses from the relay server."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getbalance"},"getBalance"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getBalance"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ethWrapperAddress"),": string): Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.amount"}),"Amount"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/EthWrapper.ts#L50"}),"src/EthWrapper.ts:50"))),Object(b.b)("p",null,"Returns the amount of already wrapped ETH on the given ETH wrapper contract."),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ethWrapperAddress")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Address of ETH wrapper contract.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.amount"}),"Amount"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getlogs"},"getLogs"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getLogs"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ethWrapperAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.eventfilteroptions"}),"EventFilterOptions"),"): Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/modules/_typings_#anytokenevent"}),"AnyTokenEvent"),"[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/EthWrapper.ts#L172"}),"src/EthWrapper.ts:172"))),Object(b.b)("p",null,"Returns event logs of the ETH wrapper contract for the loaded user."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ethWrapperAddress")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Address of the ETH wrapper contract.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.eventfilteroptions"}),"EventFilterOptions")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Event filter object. See ",Object(b.b)("inlineCode",{parentName:"td"},"EventFilterOptions")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/modules/_typings_#anytokenevent"}),"AnyTokenEvent"),"[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"prepdeposit"},"prepDeposit"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"prepDeposit"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ethWrapperAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"value"),": number ","|"," string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txoptions"}),"TxOptions"),"): Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txobject"}),"TxObject"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/EthWrapper.ts#L101"}),"src/EthWrapper.ts:101"))),Object(b.b)("p",null,"Prepares an ethereum transaction object for depositing/wrapping ETH."),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ethWrapperAddress")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Address of ETH wrapper contract.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number ","|"," string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Amount of ETH to deposit/wrap.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.txoptions"}),"TxOptions")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Transaction options. See ",Object(b.b)("inlineCode",{parentName:"td"},"TxOptions")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txobject"}),"TxObject"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"preptransfer"},"prepTransfer"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"prepTransfer"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ethWrapperAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"receiverAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"value"),": number ","|"," string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txoptions"}),"TxOptions"),"): Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txobject"}),"TxObject"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/EthWrapper.ts#L66"}),"src/EthWrapper.ts:66"))),Object(b.b)("p",null,"Prepares an ethereum transaction object for transferring wrapped ETH where the\nloaded user is the sender."),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ethWrapperAddress")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Address of ETH wrapper contract.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"receiverAddress")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Address of receiver of transfer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number ","|"," string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Amount of wrapped ETH to transfer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.txoptions"}),"TxOptions")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Transaction options. See ",Object(b.b)("inlineCode",{parentName:"td"},"TxOptions")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txobject"}),"TxObject"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"prepwithdraw"},"prepWithdraw"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"prepWithdraw"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ethWrapperAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"value"),": number ","|"," string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txoptions"}),"TxOptions"),"): Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txobject"}),"TxObject"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/EthWrapper.ts#L133"}),"src/EthWrapper.ts:133"))),Object(b.b)("p",null,"Prepares an ethereum transaction object for withdrawing/unwrapping ETH."),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ethWrapperAddress")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Address of ETH wrapper contract.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number ","|"," string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Amount of ETH to withdraw/unwrap.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.txoptions"}),"TxOptions")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Transaction options. See ",Object(b.b)("inlineCode",{parentName:"td"},"TxOptions")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txobject"}),"TxObject"),">"))}s.isMDXComponent=!0},735:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),O=s(a),o=r,m=O["".concat(p,".").concat(o)]||O[o]||j[o]||b;return a?n.a.createElement(m,c(c({ref:t},i),{},{components:a})):n.a.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,p=new Array(b);p[0]=o;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<b;i++)p[i]=a[i];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);