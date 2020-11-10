---
id: "_contact_.contact"
title: "Class: Contact"
sidebar_label: "Contact"
---

["Contact"](../modules/_contact_.md).Contact

## Hierarchy

* **Contact**

## Constructors

### constructor

\+ **new Contact**(`params`: { provider: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) ; user: [User](_user_.user.md)  }): [Contact](_contact_.contact.md)

*Defined in [src/Contact.ts:8](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Contact.ts#L8)*

#### Parameters:

Name | Type |
------ | ------ |
`params` | { provider: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) ; user: [User](_user_.user.md)  } |

**Returns:** [Contact](_contact_.contact.md)

## Methods

### createLink

▸ **createLink**(`address`: string, `options?`: { [key:string]: string; customBase?: string ; name?: string ; subject?: string  }): string

*Defined in [src/Contact.ts:29](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Contact.ts#L29)*

Creates sharable contact link.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`address` | string | Address of contact to share. |
`options?` | { [key:string]: string; customBase?: string ; name?: string ; subject?: string  } | Optional        options[key] - additional params that will be appended        options.name - optional user name        options.subject - optional message for the recipient of the request        options.customBase - Optional custom base for link. Defaults to `trustlines://`.  |

**Returns:** string

___

### getAll

▸ **getAll**(`networkAddress`: string): Promise&#60;string[]>

*Defined in [src/Contact.ts:15](https://github.com/trustlines-protocol/clientlib/blob/a897659/src/Contact.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`networkAddress` | string |

**Returns:** Promise&#60;string[]>
