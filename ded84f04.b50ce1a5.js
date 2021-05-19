(window.webpackJsonp=window.webpackJsonp||[]).push([[685],{757:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return b}));var n=t(3),i=t(8),o=(t(0),t(863)),a={id:"_typings_.orderbook",title:"Interface: Orderbook",sidebar_label:"Orderbook"},c={unversionedId:"api/interfaces/_typings_.orderbook",id:"version-0.14.0/api/interfaces/_typings_.orderbook",isDocsHomePage:!1,title:"Interface: Orderbook",description:'"typings".Orderbook',source:"@site/clientlib_versioned_docs/version-0.14.0/api/interfaces/_typings_.orderbook.md",slug:"/api/interfaces/_typings_.orderbook",permalink:"/clientlib/0.14.0/api/interfaces/_typings_.orderbook",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib_versioned_docs/version-0.14.0/api/interfaces/_typings_.orderbook.md",version:"0.14.0",sidebar_label:"Orderbook",sidebar:"version-0.14.0/clientlib",previous:{title:"Interface: OrderRaw",permalink:"/clientlib/0.14.0/api/interfaces/_typings_.orderraw"},next:{title:"Interface: OrderbookOptions",permalink:"/clientlib/0.14.0/api/interfaces/_typings_.orderbookoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"asks",id:"asks",children:[]},{value:"bids",id:"bids",children:[]}]}],s={rightToc:p};function b(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.14.0/api/modules/_typings_"}),'"typings"'),".Orderbook"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Orderbook"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"asks"},"asks"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"asks"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.14.0/api/interfaces/_typings_.signedorder"}),"SignedOrder"),"[]"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L799"}),"src/typings.ts:799"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"bids"},"bids"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"bids"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.14.0/api/interfaces/_typings_.signedorder"}),"SignedOrder"),"[]"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L800"}),"src/typings.ts:800"))))}b.isMDXComponent=!0},863:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),b=function(e){var r=i.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=b(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},u=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(t),u=n,f=l["".concat(a,".").concat(u)]||l[u]||d[u]||o;return t?i.a.createElement(f,c(c({ref:r},s),{},{components:t})):i.a.createElement(f,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);