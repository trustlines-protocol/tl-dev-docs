---
title: Release
---

For versioning we use [setuptools-scm](https://pypi.org/project/setuptools-scm/). This means the version number is
derived from git tags. To release a new version of the contracts on PyPI or Docker Hub, simply tag a commit with a valid version
number either via git, or from [github](https://github.com/trustlines-protocol/contracts/releases/new).
Make sure to update the changelog accordingly and add all changes since the last released version.

## Pre-commit hooks

You should consider initializing the pre-commit hooks. The
installed git pre-commit hooks run flake8 and black among other things
when committing changes to the git repository

```bash
pre-commit install
pre-commit run -a
```
