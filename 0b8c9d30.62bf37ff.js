(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{656:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||c;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),c=(n(0),n(656)),a={title:"Introduction"},i={unversionedId:"introduction",id:"version-1.3.0/introduction",isDocsHomePage:!1,title:"Introduction",description:"The smart contracts are components of the Trustlines Protocol.",source:"@site/contracts_versioned_docs/version-1.3.0/introduction.md",slug:"/introduction",permalink:"/contracts/introduction",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/contracts_versioned_docs/version-1.3.0/introduction.md",version:"1.3.0",sidebar:"version-1.3.0/Contracts",next:{title:"Types of contracts",permalink:"/contracts/types_of_contracts"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The smart contracts are components of the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://trustlines.foundation/protocol.html"}),"Trustlines Protocol"),".\nThey are currently deployed on the Trustlines Blockchain.\nTransfers within currency networks are executed by the smart contracts. All trustlines (i.e. credit lines and balances between users) are notarized on the blockchain. Furthermore, the smart contracts enforce the rules determining how trustlines can be created, used and updated."),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/contracts"}),"Smart contracts repository on github")," contains the\nsmart contracts implementing the Trustlines logic. This includes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Currency Networks"),Object(c.b)("li",{parentName:"ul"},"Exchanges"),Object(c.b)("li",{parentName:"ul"},"Identity implementaiton, proxy, and proxy factory.")),Object(c.b)("p",null,"It also includes deploy tools that can be used to deploy these contracts. The deploy tools can be used via cli or as a python package to be built on top of. The package tl-deploy used for deployment of the contracts additionally provides an abstraction layer to identities and meta-transactions for delegates to use."))}u.isMDXComponent=!0}}]);