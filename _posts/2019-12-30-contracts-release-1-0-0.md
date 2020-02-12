---
layout: page
title:  "Contracts release 1.0.0"
excerpt_separator: <!--more-->
image: assets/images/ann.jpg
---

Contracts version 1.0.0 was just released.
<!--more-->

## [Version 0.10.1](https://github.com/trustlines-protocol/contracts/releases/tag/1.0.0)

-   Add function `cancelTrustlineUpdate(address counterparty)` to cancel a trustline update request in between msg.sender and counterparty.
-   Add `applyInterests` external function to manually apply interests
-   Change signature of functions `transfer`, `transferFrom`, `debitTransfer`, `transferReceiverPays`\
    so that it no longer takes `_to` argument but takes a complete path including sender and receiver (BREAKING)
-   Change: Lower the absolute max value of balances from `2**71 - 1` to `2**64 - 1` to match maximum transferable value
-   Change the way how to add authorized addresses to call `transferFrom`. Users can now add an authorized address\
    for themselves
-   Remove self destruct from Currency Network
-   Remove owner from Currency Network
-   Remove boolean return values from Currency Network functions.
-   Remove ERC20 related functions: `spendable`, `spendableTo`, `totalSupply`, and `balanceOf`
-   Remove function `updateTrustlineDefaultInterests`
-   Remove unused outstanding fees field in trustline (BREAKING)
-   Bugfix: emit Transfer event also on `closeTrustlineViaTriangularTransfer`
-   Bugfix: Prevent overflows in `closeTrustlineViaTriangularTransfer`
-   Bugfix: Prevent overflows in interests calculation
-   Bugfix: Prevent overflows in debt tracking
