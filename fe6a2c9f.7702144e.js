(window.webpackJsonp=window.webpackJsonp||[]).push([[783],{855:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(863)),i={title:"Create user / wallet"},c={unversionedId:"guides/create_wallet",id:"version-0.14.0/guides/create_wallet",isDocsHomePage:!1,title:"Create user / wallet",description:"To be able to interact with the trustlines protocol a user, i.e. wallet, is needed.",source:"@site/clientlib_versioned_docs/version-0.14.0/guides/create_wallet.md",slug:"/guides/create_wallet",permalink:"/clientlib/0.14.0/guides/create_wallet",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib_versioned_docs/version-0.14.0/guides/create_wallet.md",version:"0.14.0",sidebar:"version-0.14.0/clientlib",previous:{title:"Introduction",permalink:"/clientlib/0.14.0/guides/intro"},next:{title:"Discover currency networks",permalink:"/clientlib/0.14.0/guides/discover_networks"}},s=[{value:"Create Instance of type <code>ethers</code>",id:"create-instance-of-type-ethers",children:[]},{value:"Create Instance of type <code>identity</code>",id:"create-instance-of-type-identity",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To be able to interact with the trustlines protocol a user, i.e. wallet, is needed.\nYou therefore have to create an instance and load it into the library.\nThe wallet manages your key pair and is used for cryptographically signing transactions, thus enabling the establishment of trustlines and transfers.\nDepending on the initial configuration of the ",Object(o.b)("inlineCode",{parentName:"p"},"TLNetwork")," instance, you can create either a new instance of type ",Object(o.b)("inlineCode",{parentName:"p"},"ethers")," or type ",Object(o.b)("inlineCode",{parentName:"p"},"identity"),".\nThe former type is based on the wallet object of the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.ethers.io/ethers.js/html/"}),"ethers.js")," library, whereas the second type uses an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/contracts/blob/master/docs/deploy.md#deploy-identity-contracts"}),"identity contract")," to enable meta-transactions."),Object(o.b)("h3",{id:"create-instance-of-type-ethers"},"Create Instance of type ",Object(o.b)("inlineCode",{parentName:"h3"},"ethers")),Object(o.b)("p",null,"Note that a user of type ",Object(o.b)("inlineCode",{parentName:"p"},"ethers")," can not use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/contracts/blob/master/docs/deploy.md#deploy-identity-contracts"}),"meta-transactions"),".\nThe user therefore needs some coins (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://explore.tlbc.trustlines.foundation/"}),"TLC"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://explore.laika.trustlines.foundation/"}),"Test TLC"),", ... ), depending on the connected relay server and blockchain, before being able to execute a transaction."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'const laika = new TLNetwork({\n  protocol: "https",\n  wsProtocol: "wss",\n  host: "relay0.testnet.trustlines.network",\n  path: "/api/v1",\n  walletType: "ethers",\n})\n\nconst newEthersUser = await laika.user.create()\nawait laika.user.loadFrom(newEthersUser)\n')),Object(o.b)("h3",{id:"create-instance-of-type-identity"},"Create Instance of type ",Object(o.b)("inlineCode",{parentName:"h3"},"identity")),Object(o.b)("p",null,"A user of type ",Object(o.b)("inlineCode",{parentName:"p"},"identity")," makes use of meta-transactions.\nTherefore the addresses of the deployed ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/contracts/blob/master/contracts/identity/IdentityProxyFactory.sol"}),"identity factory")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/contracts/blob/master/contracts/identity/Identity.sol"}),"implementation")," contracts have to be set.\nAn additional step of deploying the identity contract of the newly created user is also necessary."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'const laika = new TLNetwork({\n  protocol: "https",\n  wsProtocol: "wss",\n  host: "relay0.testnet.trustlines.network",\n  path: "/api/v1",\n  walletType: "identity",\n  identityFactoryAddress: "0x8D2720877Fa796E3C3B91BB91ad6CfcC07Ea249E",\n  identityImplementationAddress: "0x8BEe92893D3ec62e5B3EBBe4e536A60Fd9AFc9D7",\n})\n\nconst newIdentityUser = await laika.user.create()\nawait laika.user.loadFrom(newIdentityUser)\n\n// Additional step to deploy the identity contract of newly created user\nconst txHash = await laika.user.deployIdentity()\n')))}p.isMDXComponent=!0},863:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,y=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(y,c(c({ref:t},l),{},{components:n})):a.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);