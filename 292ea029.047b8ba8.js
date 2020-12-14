(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),b=(a(0),a(413)),c={id:"_exchange_.exchange",title:"Class: Exchange",sidebar_label:"Exchange"},l={unversionedId:"api/classes/_exchange_.exchange",id:"version-0.13.7/api/classes/_exchange_.exchange",isDocsHomePage:!1,title:"Class: Exchange",description:'"Exchange".Exchange',source:"@site/clientlib_versioned_docs/version-0.13.7/api/classes/_exchange_.exchange.md",slug:"/api/classes/_exchange_.exchange",permalink:"/clientlib/api/classes/_exchange_.exchange",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/clientlib_versioned_docs/version-0.13.7/api/classes/_exchange_.exchange.md",version:"0.13.7",sidebar_label:"Exchange",sidebar:"version-0.13.7/clientlib",previous:{title:"Class: Event",permalink:"/clientlib/api/classes/_event_.event"},next:{title:"Class: Messaging",permalink:"/clientlib/api/classes/_messaging_.messaging"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"confirm",id:"confirm",children:[]},{value:"getExAddresses",id:"getexaddresses",children:[]},{value:"getLogs",id:"getlogs",children:[]},{value:"getOrderByHash",id:"getorderbyhash",children:[]},{value:"getOrderbook",id:"getorderbook",children:[]},{value:"getOrders",id:"getorders",children:[]},{value:"makeOrder",id:"makeorder",children:[]},{value:"prepCancelOrder",id:"prepcancelorder",children:[]},{value:"prepTakeOrder",id:"preptakeorder",children:[]}]}],p={rightToc:i};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/modules/_exchange_"}),'"Exchange"'),".Exchange"),Object(b.b)("p",null,"The Exchange class contains all methods for making/taking orders, retrieving the orderbook\nand more."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Exchange"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Exchange"),"(",Object(b.b)("inlineCode",{parentName:"p"},"params"),": { currencyNetwork: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/classes/_currencynetwork_.currencynetwork"}),"CurrencyNetwork")," ; event: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/classes/_event_.event"}),"Event")," ; payment: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/classes/_payment_.payment"}),"Payment")," ; provider: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_providers_tlprovider_.tlprovider"}),"TLProvider")," ; transaction: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/classes/_transaction_.transaction"}),"Transaction")," ; user: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/classes/_user_.user"}),"User"),"  }): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/classes/_exchange_.exchange"}),"Exchange")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Exchange.ts#L51"}),"src/Exchange.ts:51"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"params")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{ currencyNetwork: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/classes/_currencynetwork_.currencynetwork"}),"CurrencyNetwork")," ; event: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/classes/_event_.event"}),"Event")," ; payment: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/classes/_payment_.payment"}),"Payment")," ; provider: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/interfaces/_providers_tlprovider_.tlprovider"}),"TLProvider")," ; transaction: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/classes/_transaction_.transaction"}),"Transaction")," ; user: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/classes/_user_.user"}),"User"),"  }")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/classes/_exchange_.exchange"}),"Exchange")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"confirm"},"confirm"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"confirm"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Exchange.ts#L421"}),"src/Exchange.ts:421"))),Object(b.b)("p",null,"Signs a raw transaction object as returned by ",Object(b.b)("inlineCode",{parentName:"p"},"prepCancelOrder")," or ",Object(b.b)("inlineCode",{parentName:"p"},"prepFillOrder"),"\nand sends the signed transaction."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/interfaces/_typings_.rawtxobject"}),"RawTxObject")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Raw transaction object.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getexaddresses"},"getExAddresses"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getExAddresses"),"(): Promise","<","string[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Exchange.ts#L72"}),"src/Exchange.ts:72"))),Object(b.b)("p",null,"Returns all known exchange contract addresses."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getlogs"},"getLogs"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getLogs"),"(",Object(b.b)("inlineCode",{parentName:"p"},"exchangeAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.eventfilteroptions"}),"EventFilterOptions"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/modules/_typings_#anyexchangeevent"}),"AnyExchangeEvent"),"[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Exchange.ts#L432"}),"src/Exchange.ts:432"))),Object(b.b)("p",null,"Returns event logs of the Exchange contract for the loaded user."),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"exchangeAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of Exchange contract.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/interfaces/_typings_.eventfilteroptions"}),"EventFilterOptions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Event filter object. See ",Object(b.b)("inlineCode",{parentName:"td"},"EventFilterOptions")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/modules/_typings_#anyexchangeevent"}),"AnyExchangeEvent"),"[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getorderbyhash"},"getOrderByHash"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getOrderByHash"),"(",Object(b.b)("inlineCode",{parentName:"p"},"orderHash"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.orderoptions"}),"OrderOptions"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.signedorder"}),"SignedOrder"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Exchange.ts#L85"}),"src/Exchange.ts:85"))),Object(b.b)("p",null,"Returns a specific order by its hash."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"orderHash")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keccak-256 hash of order.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/interfaces/_typings_.orderoptions"}),"OrderOptions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(b.b)("inlineCode",{parentName:"td"},"OrderOptions")," for more details.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.signedorder"}),"SignedOrder"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getorderbook"},"getOrderbook"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getOrderbook"),"(",Object(b.b)("inlineCode",{parentName:"p"},"baseTokenAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"quoteTokenAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.orderbookoptions"}),"OrderbookOptions"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.orderbook"}),"Orderbook"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Exchange.ts#L155"}),"src/Exchange.ts:155"))),Object(b.b)("p",null,"Returns the orderbook for a given token pair."),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"baseTokenAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of base token.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"quoteTokenAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of quote token.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/interfaces/_typings_.orderbookoptions"}),"OrderbookOptions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(b.b)("inlineCode",{parentName:"td"},"OrderbookOptions")," for more details.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.orderbook"}),"Orderbook"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getorders"},"getOrders"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getOrders"),"(",Object(b.b)("inlineCode",{parentName:"p"},"query?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.ordersquery"}),"OrdersQuery"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.signedorder"}),"SignedOrder"),"[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Exchange.ts#L118"}),"src/Exchange.ts:118"))),Object(b.b)("p",null,"Returns orders that match given query parameters."),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"query")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/interfaces/_typings_.ordersquery"}),"OrdersQuery")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(b.b)("inlineCode",{parentName:"td"},"OrdersQuery")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.signedorder"}),"SignedOrder"),"[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"makeorder"},"makeOrder"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"makeOrder"),"(",Object(b.b)("inlineCode",{parentName:"p"},"exchangeContractAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"makerTokenAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"takerTokenAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"makerTokenValue"),": number ","|"," string, ",Object(b.b)("inlineCode",{parentName:"p"},"takerTokenValue"),": number ","|"," string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.exchangeoptions"}),"ExchangeOptions"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.signedorder"}),"SignedOrder"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Exchange.ts#L196"}),"src/Exchange.ts:196"))),Object(b.b)("p",null,"Creates an order and posts it to the relay server. If successful, the method returns the created order."),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"exchangeContractAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of exchange contract.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"makerTokenAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of token the maker (loaded user) is offering.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"takerTokenAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of token the maker (loaded user) is requesting from the taker.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"makerTokenValue")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number ","|"," string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Amount of token the maker (loaded user) is offering.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"takerTokenValue")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number ","|"," string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Amount of token the maker (loaded user) is requesting from the taker.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/interfaces/_typings_.exchangeoptions"}),"ExchangeOptions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(b.b)("inlineCode",{parentName:"td"},"ExchangeOptions")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.signedorder"}),"SignedOrder"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"prepcancelorder"},"prepCancelOrder"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"prepCancelOrder"),"(",Object(b.b)("inlineCode",{parentName:"p"},"signedOrder"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.signedorder"}),"SignedOrder"),", ",Object(b.b)("inlineCode",{parentName:"p"},"cancelTakerTokenValue"),": number ","|"," string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/modules/_typings_#exchangetxoptions"}),"ExchangeTxOptions"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.txobject"}),"TxObject"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Exchange.ts#L379"}),"src/Exchange.ts:379"))),Object(b.b)("p",null,"Prepares an ethereum transaction for cancelling an order."),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"signedOrder")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/interfaces/_typings_.signedorder"}),"SignedOrder")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The order to cancel as returned by ",Object(b.b)("inlineCode",{parentName:"td"},"getOrderbook"),", ",Object(b.b)("inlineCode",{parentName:"td"},"getOrders")," or ",Object(b.b)("inlineCode",{parentName:"td"},"getOrderByHash"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cancelTakerTokenValue")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number ","|"," string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Amount of tokens the maker (loaded user) wants to cancel.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/modules/_typings_#exchangetxoptions"}),"ExchangeTxOptions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(b.b)("inlineCode",{parentName:"td"},"ExchangeTxOptions")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.txobject"}),"TxObject"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"preptakeorder"},"prepTakeOrder"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"prepTakeOrder"),"(",Object(b.b)("inlineCode",{parentName:"p"},"signedOrder"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.signedorder"}),"SignedOrder"),", ",Object(b.b)("inlineCode",{parentName:"p"},"fillTakerTokenValue"),": number ","|"," string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/modules/_typings_#exchangetxoptions"}),"ExchangeTxOptions"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.exchangetx"}),"ExchangeTx"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Exchange.ts#L269"}),"src/Exchange.ts:269"))),Object(b.b)("p",null,"Prepares an ethereum transaction object for taking an order."),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"signedOrder")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/interfaces/_typings_.signedorder"}),"SignedOrder")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The order to take as returned by ",Object(b.b)("inlineCode",{parentName:"td"},"getOrderbook"),", ",Object(b.b)("inlineCode",{parentName:"td"},"getOrders")," or ",Object(b.b)("inlineCode",{parentName:"td"},"getOrderByHash"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"fillTakerTokenValue")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number ","|"," string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Amount of tokens the taker (loaded user) wants to fill.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/modules/_typings_#exchangetxoptions"}),"ExchangeTxOptions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(b.b)("inlineCode",{parentName:"td"},"ExchangeTxOptions")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.exchangetx"}),"ExchangeTx"),">"))}O.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),O=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=O(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=O(a),s=n,d=o["".concat(c,".").concat(s)]||o[s]||j[s]||b;return a?r.a.createElement(d,l(l({ref:t},p),{},{components:a})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);