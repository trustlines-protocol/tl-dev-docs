---
layout: clientlib
title: Client library development
---

## Development

To start developing install the development dependencies into a venv with
`pip install -c constraints.txt -r requirements.txt`

### Compiling

The contracts can be compiled with
`populus compile`

### Testing

For testing we use pytest with an ethereum tester plugin. The tests can be run with
`python -m pytest tests`
