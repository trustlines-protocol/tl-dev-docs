# Trustlines Developer docs

This repository holds the sources for the [trustlines developer docs website](https://dev.trustlines.network). 
The docs here aim to be the ultimate source of truth for the whole trustlines project. 
We are using [docusaurus](https://v2.docusaurus.io/) to build the website of the docs, but you don't need to
understand how docusaurus works in order to update the docs. Just find the .md file that needs modification/improvements, modify it and submit a PR request. If approved our automatic publishing process will kick-in and will build a new version of this website and deploy it. 

## Docs structure
Currently, this repository is structured to allow versioning of all docs, although currently this is only done for the clientlib docs. 

The docs for every trustline project(blockchain, clientlib etc.) are organized in folders with the respective names of the projects. When we later in this docs mention `DOC_PLUGIN_ID` we refer to the id specified in the plugins section of `docusaurus.config.js` for the `@docusaurus/plugin-content-docs` plugin. 


## Working with docusaurus
### Installation

```console
yarn install
```

### Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Versioning Docs
If the content is ready to be frozen as a version run:
```
yarn run docusaurus docs:version:DOC_PLUGIN_ID <version>
```

The currently available values for DOC_PLUGIN_ID can be found in the docusaurus.config.js file.

Running this command will generate a DOC_PLUGIN_ID_versioned_docs/version folder and will copy the docs from the DOC_PLUGIN_ID folder to it. If you need to make modifications to the docs of that version you now need to make the modifications in the  DOC_PLUGIN_ID_versioned_docs/version folder. 

**Note on versions**

Keep the number of versions small. The more versions we have the longer the build times. The latest version + the last 2 major versions is a good rule of thumb.

#### Delete an existing version
1. Remove the version from the `DOC_PLUGIN_ID_versions.json` file.
2. Delete the versioned docs directory. Example: `DOC_PLUGIN_ID_versioned_docs/version-1.8.0`
3. Delete the versioned sidebar file. Example `DOC_PLUGIN_ID_versioned_sidebars/version-1.8.0-sidebars.json`

### Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Notes on clientlib/api
**Never modify the clientlib/api docs directly!**

The clientlib/api folder is created automatically by the `docusaurus-plugin-typedoc` plugin. For that plugin to work the [clientlib repo](https://github.com/trustlines-protocol/clientlib/) is included as a git submodule. Docs are then generated when you run `yarn start` or `yarn build`. If you need to make modifications to the clientlib/api docs - fix the corresponding file in the clientlib repo. Once the change
there gets approved you need to pull the latest changes from the clientlib repo in the submodule and rebuild
the docs.

## Markdown
For a full list of supported markdown syntax refer to the [docusaurus docs](https://v2.docusaurus.io/docs/2.0.0-alpha.69/markdown-features)
