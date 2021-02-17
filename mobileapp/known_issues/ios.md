---
title: iOS
---

## System Setup and Preparation

* Setup AppStore with your Apple ID
* Install XCode & XCode Commandline Utilities
* Install brew (get instruction from [https://brew.sh](https://brew.sh) )
* Install Cocoa Pods `sudo gem install cocoapods`
* Install git `brew install git`
* Install coreutils `brew install coreutils`
* needed to run `sudo xcode-select --switch /Applications/Xcode.app`
* Install watchman `brew install watchman`
* Install bundler `sudo gem install bundler`
* Install pods in ios dir `cd ios; pod install`

## For Internal Contributors
* Setup fastlane for ios distribution `bundle exec fastlane ios profiles` ( look at the 1password vault for passwords )
* Setup fastlane for local development `bundle exec fastlane match development -a beercoin.io.mobileapp.staging` `bundle exec fastlane match development -a beercoin.io.mobileapp.staging`

## Build

We have 3 different targets to build: 

* develop
* staging
* production

Each target can be build in `debug` or `release` config.

The __Build Phases__ tab includes custom steps, that are unique to this project:

* `Version iOS Build`: Reads the current app version from the `package.json` and updates the xcode project
* `Copy Firbase Environment File`: It is a little tricky to use multiple Firebase environments in one project. We copy a matching firebase env file while building to accomplish this. _( Notice the difference between targets here )_
