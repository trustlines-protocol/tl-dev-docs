#!/bin/bash

echo "Install the clientlib submodule dependencies"
cd submodules/clientlib && yarn && cd ../../
