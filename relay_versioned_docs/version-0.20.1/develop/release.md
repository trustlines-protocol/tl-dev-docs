---
title: Release
---

:::note
This section is for maintainers of the relay repository.
:::

For versioning we use [setuptools-scm](https://pypi.org/project/setuptools-scm). This means the version number is
derived from git tags. To release a new version of the relay on PyPI or Docker Hub, simply tag a commit with a valid version
number either via git, or from [github](https://github.com/trustlines-protocol/relay/releases/new).
Make sure to update the [changelog](https://github.com/trustlines-protocol/relay/blob/master/CHANGELOG.rst) accordingly and add all changes since the last released version.
