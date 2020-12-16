---
title: Deployment
---

:::note
This docs are for maintainers of the app or for people interested in creating a similar
deployment.
:::

## Prerequisites

Make sure to install the [Firebase CLI](https://firebase.google.com/docs/cli) and the required Ruby gems before continuing.

```bash
bundle install --path vendor/bundle
```

## Android credentials

To deploy to the Google Play Store or Firebase App Distribution you need the respective credentials.

1. Get keyfiles from Google Drive - `AppSecrets.kdbx` (Trustlines/Secrets) - `Trustlines AppSecrets Key.key` (Temp Secrets)
2. Open `AppSecrets.kdbx` in **KeePass** with key `Trustlines AppSecrets Key.key`
3. Open `Android PlayStore Keystore`
4. Download `google_play_store.json` and `trustlines-release-key.keystore` and `.env.secret` to `mobileapp/keyfiles`
5. Make sure `.env.secret` has a leading dot

## Deployment

You can either use the wizard by running

```bash
yarn run deploy
```

or directly `fastlane` by running

```bash
bundle exec fastlane <OS> deploy_<FLAVOR>
```

Running the wizard gives you a prompt to specify additional options like:

- select an OS (Android / iOS)
- select a target (develop/staging/production)
- to bump the version before deploying

The Android app will be uploaded to the **Internal testing** stage and can be promoted to higher stages from here.

The iOS app is uploaded to the **TestFlight stage** of the app store and can be submitted for testing/approval by Apple from here.

## Google Play Store

All configuration and uploaded apps can be found at: [Google Play Store Console](https://play.google.com/apps/publish)

## Apple AppStore

All configuration and uploaded apps can be found at: [AppStore Connect](https://appstoreconnect.apple.com)
