---
id: "_messaging_.messaging"
title: "Class: Messaging"
sidebar_label: "Messaging"
---

["Messaging"](../modules/_messaging_.md).Messaging

## Hierarchy

* **Messaging**

## Constructors

### constructor

\+ **new Messaging**(`params`: { currencyNetwork: [CurrencyNetwork](_currencynetwork_.currencynetwork.md) ; provider: [Provider](_providers_provider_.provider.md) ; user: [User](_user_.user.md)  }): [Messaging](_messaging_.messaging.md)

*Defined in [src/Messaging.ts:22](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Messaging.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`params` | { currencyNetwork: [CurrencyNetwork](_currencynetwork_.currencynetwork.md) ; provider: [Provider](_providers_provider_.provider.md) ; user: [User](_user_.user.md)  } |

**Returns:** [Messaging](_messaging_.messaging.md)

## Methods

### messageStream

▸ **messageStream**(`reconnectingOptions?`: [ReconnectingWSOptions](../modules/_typings_.md#reconnectingwsoptions)): Observable&#60;any>

*Defined in [src/Messaging.ts:153](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Messaging.ts#L153)*

Returns a websocket observable that can be subscribed to.

#### Parameters:

Name | Type |
------ | ------ |
`reconnectingOptions?` | [ReconnectingWSOptions](../modules/_typings_.md#reconnectingwsoptions) |

**Returns:** Observable&#60;any>

___

### paymentMessage

▸ **paymentMessage**(`counterPartyAddress`: string, `transferId`: string, `subject`: string): Promise&#60;[PaymentMessage](../interfaces/_typings_.paymentmessage.md)>

*Defined in [src/Messaging.ts:135](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Messaging.ts#L135)*

Sends a payment message to given `counterParty` and returns created message.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`counterPartyAddress` | string | Address of counter party. |
`transferId` | string | Transfer ID of the payment |
`subject` | string | Subject that will be sent to the counterparty  |

**Returns:** Promise&#60;[PaymentMessage](../interfaces/_typings_.paymentmessage.md)>

___

### paymentRequest

▸ **paymentRequest**(`networkAddress`: string, `counterPartyAddress`: string, `value`: number \| string, `subject?`: string, `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md)  }): Promise&#60;[PaymentRequestMessage](../interfaces/_typings_.paymentrequestmessage.md)>

*Defined in [src/Messaging.ts:41](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Messaging.ts#L41)*

Sends a payment request to given `counterParty` and returns created payment request.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | Address of currency network. |
`counterPartyAddress` | string | - | Address of counter party. |
`value` | number \| string | - | Requested payment amount. |
`subject?` | string | - | Optional subject of payment request.  |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md)  } | {} | - |

**Returns:** Promise&#60;[PaymentRequestMessage](../interfaces/_typings_.paymentrequestmessage.md)>

___

### paymentRequestCancel

▸ **paymentRequestCancel**(`counterPartyAddress`: string, `id`: string, `subject?`: string): Promise&#60;[PaymentRequestDeclineMessage](../interfaces/_typings_.paymentrequestdeclinemessage.md)>

*Defined in [src/Messaging.ts:114](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Messaging.ts#L114)*

Sends a payment request cancel message to given `counterParty` and returns created message.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`counterPartyAddress` | string | Address of counter party. |
`id` | string | id of the payment request to cancel matches either the nonce as a number or id of a payment request as a hex string. |
`subject?` | string | Optional subject of cancel message.  |

**Returns:** Promise&#60;[PaymentRequestDeclineMessage](../interfaces/_typings_.paymentrequestdeclinemessage.md)>

___

### paymentRequestDecline

▸ **paymentRequestDecline**(`counterPartyAddress`: string, `id`: string, `subject?`: string): Promise&#60;[PaymentRequestDeclineMessage](../interfaces/_typings_.paymentrequestdeclinemessage.md)>

*Defined in [src/Messaging.ts:92](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Messaging.ts#L92)*

Sends a payment request decline message to given `counterParty` and returns created message.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`counterPartyAddress` | string | Address of counter party. |
`id` | string | id of the payment request to decline matches either the nonce as a number or id of a payment request as a hex string. |
`subject?` | string | Optional subject of decline message.  |

**Returns:** Promise&#60;[PaymentRequestDeclineMessage](../interfaces/_typings_.paymentrequestdeclinemessage.md)>

___

### sendUsernameToCounterparty

▸ **sendUsernameToCounterparty**(`username`: string, `counterpartyAddress`: string): Promise&#60;[UsernameMessage](../interfaces/_typings_.usernamemessage.md)>

*Defined in [src/Messaging.ts:184](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/Messaging.ts#L184)*

Sends the given username to the specified counter party via messaging.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`username` | string | Username to send. |
`counterpartyAddress` | string | - |

**Returns:** Promise&#60;[UsernameMessage](../interfaces/_typings_.usernamemessage.md)>
