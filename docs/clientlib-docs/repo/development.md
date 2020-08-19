---
layout: clientlib
title: The Relay Server
---

## Start developing

If you want to start developing on the clientlib, make sure you can run the tests:

```bash
# All tests
yarn test

# Unit tests
yarn test:unit

# Integration tests
yarn test:integration

# end2end tests
yarn test:e2e
```

The end2end tests are used to test how different components of the Trustlines protocol run together.
You need to have all components up before running them.
A convenient way to achieve this is by using our [end2end](https://github.com/trustlines-protocol/end2end) setup.

## Contributing

Contributions are highly appreciated, but please check our [contributing guidelines](CONTRIBUTING.md).

## Release

To release a new version simply run:

```
yarn bump [patch|minor|major]
```

This will update the version in the `package.json` file, add a git tag with the updated version to the current commit and eventually push to github.
Subsequently, CircleCI will publish the tagged version to npm.
Make sure to update the changelog accordingly.

Note that we also fluidly publish the most recent commit on the `master` branch using [fluid-publish](https://github.com/fluid-project/fluid-publish).

## Change log

See [CHANGELOG](./CHANGELOG.md)

## Documentation

To generate the [typedoc](https://typedoc.org/) API reference documentation for this library run `yarn doc`.
This will generate output in the `docs` folder.
