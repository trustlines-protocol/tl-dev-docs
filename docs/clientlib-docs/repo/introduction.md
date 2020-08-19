---
layout: clientlib
title: The Relay Server
---

# Trustlines Clientlib

[![npm](https://img.shields.io/npm/v/trustlines-clientlib.svg)](https://www.npmjs.com/package/trustlines-clientlib)
[![CircleCI branch](https://img.shields.io/circleci/project/github/trustlines-protocol/clientlib/master.svg)](https://circleci.com/gh/trustlines-protocol/clientlib)
[![Codecov branch](https://img.shields.io/codecov/c/github/trustlines-protocol/clientlib/master.svg)](https://codecov.io/gh/trustlines-protocol/clientlib)
[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/trustlines/community)

The clientlib is a component of the [Trustlines Protocol](https://trustlines.foundation/protocol.html).
The Trustlines Protocol is a set of rules to allow the transfer of value on top of existing trust
relationships stored on a trustless infrastructure, here a blockchain.

In the technology stack, the clientlib is located on top of a [relay server](https://github.com/trustlines-protocol/relay),
and a mobile application can be built on top of it.

The goal of the clientlib is to provide a user focused means to interact with Trustlines via a relay server.
It also provides a means to handle the wallet and key for the user.
The intent is to make it as easy as possible to build a user interface for Trustlines on top of it.
