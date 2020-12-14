#!/bin/bash

echo "Pull submodules"
git submodule update --init --recursive

echo "Install the clientlib submodule dependencies"
cd submodules/clientlib && yarn && cd ../../
