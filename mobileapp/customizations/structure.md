---
title: Structure
---

__We aim to be consistent.__

We aim, but we are not always successful. As it is often the case with big projects developed over the span of several years - things are
in flux. A pattern used at one particular point of time proves to be hard to use when things scale or requirements change.

This doc is a snapshot of the things learned over the past couple of years. 

## Folder structure

All files directly relevant to the app are located in `/src`. So far everything is shared so all files are located in `/src/shared`.

A babel plugin to rewrite module paths is used (`babel-plugin-module-resolver`) to enable non-relative file imports.
We currently set the root to `/src/shared` in `babel.config.js`, so that we can import as follows

```js
// in `/src/shared/some-folder/some-file.js`

import { MyComponent } from 'components/MyComponent'  // absolute path `/src/shared/components/MyComponent`
// instead of 
import { MyComponent } from '../../components/MyComponent'
```

*see `babel.config.js` for details*

## State

This react-native app uses `redux` and `redux-sagas` to hold and manipulate it's state and handle side-effects.

* http://redux.js.org/
* https://redux-saga.js.org/

[More on state](state)

## Screens & Navigation

The app uses `react-navigation` v4 to structure its content and make it accessible. All navigators (base for the structure of screens) and screens are located in `/src/shared/navigation`. However, not all code for navigation is currently here, even though it should be.

A js file in `/src/shared/screens` represents a single page / view / screen in the app and is used as a `redux container`. In the past, it was decided to prepare all data needed for the view in this component. This design that all data needs to be fetched here from the store does not make sense together with `react-redux` so we will try to move away from that, and have more `redux containers` further down the component hierarchy. 

### Navigators

Currently, there are three navigators: `StartNavigator`, `StackNavigator` and `SwitchNavigator`.

`SwitchNavigator` is responsible for navigating the user either to the screens in `StartNavigator` or `StackNavigator`

`StartNavigator` includes all screens necessary for onboarding the user and initial actions in the app, i.e.:
  * Start screen
  * Sign up / Log in
  * Select user
  * Create user
  * Import user

`StackNavigator` in combination with `TabNavigator` includes the screens of the app once its setup is finished, i.e.:
  * Home screen
  * Contacts
  * Account
  * Send / Receive
  * Setting up trustlines

## Components

At the begining the components were used by the principles of the atomic design pattern (http://patternlab.io/). With the
time we realized that this is hard to maintain and moved away from it. Currently, we have container components and presentational
components. The container components are responsible for dealing with the state and the presentational components for 
displaying the data. 

## Themes and styling

The app utilizes and extends the UI framework [react-native-ui-kitten](https://github.com/akveo/react-native-ui-kitten) for styling components. See [styling](./styling) for more details.
