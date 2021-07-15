---
id: "_event_.event"
title: "Class: Event"
sidebar_label: "Event"
---

["Event"](../modules/_event_.md).Event

The Event class contains all methods related to retrieving event logs.
It is meant to be called via a [TLNetwork](_tlnetwork_.tlnetwork.md) instance like:
```typescript
const tlNetwork = new TLNetwork(
 //...
)

// Get transfer logs
tlNetwork.event.get(
 // ...
).then(
 events => console.log("Events of loaded user:", events)
)
```

## Hierarchy

* **Event**

## Methods

### getAll

▸ **getAll**(`filter?`: [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md)): Promise&#60;[AnyEvent](../modules/_typings_.md#anyevent)[]>

*Defined in [src/Event.ts:101](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/Event.ts#L101)*

Returns event logs of loaded user in all currency networks / EthWrappers / Exchanges.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`filter` | [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md) | {} | Event filter object. See [EventFilterOptions](../interfaces/_typings_.eventfilteroptions.md) for more information. |

**Returns:** Promise&#60;[AnyEvent](../modules/_typings_.md#anyevent)[]>
