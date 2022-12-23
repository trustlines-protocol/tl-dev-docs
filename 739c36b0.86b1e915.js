(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{387:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),o=(n(0),n(735)),i={id:"contributing",title:"Contributing"},l={unversionedId:"contributing",id:"version-2.0.0/contributing",isDocsHomePage:!1,title:"Contributing",description:"We appreciate all help! Depending on your knowledge you can help by",source:"@site/contracts_versioned_docs/version-2.0.0/contributing.md",slug:"/contributing",permalink:"/contracts/2.0.0/contributing",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/contracts_versioned_docs/version-2.0.0/contributing.md",version:"2.0.0",sidebar:"version-2.0.0/Contracts",previous:{title:"Types of contracts",permalink:"/contracts/2.0.0/types_of_contracts"},next:{title:"Currency Networks on Trustlines Blockchain",permalink:"/contracts/2.0.0/currency_networks_tlbc"}},c=[{value:"Open an Issue",id:"open-an-issue",children:[{value:"Report a Bug",id:"report-a-bug",children:[]},{value:"Request a Feature",id:"request-a-feature",children:[]}]},{value:"Open a Pull Request",id:"open-a-pull-request",children:[{value:"Before Starting",id:"before-starting",children:[]},{value:"To Include",id:"to-include",children:[]}]},{value:"Changelog",id:"changelog",children:[]},{value:"Commit Messages",id:"commit-messages",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We appreciate all help! Depending on your knowledge you can help by\nspreading the word, helping with documentation, reporting issues or even contributing to the source code."),Object(o.b)("p",null,"Feel free to checkout the code, play around with it, and run the tests.\nBefore making a change, please first discuss the change via opening an issue on this\nrepository. If you just need some small question answered, you can also reach out to\nus via our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitter.im/trustlines/community"}),"gitter chat"),"."),Object(o.b)("h2",{id:"open-an-issue"},"Open an Issue"),Object(o.b)("p",null,"To request a feature or report a bug, please open an issue on the issue tracker in github."),Object(o.b)("h3",{id:"report-a-bug"},"Report a Bug"),Object(o.b)("p",null,"Please include a short description of the problem, including what you expected to happen and what did happen instead.\nPlease also include the version of the relay you were using, your operating system and the used configuration."),Object(o.b)("h3",{id:"request-a-feature"},"Request a Feature"),Object(o.b)("p",null,"Please include a description of what you would like to see implemented and an explanation of why you believe this would\nbe a good addition."),Object(o.b)("h2",{id:"open-a-pull-request"},"Open a Pull Request"),Object(o.b)("h3",{id:"before-starting"},"Before Starting"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Follow the Getting started guides to setup your development environment."),Object(o.b)("li",{parentName:"ul"},"Ensure that you can run the tests and that they pass. The tests can be run from the root with\n",Object(o.b)("inlineCode",{parentName:"li"},"pytest tests")),Object(o.b)("li",{parentName:"ul"},"Ensure that you can run the end2end tests. You can find them in the\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/trustlines-protocol/end2end"}),"end2end repo"),":\nFirst build the docker image locally from the root of this repo with\n",Object(o.b)("inlineCode",{parentName:"li"},"docker build -t <tag-name> ."),"\nThen follow the instructions of the end2end repository to run the tests with that image.")),Object(o.b)("h3",{id:"to-include"},"To Include"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For a bug fix:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Add a test that makes the bug explicit, and make sure that the test fails"),Object(o.b)("li",{parentName:"ul"},"Fix the bug, so that the test passes"))),Object(o.b)("li",{parentName:"ul"},"For a new feature:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Add a test, that demonstrate the new feature. Consider also adding the new functionality\ntogether with an end2end test to the\n",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/trustlines-protocol/clientlib"}),"clientlib")," if necessary."),Object(o.b)("li",{parentName:"ul"},"Add or update related documentation if necessary."))),Object(o.b)("li",{parentName:"ul"},"Add an entry to the unreleased section of the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/trustlines-protocol/relay/blob/master/CHANGELOG.rst"}),"changelog"),"."),Object(o.b)("li",{parentName:"ul"},"Format your code changes with black. If you setup pre-commit, this will happen automatically on commit\n",Object(o.b)("inlineCode",{parentName:"li"},"black setup.py tests src")),Object(o.b)("li",{parentName:"ul"},"Check your code with ",Object(o.b)("inlineCode",{parentName:"li"},"flake8")," and ",Object(o.b)("inlineCode",{parentName:"li"},"mypy"),". If you setup pre-commit, this will happen automatically on commit.")),Object(o.b)("h2",{id:"changelog"},"Changelog"),Object(o.b)("p",null,"We loosely follow ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://keepachangelog.com/en/0.3.0/"}),"keep a changelog"),".\nAdd a new entry for every version with version number and release date.\nAll changes should start and should be grouped by one of the following keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add: For new features that were added."),Object(o.b)("li",{parentName:"ul"},"Change: For changes in existing functionality."),Object(o.b)("li",{parentName:"ul"},"Deprecate: For already released features which will be removed."),Object(o.b)("li",{parentName:"ul"},"Remove: For removed features."),Object(o.b)("li",{parentName:"ul"},"Fix: For bug fixes."),Object(o.b)("li",{parentName:"ul"},"Security: For security relevant changes.\nPlease also add the marker ",Object(o.b)("inlineCode",{parentName:"li"},"BREAKING")," in case of a breaking change.\nFor the non released changes we keep an unreleased section on top.")),Object(o.b)("h2",{id:"commit-messages"},"Commit Messages"),Object(o.b)("p",null,"We loosely follow ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://chris.beams.io/posts/git-commit/"}),"How to write a git commit message"),"\nPlease fulfill at least these important criteria."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add a subject line that summarizes what was done",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Limit the subject to 50 characters"),Object(o.b)("li",{parentName:"ul"},"Separate the subject from the body with a blank line"),Object(o.b)("li",{parentName:"ul"},"Capitalize the subject line"),Object(o.b)("li",{parentName:"ul"},"Use the imperative mood"),Object(o.b)("li",{parentName:"ul"},"Do not end the subject with a period."))),Object(o.b)("li",{parentName:"ul"},"Add a body if necessary to describe what was changed and why this change was necessary.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Wrap the body at 72 characters."),Object(o.b)("li",{parentName:"ul"},"Feel free to link resources via absolute link or issues via ",Object(o.b)("inlineCode",{parentName:"li"},"#<number>")," wherever necessary\nat the end.")))),Object(o.b)("p",null,"Sometimes a good chosen subject line is enough, but please think about if it is really obvious why this change is necessary\nor if some explanation would help."))}u.isMDXComponent=!0},735:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);