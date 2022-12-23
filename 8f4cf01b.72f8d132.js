(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{444:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),o=(t(0),t(735)),i={title:"Javascript"},c={unversionedId:"known_issues/javascript",id:"known_issues/javascript",isDocsHomePage:!1,title:"Javascript",description:"Common Issues",source:"@site/mobileapp/known_issues/javascript.md",slug:"/known_issues/javascript",permalink:"/mobileapp/known_issues/javascript",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/mobileapp/known_issues/javascript.md",version:"current",sidebar:"mobileapp",previous:{title:"Cloud Backup",permalink:"/mobileapp/customizations/cloud_backup"},next:{title:"Android",permalink:"/mobileapp/known_issues/android"}},l=[{value:"Common Issues",id:"common-issues",children:[]},{value:"Build process",id:"build-process",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"common-issues"},"Common Issues"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"module ",Object(o.b)("inlineCode",{parentName:"p"},"stream")," can not be found: run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," in root dir. The postInstall script was not triggered after a new node module was installed. This happens e.g. after running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn upgrade-interactive"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"Error: Unable to resolve module"),". Make sure ",Object(o.b)("strong",{parentName:"p"},"watchman")," is installed and follow the instruction from the error message: "),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Clear watchman watches: ",Object(o.b)("inlineCode",{parentName:"li"},"watchman watch-del-all"),"."),Object(o.b)("li",{parentName:"ol"},"Delete the ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules")," folder: ",Object(o.b)("inlineCode",{parentName:"li"},"rm -rf node_modules && npm install"),"."),Object(o.b)("li",{parentName:"ol"},"Reset Metro Bundler cache: ",Object(o.b)("inlineCode",{parentName:"li"},"rm -rf /tmp/metro-bundler-cache-*")," or ",Object(o.b)("inlineCode",{parentName:"li"},"npm start -- --reset-cache"),".")))),Object(o.b)("h2",{id:"build-process"},"Build process"),Object(o.b)("p",null,"Start the bundler for development with: ",Object(o.b)("inlineCode",{parentName:"p"},"yarn run start")),Object(o.b)("p",null,"The JS bundle can be build with: ",Object(o.b)("inlineCode",{parentName:"p"},"yarn run build:ios")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yarn run build:android"),". This is usually not necessary, since the bundle is created in the deploy process."))}p.isMDXComponent=!0},735:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);