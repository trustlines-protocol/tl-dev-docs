---
title: Pre-commit hooks
---

You should consider initializing the pre-commit hooks. The
installed git pre-commit hooks run flake8 and black among other things
when committing changes to the git repository.
Install them with

```bash
pre-commit install
```

You can run them on all files with::
```bash
pre-commit run -a
```
