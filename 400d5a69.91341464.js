(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{203:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(664)),i={title:"Transfer"},c={unversionedId:"guides/transfer",id:"guides/transfer",isDocsHomePage:!1,title:"Transfer",description:"The requirement for a successful trustline transfer is a path with enough capacity from the sender to the receiver in the currency network. It is also to mention that the sender is always the loaded user.",source:"@site/clientlib/guides/transfer.md",slug:"/guides/transfer",permalink:"/clientlib/next/guides/transfer",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib/guides/transfer.md",version:"current",sidebar:"clientlib",previous:{title:"Set up trustline",permalink:"/clientlib/next/guides/setup_trustline"},next:{title:"Notes on the API",permalink:"/clientlib/next/notes_on_api"}},s=[{value:"Transferring trustlines currency",id:"transferring-trustlines-currency",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The requirement for a successful trustline transfer is a path with enough capacity from the sender to the receiver in the currency network. It is also to mention that the sender is always the loaded user."),Object(o.b)("h3",{id:"transferring-trustlines-currency"},"Transferring trustlines currency"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const networkAddress = "0xf8E191d2cd72Ff35CB8F012685A29B31996614EA"\nconst receiverAddress = "0xcE2D6f8bc55A61428D32947bC9Bc7F2DE1640B18"\n\nconst { rawTx, maxFees, path, feePayer } = await tlNetwork.payment.prepare(\n  networkAddress,\n  receiverAddress,\n  1\n)\nconsole.log("Transfer path:", path)\nconsole.log("Network fees:", maxFees)\nconsole.log("Fee payer:", feePayer)\n\nconst txHash = await tlNetwork.payment.confirm(raw)\nconsole.log("Transaction hash: ", txHash)\n')))}u.isMDXComponent=!0},664:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);