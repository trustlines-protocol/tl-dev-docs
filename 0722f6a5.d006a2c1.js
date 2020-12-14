(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{413:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),f=r,d=b["".concat(c,".").concat(f)]||b[f]||u[f]||a;return n?i.a.createElement(d,o(o({ref:t},l),{},{components:n})):i.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(413)),c={id:"_typings_.txinfos",title:"Interface: TxInfos",sidebar_label:"TxInfos"},o={unversionedId:"api/interfaces/_typings_.txinfos",id:"version-0.13.7/api/interfaces/_typings_.txinfos",isDocsHomePage:!1,title:"Interface: TxInfos",description:'"typings".TxInfos',source:"@site/clientlib_versioned_docs/version-0.13.7/api/interfaces/_typings_.txinfos.md",slug:"/api/interfaces/_typings_.txinfos",permalink:"/clientlib/api/interfaces/_typings_.txinfos",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/clientlib_versioned_docs/version-0.13.7/api/interfaces/_typings_.txinfos.md",version:"0.13.7",sidebar_label:"TxInfos",sidebar:"version-0.13.7/clientlib",previous:{title:"Interface: TxFeesRaw",permalink:"/clientlib/api/interfaces/_typings_.txfeesraw"},next:{title:"Interface: TxInfosRaw",permalink:"/clientlib/api/interfaces/_typings_.txinfosraw"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"balance",id:"balance",children:[]},{value:"gasPrice",id:"gasprice",children:[]},{value:"nonce",id:"nonce",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/modules/_typings_"}),'"typings"'),".TxInfos"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"TxInfos"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"balance"},"balance"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"balance"),": BigNumber"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L386"}),"src/typings.ts:386"))),Object(a.b)("p",null,"Balance of given user address in ETH"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"gasprice"},"gasPrice"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"gasPrice"),": BigNumber"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L382"}),"src/typings.ts:382"))),Object(a.b)("p",null,"Amount of ETH in gwei for every unit of gas user is willing to pay"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"nonce"},"nonce"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"nonce"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L390"}),"src/typings.ts:390"))),Object(a.b)("p",null,"Transaction count of given user address"))}p.isMDXComponent=!0}}]);