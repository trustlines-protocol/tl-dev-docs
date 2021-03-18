(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{350:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(664)),i={title:"Run relay via docker-compose",sidebar_label:"Via docker-compose"},c={unversionedId:"getting_started/docker",id:"getting_started/docker",isDocsHomePage:!1,title:"Run relay via docker-compose",description:"The docker/trustlines directory in the relay",source:"@site/relay/getting_started/docker.md",slug:"/getting_started/docker",permalink:"/relay/next/getting_started/docker",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/relay/getting_started/docker.md",version:"current",sidebar_label:"Via docker-compose",sidebar:"Relay",previous:{title:"Contributing",permalink:"/relay/next/contributing"},next:{title:"Manual Setup",permalink:"/relay/next/getting_started/manual"}},l=[{value:"Services",id:"services",children:[]},{value:"Setup",id:"setup",children:[{value:"Fetch Docker Image",id:"fetch-docker-image",children:[]},{value:"Generate Keys",id:"generate-keys",children:[]},{value:"Copy Compiled Contracts",id:"copy-compiled-contracts",children:[]},{value:"Setup Initial Database",id:"setup-initial-database",children:[]},{value:"Test the Installation",id:"test-the-installation",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/relay/tree/master/docker/trustlines"}),"docker/trustlines")," directory in the relay\nrepository contains the files needed to start a trustlines system via\ndocker-compose. Following these setup instructions will give you a\nsystem, where you can:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"connect to a trustlines laika node via JSONRPC on port 8545"),Object(o.b)("li",{parentName:"ul"},"use the trustlines laika node as a metamask backend"),Object(o.b)("li",{parentName:"ul"},"connect to a relay server on port 5000 and interact with currency\nnetworks running on the chain")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please be aware that you additionally might have to firewall the\ninstalled system if you don't want to expose those services."))),Object(o.b)("h2",{id:"services"},"Services"),Object(o.b)("p",null,"The docker-compose file contains service definitions for the following services:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"db: A service running a postgres server. The postgres files will be\nstored in the ",Object(o.b)("inlineCode",{parentName:"p"},"postgres-data")," docker volume.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"tlbc: A service running a modified OpenEthereum node for the trustlines\nblockchain. The blockchain data will be stored in the\n",Object(o.b)("inlineCode",{parentName:"p"},"blockchain-data")," docker volume.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"index: A service running py-eth-index, which synchronizes certain\ninformation from OpenEthereum into the postgres database.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"relay: The relay server itself."))),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"We need to do some initial setup and configuration for the system to work. You\nneed to provide the ",Object(o.b)("inlineCode",{parentName:"p"},"addresses.json")," file, which should be put in the directory\nalongside the ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file."),Object(o.b)("p",null,"You can find some prepared files for each network in the ",Object(o.b)("inlineCode",{parentName:"p"},"config/")," directory at\nthe root of the relay repository. E.g. if you want to connect to the Trustlines\nBlockchain and index all the currency networks registered by the Trustlines\nfoundation, you can copy it like that:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cp ../../config/addresses_tlbc.json ./addresses.json\n")),Object(o.b)("p",null,"This also includes the references to the identity related contracts. If you\ndeploy your own currency networks, please adapt ",Object(o.b)("inlineCode",{parentName:"p"},"addresses.json")," accordingly."),Object(o.b)("h3",{id:"fetch-docker-image"},"Fetch Docker Image"),Object(o.b)("p",null,"Let's first build and fetch all of the images that we will need\nwithout starting any services with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up --no-start\n")),Object(o.b)("h3",{id:"generate-keys"},"Generate Keys"),Object(o.b)("p",null,"The relay server either needs a OpenEthereum node with an unlocked account\nor it needs a key to sign transactions itself. We will use the latter\nmethod."),Object(o.b)("p",null,"Please generate a keystore file by running the following command. It\nwill ask for a password."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run --rm -it -v $(pwd):/here --entrypoint /opt/relay/bin/deploy-tools trustlines/relay generate-keystore --keystore-path /here/keystore.json\n")),Object(o.b)("p",null,"We also need to store the password in clear text. Please create a file\n",Object(o.b)("inlineCode",{parentName:"p"},"keystore-password.txt")," containing only the password on the first\nline."),Object(o.b)("p",null,"Of course you can also use an existing keyfile, but please do not\nreuse a keyfile from a validator node."),Object(o.b)("h3",{id:"copy-compiled-contracts"},"Copy Compiled Contracts"),Object(o.b)("p",null,"The relay server image includes the ",Object(o.b)("inlineCode",{parentName:"p"},"contracts.json")," file, which contains the\ncompiled currency network contracts. We will need this file for the index\nservice."),Object(o.b)("p",null,"Please copy them to the current directory with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'docker-compose run --rm --no-deps -v $(pwd):/here --entrypoint /bin/bash relay -c "cp /opt/relay/trustlines-contracts/build/contracts.json /here"\n')),Object(o.b)("p",null,"Checkout ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/relay/tutorials/trustlines_system#get-contract-abis"}),"this documentation")," to see\nalternative approaches how to retrieve the compiled contracts file."),Object(o.b)("h3",{id:"setup-initial-database"},"Setup Initial Database"),Object(o.b)("p",null,"We need to setup the database and import the ABIs for the index\nservice by running the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up -d db\nsleep 2\ndocker-compose run --rm index createtables\ndocker-compose run --rm index importabi\n")),Object(o.b)("p",null,"After that you can start the system with ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose up -d"),",\nthough you have to wait for the blockchain node to sync with the\ntrustlines blockchain in order to have a fully functioning system."),Object(o.b)("p",null,"The account you've setup at the beginning will have to pay for\ntransactions. Please fund it with enough coins. You should now be able\nto connect to the local node via metamask to do that."),Object(o.b)("h3",{id:"test-the-installation"},"Test the Installation"),Object(o.b)("p",null,"Please try to run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl http://localhost:5000/api/v1/networks\n")),Object(o.b)("p",null,"It should print some information about the networks as JSON."),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"The relay server provides a REST API. Please read ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/relay/blob/master/docs/RelayAPI.md"}),"relay server API\ndocumentation"),"\nfor more information."),Object(o.b)("p",null,"You can also use the clientlib to access the relay server from\njavascript. Please visit the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/clientlib"}),"clientlib github\nrepository")," for more\ninformation."))}p.isMDXComponent=!0},664:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);