---
title: Custom Icons
---
Within the app, we use an extended icon set based on [Feather Icons](https://feathericons.com/).
The icon component library we use is [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).

Due to some custom icons, the packaged feather icons of the library did not suffice.
Therefore, we are setting a custom icon font as described [here](https://github.com/oblador/react-native-vector-icons#custom-fonts) in combination with the tool [icomoon](https://icomoon.io/app/).

A rough description on how we achieved this was by following this [guide](https://www.reactnative.guide/12-svg-icons-using-react-native-vector-icons/12.1-creating-custom-iconset.html).

## How to browse available icons

Currently, the only way to browse available icons is to visit the website of [icomoon](https://icomoon.io/app/) and import the `ico-moon-config.json`.

1. Go to https://icomoon.io/app.
2. Click on the button **Import Icons**.
3. Select the `ico-moon-config.json` under `/src/shared/components/common/icons/ico-moon-config.json`.

## How to update the icon font

1. Follow the previous steps on how to browse available icons.
2. Add, edit or remove icons and generate the new icon font.
3. Put the generated `icomoon.ttf` into `<PROJECT_ROOT>/assets/fonts`.
4. Rename the generated `selection.json` to `ico-moon-config.json` and put the file into `/src/shared/components/common/icons`.
5. Run `yarn icons` and rebuild the app. This will do two things:

- First, it runs `yarn icons:link`, which will copy the updated `icomoon.ttf` into the android and ios folders.
- Second, it runs `yarn icons:types`, which generates a convenient type definition.
