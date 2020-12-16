---
title: Clientlib
---
To enable a connection to a relay server this app uses the [trustlines clientlib](https://github.com/trustlines-protocol/clientlib)
package. 

All calls to functions of that page are proxied in the `src/shared/lib/client.js` file.


The Clientlib takes basically care of all blockchain/relay server related functionalities, such as

* all communication to a relay server
* creating links
* account creation / recovery and account data importing / exporting
* transaction signing

:::tip

To learn more about the clientlib check it's documentation [over here.](/clientlib/clientlib)

:::
