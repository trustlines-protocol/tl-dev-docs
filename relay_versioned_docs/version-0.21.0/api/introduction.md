---
title: Trustlines Network Rest API
sidebar_label: Introduction
---

The relay component of the trustlines network project provides a REST API.

## Base Endpoint
```
<protocol>://<host>:<port>/api/v1
```

You can use the following base endpoint to talk to the currently deployed Laika test setup.
```
https://staging.testnet.trustlines.network/api/v1
```

## Response
- All endpoints return JSON
- All number values are returned in their smallest unit
- All ethereum addresses are returned as ERC55 checksum addresses
- In case of an error, the response of the relay API will have the following format:
```json
{
  "message": "<errorMessage>"
}
```
