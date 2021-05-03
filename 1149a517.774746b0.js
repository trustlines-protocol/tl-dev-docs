(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(8),a=(r(0),r(699)),i={title:"Trustlines Network Rest API",sidebar_label:"Introduction"},c={unversionedId:"api/introduction",id:"version-0.20.1/api/introduction",isDocsHomePage:!1,title:"Trustlines Network Rest API",description:"The relay component of the trustlines network project provides a REST API.",source:"@site/relay_versioned_docs/version-0.20.1/api/introduction.md",slug:"/api/introduction",permalink:"/relay/0.20.1/api/introduction",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/relay_versioned_docs/version-0.20.1/api/introduction.md",version:"0.20.1",sidebar_label:"Introduction",sidebar:"version-0.20.1/Relay",previous:{title:"Running the Trustlines system",permalink:"/relay/0.20.1/tutorials/trustlines_system"},next:{title:"Network",permalink:"/relay/0.20.1/api/network"}},l=[{value:"Base Endpoint",id:"base-endpoint",children:[]},{value:"Response",id:"response",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The relay component of the trustlines network project provides a REST API."),Object(a.b)("h2",{id:"base-endpoint"},"Base Endpoint"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"<protocol>://<host>:<port>/api/v1\n")),Object(a.b)("p",null,"You can use the following base endpoint to talk to the currently deployed Laika test setup."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"https://staging.testnet.trustlines.network/api/v1\n")),Object(a.b)("h2",{id:"response"},"Response"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"All endpoints return JSON"),Object(a.b)("li",{parentName:"ul"},"All number values are returned in their smallest unit"),Object(a.b)("li",{parentName:"ul"},"All ethereum addresses are returned as ERC55 checksum addresses"),Object(a.b)("li",{parentName:"ul"},"In case of an error, the response of the relay API will have the following format:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "message": "<errorMessage>"\n}\n')))}p.isMDXComponent=!0},699:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(f,c(c({ref:t},s),{},{components:r})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);