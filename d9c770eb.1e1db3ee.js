(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{644:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),o=(n(0),n(735)),i={title:"Deployment"},l={unversionedId:"deploy",id:"deploy",isDocsHomePage:!1,title:"Deployment",description:"This docs are for maintainers of the app or for people interested in creating a similar",source:"@site/mobileapp/deploy.md",slug:"/deploy",permalink:"/mobileapp/deploy",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/mobileapp/deploy.md",version:"current",sidebar:"mobileapp",previous:{title:"Localizations",permalink:"/mobileapp/localizations"},next:{title:"Getting up & running. The fast way.",permalink:"/mobileapp/tutorials/localhost_with_docker"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Android Credentials",id:"android-credentials",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Google Play Store",id:"google-play-store",children:[]},{value:"Apple AppStore",id:"apple-appstore",children:[]}],c={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This docs are for maintainers of the app or for people interested in creating a similar\ndeployment."))),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Make sure to install the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://firebase.google.com/docs/cli"}),"Firebase CLI")," and the required Ruby gems before continuing."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bundle install --path vendor/bundle\n")),Object(o.b)("h2",{id:"android-credentials"},"Android Credentials"),Object(o.b)("p",null,"To deploy to the Google Play Store or Firebase App Distribution you need the respective credentials."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Get keyfiles from Google Drive - ",Object(o.b)("inlineCode",{parentName:"li"},"AppSecrets.kdbx")," (Trustlines/Secrets) - ",Object(o.b)("inlineCode",{parentName:"li"},"Trustlines AppSecrets Key.key")," (Temp Secrets)"),Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"AppSecrets.kdbx")," in ",Object(o.b)("strong",{parentName:"li"},"KeePass")," with key ",Object(o.b)("inlineCode",{parentName:"li"},"Trustlines AppSecrets Key.key")),Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"Android PlayStore Keystore")),Object(o.b)("li",{parentName:"ol"},"Download ",Object(o.b)("inlineCode",{parentName:"li"},"google_play_store.json")," and ",Object(o.b)("inlineCode",{parentName:"li"},"trustlines-release-key.keystore")," and ",Object(o.b)("inlineCode",{parentName:"li"},".env.secret")," to ",Object(o.b)("inlineCode",{parentName:"li"},"mobileapp/keyfiles")),Object(o.b)("li",{parentName:"ol"},"Make sure ",Object(o.b)("inlineCode",{parentName:"li"},".env.secret")," has a leading dot")),Object(o.b)("h2",{id:"deployment"},"Deployment"),Object(o.b)("p",null,"You can either use the wizard by running"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn run deploy\n")),Object(o.b)("p",null,"or directly ",Object(o.b)("inlineCode",{parentName:"p"},"fastlane")," by running"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bundle exec fastlane <OS> deploy_<FLAVOR>\n")),Object(o.b)("p",null,"Running the wizard gives you a prompt to specify additional options like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"select an OS (Android / iOS)"),Object(o.b)("li",{parentName:"ul"},"select a target (develop/staging/production)"),Object(o.b)("li",{parentName:"ul"},"to bump the version before deploying")),Object(o.b)("p",null,"The Android app will be uploaded to the ",Object(o.b)("strong",{parentName:"p"},"Internal testing")," stage and can be promoted to higher stages from here."),Object(o.b)("p",null,"The iOS app is uploaded to the ",Object(o.b)("strong",{parentName:"p"},"TestFlight stage")," of the app store and can be submitted for testing/approval by Apple from here."),Object(o.b)("h2",{id:"google-play-store"},"Google Play Store"),Object(o.b)("p",null,"All configuration and uploaded apps can be found at: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://play.google.com/apps/publish"}),"Google Play Store Console")),Object(o.b)("h2",{id:"apple-appstore"},"Apple AppStore"),Object(o.b)("p",null,"All configuration and uploaded apps can be found at: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://appstoreconnect.apple.com"}),"AppStore Connect")))}b.isMDXComponent=!0},735:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);