(window.webpackJsonp=window.webpackJsonp||[]).push([[638],{710:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return s})),n.d(a,"rightToc",(function(){return d})),n.d(a,"default",(function(){return l}));var t=n(3),r=n(8),o=(n(0),n(872)),i={title:"Crashlytics Stack Traces",sidebar_label:"Crashlytics Stack Traces"},s={unversionedId:"tutorials/crashlytics-stack-traces",id:"tutorials/crashlytics-stack-traces",isDocsHomePage:!1,title:"Crashlytics Stack Traces",description:"We use React Native Firebase Crashlytics for error reporting from user devices.",source:"@site/mobileapp/tutorials/crashlytics-stack-traces.md",slug:"/tutorials/crashlytics-stack-traces",permalink:"/mobileapp/tutorials/crashlytics-stack-traces",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/mobileapp/tutorials/crashlytics-stack-traces.md",version:"current",sidebar_label:"Crashlytics Stack Traces",sidebar:"mobileapp",previous:{title:"Getting up & running. The fast way.",permalink:"/mobileapp/tutorials/localhost_with_docker"}},d=[{value:"JS Error Stack Traces",id:"js-error-stack-traces",children:[]},{value:"Decrypt JS Stack Trace",id:"decrypt-js-stack-trace",children:[]}],c={rightToc:d};function l(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We use ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://rnfirebase.io/crashlytics/usage"}),"React Native Firebase Crashlytics")," for error reporting from user devices."),Object(o.b)("h2",{id:"js-error-stack-traces"},"JS Error Stack Traces"),Object(o.b)("p",null,"If a JS error is thrown, the error gets reported to Firebase Console as either the following stack trace format"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"Fatal Exception: com.facebook.react.common.JavascriptException: TypeError: Cannot read property 'toString' of undefined\n\nThis error is located at:\n    in O\n    in k\n    in RCTView\n    in Unknown\n    in A\n    in RNCSafeAreaProvider\n    in Unknown\n    in RCTView\n    in RCTView\n    in n\n    in n\n    in S\n    in b\n    in c\n    in Unknown\n    in C\n    in Unknown\n    in RCTView\n    in RCTView\n    in C, js engine: hermes, stack:\nE@1:888433\nanonymous@1:885992\nS@1:885858\nformat@1:890393\nvalue@1:894241\nvalue@1:3193533\nsi@1:205447\nui@1:205308\nji@1:235506\nja@1:218756\nOa@1:218658\nIa@1:216531\nanonymous@1:190547\nanonymous@1:314918\nun@1:190138\ndn@1:190400\nfn@1:190294\nPe@1:236332\nRe@1:184457\nIe@1:184804\nreceiveTouches@1:230618\nvalue@1:139009\nanonymous@1:137539\nvalue@1:138606\nvalue@1:137497\n\n       at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:79)\n       at java.lang.reflect.Method.invoke(Method.java)\n       at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)\n       at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:151)\n       at com.facebook.react.bridge.queue.NativeRunnable.run(NativeRunnable.java)\n       at android.os.Handler.handleCallback(Handler.java:900)\n       at android.os.Handler.dispatchMessage(Handler.java:103)\n       at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)\n       at android.os.Looper.loop(Looper.java:219)\n       at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:226)\n       at java.lang.Thread.run(Thread.java:929)\n")),Object(o.b)("p",null,"or as"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"Non-fatal Exception: io.invertase.firebase.crashlytics.JavaScriptError: Cannot read property 'toString' of undefined\n       at .E(address at index.android.bundle:1:888433)\n       at .anonymous(address at index.android.bundle:1:885992)\n       at .S(address at index.android.bundle:1:885858)\n       at .apply((native):0:0)\n       at .format(address at index.android.bundle:1:890393)\n       at .value(address at index.android.bundle:1:894241)\n       at .value(address at index.android.bundle:1:3193533)\n       at .si(address at index.android.bundle:1:205447)\n       at .ui(address at index.android.bundle:1:205308)\n       at .ji(address at index.android.bundle:1:235506)\n       at .ja(address at index.android.bundle:1:218756)\n       at .Oa(address at index.android.bundle:1:218658)\n       at .Ia(address at index.android.bundle:1:216531)\n       at .anonymous(address at index.android.bundle:1:190547)\n       at .anonymous(address at index.android.bundle:1:314918)\n       at .un(address at index.android.bundle:1:190138)\n       at .dn(address at index.android.bundle:1:190400)\n       at .fn(address at index.android.bundle:1:190294)\n       at .Pe(address at index.android.bundle:1:236332)\n       at .Re(address at index.android.bundle:1:184457)\n       at .Ie(address at index.android.bundle:1:184804)\n       at .receiveTouches(address at index.android.bundle:1:230618)\n       at .apply((native):0:0)\n       at .value(address at index.android.bundle:1:139009)\n       at .anonymous(address at index.android.bundle:1:137539)\n       at .value(address at index.android.bundle:1:138606)\n       at .value(address at index.android.bundle:1:137497)\n")),Object(o.b)("p",null,"Both formats above are hard to read and impossible to debug.\nTo make them readable, we can use the tool ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/software-mansion-labs/stack-beautifier"}),"stack-beautifier"),"."),Object(o.b)("h2",{id:"decrypt-js-stack-trace"},"Decrypt JS Stack Trace"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure to install the cli tool ",Object(o.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/software-mansion-labs/stack-beautifier"}),"stack-beautifier")," globally.")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"yarn global add stack-beautifier\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Checkout the commit which is tagged with the respective version from the error report on Firebase Crashlytics. E.g. if the error occurred on version 1.11.0 run:")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"git checkout v1.11.0\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Create the same build as in the respective error report on Firebase Crashlytics. E.g. if the JS error occurred on an Android device with the production app run:")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"npx react-native run-android --variant productionRelease\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Locate the source map file. On Android the respective source map files should be under ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/build/generated/sourcemaps/"),". On iOS ",Object(o.b)("inlineCode",{parentName:"p"},"TODO"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("inlineCode",{parentName:"p"},".txt")," file with the obfuscated JS stack trace. Note, that only the JS stack trace is relevant. So if you have a stack trace in the format as in the first example above, you only need to paste"))),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"E@1:888433\nanonymous@1:885992\nS@1:885858\nformat@1:890393\nvalue@1:894241\nvalue@1:3193533\nsi@1:205447\nui@1:205308\nji@1:235506\nja@1:218756\nOa@1:218658\nIa@1:216531\nanonymous@1:190547\nanonymous@1:314918\nun@1:190138\ndn@1:190400\nfn@1:190294\nPe@1:236332\nRe@1:184457\nIe@1:184804\nreceiveTouches@1:230618\nvalue@1:139009\nanonymous@1:137539\nvalue@1:138606\nvalue@1:137497\n")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Pre-process stack trace by running")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"./scripts/preProcessStackTrace.sh <NAME_OF_JS_STACK_TRACE_FILE>\n")),Object(o.b)("p",null,"This makes sure that the JSC stack trace is parsable by stack-beautifier."),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Beautify the stack trace by running")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"stack-beautifier <PATH_TO_SOURCE_MAP> -t <NAME_OF_JS_STACK_TRACE_FILE>\n")),Object(o.b)("p",null,"E.g. if you named the stack trace file ",Object(o.b)("inlineCode",{parentName:"p"},"stack-trace.txt")," and pasted the content from the previous example run"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"stack-beautifier android/app/build/generated/sourcemaps/react/production/release/index.android.bundle.map -t stack-trace.txt\n\n# output\n at toString (./node_modules/numbro/dist/numbro.min.js:1:25029)\n  at d (./node_modules/numbro/dist/numbro.min.js:1:23554)\n  at ./node_modules/numbro/dist/numbro.min.js:1:21460\n  at apply (./node_modules/numbro/dist/numbro.min.js:1:27665)\n  at format (./node_modules/numbro/dist/numbro.min.js:1:32232)\n  at format (./src/shared/components/common/Price.js:79:34)\n  at render (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:4271:21)\n  at finishClassComponent (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:4238:9)\n  at updateClassComponent (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:7085:8)\n  at beginWork$$1 (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:6054:13)\n  at performUnitOfWork (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:6047:21)\n  at workLoopSync (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:5791:10)\n  at callback (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1889:24)\n  at b (./node_modules/scheduler/cjs/scheduler.production.min.js:18:437)\n  at Scheduler_runWithPriority (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1856:9)\n  at runWithPriority (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1886:6)\n  at flushSyncCallbackQueueImpl (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1878:2)\n  at flushSyncCallbackQueue (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:7789:40)\n  at batchedUpdatesImpl (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1015:11)\n  at batchedUpdates (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1040:2)\n  at _receiveRootNodeIDEvent (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1105:6)\n  at apply (./node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js:425:41)\n  at __callFunction (./node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js:112:11)\n  at fn (./node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js:373:8)\n  at __guard (./node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js:111:9)\n")))}l.isMDXComponent=!0},872:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return m}));var t=n(0),r=n.n(t);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var a=r.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=l(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},p=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),p=t,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return n?r.a.createElement(m,s(s({ref:a},c),{},{components:n})):r.a.createElement(m,s({ref:a},c))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);