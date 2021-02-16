---
title: Javascript
---

## Common Issues

* module `stream` can not be found: run `yarn` in root dir. The postInstall script was not triggered after a new node module was installed. This happens e.g. after running `yarn upgrade-interactive`

* `Error: Unable to resolve module`. Make sure __watchman__ is installed and follow the instruction from the error message: 
  1. Clear watchman watches: `watchman watch-del-all`.
  2. Delete the `node_modules` folder: `rm -rf node_modules && npm install`.
  3. Reset Metro Bundler cache: `rm -rf /tmp/metro-bundler-cache-*` or `npm start -- --reset-cache`.
 
 
## Build process
Start the bundler for development with: `yarn run start`

The JS bundle can be build with: `yarn run build:ios` or `yarn run build:android`. This is usually not necessary, since the bundle is created in the deploy process.



