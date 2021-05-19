---
title: Release
---

:::note
This section is for maintainers of the clientlib repository.
:::

To release a new version simply run:

```
yarn bump [patch|minor|major]
```

This will update the version in the `package.json` file, add a git tag with the updated version to the current commit and eventually push to github.
Subsequently, CircleCI will publish the tagged version to npm.
Make sure to update the changelog accordingly.

Note that we also fluidly publish the most recent commit on the `master` branch using [fluid-publish](https://github.com/fluid-project/fluid-publish).
