(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{437:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),c=(n(0),n(735)),a={id:"_typings_.txinfos",title:"Interface: TxInfos",sidebar_label:"TxInfos"},o={unversionedId:"api/interfaces/_typings_.txinfos",id:"api/interfaces/_typings_.txinfos",isDocsHomePage:!1,title:"Interface: TxInfos",description:'"typings".TxInfos',source:"@site/clientlib/api/interfaces/_typings_.txinfos.md",slug:"/api/interfaces/_typings_.txinfos",permalink:"/clientlib/next/api/interfaces/_typings_.txinfos",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib/api/interfaces/_typings_.txinfos.md",version:"current",sidebar_label:"TxInfos",sidebar:"clientlib",previous:{title:"Interface: TxFeesRaw",permalink:"/clientlib/next/api/interfaces/_typings_.txfeesraw"},next:{title:"Interface: TxInfosRaw",permalink:"/clientlib/next/api/interfaces/_typings_.txinfosraw"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"balance",id:"balance",children:[]},{value:"gasPrice",id:"gasprice",children:[]},{value:"nonce",id:"nonce",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/modules/_typings_"}),'"typings"'),".TxInfos"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"TxInfos"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"balance"},"balance"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"balance"),": BigNumber"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/typings.ts#L418"}),"src/typings.ts:418"))),Object(c.b)("p",null,"Balance of given user address in ETH"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"gasprice"},"gasPrice"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"gasPrice"),": BigNumber"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/typings.ts#L414"}),"src/typings.ts:414"))),Object(c.b)("p",null,"Amount of ETH in gwei for every unit of gas user is willing to pay"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"nonce"},"nonce"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"nonce"),": number"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/f60ef2b/src/typings.ts#L422"}),"src/typings.ts:422"))),Object(c.b)("p",null,"Transaction count of given user address"))}p.isMDXComponent=!0},735:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),f=r,m=b["".concat(a,".").concat(f)]||b[f]||u[f]||c;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<c;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);