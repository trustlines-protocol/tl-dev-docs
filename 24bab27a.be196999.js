(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),b=(a(0),a(735)),i={id:"_payment_.payment",title:"Class: Payment",sidebar_label:"Payment"},l={unversionedId:"api/classes/_payment_.payment",id:"version-0.15.0/api/classes/_payment_.payment",isDocsHomePage:!1,title:"Class: Payment",description:'"Payment".Payment',source:"@site/clientlib_versioned_docs/version-0.15.0/api/classes/_payment_.payment.md",slug:"/api/classes/_payment_.payment",permalink:"/clientlib/0.15.0/api/classes/_payment_.payment",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib_versioned_docs/version-0.15.0/api/classes/_payment_.payment.md",version:"0.15.0",sidebar_label:"Payment",sidebar:"version-0.15.0/clientlib",previous:{title:"Class: Messaging",permalink:"/clientlib/0.15.0/api/classes/_messaging_.messaging"},next:{title:"Class: TLNetwork",permalink:"/clientlib/0.15.0/api/classes/_tlnetwork_.tlnetwork"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"calculateTransferGasLimit",id:"calculatetransfergaslimit",children:[]},{value:"confirm",id:"confirm",children:[]},{value:"confirmPayment",id:"confirmpayment",children:[]},{value:"createRequest",id:"createrequest",children:[]},{value:"get",id:"get",children:[]},{value:"getMaxAmountAndPathInNetwork",id:"getmaxamountandpathinnetwork",children:[]},{value:"getTransferDetails",id:"gettransferdetails",children:[]},{value:"getTransferDetailsList",id:"gettransferdetailslist",children:[]},{value:"getTransferPathInfo",id:"gettransferpathinfo",children:[]},{value:"prepare",id:"prepare",children:[]},{value:"prepareEth",id:"prepareeth",children:[]}]}],p={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/modules/_payment_"}),'"Payment"'),".Payment"),Object(b.b)("p",null,"The Payment class contains all payment related functions. This includes trustline transfers and TLC transfers.\nIt is meant to be called via a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/classes/_tlnetwork_.tlnetwork"}),"TLNetwork")," instance like:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'const tlNetwork = new TLNetwork(\n //...\n)\n\n// Get transfer logs\ntlNetwork.payment.get(\n // ...\n).then(\n payments => console.log("Payments of loaded user:", payments)\n)\n')),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Payment"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"calculatetransfergaslimit"},"calculateTransferGasLimit"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"calculateTransferGasLimit"),"(",Object(b.b)("inlineCode",{parentName:"p"},"pathLength"),": number): BigNumber"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Payment.ts#L380"}),"src/Payment.ts:380"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"pathLength")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," BigNumber"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"confirm"},"confirm"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"confirm"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<","any>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Payment.ts#L290"}),"src/Payment.ts:290"))),Object(b.b)("p",null,"Signs a raw transaction object as returned by ",Object(b.b)("inlineCode",{parentName:"p"},"prepare"),"\nand sends the signed transaction."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"deprecated"))," use confirmPayment instead."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.rawtxobject"}),"RawTxObject")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Raw transaction object.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","any>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"confirmpayment"},"confirmPayment"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"confirmPayment"),"(",Object(b.b)("inlineCode",{parentName:"p"},"__namedParameters"),": { rawTx: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.rawtxobject"}),"RawTxObject")," ; receiverAddress: string ; transferId: string  }, ",Object(b.b)("inlineCode",{parentName:"p"},"message?"),": string): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Payment.ts#L303"}),"src/Payment.ts:303"))),Object(b.b)("p",null,"Signs the rawTx provided as returned by ",Object(b.b)("inlineCode",{parentName:"p"},"prepare"),"\nand sends the signed transaction as well as the message with transferId\nCan be directly given a ",Object(b.b)("inlineCode",{parentName:"p"},"PaymentTxObject")," object as returned by ",Object(b.b)("inlineCode",{parentName:"p"},"prepare")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"__namedParameters")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{ rawTx: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.rawtxobject"}),"RawTxObject")," ; receiverAddress: string ; transferId: string  }"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"message?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The message to be sent.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createrequest"},"createRequest"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"createRequest"),"(",Object(b.b)("inlineCode",{parentName:"p"},"networkAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": { ","[key:string]",": string; amount?: string ; customBase?: string  }): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Payment.ts#L330"}),"src/Payment.ts:330"))),Object(b.b)("p",null,"Creates a payment request link."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"networkAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of a currency network.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{ ","[key:string]",": string; amount?: string ; customBase?: string  }"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'options.amount - optional amount for the payment request in "normal" units (if we request 1\u20ac - the amount should be 1)        options.customBase - optional customBase for the link        options',"[key]"," - any other additional options that should be added to the URL")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"get"},"get"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"get"),"(",Object(b.b)("inlineCode",{parentName:"p"},"networkAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.eventfilteroptions"}),"EventFilterOptions"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.networktransferevent"}),"NetworkTransferEvent"),"[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Payment.ts#L274"}),"src/Payment.ts:274"))),Object(b.b)("p",null,"Returns transfer event logs of loaded user in a specified currency network."),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"networkAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of currency network.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.eventfilteroptions"}),"EventFilterOptions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Event filter object. See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.eventfilteroptions"}),"EventFilterOptions")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.networktransferevent"}),"NetworkTransferEvent"),"[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getmaxamountandpathinnetwork"},"getMaxAmountAndPathInNetwork"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getMaxAmountAndPathInNetwork"),"(",Object(b.b)("inlineCode",{parentName:"p"},"networkAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"receiverAddress"),": string): Promise","<","any>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Payment.ts#L357"}),"src/Payment.ts:357"))),Object(b.b)("p",null,"Retrieve the maximum spendable amount and path to user in a network"),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"networkAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"receiverAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","any>"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"}")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettransferdetails"},"getTransferDetails"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTransferDetails"),"(",Object(b.b)("inlineCode",{parentName:"p"},"transferIdentifier"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.transferidentifier"}),"TransferIdentifier"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": { decimalsOptions?: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.decimalsoptions"}),"DecimalsOptions"),"  }): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.transferdetails"}),"TransferDetails"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Payment.ts#L397"}),"src/Payment.ts:397"))),Object(b.b)("p",null,"Get the transfer details list for given transfer identifier"),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"transferIdentifier")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.transferidentifier"}),"TransferIdentifier")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Used to identify the transfer for which to get the details. Needs to provide either blockHash and logIndex or txHash Returns a single transfer detail or throw an error if multiple transfer were identified")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{ decimalsOptions?: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.decimalsoptions"}),"DecimalsOptions"),"  }"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional network decimals for formatting the transfer value")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.transferdetails"}),"TransferDetails"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettransferdetailslist"},"getTransferDetailsList"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTransferDetailsList"),"(",Object(b.b)("inlineCode",{parentName:"p"},"transferIdentifier"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.transferidentifier"}),"TransferIdentifier"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": { decimalsOptions?: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.decimalsoptions"}),"DecimalsOptions"),"  }): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.transferdetails"}),"TransferDetails"),"[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Payment.ts#L425"}),"src/Payment.ts:425"))),Object(b.b)("p",null,"Get the transfer details list for given transfer identifier"),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"transferIdentifier")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.transferidentifier"}),"TransferIdentifier")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Used to identify the transfer for which to get the details. Needs to provide either blockHash and logIndex or txHash")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{ decimalsOptions?: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.decimalsoptions"}),"DecimalsOptions"),"  }"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional network decimals for formatting the transfer value")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.transferdetails"}),"TransferDetails"),"[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettransferpathinfo"},"getTransferPathInfo"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTransferPathInfo"),"(",Object(b.b)("inlineCode",{parentName:"p"},"networkAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"senderAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"receiverAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"value"),": number ","|"," string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.paymentoptions"}),"PaymentOptions"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.pathobject"}),"PathObject"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Payment.ts#L227"}),"src/Payment.ts:227"))),Object(b.b)("p",null,"Returns a path for a trustlines transfer, along with estimated fees and gas costs."),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"networkAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of a currency network.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"senderAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of sender of transfer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"receiverAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of receiver of transfer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number ","|"," string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Amount to transfer in biggest unit,              i.e. 1.23 if currency network has 2 decimals.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.paymentoptions"}),"PaymentOptions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Payment options. See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.paymentoptions"}),"PaymentOptions")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.pathobject"}),"PathObject"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"prepare"},"prepare"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"prepare"),"(",Object(b.b)("inlineCode",{parentName:"p"},"networkAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"receiverAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"value"),": number ","|"," string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.paymentoptions"}),"PaymentOptions"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.paymenttxobject"}),"PaymentTxObject"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Payment.ts#L104"}),"src/Payment.ts:104"))),Object(b.b)("p",null,"Prepares ethereum transaction object for a trustlines transfer, where loaded user is sender."),Object(b.b)("h4",{id:"parameters-9"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"networkAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of a currency network.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"receiverAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of receiver of transfer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number ","|"," string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Amount to transfer in biggest unit,              i.e. 1.5 if currency network has 2 decimals.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.paymentoptions"}),"PaymentOptions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{ addTransferId: true }"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional payment options. See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.paymentoptions"}),"PaymentOptions")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.paymenttxobject"}),"PaymentTxObject"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"prepareeth"},"prepareEth"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"prepareEth"),"(",Object(b.b)("inlineCode",{parentName:"p"},"receiverAddress"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"value"),": number ","|"," string, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.paymentoptions"}),"PaymentOptions"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.txobject"}),"TxObject"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Payment.ts#L192"}),"src/Payment.ts:192"))),Object(b.b)("p",null,"Prepares a ethereum transaction object for a ETH transfer, where loaded user is the sender."),Object(b.b)("h4",{id:"parameters-10"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"receiverAddress")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of receiver of transfer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number ","|"," string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Amount of ETH to transfer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.paymentoptions"}),"PaymentOptions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Payment options. See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.paymentoptions"}),"PaymentOptions")," for more information.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.txobject"}),"TxObject"),">"))}s.isMDXComponent=!0},735:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return o}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),O=s(a),m=n,o=O["".concat(i,".").concat(m)]||O[m]||j[m]||b;return a?r.a.createElement(o,l(l({ref:t},p),{},{components:a})):r.a.createElement(o,l({ref:t},p))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<b;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);