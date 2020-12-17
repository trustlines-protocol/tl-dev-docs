(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),b=(a(0),a(604)),l={title:"User"},c={unversionedId:"api/user",id:"api/user",isDocsHomePage:!1,title:"User",description:"All events of user",source:"@site/relay/api/user.md",slug:"/api/user",permalink:"/relay/api/user",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/relay/api/user.md",version:"current",sidebar:"Relay",previous:{title:"Network",permalink:"/relay/api/network"},next:{title:"Miscellaneous",permalink:"/relay/api/miscellaneous"}},i=[{value:"All events of user",id:"all-events-of-user",children:[]},{value:"Balance of user",id:"balance-of-user",children:[]},{value:"Transaction infos for user",id:"transaction-infos-for-user",children:[]},{value:"All Trustlines of user in all currency networks",id:"all-trustlines-of-user-in-all-currency-networks",children:[]},{value:"All debts of user",id:"all-debts-of-user",children:[]}],d={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"all-events-of-user"},"All events of user"),Object(b.b)("p",null,"Returns a list of all event logs of a user for currency networks / exchanges / tokens / unweth.\nThat means all events where the given user address is either ",Object(b.b)("inlineCode",{parentName:"p"},"from")," or ",Object(b.b)("inlineCode",{parentName:"p"},"to"),".\nYou can filter what type of events you want with ",Object(b.b)("inlineCode",{parentName:"p"},"contractType")," to select the contract\nand ",Object(b.b)("inlineCode",{parentName:"p"},"type")," to select the name of the events within the contract."),Object(b.b)("h4",{id:"request"},"Request"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"GET /users/:user/events?type=:type&fromBlock=:fromBlock&contractType:=contractType\n")),Object(b.b)("h4",{id:"example-request"},"Example Request"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"curl https://relay0.testnet.trustlines.network/api/v1/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/events?type=TrustlineUpdate&fromBlock=123456&contractType=CurrencyNetwork\n")),Object(b.b)("h4",{id:"url-parameters"},"URL Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"user"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of user")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Either ",Object(b.b)("inlineCode",{parentName:"td"},"TrustlineUpdate"),", ",Object(b.b)("inlineCode",{parentName:"td"},"TrustlineUpdateRequest"),", ",Object(b.b)("inlineCode",{parentName:"td"},"TrustlineUpdateCancel")," or ",Object(b.b)("inlineCode",{parentName:"td"},"Transfer"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contractType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Either ",Object(b.b)("inlineCode",{parentName:"td"},"CurrencyNetwork"),", ",Object(b.b)("inlineCode",{parentName:"td"},"Exchange"),", ",Object(b.b)("inlineCode",{parentName:"td"},"UnwETH")," or ",Object(b.b)("inlineCode",{parentName:"td"},"Token"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fromBlock"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Start of block range")))),Object(b.b)("p",null,"The types available for currency networks contracts are: ",Object(b.b)("inlineCode",{parentName:"p"},'"TrustlineUpdateRequest"'),", ",Object(b.b)("inlineCode",{parentName:"p"},'"TrustlineUpdateCancel"'),",\n",Object(b.b)("inlineCode",{parentName:"p"},'"TrustlineUpdate"'),", ",Object(b.b)("inlineCode",{parentName:"p"},'"BalanceUpdate"'),", ",Object(b.b)("inlineCode",{parentName:"p"},'"Transfer"'),", ",Object(b.b)("inlineCode",{parentName:"p"},'"DebtUpdate"'),", and ",Object(b.b)("inlineCode",{parentName:"p"},'"NetworkFreeze"'),"."),Object(b.b)("p",null,"The types available for exchange contracts are: ",Object(b.b)("inlineCode",{parentName:"p"},'"LogFill"'),", and ",Object(b.b)("inlineCode",{parentName:"p"},'"LogCancel"')),Object(b.b)("p",null,"The types available for UnwETH contracts are: ",Object(b.b)("inlineCode",{parentName:"p"},'"Deposit"'),", ",Object(b.b)("inlineCode",{parentName:"p"},'"Withdrawal"'),", ",Object(b.b)("inlineCode",{parentName:"p"},'"Transfer"'),", and ",Object(b.b)("inlineCode",{parentName:"p"},'"Approval"')),Object(b.b)("p",null,"The types available for token contracts are: ",Object(b.b)("inlineCode",{parentName:"p"},'"Transfer"'),", and ",Object(b.b)("inlineCode",{parentName:"p"},'"Approval"')),Object(b.b)("p",null,"If no contract type or event type are given, the response will have all events of types,\nexcluding ",Object(b.b)("inlineCode",{parentName:"p"},'"DebtUpdate"'),", ",Object(b.b)("inlineCode",{parentName:"p"},'"BalanceUpdate"'),", and ",Object(b.b)("inlineCode",{parentName:"p"},'"NetworkFreeze"')),Object(b.b)("h4",{id:"response"},"Response"),Object(b.b)("p",null,"For events from currency networks, they will have the following attributes:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"networkAddress"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of currency network")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"blockNumber"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of block")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"timestamp"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UNIX timestamp")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Either ",Object(b.b)("inlineCode",{parentName:"td"},"TrustlineUpdate"),", ",Object(b.b)("inlineCode",{parentName:"td"},"TrustlineUpdateRequest"),", ",Object(b.b)("inlineCode",{parentName:"td"},"TrustlineUpdateCancel")," or ",Object(b.b)("inlineCode",{parentName:"td"},"Transfer"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"from"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of ",Object(b.b)("inlineCode",{parentName:"td"},"from")," user")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"to"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of ",Object(b.b)("inlineCode",{parentName:"td"},"to")," user")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sent"),", ",Object(b.b)("inlineCode",{parentName:"td"},"pending")," or ",Object(b.b)("inlineCode",{parentName:"td"},"confirmed")," depending on block height")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"transactionId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transaction hash")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"blockHash"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hash of the block containing the event")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"logIndex"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Log index of the event")))),Object(b.b)("p",null,"Following additional attributes for ",Object(b.b)("inlineCode",{parentName:"p"},"TrustlineUpdate")," and ",Object(b.b)("inlineCode",{parentName:"p"},"TrustlineUpdateRequest")," events:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"given"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Proposed or accepted amount ",Object(b.b)("inlineCode",{parentName:"td"},"from -> to"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"received"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Proposed or accepted amount ",Object(b.b)("inlineCode",{parentName:"td"},"to -> from"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"interestRateGiven"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Proposed or accepted rate of interests ",Object(b.b)("inlineCode",{parentName:"td"},"from -> to"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"interestRateReceived"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Proposed or accepted rate of interests ",Object(b.b)("inlineCode",{parentName:"td"},"to -> from"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isFrozen"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Proposed or accepted frozen status")))),Object(b.b)("p",null,"Following additional attributes for ",Object(b.b)("inlineCode",{parentName:"p"},"Transfer")," events:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"amount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transfer amount ",Object(b.b)("inlineCode",{parentName:"td"},"from -> to"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"extraData"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"extraData as specified in the corresponding transfer")))),Object(b.b)("p",null,"Following additional attributes for ",Object(b.b)("inlineCode",{parentName:"p"},"DebtUpdate")," events:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"debt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Debt of ",Object(b.b)("inlineCode",{parentName:"td"},"from")," in the view of ",Object(b.b)("inlineCode",{parentName:"td"},"to"),", positive if ",Object(b.b)("inlineCode",{parentName:"td"},"from")," owes to ",Object(b.b)("inlineCode",{parentName:"td"},"to")," and negative otherwise")))),Object(b.b)("h4",{id:"example-response"},"Example Response"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",\n        "blockNumber": 6997877,\n        "timestamp": 1524655432,\n        "type": "TrustlineUpdateRequest",\n        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",\n        "to": "0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320",\n        "status": "confirmed",\n        "transactionId": "0xb141aa3baec4e7151d8bd6ecab46d26b1add131e50bcc517c956a7ac979815cd",\n        "blockHash": "0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6",\n        "logIndex": 1,\n        "given": "20000",\n        "received": "20000",\n        "interestRateGiven": "1000",\n        "interestRateReceived": "1000",\n        "isFrozen": false\n    },\n    {\n        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",\n        "blockNumber": 6997877,\n        "timestamp": 1524655432,\n        "type": "TrustlineUpdateCancel",\n        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",\n        "to": "0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320",\n        "status": "confirmed",\n        "transactionId": "0xb141aa3baec4e7151d8bd6ecab46d26b1add131e50bcc517c956a7ac979815cd",\n        "blockHash": "0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6",\n        "logIndex": 2\n    },\n    {\n        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",\n        "blockNumber": 6997899,\n        "timestamp": 1524655600,\n        "type": "TrustlineUpdate",\n        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",\n        "to": "0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b",\n        "status": "confirmed",\n        "transactionId": "0x10d4e9acb58d42d433dbc5c995e9a258cd2bb7fe82fedf2ebab82e450d30c643",\n        "blockHash": "0xb141aa3baec4e7151d8bd6ecab46d26b1add131e50bcc517c956a7ac979815cd",\n        "logIndex": 3,\n        "given": "10000",\n        "received": "10000",\n        "interestRateGiven": "1000",\n        "interestRateReceived": "1000",\n        "isFrozen": false\n    },\n    {\n        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",\n        "blockNumber": 7011809,\n        "timestamp": 1524755036,\n        "type": "Transfer",\n        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",\n        "to": "0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b",\n        "status": "confirmed",\n        "transactionId": "0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6",\n        "blockHash": "0x10d4e9acb58d42d433dbc5c995e9a258cd2bb7fe82fedf2ebab82e450d30c643",\n        "logIndex": 4,\n        "amount": "100",\n        "extraData": "0x1234"\n    }\n]\n')),Object(b.b)("hr",null),Object(b.b)("h3",{id:"balance-of-user"},"Balance of user"),Object(b.b)("p",null,"Returns the balance in wei of the given address."),Object(b.b)("h4",{id:"request-1"},"Request"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"GET /users/:userAddress/balance\n")),Object(b.b)("h4",{id:"example-request-1"},"Example Request"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"curl https://relay0.testnet.trustlines.network/api/v1/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/balance\n")),Object(b.b)("h4",{id:"url-parameters-1"},"URL Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userAddress"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of user")))),Object(b.b)("h4",{id:"response-1"},"Response"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"JSON Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"balance"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Balance of user in wei")))),Object(b.b)("h4",{id:"example-response-1"},"Example Response"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "balance": "2377634165348042492"\n}\n')),Object(b.b)("hr",null),Object(b.b)("h3",{id:"transaction-infos-for-user"},"Transaction infos for user"),Object(b.b)("p",null,"Returns information that is needed to sign a transaction."),Object(b.b)("h4",{id:"request-2"},"Request"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"GET /users/:userAddress/txinfos\n")),Object(b.b)("h4",{id:"example-request-2"},"Example Request"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"curl https://relay0.testnet.trustlines.network/api/v1/users/0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce/txinfos\n")),Object(b.b)("h4",{id:"url-parameters-2"},"URL Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userAddress"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of user")))),Object(b.b)("h4",{id:"response-2"},"Response"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"gasPrice"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gas price")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"balance"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Balance of user in wei")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nonce"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nonce needed for creating a transaction")))),Object(b.b)("h4",{id:"example-response-2"},"Example Response"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "gasPrice": 0,\n  "balance": "2377634165348042492",\n  "nonce": 58\n}\n')),Object(b.b)("hr",null),Object(b.b)("h3",{id:"all-trustlines-of-user-in-all-currency-networks"},"All Trustlines of user in all currency networks"),Object(b.b)("p",null,"Returns a list of trustlines a user has in any currency network."),Object(b.b)("h4",{id:"request-3"},"Request"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"GET /users/:userAddress/trustlines\n")),Object(b.b)("h4",{id:"url-parameters-3"},"URL Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userAddress"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of user")))),Object(b.b)("h4",{id:"example-request-3"},"Example Request"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"curl https://relay0.testnet.trustlines.network/api/v1/users/0xE56d3f8096c765f29A88f54873a3D177a6c632D0/trustlines\n")),Object(b.b)("h4",{id:"response-3"},"Response"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"counterParty"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of trustline counterparty")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currencyNetwork"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of currency network")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"user"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of trustline user")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"balance"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Balance of trustline from point of view of user")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"given"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Creditline given to counterparty")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"received"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Creditline received by counterparty")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"leftGiven"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"given - balance")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"leftReceived"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"received + balance")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"interestRateGiven"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Interest Rate given to counterparty")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"interestRateReceived"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Interest Rate received from counterparty")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isFrozen"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether the trustlines is frozen")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Identifier of trustline")))),Object(b.b)("h4",{id:"example-response-3"},"Example Response"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "address": "0xc773E89134957DD5d8eefA1700D147B3eAEEEFC5",\n        "balance": "0",\n        "counterParty": "0xc773E89134957DD5d8eefA1700D147B3eAEEEFC5",\n        "currencyNetwork": "0xC637Db818131Ea67d19Ea1C9c28559e08b536f6E",\n        "given": "0",\n        "id": "0x1d4e46b52805a7440fd41653d7923cbe7c813f3f36776c26df6023bfae94fa4c",\n        "interestRateGiven": "0",\n        "interestRateReceived": "0",\n        "isFrozen": false,\n        "leftGiven": "0",\n        "leftReceived": "0",\n        "received": "0",\n        "user": "0xE56d3f8096c765f29A88f54873a3D177a6c632D0"\n    },\n    {\n        "address": "0x851c66B2fa4641a7411C6F62e5e905096512772C",\n        "balance": "0",\n        "counterParty": "0x851c66B2fa4641a7411C6F62e5e905096512772C",\n        "currencyNetwork": "0x03cADF60A8f0eB5B17c5452fe0941Fb8FCc2F984",\n        "given": "20",\n        "id": "0x8194d0f524ed5b2056a1f2f432f6445a3c24c03e3a9c9191137c2b2109bb4a2b",\n        "interestRateGiven": "0",\n        "interestRateReceived": "0",\n        "isFrozen": false,\n        "leftGiven": "20",\n        "leftReceived": "20",\n        "received": "20",\n        "user": "0xE56d3f8096c765f29A88f54873a3D177a6c632D0"\n    }\n]\n\n')),Object(b.b)("hr",null),Object(b.b)("h3",{id:"all-debts-of-user"},"All debts of user"),Object(b.b)("p",null,"Returns a list of all the debts in all currency networks for the user."),Object(b.b)("h4",{id:"request-4"},"Request"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"GET /users/:userAddress/debts\n")),Object(b.b)("h4",{id:"example-request-4"},"Example Request"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"curl https://relay0.testnet.trustlines.network/api/v1/users/0x00a329c0648769A73afAc7F9381E08FB43dBEA72/debts\n")),Object(b.b)("h4",{id:"url-parameters-4"},"URL Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"userAddress"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of user")))),Object(b.b)("h4",{id:"response-4"},"Response"),Object(b.b)("p",null,"The response is a list of objects with the following fields:\n| Attribute       | Type    | JSON Type | Description                                                |\n| --------------- | ------- | --------- | ---------------------------------------------------------- |\n| currencyNetwork | address | string    | address of the currency network of all the following debts |\n| debts           | object  | object    | list of debts involving the user in the currency network   |"),Object(b.b)("p",null,"Debts is a list of objects with the following fields:\n| Attribute             | Type       | JSON Type      | Description                                                                          |\n| --------------------- | ---------- | -------------- | ------------------------------------------------------------------------------------ |\n| debtor                | address    | string         | address of the debtor that owes money to the user / towards which user owes money    |\n| value                 | object     | object         | value of the debt, positive if user is owed money, negative if it owes money         |\n| maximumClaimableValue | BigInteger | string         | the maximum value currently claimable considering the available paths in the network |\n| claimPath             | List       | list of string | if it exists, a path to claim the claimable value of the debt in the network         |"),Object(b.b)("h4",{id:"example-response-4"},"Example Response"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "currencyNetwork": "0xee35211C4D9126D520bBfeaf3cFee5FE7B86F221",\n    "debts": [\n      {"value": "1572", "debtor": "0xBeEac99C8439044B282E796f7C821d543AFb7C00", "maximumClaimableValue": 0},\n      {"value": "1342", "debtor": "0xF5FFaFb5bbFE348097327f2Eba64Fc127f6a35E2", "maximumClaimableValue": "1342", "claimPath": ["0xF5FFaFb5bbFE348097327f2Eba64Fc127f6a35E2", "0xee35211C4D9126D520bBfeaf3cFee5FE7B86F221"]},\n      {"value": "-633", "debtor": "0xFFa82F6639247a76365514c2F53DB8388c349d8D", "maximumClaimableValue": "-100", "claimPath":  ["0xee35211C4D9126D520bBfeaf3cFee5FE7B86F221", "0xFFa82F6639247a76365514c2F53DB8388c349d8D"]}\n    ]\n  }\n]\n')),Object(b.b)("hr",null))}p.isMDXComponent=!0},604:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),O=p(a),o=n,s=O["".concat(l,".").concat(o)]||O[o]||j[o]||b;return a?r.a.createElement(s,c(c({ref:t},d),{},{components:a})):r.a.createElement(s,c({ref:t},d))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=o;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var d=2;d<b;d++)l[d]=a[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);