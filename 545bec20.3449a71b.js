(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{303:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),b=(a(0),a(735)),c={id:"_messaging_.messaging",title:"Class: Messaging",sidebar_label:"Messaging"},s={unversionedId:"api/classes/_messaging_.messaging",id:"version-0.17.1/api/classes/_messaging_.messaging",isDocsHomePage:!1,title:"Class: Messaging",description:'"Messaging".Messaging',source:"@site/clientlib_versioned_docs/version-0.17.1/api/classes/_messaging_.messaging.md",slug:"/api/classes/_messaging_.messaging",permalink:"/clientlib/api/classes/_messaging_.messaging",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib_versioned_docs/version-0.17.1/api/classes/_messaging_.messaging.md",version:"0.17.1",sidebar_label:"Messaging",sidebar:"version-0.17.1/clientlib",previous:{title:"Class: Exchange",permalink:"/clientlib/api/classes/_exchange_.exchange"},next:{title:"Class: Payment",permalink:"/clientlib/api/classes/_payment_.payment"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"messageStream",id:"messagestream",children:[]},{value:"paymentMessage",id:"paymentmessage",children:[]},{value:"paymentRequest",id:"paymentrequest",children:[]},{value:"paymentRequestCancel",id:"paymentrequestcancel",children:[]},{value:"paymentRequestDecline",id:"paymentrequestdecline",children:[]},{value:"sendUsernameToCounterparty",id:"sendusernametocounterparty",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/modules/_messaging_"}),'"Messaging"'),".Messaging"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Messaging"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Messaging"),"(",Object(b.b)("inlineCode",{parentName:"p"},"params"),": { currencyNetwork: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/classes/_currencynetwork_.currencynetwork"}),"CurrencyNetwork")," ; provider: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/classes/_providers_provider_.provider"}),"Provider")," ; user: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/classes/_user_.user"}),"User"),"  }): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/classes/_messaging_.messaging"}),"Messaging")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Messaging.ts#L22"}),"src/Messaging.ts:22"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"params")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{ currencyNetwork: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/classes/_currencynetwork_.currencynetwork"}),"CurrencyNetwork")," ; provider: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/classes/_providers_provider_.provider"}),"Provider")," ; user: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/classes/_user_.user"}),"User"),"  }")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/classes/_messaging_.messaging"}),"Messaging")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"messagestream"},"messageStream"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"messageStream"),"(",Object(b.b)("inlineCode",{parentName:"p"},"reconnectingOptions?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/modules/_typings_#reconnectingwsoptions"}),"ReconnectingWSOptions"),"): Observable","<","any>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Messaging.ts#L153"}),"src/Messaging.ts:153"))),Object(b.b)("p",null,"Returns a websocket observable that can be subscribed to."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"reconnectingOptions?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/modules/_typings_#reconnectingwsoptions"}),"ReconnectingWSOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Observable","<","any>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"paymentmessage"},"paymentMessage"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"paymentMessage"),"(",Object(b.b)("inlineCode",{parentName:"p"},"counterPartyAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"transferId"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"subject"),": string): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.paymentmessage"}),"PaymentMessage"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Messaging.ts#L135"}),"src/Messaging.ts:135"))),Object(b.b)("p",null,"Sends a payment message to given ",Object(b.b)("inlineCode",{parentName:"p"},"counterParty")," and returns created message."),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"counterPartyAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of counter party.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"transferId")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transfer ID of the payment")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"subject")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Subject that will be sent to the counterparty")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.paymentmessage"}),"PaymentMessage"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"paymentrequest"},"paymentRequest"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"paymentRequest"),"(",Object(b.b)("inlineCode",{parentName:"p"},"networkAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"counterPartyAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"value"),": number ","|"," string, ",Object(b.b)("inlineCode",{parentName:"p"},"subject?"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": { decimalsOptions?: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.decimalsoptions"}),"DecimalsOptions"),"  }): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.paymentrequestmessage"}),"PaymentRequestMessage"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Messaging.ts#L41"}),"src/Messaging.ts:41"))),Object(b.b)("p",null,"Sends a payment request to given ",Object(b.b)("inlineCode",{parentName:"p"},"counterParty")," and returns created payment request."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"networkAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of currency network.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"counterPartyAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of counter party.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number ","|"," string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Requested payment amount.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"subject?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional subject of payment request.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{ decimalsOptions?: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/api/interfaces/_typings_.decimalsoptions"}),"DecimalsOptions"),"  }"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.paymentrequestmessage"}),"PaymentRequestMessage"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"paymentrequestcancel"},"paymentRequestCancel"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"paymentRequestCancel"),"(",Object(b.b)("inlineCode",{parentName:"p"},"counterPartyAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"id"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"subject?"),": string): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.paymentrequestdeclinemessage"}),"PaymentRequestDeclineMessage"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Messaging.ts#L114"}),"src/Messaging.ts:114"))),Object(b.b)("p",null,"Sends a payment request cancel message to given ",Object(b.b)("inlineCode",{parentName:"p"},"counterParty")," and returns created message."),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"counterPartyAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of counter party.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"id")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id of the payment request to cancel matches either the nonce as a number or id of a payment request as a hex string.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"subject?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional subject of cancel message.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.paymentrequestdeclinemessage"}),"PaymentRequestDeclineMessage"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"paymentrequestdecline"},"paymentRequestDecline"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"paymentRequestDecline"),"(",Object(b.b)("inlineCode",{parentName:"p"},"counterPartyAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"id"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"subject?"),": string): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.paymentrequestdeclinemessage"}),"PaymentRequestDeclineMessage"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Messaging.ts#L92"}),"src/Messaging.ts:92"))),Object(b.b)("p",null,"Sends a payment request decline message to given ",Object(b.b)("inlineCode",{parentName:"p"},"counterParty")," and returns created message."),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"counterPartyAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of counter party.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"id")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id of the payment request to decline matches either the nonce as a number or id of a payment request as a hex string.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"subject?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional subject of decline message.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.paymentrequestdeclinemessage"}),"PaymentRequestDeclineMessage"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sendusernametocounterparty"},"sendUsernameToCounterparty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"sendUsernameToCounterparty"),"(",Object(b.b)("inlineCode",{parentName:"p"},"username"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"counterpartyAddress"),": string): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.usernamemessage"}),"UsernameMessage"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/Messaging.ts#L184"}),"src/Messaging.ts:184"))),Object(b.b)("p",null,"Sends the given username to the specified counter party via messaging."),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"username")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Username to send.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"counterpartyAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.usernamemessage"}),"UsernameMessage"),">"))}p.isMDXComponent=!0},735:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return o}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(a),j=n,o=m["".concat(c,".").concat(j)]||m[j]||O[j]||b;return a?r.a.createElement(o,s(s({ref:t},l),{},{components:a})):r.a.createElement(o,s({ref:t},l))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);