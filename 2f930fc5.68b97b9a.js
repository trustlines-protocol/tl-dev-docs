(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{178:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),i=(r(0),r(664)),c={id:"_typings_.pathraw",title:"Interface: PathRaw",sidebar_label:"PathRaw"},p={unversionedId:"api/interfaces/_typings_.pathraw",id:"api/interfaces/_typings_.pathraw",isDocsHomePage:!1,title:"Interface: PathRaw",description:'"typings".PathRaw',source:"@site/clientlib/api/interfaces/_typings_.pathraw.md",slug:"/api/interfaces/_typings_.pathraw",permalink:"/clientlib/next/api/interfaces/_typings_.pathraw",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib/api/interfaces/_typings_.pathraw.md",version:"current",sidebar_label:"PathRaw",sidebar:"clientlib",previous:{title:"Interface: PathObject",permalink:"/clientlib/next/api/interfaces/_typings_.pathobject"},next:{title:"Interface: PaymentMessage",permalink:"/clientlib/next/api/interfaces/_typings_.paymentmessage"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"estimatedGas",id:"estimatedgas",children:[]},{value:"feePayer",id:"feepayer",children:[]},{value:"fees",id:"fees",children:[]},{value:"path",id:"path",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/modules/_typings_"}),'"typings"'),".PathRaw"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"PathRaw"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"estimatedgas"},"estimatedGas"),Object(i.b)("p",null,"\u2022  ",Object(i.b)("strong",{parentName:"p"},"estimatedGas"),": number"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L489"}),"src/typings.ts:489"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"feepayer"},"feePayer"),Object(i.b)("p",null,"\u2022  ",Object(i.b)("strong",{parentName:"p"},"feePayer"),": string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L487"}),"src/typings.ts:487"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"fees"},"fees"),Object(i.b)("p",null,"\u2022  ",Object(i.b)("strong",{parentName:"p"},"fees"),": string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L488"}),"src/typings.ts:488"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"path"},"path"),Object(i.b)("p",null,"\u2022  ",Object(i.b)("strong",{parentName:"p"},"path"),": string[]"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L486"}),"src/typings.ts:486"))))}b.isMDXComponent=!0},664:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},o=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),o=b(r),f=n,m=o["".concat(c,".").concat(f)]||o[f]||u[f]||i;return r?a.a.createElement(m,p(p({ref:t},s),{},{components:r})):a.a.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);