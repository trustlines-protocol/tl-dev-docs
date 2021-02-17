(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{351:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(656)),l={title:"Manual Setup"},i={unversionedId:"getting_started/manual",id:"version-0.20.1/getting_started/manual",isDocsHomePage:!1,title:"Manual Setup",description:"This documents describes how to install the trustlines relay server",source:"@site/relay_versioned_docs/version-0.20.1/getting_started/manual.md",slug:"/getting_started/manual",permalink:"/relay/getting_started/manual",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/relay_versioned_docs/version-0.20.1/getting_started/manual.md",version:"0.20.1",sidebar:"version-0.20.1/Relay",previous:{title:"Run relay via docker-compose",permalink:"/relay/getting_started/docker"},next:{title:"Start developing",permalink:"/relay/develop/develop"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Additional Dependencies",id:"additional-dependencies",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This documents describes how to install the trustlines relay server\nfor local development."),Object(o.b)("p",null,"If you're trying to setup a complete trustlines system, please visit\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/relay/tutorials/trustlines_system"}),"Running the trustlines system")),Object(o.b)("p",null,"The relay server provides a REST API. Please visit the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/relay/blob/master/docs/RelayAPI.md"}),"REST API\nDocumentation"),"\npage for more information."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("h4",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"An installation of the relay server requires at least the following\ncomponents:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"PostgreSQL header files"),Object(o.b)("li",{parentName:"ul"},"Python 3.6 or up"),Object(o.b)("li",{parentName:"ul"},"pip")),Object(o.b)("h4",{id:"installation-on-ubuntu"},"Installation on Ubuntu"),Object(o.b)("p",null,"To install the relay server on Ubuntu 18.04, start by installing the pre-requisites\nwith the following command"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt install build-essential python3-dev libsecp256k1-dev python3-virtualenv virtualenv pkg-config libssl-dev automake autoconf libtool git libpq-dev\n")),Object(o.b)("h4",{id:"setup"},"Setup"),Object(o.b)("p",null,"To install the relay, start by cloning the repository"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/trustlines-protocol/relay.git\ncd relay\n")),Object(o.b)("p",null,"Then create and activate a fresh virtualenv::"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"virtualenv -p python3 venv\nsource venv/bin/activate\n")),Object(o.b)("p",null,"Finally, to install all needed dependencies to run the relay, use the following command"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"pip install -r requirements.txt -e .\n")),Object(o.b)("p",null,"You can verify that the relay is correctly installed by running ",Object(o.b)("inlineCode",{parentName:"p"},"tl-relay --help"),"\nto get an overview of available options."),Object(o.b)("h2",{id:"additional-dependencies"},"Additional Dependencies"),Object(o.b)("p",null,"In addition to having installed the relay, you will need a blockchain\nnode connected to a chain with deployed ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/contracts"}),"trustlines contracts"),"\nto interact with. You can go to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/contracts"}),"contracts repository"),"\nto see how to deploy new trustlines contracts, or you may use the provided\n",Object(o.b)("inlineCode",{parentName:"p"},"addresses.json")," files in ",Object(o.b)("inlineCode",{parentName:"p"},"config/")," containing addresses of deployed contracts on the Trustlines Blockchain by\ncopying them here"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cp config/addresses_tlbc.json addresses.json\n")),Object(o.b)("p",null,"You may use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/blockchain"}),"blockchain repository"),"\nto get a Trustlines Blockchain node running."),Object(o.b)("p",null,"The relay also uses a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/py-eth-index"}),"py-eth-index"),"\ninstance that index events that the relay will be able to process and serve to its users."))}p.isMDXComponent=!0},656:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(h,i(i({ref:t},c),{},{components:n})):a.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);