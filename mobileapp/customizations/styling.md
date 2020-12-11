---
title: Themes and styling
---

:::warning
We are using version 3.x of react-native-ui-kitten. Things have changed quite a lot from v3 to v5 and if someone
wants to take on the task of migrating the code base to v5 is more than welcome to issue a PR. 
:::

The UI of the app is supported by the react-native-ui-kitten framework. 

* https://github.com/akveo/react-native-ui-kitten
* https://github.com/akveo/kittenTricks
* https://akveo.github.io/react-native-ui-kitten/#/home

React-native-ui-kitten enables the developer to use sort of an inheriting style system, similar to CSS in react native in a pre-structured approach. Also it supports app wide styles and definitions for e.g. colors, font-styles, font-sizes etc.

## Files

All styling related files can be found under
```
/src/shared/styles
  /types
    buttonTypes.js
    ...
  bootstrapTheme.js
  colors.js
  themes.js
  typography.js
```

### `/types`
This folder contains styles of existing and custom react-native-ui-kitten components. See https://akveo.github.io/react-native-ui-kitten/#/docs/quick-start/customization for more information.

### `bootstrapTheme.js`
Wrapper function to set custom types that were defined in `./types`.

### `colors.js`
All color values are defined and exported in this file.

### `themes.js`
In this file theme dependent style keywords are mapped to colors and sizes.



