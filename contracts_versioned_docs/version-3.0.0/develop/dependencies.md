---
title: Dependencies
---

To manage and pin the (sub)dependencies we use pip-tools. We create two requirements files,
one for the production environment (`py-deploy/requirements.txt`) and one for all
development requirements (`dev-requirements.txt`).   

The production dependencies are derived from the dependencies defined in `py-deploy/setup.py`.  
To add new dependencies, add them to `py-deploy/setup.py` and then run `./compile-requirements`.  

The development requirements are derived from `dev-requirements.in`.  
To add new development dependencies, add them to this file and
then rerun `./compile-requirements.sh`.  

To upgrade the dependencies in the created requirement files,
check out the available options for pip-tools and pass them to the compile script.
To update all dependencies, run `./compile-requirements.sh --upgrade`.
