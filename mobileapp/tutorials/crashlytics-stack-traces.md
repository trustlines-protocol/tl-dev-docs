---
title: Crashlytics Stack Traces
sidebar_label: Crashlytics Stack Traces
---

We use [React Native Firebase Crashlytics](https://rnfirebase.io/crashlytics/usage) for error reporting from user devices.

## JS Error Stack Traces

If a JS error is thrown, the error gets reported to Firebase Console as either the following stack trace format

```
Fatal Exception: com.facebook.react.common.JavascriptException: TypeError: Cannot read property 'toString' of undefined

This error is located at:
    in O
    in k
    in RCTView
    in Unknown
    in A
    in RNCSafeAreaProvider
    in Unknown
    in RCTView
    in RCTView
    in n
    in n
    in S
    in b
    in c
    in Unknown
    in C
    in Unknown
    in RCTView
    in RCTView
    in C, js engine: hermes, stack:
E@1:888433
anonymous@1:885992
S@1:885858
format@1:890393
value@1:894241
value@1:3193533
si@1:205447
ui@1:205308
ji@1:235506
ja@1:218756
Oa@1:218658
Ia@1:216531
anonymous@1:190547
anonymous@1:314918
un@1:190138
dn@1:190400
fn@1:190294
Pe@1:236332
Re@1:184457
Ie@1:184804
receiveTouches@1:230618
value@1:139009
anonymous@1:137539
value@1:138606
value@1:137497

       at com.facebook.react.modules.core.ExceptionsManagerModule.reportException(ExceptionsManagerModule.java:79)
       at java.lang.reflect.Method.invoke(Method.java)
       at com.facebook.react.bridge.JavaMethodWrapper.invoke(JavaMethodWrapper.java:372)
       at com.facebook.react.bridge.JavaModuleWrapper.invoke(JavaModuleWrapper.java:151)
       at com.facebook.react.bridge.queue.NativeRunnable.run(NativeRunnable.java)
       at android.os.Handler.handleCallback(Handler.java:900)
       at android.os.Handler.dispatchMessage(Handler.java:103)
       at com.facebook.react.bridge.queue.MessageQueueThreadHandler.dispatchMessage(MessageQueueThreadHandler.java:27)
       at android.os.Looper.loop(Looper.java:219)
       at com.facebook.react.bridge.queue.MessageQueueThreadImpl$4.run(MessageQueueThreadImpl.java:226)
       at java.lang.Thread.run(Thread.java:929)
```

or as

```
Non-fatal Exception: io.invertase.firebase.crashlytics.JavaScriptError: Cannot read property 'toString' of undefined
       at .E(address at index.android.bundle:1:888433)
       at .anonymous(address at index.android.bundle:1:885992)
       at .S(address at index.android.bundle:1:885858)
       at .apply((native):0:0)
       at .format(address at index.android.bundle:1:890393)
       at .value(address at index.android.bundle:1:894241)
       at .value(address at index.android.bundle:1:3193533)
       at .si(address at index.android.bundle:1:205447)
       at .ui(address at index.android.bundle:1:205308)
       at .ji(address at index.android.bundle:1:235506)
       at .ja(address at index.android.bundle:1:218756)
       at .Oa(address at index.android.bundle:1:218658)
       at .Ia(address at index.android.bundle:1:216531)
       at .anonymous(address at index.android.bundle:1:190547)
       at .anonymous(address at index.android.bundle:1:314918)
       at .un(address at index.android.bundle:1:190138)
       at .dn(address at index.android.bundle:1:190400)
       at .fn(address at index.android.bundle:1:190294)
       at .Pe(address at index.android.bundle:1:236332)
       at .Re(address at index.android.bundle:1:184457)
       at .Ie(address at index.android.bundle:1:184804)
       at .receiveTouches(address at index.android.bundle:1:230618)
       at .apply((native):0:0)
       at .value(address at index.android.bundle:1:139009)
       at .anonymous(address at index.android.bundle:1:137539)
       at .value(address at index.android.bundle:1:138606)
       at .value(address at index.android.bundle:1:137497)
```

Both formats above are hard to read and impossible to debug.
To make them readable, we can use the tool [stack-beautifier](https://github.com/software-mansion-labs/stack-beautifier).

## Decrypt JS Stack Trace

1. Make sure to install the cli tool [stack-beautifier](https://github.com/software-mansion-labs/stack-beautifier) globally.

```bash
yarn global add stack-beautifier
```

2. Checkout the commit which is tagged with the respective version from the error report on Firebase Crashlytics. E.g. if the error occurred on version 1.11.0 run:

```bash
git checkout v1.11.0
```

3. Create the same build as in the respective error report on Firebase Crashlytics. E.g. if the JS error occurred on an Android device with the production app run:

```bash
npx react-native run-android --variant productionRelease
```

4. Locate the source map file. On Android the respective source map files should be under `android/app/build/generated/sourcemaps/`. On iOS `TODO`.

5. Create a `.txt` file with the obfuscated JS stack trace. Note, that only the JS stack trace is relevant. So if you have a stack trace in the format as in the first example above, you only need to paste

```
E@1:888433
anonymous@1:885992
S@1:885858
format@1:890393
value@1:894241
value@1:3193533
si@1:205447
ui@1:205308
ji@1:235506
ja@1:218756
Oa@1:218658
Ia@1:216531
anonymous@1:190547
anonymous@1:314918
un@1:190138
dn@1:190400
fn@1:190294
Pe@1:236332
Re@1:184457
Ie@1:184804
receiveTouches@1:230618
value@1:139009
anonymous@1:137539
value@1:138606
value@1:137497
```

6. Pre-process stack trace by running

```bash
./scripts/preProcessStackTrace.sh <NAME_OF_JS_STACK_TRACE_FILE>
```

This makes sure that the JSC stack trace is parsable by stack-beautifier.

6. Beautify the stack trace by running

```bash
stack-beautifier <PATH_TO_SOURCE_MAP> -t <NAME_OF_JS_STACK_TRACE_FILE>
```

E.g. if you named the stack trace file `stack-trace.txt` and pasted the content from the previous example run

```bash
stack-beautifier android/app/build/generated/sourcemaps/react/production/release/index.android.bundle.map -t stack-trace.txt

# output
 at toString (./node_modules/numbro/dist/numbro.min.js:1:25029)
  at d (./node_modules/numbro/dist/numbro.min.js:1:23554)
  at ./node_modules/numbro/dist/numbro.min.js:1:21460
  at apply (./node_modules/numbro/dist/numbro.min.js:1:27665)
  at format (./node_modules/numbro/dist/numbro.min.js:1:32232)
  at format (./src/shared/components/common/Price.js:79:34)
  at render (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:4271:21)
  at finishClassComponent (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:4238:9)
  at updateClassComponent (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:7085:8)
  at beginWork$$1 (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:6054:13)
  at performUnitOfWork (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:6047:21)
  at workLoopSync (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:5791:10)
  at callback (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1889:24)
  at b (./node_modules/scheduler/cjs/scheduler.production.min.js:18:437)
  at Scheduler_runWithPriority (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1856:9)
  at runWithPriority (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1886:6)
  at flushSyncCallbackQueueImpl (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1878:2)
  at flushSyncCallbackQueue (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:7789:40)
  at batchedUpdatesImpl (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1015:11)
  at batchedUpdates (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1040:2)
  at _receiveRootNodeIDEvent (./node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod.js:1105:6)
  at apply (./node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js:425:41)
  at __callFunction (./node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js:112:11)
  at fn (./node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js:373:8)
  at __guard (./node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js:111:9)
```
