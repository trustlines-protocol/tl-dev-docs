(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{413:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(r),f=n,O=s["".concat(c,".").concat(f)]||s[f]||u[f]||a;return r?i.a.createElement(O,o(o({ref:t},b),{},{components:r})):i.a.createElement(O,o({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<a;b++)c[b]=r[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(413)),c={id:"_typings_.txobjectraw",title:"Interface: TxObjectRaw",sidebar_label:"TxObjectRaw"},o={unversionedId:"api/interfaces/_typings_.txobjectraw",id:"version-0.13.7/api/interfaces/_typings_.txobjectraw",isDocsHomePage:!1,title:"Interface: TxObjectRaw",description:'"typings".TxObjectRaw',source:"@site/clientlib_versioned_docs/version-0.13.7/api/interfaces/_typings_.txobjectraw.md",slug:"/api/interfaces/_typings_.txobjectraw",permalink:"/clientlib/api/interfaces/_typings_.txobjectraw",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/clientlib_versioned_docs/version-0.13.7/api/interfaces/_typings_.txobjectraw.md",version:"0.13.7",sidebar_label:"TxObjectRaw",sidebar:"version-0.13.7/clientlib",previous:{title:"Interface: TxObjectInternal",permalink:"/clientlib/api/interfaces/_typings_.txobjectinternal"},next:{title:"Interface: TxOptions",permalink:"/clientlib/api/interfaces/_typings_.txoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"rawTx",id:"rawtx",children:[]},{value:"txFees",id:"txfees",children:[]}]}],b={rightToc:p};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/modules/_typings_"}),'"typings"'),".TxObjectRaw"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"TxObjectRaw"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"rawtx"},"rawTx"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"rawTx"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.rawtxobject"}),"RawTxObject")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L291"}),"src/typings.ts:291"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"txfees"},"txFees"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"txFees"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.txfeesraw"}),"TxFeesRaw")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L292"}),"src/typings.ts:292"))))}l.isMDXComponent=!0}}]);