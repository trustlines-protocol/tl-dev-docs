(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{418:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return b}));var n=t(3),i=t(8),a=(t(0),t(735)),o={id:"_typings_.orderbookraw",title:"Interface: OrderbookRaw",sidebar_label:"OrderbookRaw"},c={unversionedId:"api/interfaces/_typings_.orderbookraw",id:"version-0.15.0/api/interfaces/_typings_.orderbookraw",isDocsHomePage:!1,title:"Interface: OrderbookRaw",description:'"typings".OrderbookRaw',source:"@site/clientlib_versioned_docs/version-0.15.0/api/interfaces/_typings_.orderbookraw.md",slug:"/api/interfaces/_typings_.orderbookraw",permalink:"/clientlib/0.15.0/api/interfaces/_typings_.orderbookraw",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib_versioned_docs/version-0.15.0/api/interfaces/_typings_.orderbookraw.md",version:"0.15.0",sidebar_label:"OrderbookRaw",sidebar:"version-0.15.0/clientlib",previous:{title:"Interface: OrderbookOptions",permalink:"/clientlib/0.15.0/api/interfaces/_typings_.orderbookoptions"},next:{title:"Interface: OrdersQuery",permalink:"/clientlib/0.15.0/api/interfaces/_typings_.ordersquery"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"asks",id:"asks",children:[]},{value:"bids",id:"bids",children:[]}]}],p={rightToc:s};function b(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/modules/_typings_"}),'"typings"'),".OrderbookRaw"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OrderbookRaw"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"asks"},"asks"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"asks"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.signedorderraw"}),"SignedOrderRaw"),"[]"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L804"}),"src/typings.ts:804"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"bids"},"bids"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"bids"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.15.0/api/interfaces/_typings_.signedorderraw"}),"SignedOrderRaw"),"[]"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L805"}),"src/typings.ts:805"))))}b.isMDXComponent=!0},735:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),b=function(e){var r=i.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=b(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},u=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(t),u=n,f=l["".concat(o,".").concat(u)]||l[u]||d[u]||a;return t?i.a.createElement(f,c(c({ref:r},p),{},{components:t})):i.a.createElement(f,c({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);