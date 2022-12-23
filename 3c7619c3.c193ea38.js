(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(735)),l={title:"Installation"},i={unversionedId:"deploy_tools/installation",id:"version-2.0.0/deploy_tools/installation",isDocsHomePage:!1,title:"Installation",description:"You can install the deploy tool from within the py-deploy",source:"@site/contracts_versioned_docs/version-2.0.0/deploy_tools/installation.md",slug:"/deploy_tools/installation",permalink:"/contracts/2.0.0/deploy_tools/installation",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/contracts_versioned_docs/version-2.0.0/deploy_tools/installation.md",version:"2.0.0",sidebar:"version-2.0.0/Contracts",previous:{title:"Introduction",permalink:"/contracts/2.0.0/deploy_tools/introduction"},next:{title:"Usage",permalink:"/contracts/2.0.0/deploy_tools/usage"}},c=[],p={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can install the deploy tool from within the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/contracts/blob/master/py-deploy/README.md"}),"py-deploy"),"\ndirectory by running:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pip install -r requirements.txt -e .\n")),Object(a.b)("p",null,"You can otherwise install it by running"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pip install trustlines-contracts-deploy\n")),Object(a.b)("p",null,"You can verify proper installation by running ",Object(a.b)("inlineCode",{parentName:"p"},"tl-deploy --help"),", which should bring up the help for the tool."))}s.isMDXComponent=!0},735:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,y=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(y,i(i({ref:t},p),{},{components:n})):o.a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);