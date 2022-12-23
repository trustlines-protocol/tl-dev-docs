(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{547:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(8),i=(t(0),t(735)),a={title:"Dependencies",id:"dependencies"},c={unversionedId:"dependencies",id:"dependencies",isDocsHomePage:!1,title:"Dependencies",description:"To manage and pin the (sub)dependencies of the relay server we use",source:"@site/endtoend/dependencies.md",slug:"/dependencies",permalink:"/endtoend/dependencies",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/endtoend/dependencies.md",version:"current",sidebar:"End2end",previous:{title:"End to End Quickstart Script",permalink:"/endtoend/quickstart"}},d=[],p={rightToc:d};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To manage and pin the (sub)dependencies of the relay server we use\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jazzband/pip-tools/"}),"pip-tools"),".\nWe create two requirements files, one for the production environment (:code:",Object(i.b)("inlineCode",{parentName:"p"},"requirements.txt"),")\nand one for the additional development requirements (:code:",Object(i.b)("inlineCode",{parentName:"p"},"dev-requirements.txt"),").\nFor the dev environment, you have to install both. The production dependencies are derived\nfrom the dependencies defined in :code:",Object(i.b)("inlineCode",{parentName:"p"},"setup.py"),".\nTo add new dependencies, add them to :code:",Object(i.b)("inlineCode",{parentName:"p"},"setup.py")," and then run :code:",Object(i.b)("inlineCode",{parentName:"p"},"./compile-requirements"),".\nThe development requirements are derived from :code:",Object(i.b)("inlineCode",{parentName:"p"},"dev-requirements.in"),". To add new development\ndependencies, add them to this file and then rerun :code:",Object(i.b)("inlineCode",{parentName:"p"},"./compile-requirements"),".\nTo upgrade the dependencies in the created requirement files, check out the available options\nfor pip-tools and pass them to the compile script. To update all dependencies,\nrun :code:",Object(i.b)("inlineCode",{parentName:"p"},"./compile-requirements.sh --upgrade"),"."))}s.isMDXComponent=!0},735:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(a,".").concat(m)]||u[m]||l[m]||i;return t?o.a.createElement(f,c(c({ref:n},p),{},{components:t})):o.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);