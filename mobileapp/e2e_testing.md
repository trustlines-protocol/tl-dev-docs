---
title: E2E Testing
---

We use the Detox library for end-to-end testing. 
The tests are located in the e2e directory and additionally to this we mock some app files. The mocked files
have the `.e2e.js` extension and the metro builder loads them in tests when started with:
```
RN_SRC_EXT=e2e.js react-native start
```

To run the tests one need first to build the app for testing:
```
detox build -c config.name
```

The available configs can be found in the `package.json` file under `detox.configuration`. 
The detox configs in `package.json` specify the emulators that the test expects to run on, but one can provide
a different emulator by specifying the `-n EmulatorName` flag on the command line.

The develop configs communicates with a local relay server and chain started with the following repo:
https://github.com/trustlines-protocol/end2end/

You need to run the relay server and chain with the following command:
```
./run-e2e.sh -b
```

our developConfig in src/shared/config/index.e2e.js specifies the relay host with localhost. This works fine on the
iOS simulator, but on the Android Emulator you'll have to do port forwarding in order for your emulator to see your host.
You can do:

```
adb -s simulator_name reverse tcp:5000 tcp:5000
```

For more detox options refer to the detox-cli docs: https://github.com/wix/Detox/blob/master/docs/APIRef.DetoxCLI.md

# CircleCI

CircleCI is configured to run our end to end tests on every commit. 

If you want to configure your own CircleCI instance you need to provide the following environment variables:
```
ANDROID_KEYSTORE_DEVELOP_BASE64	
ANDROID_KEYSTORE_RELEASE_BASE64
CACHE_VERSION
ENV_DEVELOP_BASE64
ENV_E2E_BASE64
ENV_PRODUCTION_BASE64
ENV_STAGING_BASE64
FASTLANE_ENV_SECRET_BASE64
FASTLANE_PASSWORD
FIREBASE_CI_TOKEN
FIREBASE_SERVICES_FILE_ANDROID_DEVELOP_JSON
FIREBASE_SERVICES_FILE_ANDROID_PRODUCTION_JSON
FIREBASE_SERVICES_FILE_ANDROID_STAGING_JSON
FIREBASE_SERVICES_FILE_IOS_DEVELOP_PLIST
FIREBASE_SERVICES_FILE_IOS_PRODUCTION_PLIST
FIREBASE_SERVICES_FILE_IOS_STAGING_PLIST
GOOGLE_PLAY_STORE_JSON
MATCH_PASSWORD
MYAPP_RELEASE_KEY_ALIAS
MYAPP_RELEASE_KEY_PASSWORD	
MYAPP_RELEASE_STORE_FILE	
MYAPP_RELEASE_STORE_PASSWORD
NOTIFEE_CONFIG_JSON
```

Our CircleCI config generates the keystore files out of the base64 environment variables with the following command:

```
$ base64 -i path_to_keystore_file -o path_to_outhput_file
```

Prefer the base64 command over openssl as for some reason openssl ads a newline in the output and then decoding
the base64 text on CircleCI doesn't work.

## Artifacts
We record logs, screenshots on before and after test as well as videos on failing tests. Those can be found in the
artifacts directory.
