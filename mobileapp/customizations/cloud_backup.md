---
title: Cloud Backup
---

The app allows the user to create a backup of private data that can not be restored from the relay server, e.g. off-chain messages, contacts, activated currencies.
The user can either create a backup as plain text or save it on a cloud provider of their choice.
This document aims to give an overview on the used libraries to enable this feature.

## Supported Providers

We currently support following cloud providers:

- Google Drive
- iCloud Drive (only iOS)

## Used Libraries

Following libraries are used to enable the cloud backup feature:

- [react-native-fs](https://github.com/itinance/react-native-fs): Enables file system access like `fs` in node.js.
- [react-native-cloud-fs](https://github.com/npomfret/react-native-cloud-fs): Used to interact with iCloud Drive Documents.
- [react-native-google-signin](https://github.com/react-native-google-signin/google-signin): Used to retrieve a valid token for a Google account to interact with Google Drive REST API.
- [react-native-google-drive-api-wrapper](https://github.com/RobinBobin/react-native-google-drive-api-wrapper): REST API wrapper for easier interaction with the Google Drive API.

## Approach

If the user creates a cloud backup, roughly the following flow is triggered:

1. Check if user is logged in.
2. Create a local backup file.
3. Copy the local backup file to the respective cloud.

## Implementation

The implementation of this feature can be found in the source code under:

- `/src/shared/helpers/cloud/*`
- `/src/shared/helpers/restore/*`
- `/src/shared/helpers/hooks/googleAuth.js`
- `/src/shared/helpers/hooks/backup.js`

## Known Issues

### iCloud Drive

It is currently not possible to check whether a valid Apple ID is logged in on the iPhone or not.
So if a user is logged out and tries to create a backup on iCloud Drive, the app errors on step 3.
