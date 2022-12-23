(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{536:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(8),a=(t(0),t(735)),i={title:"Dependencies"},c={unversionedId:"develop/dependencies",id:"version-0.23.0/develop/dependencies",isDocsHomePage:!1,title:"Dependencies",description:"To manage and pin the (sub)dependencies of the relay server we use",source:"@site/relay_versioned_docs/version-0.23.0/develop/dependencies.md",slug:"/develop/dependencies",permalink:"/relay/develop/dependencies",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/relay_versioned_docs/version-0.23.0/develop/dependencies.md",version:"0.23.0",sidebar:"version-0.23.0/Relay",previous:{title:"Pre-commit hooks",permalink:"/relay/develop/pre_commit_hooks"},next:{title:"Release",permalink:"/relay/develop/release"}},p=[],d={rightToc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To manage and pin the (sub)dependencies of the relay server we use\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jazzband/pip-tools"}),"pip-tools"),".\nWe create two requirements files, one for the production environment (",Object(a.b)("inlineCode",{parentName:"p"},"requirements.txt"),")\nand one for the additional development requirements (",Object(a.b)("inlineCode",{parentName:"p"},"dev-requirements.txt"),").\nFor the dev environment, you have to install both. The production dependencies are derived\nfrom the dependencies defined in ",Object(a.b)("inlineCode",{parentName:"p"},"setup.py")," and constraint by ",Object(a.b)("inlineCode",{parentName:"p"},"constraints.in"),".\nTo add new dependencies, add them to ",Object(a.b)("inlineCode",{parentName:"p"},"setup.py")," and then run "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"./compile-requirements\n")),Object(a.b)("p",null,"If wrong subdependencies create problems, you can restrict them with ",Object(a.b)("inlineCode",{parentName:"p"},"constraints.in"),".\nThe development requirements are derived from ",Object(a.b)("inlineCode",{parentName:"p"},"dev-requirements.in"),". To add new development\ndependencies, add them to this file and then rerun "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"./compile-requirements\n")),Object(a.b)("p",null,"To upgrade the dependencies in the created requirement files, check out the available options\nfor pip-tools and pass them to the compile script. To update all dependencies,\nrun"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"./compile-requirements.sh --upgrade\n")))}s.isMDXComponent=!0},735:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),s=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=s(t),m=r,b=l["".concat(i,".").concat(m)]||l[m]||u[m]||a;return t?o.a.createElement(b,c(c({ref:n},d),{},{components:t})):o.a.createElement(b,c({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);