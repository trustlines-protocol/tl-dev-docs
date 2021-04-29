---
title: Dependencies
---

To manage and pin the (sub)dependencies of the relay server we use
[pip-tools](https://github.com/jazzband/pip-tools).
We create two requirements files, one for the production environment (`requirements.txt`)
and one for the additional development requirements (`dev-requirements.txt`).
For the dev environment, you have to install both. The production dependencies are derived
from the dependencies defined in `setup.py` and constraint by `constraints.in`.
To add new dependencies, add them to `setup.py` and then run 
```bash
./compile-requirements
```
If wrong subdependencies create problems, you can restrict them with `constraints.in`.
The development requirements are derived from `dev-requirements.in`. To add new development
dependencies, add them to this file and then rerun 
```bash
./compile-requirements
```

To upgrade the dependencies in the created requirement files, check out the available options
for pip-tools and pass them to the compile script. To update all dependencies,
run
```bash
./compile-requirements.sh --upgrade
```
