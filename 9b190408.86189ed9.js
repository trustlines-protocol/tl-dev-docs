(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{373:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(8),c=(r(0),r(604)),o={id:"_typings_.providerurl",title:"Interface: ProviderUrl",sidebar_label:"ProviderUrl"},a={unversionedId:"api/interfaces/_typings_.providerurl",id:"api/interfaces/_typings_.providerurl",isDocsHomePage:!1,title:"Interface: ProviderUrl",description:'"typings".ProviderUrl',source:"@site/clientlib/api/interfaces/_typings_.providerurl.md",slug:"/api/interfaces/_typings_.providerurl",permalink:"/clientlib/next/api/interfaces/_typings_.providerurl",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib/api/interfaces/_typings_.providerurl.md",version:"current",sidebar_label:"ProviderUrl",sidebar:"clientlib",previous:{title:"Interface: PaymentTxObject",permalink:"/clientlib/next/api/interfaces/_typings_.paymenttxobject"},next:{title:"Interface: RawTxObject",permalink:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"host",id:"host",children:[]},{value:"path",id:"path",children:[]},{value:"port",id:"port",children:[]},{value:"protocol",id:"protocol",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/modules/_typings_"}),'"typings"'),".ProviderUrl"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ProviderUrl"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"host"},"host"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"host"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L50"}),"src/typings.ts:50"))),Object(c.b)("p",null,"Host of a relay server"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"path"},"path"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"path"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L58"}),"src/typings.ts:58"))),Object(c.b)("p",null,"Base path for the relay api"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"port"},"port"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"port"),": number ","|"," string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L54"}),"src/typings.ts:54"))),Object(c.b)("p",null,"Port for communication"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protocol"},"protocol"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"protocol"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/typings.ts#L46"}),"src/typings.ts:46"))),Object(c.b)("p",null,"Protocol for communicating with a relay server"))}b.isMDXComponent=!0},604:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),O=n,d=s["".concat(o,".").concat(O)]||s[O]||u[O]||c;return r?i.a.createElement(d,a(a({ref:t},l),{},{components:r})):i.a.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=O;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var l=2;l<c;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);