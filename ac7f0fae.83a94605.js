(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{413:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(604)),l={title:"Example usage"},i={unversionedId:"getting_started/example_usage",id:"getting_started/example_usage",isDocsHomePage:!1,title:"Example usage",description:"We assume the usage of the trustlines-clientlib ES6 module in the following.",source:"@site/clientlib/getting_started/example_usage.md",slug:"/getting_started/example_usage",permalink:"/clientlib/next/getting_started/example_usage",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib/getting_started/example_usage.md",version:"current",sidebar:"clientlib",previous:{title:"Installation",permalink:"/clientlib/next/getting_started/installation"},next:{title:"Start developing",permalink:"/clientlib/next/develop/develop"}},c=[],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We assume the usage of the ",Object(o.b)("inlineCode",{parentName:"p"},"trustlines-clientlib")," ES6 module in the following."),Object(o.b)("p",null,"To start using the trustlines-clientlib you first have to configure the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/relay"}),"relay server"),"\nyou want to connect to. You can either connect to a local develop relay server or use publicly available ones."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { TLNetwork } from '@trustlines/trustlines-clientlib'\n\n// Instance using a relay connected to the Laika Testnet\nconst laika = new TLNetwork({\n  relayUrl: {\n    protocol: 'https',\n    port: '80',\n    host: 'relay0.testnet.trustlines.network',\n    path: '/api/v1'\n  },\n  messagingUrl: {\n    protocol: 'https',\n    port: '80',\n    host: 'relay0.testnet.trustlines.network',\n    path: '/api/v1'\n  }\n\n  // ...\n})\n\n// Instance using a relay connected to the TLBC\nconst tlbc = new TLNetwork({\n  relayUrl: 'https://tlbc.relay.anyblock.tools/api/v1',\n  messagingUrl: 'https://messaging.trustlines.app/api/v1'\n  // ...\n})\n")),Object(o.b)("p",null,"This library is a promise-based library.\nSo every asynchronous call will return a native JavaScript promise.\nIf an error occurs the library will throw it.\nThe caller has to handle it appropriately."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"try {\n  const networks = await laika.currencyNetwork.getAll()\n} catch (error) {\n  console.log('Caught error:', error)\n}\n\n")))}p.isMDXComponent=!0},604:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||b[g]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);