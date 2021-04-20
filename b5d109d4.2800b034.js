(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{475:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(8),a=(n(0),n(664)),c={id:"_typings_.txobject",title:"Interface: TxObject",sidebar_label:"TxObject"},p={unversionedId:"api/interfaces/_typings_.txobject",id:"api/interfaces/_typings_.txobject",isDocsHomePage:!1,title:"Interface: TxObject",description:'"typings".TxObject',source:"@site/clientlib/api/interfaces/_typings_.txobject.md",slug:"/api/interfaces/_typings_.txobject",permalink:"/clientlib/next/api/interfaces/_typings_.txobject",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib/api/interfaces/_typings_.txobject.md",version:"current",sidebar_label:"TxObject",sidebar:"clientlib",previous:{title:"Interface: TxInfosRaw",permalink:"/clientlib/next/api/interfaces/_typings_.txinfosraw"},next:{title:"Interface: TxObjectInternal",permalink:"/clientlib/next/api/interfaces/_typings_.txobjectinternal"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"rawTx",id:"rawtx",children:[]},{value:"txFees",id:"txfees",children:[]}]}],o={rightToc:b};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/modules/_typings_"}),'"typings"'),".TxObject"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"TxObject")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.paymenttxobject"}),"PaymentTxObject")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.closetxobject"}),"CloseTxObject")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.exchangetx"}),"ExchangeTx")))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"rawtx"},"rawTx"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"rawTx"),": ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L283"}),"src/typings.ts:283"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"txfees"},"txFees"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"txFees"),": ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txfeesamounts"}),"TxFeesAmounts")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L284"}),"src/typings.ts:284"))))}l.isMDXComponent=!0},664:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),l=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,j=s["".concat(c,".").concat(f)]||s[f]||u[f]||a;return n?i.a.createElement(j,p(p({ref:t},o),{},{components:n})):i.a.createElement(j,p({ref:t},o))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var o=2;o<a;o++)c[o]=n[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);