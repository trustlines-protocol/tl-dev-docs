(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{518:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),a=(n(0),n(735)),c={id:"_typings_.delegationfeesraw",title:"Interface: DelegationFeesRaw",sidebar_label:"DelegationFeesRaw"},o={unversionedId:"api/interfaces/_typings_.delegationfeesraw",id:"version-0.15.0/api/interfaces/_typings_.delegationfeesraw",isDocsHomePage:!1,title:"Interface: DelegationFeesRaw",description:'"typings".DelegationFeesRaw',source:"@site/clientlib_versioned_docs/version-0.15.0/api/interfaces/_typings_.delegationfeesraw.md",slug:"/api/interfaces/_typings_.delegationfeesraw",permalink:"/clientlib/0.15.0/api/interfaces/_typings_.delegationfeesraw",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib_versioned_docs/version-0.15.0/api/interfaces/_typings_.delegationfeesraw.md",version:"0.15.0",sidebar_label:"DelegationFeesRaw",sidebar:"version-0.15.0/clientlib",previous:{title:"Interface: DelegationFeesObject",permalink:"/clientlib/0.15.0/api/interfaces/_typings_.delegationfeesobject"},next:{title:"Interface: DeployIdentityResponse",permalink:"/clientlib/0.15.0/api/interfaces/_typings_.deployidentityresponse"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"baseFee",id:"basefee",children:[]},{value:"currencyNetworkOfFees",id:"currencynetworkoffees",children:[]},{value:"gasPrice",id:"gasprice",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/modules/_typings_"}),'"typings"'),".DelegationFeesRaw"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DelegationFeesRaw"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"basefee"},"baseFee"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"baseFee"),": number ","|"," string ","|"," BigNumber"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L426"}),"src/typings.ts:426"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"currencynetworkoffees"},"currencyNetworkOfFees"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"currencyNetworkOfFees"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L428"}),"src/typings.ts:428"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"gasprice"},"gasPrice"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"gasPrice"),": number ","|"," string ","|"," BigNumber"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L427"}),"src/typings.ts:427"))))}p.isMDXComponent=!0},735:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),f=r,d=b["".concat(c,".").concat(f)]||b[f]||u[f]||a;return n?i.a.createElement(d,o(o({ref:t},l),{},{components:n})):i.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);