(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{519:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),b=(a(0),a(699)),c={},l={unversionedId:"api/events",id:"version-0.21.0/api/events",isDocsHomePage:!1,title:"events",description:"The Trustlines events returned by the relay api have the following attributes:",source:"@site/relay_versioned_docs/version-0.21.0/api/events.md",slug:"/api/events",permalink:"/relay/api/events",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/relay_versioned_docs/version-0.21.0/api/events.md",version:"0.21.0"},i=[],d={rightToc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The Trustlines events returned by the relay api have the following attributes:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"networkAddress"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of currency network")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"blockNumber"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of block")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"timestamp"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UNIX timestamp")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Either ",Object(b.b)("inlineCode",{parentName:"td"},"TrustlineUpdate"),", ",Object(b.b)("inlineCode",{parentName:"td"},"TrustlineUpdateRequest"),", ",Object(b.b)("inlineCode",{parentName:"td"},"TrustlineUpdateCancel"),", ",Object(b.b)("inlineCode",{parentName:"td"},"Transfer"),", ",Object(b.b)("inlineCode",{parentName:"td"},"DebtUpdate"),", ",Object(b.b)("inlineCode",{parentName:"td"},"BalanceUpdate"),", or ",Object(b.b)("inlineCode",{parentName:"td"},"NetworkFreeze"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"from"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of ",Object(b.b)("inlineCode",{parentName:"td"},"from")," user")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"to"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of ",Object(b.b)("inlineCode",{parentName:"td"},"to")," user")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sent"),", ",Object(b.b)("inlineCode",{parentName:"td"},"pending")," or ",Object(b.b)("inlineCode",{parentName:"td"},"confirmed")," depending on block height")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"transactionId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transaction hash")))),Object(b.b)("p",null,"Following additional attributes for ",Object(b.b)("inlineCode",{parentName:"p"},"TrustlineUpdate")," and ",Object(b.b)("inlineCode",{parentName:"p"},"TrustlineUpdateRequest")," events:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"given"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Proposed or accepted amount ",Object(b.b)("inlineCode",{parentName:"td"},"from -> to"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"received"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Proposed or accepted amount ",Object(b.b)("inlineCode",{parentName:"td"},"to -> from"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"interestRateGiven"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Proposed or accepted rate of interests ",Object(b.b)("inlineCode",{parentName:"td"},"from -> to"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"interestRateReceived"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Proposed or accepted rate of interests ",Object(b.b)("inlineCode",{parentName:"td"},"to -> from"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isFrozen"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Proposed or accepted frozen state")))),Object(b.b)("p",null,"Following additional attribute for ",Object(b.b)("inlineCode",{parentName:"p"},"TrustlineUpdateRequest")," events:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"transfer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Proposed amount to be transferred, ca be >0 or <0")))),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"transfer")," attribute represents a proposal of a transfer that will be applied if the trustline is accepted.\nThe transfer is in the direction ",Object(b.b)("inlineCode",{parentName:"p"},"from -> to")," if the value is positive and ",Object(b.b)("inlineCode",{parentName:"p"},"to -> from")," otherwise,\nin the point of view of the initiator of the trustline update."),Object(b.b)("p",null,"Following additional attributes for ",Object(b.b)("inlineCode",{parentName:"p"},"BalanceUpdate"),":"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"amount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"New balance of trustline from view of ",Object(b.b)("inlineCode",{parentName:"td"},"from"))))),Object(b.b)("p",null,"Following additional attributes for ",Object(b.b)("inlineCode",{parentName:"p"},"Transfer")," events:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"amount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transfer amount ",Object(b.b)("inlineCode",{parentName:"td"},"from -> to"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"extraData"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"extraData as specified in the corresponding transfer")))),Object(b.b)("p",null,"Following additional attributes for ",Object(b.b)("inlineCode",{parentName:"p"},"DebtUpdated"),":"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"debt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"New debt in between ",Object(b.b)("inlineCode",{parentName:"td"},"from")," and ",Object(b.b)("inlineCode",{parentName:"td"},"to")," in the point of view of ",Object(b.b)("inlineCode",{parentName:"td"},"from"))))),Object(b.b)("h4",{id:"example-response"},"Example Response"),Object(b.b)("p",null,"An example response for a list of events would be:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",\n        "blockNumber": 6997877,\n        "timestamp": 1524655432,\n        "type": "TrustlineUpdateRequest",\n        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",\n        "to": "0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320",\n        "blockHash": "0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6",\n        "logIndex": 1,\n        "status": "confirmed",\n        "transactionId": "0xb141aa3baec4e7151d8bd6ecab46d26b1add131e50bcc517c956a7ac979815cd",\n        "given": "20000",\n        "received": "20000",\n        "interestRateGiven": "1000",\n        "interestRateReceived": "1000",\n        "isFrozen": false,\n        "transfer": "-123"\n    },\n    {\n        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",\n        "blockNumber": 6997877,\n        "timestamp": 1524655432,\n        "type": "TrustlineUpdateCancel",\n        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",\n        "to": "0x7Ff66eb1A824FF9D1bB7e234a2d3B7A3b0345320",\n        "status": "confirmed",\n        "transactionId": "0xb141aa3baec4e7151d8bd6ecab46d26b1add131e50bcc517c956a7ac979815cd",\n        "blockHash": "0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6",\n        "logIndex": 2\n    },\n    {\n        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",\n        "blockNumber": 6997899,\n        "timestamp": 1524655600,\n        "type": "TrustlineUpdate",\n        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",\n        "to": "0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b",\n        "status": "confirmed",\n        "transactionId": "0x10d4e9acb58d42d433dbc5c995e9a258cd2bb7fe82fedf2ebab82e450d30c643",\n        "blockHash": "0xb141aa3baec4e7151d8bd6ecab46d26b1add131e50bcc517c956a7ac979815cd",\n        "logIndex": 3,\n        "given": "10000",\n        "received": "10000",\n        "interestRateGiven": "1000",\n        "interestRateReceived": "1000",\n        "isFrozen": false\n    },\n    {\n        "networkAddress": "0xC0B33D88C704455075a0724AA167a286da778DDE",\n        "blockNumber": 7011809,\n        "timestamp": 1524755036,\n        "type": "BalanceUpdate",\n        "from": "0xcbF1153F6e5AC01D363d432e24112e8aA56c55ce",\n        "to": "0x7Ec3543702FA8F2C7b2bD84C034aAc36C263cA8b",\n        "status": "confirmed",\n        "transactionId": "0x05c91f6506e78b1ca2413df9985ca7d37d2da5fc076c0b55c5d9eb9fdd7513a6",\n        "blockHash": "0x10d4e9acb58d42d433dbc5c995e9a258cd2bb7fe82fedf2ebab82e450d30c643",\n        "logIndex": 4,\n        "amount": "100"\n    }\n]\n')))}o.isMDXComponent=!0},699:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),o=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=o(a),j=n,m=p["".concat(c,".").concat(j)]||p[j]||O[j]||b;return a?r.a.createElement(m,l(l({ref:t},d),{},{components:a})):r.a.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var d=2;d<b;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);