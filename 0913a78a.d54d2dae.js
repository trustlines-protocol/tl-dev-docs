(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{735:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return o?r.a.createElement(m,c(c({ref:t},p),{},{components:o})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=o[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},96:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return l}));var n=o(3),r=o(8),a=(o(0),o(735)),i={title:"Storybook"},c={unversionedId:"customizations/storybook",id:"customizations/storybook",isDocsHomePage:!1,title:"Storybook",description:"Storybook is a tool for UI development. It makes development faster and easier by isolating components.",source:"@site/mobileapp/customizations/storybook.md",slug:"/customizations/storybook",permalink:"/mobileapp/customizations/storybook",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/mobileapp/customizations/storybook.md",version:"current",sidebar:"mobileapp",previous:{title:"State",permalink:"/mobileapp/customizations/state"},next:{title:"Themes and styling",permalink:"/mobileapp/customizations/styling"}},s=[{value:"Add Component",id:"add-component",children:[]},{value:"Display Storybook",id:"display-storybook",children:[]}],p={rightToc:s};function l(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://storybook.js.org/"}),"Storybook")," is a tool for UI development. It makes development faster and easier by isolating components.\nIt enforces us to design the UI components in a cleaner way and helps with development and discovery of components."),Object(a.b)("h2",{id:"add-component"},"Add Component"),Object(a.b)("p",null,"Go to ",Object(a.b)("inlineCode",{parentName:"p"},"/src/shared/storybook/stories")," and search either for the suited file or create a new one if it does not exist. You can then import your component and add a respective story for it. See the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://storybook.js.org/docs/guides/guide-react-native/"}),"official guide")," for more information."),Object(a.b)("h2",{id:"display-storybook"},"Display Storybook"),Object(a.b)("p",null,"To access the storybook you have to start the mobileapp in ",Object(a.b)("inlineCode",{parentName:"p"},"dev")," mode and navigate to ",Object(a.b)("inlineCode",{parentName:"p"},"Account > Storybook"),"."))}l.isMDXComponent=!0}}]);