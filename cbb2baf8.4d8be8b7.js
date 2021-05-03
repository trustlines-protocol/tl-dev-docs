(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{557:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(699)),o={id:"contributing",title:"Contributing"},l={unversionedId:"contributing",id:"version-0.20.1/contributing",isDocsHomePage:!1,title:"Contributing",description:"Welcome and thank you for contributing to the Trustlines Project.",source:"@site/relay_versioned_docs/version-0.20.1/contributing.md",slug:"/contributing",permalink:"/relay/0.20.1/contributing",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/relay_versioned_docs/version-0.20.1/contributing.md",version:"0.20.1",sidebar:"version-0.20.1/Relay",previous:{title:"Introduction",permalink:"/relay/0.20.1/introduction"},next:{title:"Run relay via docker-compose",permalink:"/relay/0.20.1/getting_started/docker"}},c=[{value:"Get Involved",id:"get-involved",children:[]},{value:"Open an issue",id:"open-an-issue",children:[{value:"Report a bug",id:"report-a-bug",children:[]},{value:"Request a feature",id:"request-a-feature",children:[]}]},{value:"Open a pull request",id:"open-a-pull-request",children:[{value:"Before starting",id:"before-starting",children:[]},{value:"To include",id:"to-include",children:[]}]},{value:"Changelog",id:"changelog",children:[]},{value:"Commit messages",id:"commit-messages",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Welcome and thank you for contributing to the Trustlines Project."),Object(i.b)("h2",{id:"get-involved"},"Get Involved"),Object(i.b)("p",null,"We appreciate all help! Depending on your knowledge you can help bye\nspreading the word, helping with documentation, reporting issues or even contributing to the source code."),Object(i.b)("p",null,"Feel free to checkout the code, play around with it and run the tests.\nBefore making a change, please first discuss the change via opening an issue on this\nrepository. If you just need some small question answered, you can also reach out to\nus via our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitter.im/trustlines/community"}),"gitter chat"),"."),Object(i.b)("h2",{id:"open-an-issue"},"Open an issue"),Object(i.b)("p",null,"To request a feature or report a bug, please open an issue on the issue tracker in github."),Object(i.b)("h3",{id:"report-a-bug"},"Report a bug"),Object(i.b)("p",null,"Please include a short description of the problem, including what you expected to happen and what did happen instead.\nPlease also include the version of the relay you were using, your operating system and the used configuration."),Object(i.b)("h3",{id:"request-a-feature"},"Request a feature"),Object(i.b)("p",null,"Please include a description of what you would like to see implemented and an explanation of why you believe this would\nbe a good addition."),Object(i.b)("h2",{id:"open-a-pull-request"},"Open a pull request"),Object(i.b)("h3",{id:"before-starting"},"Before starting"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Follow the Getting started guides to setup your development environment."),Object(i.b)("li",{parentName:"ul"},"Ensure that you can run the tests and that they pass. The tests can be run from the root with\n",Object(i.b)("inlineCode",{parentName:"li"},"./pytest tests")),Object(i.b)("li",{parentName:"ul"},"Ensure that you can run the end2end tests. You can find them in the\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/trustlines-protocol/end2end"}),"end2end repo"),":\nFirst build the docker image locally from the root of this repo with\n",Object(i.b)("inlineCode",{parentName:"li"},"docker build -t <tag-name> ."),"\nThen follow the instructions of the end2end repository to run the tests with that image.")),Object(i.b)("h3",{id:"to-include"},"To include"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For a bug fix:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Add a test that makes the bug explicit, and make sure that the test fails"),Object(i.b)("li",{parentName:"ul"},"Fix the bug, so that the test passes"))),Object(i.b)("li",{parentName:"ul"},"For a new feature:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Add a test, that demonstrate the new feature. Consider also adding the new functionality\ntogether with an end2end test to the\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/trustlines-protocol/clientlib"}),"clientlib")," if necessary."),Object(i.b)("li",{parentName:"ul"},"Add or update related documentation if necessary."))),Object(i.b)("li",{parentName:"ul"},"Add an entry to the unreleased section of the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/trustlines-protocol/relay/blob/master/CHANGELOG.rst"}),"changelog"),"."),Object(i.b)("li",{parentName:"ul"},"Format your code changes with black. If you setup pre-commit, this will happen automatically on commit\n",Object(i.b)("inlineCode",{parentName:"li"},"black setup.py tests src")),Object(i.b)("li",{parentName:"ul"},"Check your code with ",Object(i.b)("inlineCode",{parentName:"li"},"flake8")," and ",Object(i.b)("inlineCode",{parentName:"li"},"mypy"),". If you setup pre-commit, this will happen automatically on commit.")),Object(i.b)("h2",{id:"changelog"},"Changelog"),Object(i.b)("p",null,"We loosely follow ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://keepachangelog.com/en/0.3.0/"}),"keep a changelog"),".\nAdd a new entry for every version with version number and release date.\nAll changes should start and should be grouped by one of the following keywords:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add: For new features that were added."),Object(i.b)("li",{parentName:"ul"},"Change: For changes in existing functionality."),Object(i.b)("li",{parentName:"ul"},"Deprecate: For already released features which will be removed."),Object(i.b)("li",{parentName:"ul"},"Remove: For removed features."),Object(i.b)("li",{parentName:"ul"},"Fix: For bug fixes."),Object(i.b)("li",{parentName:"ul"},"Security: For security relevant changes.\nPlease also add the marker ",Object(i.b)("inlineCode",{parentName:"li"},"BREAKING")," in case of a breaking change.\nFor the non released changes we keep an unreleased section on top.")),Object(i.b)("h2",{id:"commit-messages"},"Commit messages"),Object(i.b)("p",null,"We loosely follow ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://chris.beams.io/posts/git-commit/"}),"How to write a git commit message"),"\nPlease fulfill at least these important criteria."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add a subject line that summarizes what was done",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Limit the subject to 50 characters"),Object(i.b)("li",{parentName:"ul"},"Separate the subject from the body with a blank line"),Object(i.b)("li",{parentName:"ul"},"Capitalize the subject line"),Object(i.b)("li",{parentName:"ul"},"Use the imperative mood"),Object(i.b)("li",{parentName:"ul"},"Do not end the subject with a period."))),Object(i.b)("li",{parentName:"ul"},"Add a body if necessary to describe what was changed and why this change was necessary.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Wrap the body at 72 characters."),Object(i.b)("li",{parentName:"ul"},"Feel free to link resources via absolute link or issues via ",Object(i.b)("inlineCode",{parentName:"li"},"#<number>")," wherever necessary\nat the end.")))),Object(i.b)("p",null,"Sometimes a good chosen subject line is enough, but please think about if it is really obvious why this change is necessary\nor if some explanation would help."))}u.isMDXComponent=!0},699:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,h=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);