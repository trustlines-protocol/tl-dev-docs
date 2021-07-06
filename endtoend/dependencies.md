---
title: Dependencies
id: dependencies
---

To manage and pin the (sub)dependencies of the relay server we use
[pip-tools](https://github.com/jazzband/pip-tools/).
We create two requirements files, one for the production environment (:code:`requirements.txt`)
and one for the additional development requirements (:code:`dev-requirements.txt`).
For the dev environment, you have to install both. The production dependencies are derived
from the dependencies defined in :code:`setup.py`.
To add new dependencies, add them to :code:`setup.py` and then run :code:`./compile-requirements`.
The development requirements are derived from :code:`dev-requirements.in`. To add new development
dependencies, add them to this file and then rerun :code:`./compile-requirements`.
To upgrade the dependencies in the created requirement files, check out the available options
for pip-tools and pass them to the compile script. To update all dependencies,
run :code:`./compile-requirements.sh --upgrade`.
