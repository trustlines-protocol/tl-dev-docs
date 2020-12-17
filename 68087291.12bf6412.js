(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{274:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(8),i=(t(0),t(606)),c={title:"Discover currency networks"},s={unversionedId:"guides/discover_networks",id:"version-0.14.0/guides/discover_networks",isDocsHomePage:!1,title:"Discover currency networks",description:"The client library provides interfaces for retrieving information on deployed currency networks.",source:"@site/clientlib_versioned_docs/version-0.14.0/guides/discover_networks.md",slug:"/guides/discover_networks",permalink:"/clientlib/guides/discover_networks",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib_versioned_docs/version-0.14.0/guides/discover_networks.md",version:"0.14.0",sidebar:"version-0.14.0/clientlib",previous:{title:"Create user / wallet",permalink:"/clientlib/guides/create_wallet"},next:{title:"Set up trustline",permalink:"/clientlib/guides/setup_trustline"}},a=[{value:"General information",id:"general-information",children:[]},{value:"User context",id:"user-context",children:[]}],l={rightToc:a};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The client library provides interfaces for retrieving information on deployed currency networks."),Object(i.b)("h3",{id:"general-information"},"General information"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// All currency networks the relay server knows about\nconst allDeployedCurrencyNetworks = await tlNetwork.currencyNetwork.getAll()\n\n// Detailed information on specific currency network\nconst detailedInformation = await tlNetwork.currencyNetwork.getInfo("0x...")\n\n// List of all users in specific currency network\nconst userAddresses = await tlNetwork.currencyNetwork.getUsers("0x...")\n')),Object(i.b)("h3",{id:"user-context"},"User context"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const networkAddress = "0x..."\nconst userAddress = "0x..."\n\n// Overview of user in specific currency network\nconst userOverview = await tlNetwork.currencyNetwork.getUserOverview(\n  networkAddress,\n  userAddress\n)\n')))}u.isMDXComponent=!0},606:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=n,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?o.a.createElement(b,s(s({ref:r},l),{},{components:t})):o.a.createElement(b,s({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=f;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<i;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);