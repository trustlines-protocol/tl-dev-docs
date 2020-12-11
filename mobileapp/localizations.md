---
title: Localizations
---

:::note
This doc is for maintainers or for people who want to setup a similar translation process with a copy of the trustlines app.
:::
The Trustlines mobile app uses the localization framework [FBT](https://facebookincubator.github.io/fbt/) and the translation platform [Crowdin](https://crowdin.com/) for supporting different languages. The utility scripts in `mobileapp/translation/scripts` are used for enabling a smooth integration of the mentioned tools. The scripts `crowdinToFbt.js`, `fbtToCrowdin.js` and `splitTranslation.js` are copied from the [Origin Protocol mobile app repository](https://github.com/OriginProtocol/origin/tree/master/mobile) and modified to our needs. The respective license can be found in [`mobileapp/translation/LICENSE`](./LICENSE).

## Prerequisites

Before being able to start the translation flow, make sure you did the following:

- Install [Crowdin CLI tool](https://support.crowdin.com/cli-tool/).
- Create a `crowdin.yml` file by copying or renaming `crowdin.yml.dist` and set your `project_id` and `api_token` there. The values can be found on the Crowdin platform.

## Translation flow

Run `yarn translate` to execute the whole translation flow. The command combines the following steps:

### Collect strings to be translated

1. `yarn fbt:manifest`: Generates FBT enum and source manifest files -> `.enum_manifest.json` and `.src_manifest.json`
2. `yarn fbt:collect`: Collects FTB translatable strings from source files -> `.source_strings.json`
3. `yarn fbt:crowdin`: Runs `node translation/scripts/fbtToCrowdin.js` and converts `.source_strings.json` into simple key-value json readable by Crowdin -> `translation/crowdin/source/all-messages.json`

### Upload collected strings to Crowdin

4. `yarn crowdin:upload`: Runs `crowdin upload sources` and uploads all source files under `translation/crowdin/source` to Crowdin.

### Import translated strings into mobile app

5. `yarn crowdin:download`: Runs `crowdin download` and downloads all available translations files from Crowdin into `translation/crowdin/translations`.
6. `yarn crowdin:fbt`: Runs `translation/scripts/crowdinToFbt.js` and converts respective `translation/crowdin/translations/all-messages_<language>.json` files to FBT-readable files in `translation/fbt/<language>.json`
7. `yarn fbt:translate`: Combines translations in `translation/fbt/<language>.json` to `.translated_fbts.json`
8. `yarn fbt:split`: Runs `translation/scripts/splitTranslations.js` and splits `.translated_fbts.json` into respective translation files in `src/shared/i18n/<language>.json`
9. `yarn crowdin:mdjson`: Runs `translation/scripts/mdToJson.js` and merges all markdown files in `translation/crowdin/translations/md` to a consumable JSON file in `src/shared/i18n/mdTranslations.js`

### Subset commands

You can also run steps 1 - 4 separately from steps 5 - 9.

- `yarn translate:upload`: Runs steps 1 - 4.
- `yarn translate:download`: Runs steps 5 - 9.

### Overriding .md files

If you want to override any of the .md files just create a copy of the file and change the .md extension to .override.md. Afterwards
run `yarn crowdin:mdjson` this will read all .md files and will override the translation from the original file with the
content in the .override.md file.
