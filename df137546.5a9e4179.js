(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{657:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),b=(a(0),a(735)),i={id:"_providers_tlprovider_.tlprovider",title:"Interface: TLProvider",sidebar_label:"TLProvider"},c={unversionedId:"api/interfaces/_providers_tlprovider_.tlprovider",id:"version-0.15.0/api/interfaces/_providers_tlprovider_.tlprovider",isDocsHomePage:!1,title:"Interface: TLProvider",description:'"providers/TLProvider".TLProvider',source:"@site/clientlib_versioned_docs/version-0.15.0/api/interfaces/_providers_tlprovider_.tlprovider.md",slug:"/api/interfaces/_providers_tlprovider_.tlprovider",permalink:"/clientlib/0.15.0/api/interfaces/_providers_tlprovider_.tlprovider",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib_versioned_docs/version-0.15.0/api/interfaces/_providers_tlprovider_.tlprovider.md",version:"0.15.0",sidebar_label:"TLProvider",sidebar:"version-0.15.0/clientlib",previous:{title:"Interface: ExtraData",permalink:"/clientlib/0.15.0/api/interfaces/_extradata_.extradata"},next:{title:"Interface: TLSigner",permalink:"/clientlib/0.15.0/api/interfaces/_signers_tlsigner_.tlsigner"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Properties",id:"properties",children:[{value:"ApiUrl",id:"apiurl",children:[]},{value:"WsApiUrl",id:"wsapiurl",children:[]}]},{value:"Methods",id:"methods",children:[{value:"createWebsocketStream",id:"createwebsocketstream",children:[]},{value:"fetchEndpoint",id:"fetchendpoint",children:[]},{value:"getBalance",id:"getbalance",children:[]},{value:"getIdentityImplementationAddress",id:"getidentityimplementationaddress",children:[]},{value:"getIdentityNonce",id:"getidentitynonce",children:[]},{value:"getMetaTxFees",id:"getmetatxfees",children:[]},{value:"getMetaTxStatus",id:"getmetatxstatus",children:[]},{value:"getTxInfos",id:"gettxinfos",children:[]},{value:"getTxStatus",id:"gettxstatus",children:[]},{value:"postToEndpoint",id:"posttoendpoint",children:[]},{value:"sendSignedMetaTransaction",id:"sendsignedmetatransaction",children:[]},{value:"sendSignedTransaction",id:"sendsignedtransaction",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/modules/_providers_tlprovider_"}),'"providers/TLProvider"'),".TLProvider"),Object(b.b)("p",null,"Interface for different provider strategies which extends the given\nabstract class of ",Object(b.b)("inlineCode",{parentName:"p"},"ethers.js"),"."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"TLProvider"))),Object(b.b)("h2",{id:"implemented-by"},"Implemented by"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/clientlib/0.15.0/api/classes/_providers_relayprovider_.relayprovider"}),"RelayProvider"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"apiurl"},"ApiUrl"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"ApiUrl"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L16"}),"src/providers/TLProvider.ts:16"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"wsapiurl"},"WsApiUrl"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"WsApiUrl"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L17"}),"src/providers/TLProvider.ts:17"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"createwebsocketstream"},"createWebsocketStream"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"createWebsocketStream"),"(",Object(b.b)("inlineCode",{parentName:"p"},"endpoint"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"functionName"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"args"),": object, ",Object(b.b)("inlineCode",{parentName:"p"},"reconnectingOptions?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/modules/_typings_#reconnectingwsoptions"}),"ReconnectingWSOptions"),"): any"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L20"}),"src/providers/TLProvider.ts:20"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"endpoint")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"functionName")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"reconnectingOptions?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/modules/_typings_#reconnectingwsoptions"}),"ReconnectingWSOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," any"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fetchendpoint"},"fetchEndpoint"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"fetchEndpoint"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"endpoint"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": object): Promise","<","T>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L18"}),"src/providers/TLProvider.ts:18"))),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"endpoint")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","T>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getbalance"},"getBalance"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getBalance"),"(",Object(b.b)("inlineCode",{parentName:"p"},"userAddress"),": string): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.amount"}),"Amount"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L35"}),"src/providers/TLProvider.ts:35"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"userAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.amount"}),"Amount"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getidentityimplementationaddress"},"getIdentityImplementationAddress"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getIdentityImplementationAddress"),"(",Object(b.b)("inlineCode",{parentName:"p"},"userAddress"),": string): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L29"}),"src/providers/TLProvider.ts:29"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"userAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getidentitynonce"},"getIdentityNonce"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getIdentityNonce"),"(",Object(b.b)("inlineCode",{parentName:"p"},"userAddress"),": string): Promise","<","number>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L28"}),"src/providers/TLProvider.ts:28"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"userAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","number>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getmetatxfees"},"getMetaTxFees"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getMetaTxFees"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metaTransaction"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.metatransaction"}),"MetaTransaction"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.metatransactionfees"}),"MetaTransactionFees"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L30"}),"src/providers/TLProvider.ts:30"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metaTransaction")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.metatransaction"}),"MetaTransaction"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.metatransactionfees"}),"MetaTransactionFees"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getmetatxstatus"},"getMetaTxStatus"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getMetaTxStatus"),"(",Object(b.b)("inlineCode",{parentName:"p"},"identityAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"metaTransactionHash"),": string): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.metatransactionstatus"}),"MetaTransactionStatus"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L31"}),"src/providers/TLProvider.ts:31"))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"identityAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metaTransactionHash")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.metatransactionstatus"}),"MetaTransactionStatus"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettxinfos"},"getTxInfos"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTxInfos"),"(",Object(b.b)("inlineCode",{parentName:"p"},"userAddress"),": string): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.txinfos"}),"TxInfos"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L26"}),"src/providers/TLProvider.ts:26"))),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"userAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.txinfos"}),"TxInfos"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettxstatus"},"getTxStatus"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTxStatus"),"(",Object(b.b)("inlineCode",{parentName:"p"},"txHash"),": string): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.transactionstatusobject"}),"TransactionStatusObject"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L27"}),"src/providers/TLProvider.ts:27"))),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"txHash")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.transactionstatusobject"}),"TransactionStatusObject"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"posttoendpoint"},"postToEndpoint"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"postToEndpoint"),"<","T>(",Object(b.b)("inlineCode",{parentName:"p"},"endpoint"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"data"),": any): Promise","<","T>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L19"}),"src/providers/TLProvider.ts:19"))),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("h4",{id:"parameters-9"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"endpoint")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","T>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sendsignedmetatransaction"},"sendSignedMetaTransaction"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"sendSignedMetaTransaction"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metaTransaction"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.metatransaction"}),"MetaTransaction"),"): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L37"}),"src/providers/TLProvider.ts:37"))),Object(b.b)("h4",{id:"parameters-10"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metaTransaction")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.metatransaction"}),"MetaTransaction"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sendsignedtransaction"},"sendSignedTransaction"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"sendSignedTransaction"),"(",Object(b.b)("inlineCode",{parentName:"p"},"signedTransaction"),": string): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/providers/TLProvider.ts#L36"}),"src/providers/TLProvider.ts:36"))),Object(b.b)("h4",{id:"parameters-11"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"signedTransaction")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"))}s.isMDXComponent=!0},735:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),o=s(a),O=n,j=o["".concat(i,".").concat(O)]||o[O]||d[O]||b;return a?r.a.createElement(j,c(c({ref:t},p),{},{components:a})):r.a.createElement(j,c({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<b;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);