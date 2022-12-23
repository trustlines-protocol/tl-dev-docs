(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{373:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),o=(n(0),n(735)),a={title:"Introduction"},c={unversionedId:"guides/intro",id:"version-0.17.1/guides/intro",isDocsHomePage:!1,title:"Introduction",description:"Here you can find useful guides on how to use the core features of the trustlines-clientlib.",source:"@site/clientlib_versioned_docs/version-0.17.1/guides/intro.md",slug:"/guides/intro",permalink:"/clientlib/guides/intro",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib_versioned_docs/version-0.17.1/guides/intro.md",version:"0.17.1",sidebar:"version-0.17.1/clientlib",previous:{title:"Release",permalink:"/clientlib/develop/release"},next:{title:"Create user / wallet",permalink:"/clientlib/guides/create_wallet"}},s=[{value:"Number format",id:"number-format",children:[]},{value:"Fees",id:"fees",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Here you can find useful guides on how to use the core features of the trustlines-clientlib."),Object(o.b)("h3",{id:"number-format"},"Number format"),Object(o.b)("p",null,"The trustlines-clientlib returns numbers in the following format"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"type Amount = {\n  raw: string // = value * decimals^10\n  value: string // = raw / decimals^10\n  decimals: number\n}\n")),Object(o.b)("p",null,"The representation ",Object(o.b)("inlineCode",{parentName:"p"},"raw")," is the number in its smallest unit, whereas ",Object(o.b)("inlineCode",{parentName:"p"},"value")," is the representation in its biggest unit."),Object(o.b)("h3",{id:"fees"},"Fees"),Object(o.b)("p",null,"There are currently three different types of fees returned by the trustlines-clientlib, when preparing transactions."),Object(o.b)("h4",{id:"transaction-fees---ethfees"},"Transaction fees - ",Object(o.b)("inlineCode",{parentName:"h4"},"ethFees")),Object(o.b)("p",null,"This kind of fees only occur, when the ",Object(o.b)("inlineCode",{parentName:"p"},"walletType")," in the initial configuration is set to ",Object(o.b)("inlineCode",{parentName:"p"},"ethers"),".\nThey are denominated in the native cryptocurrency or coins, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"TLC"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Test TLC"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ETH"),", etc."),Object(o.b)("h4",{id:"delegation-fees---delegationfees"},"Delegation fees - ",Object(o.b)("inlineCode",{parentName:"h4"},"delegationFees")),Object(o.b)("p",null,"If the ",Object(o.b)("inlineCode",{parentName:"p"},"walletType")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"identity"),", the library uses meta-transactions that are relayed, i.e delegated, by the relay server.\nThe relay server operator pays for the occurring transaction fees and might want to be compensated for this service.\nThese fees are denominated in a Trustlines Currency."),Object(o.b)("h4",{id:"network-fees---maxfees"},"Network fees - ",Object(o.b)("inlineCode",{parentName:"h4"},"maxFees")),Object(o.b)("p",null,"When transfers are mediated through other users within the network, network fees might occur, which are also denominated in a Trustlines Currency."))}u.isMDXComponent=!0},735:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(a,".").concat(d)]||b[d]||p[d]||o;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);