---
id: "_userinformation_.userinformation"
title: "Class: UserInformation"
sidebar_label: "UserInformation"
---

["UserInformation"](../modules/_userinformation_.md).UserInformation

The UserInformation class contains methods related to getting trustlines related information of a user.

## Hierarchy

* **UserInformation**

## Constructors

### constructor

\+ **new UserInformation**(`params`: { currencyNetwork: [CurrencyNetwork](_currencynetwork_.currencynetwork.md) ; provider: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) ; user: [User](_user_.user.md)  }): [UserInformation](_userinformation_.userinformation.md)

*Defined in [src/UserInformation.ts:30](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/UserInformation.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`params` | { currencyNetwork: [CurrencyNetwork](_currencynetwork_.currencynetwork.md) ; provider: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) ; user: [User](_user_.user.md)  } |

**Returns:** [UserInformation](_userinformation_.userinformation.md)

## Methods

### getAccruedInterests

▸ **getAccruedInterests**(`networkAddress`: string, `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  }): Promise&#60;[UserAccruedInterestsObject](../modules/_typings_.md#useraccruedinterestsobject)>

*Defined in [src/UserInformation.ts:91](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/UserInformation.ts#L91)*

Get all the accrued interests the loaded user has earned and paid out
The returned values are positive for earned interests and negative for paid out interests

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | the address of the network |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  } | {} |  |

**Returns:** Promise&#60;[UserAccruedInterestsObject](../modules/_typings_.md#useraccruedinterestsobject)>

___

### getAccruedInterestsOnTrustline

▸ **getAccruedInterestsOnTrustline**(`networkAddress`: string, `counterpartyAddress`: string, `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  }): Promise&#60;[TrustlineAccruedInterestsObject](../interfaces/_typings_.trustlineaccruedinterestsobject.md)>

*Defined in [src/UserInformation.ts:134](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/UserInformation.ts#L134)*

Get all the accrued interests the loaded user has earned and paid out on a single trustline
The returned values are positive for earned interests and negative for paid out interests

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | the address of the network |
`counterpartyAddress` | string | - | the address of the counterparty of the trustlines |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  } | {} |  |

**Returns:** Promise&#60;[TrustlineAccruedInterestsObject](../interfaces/_typings_.trustlineaccruedinterestsobject.md)>

___

### getEarnedMediationFees

▸ **getEarnedMediationFees**(`networkAddress`: string, `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  }): Promise&#60;[EarnedMediationFeesListObject](../interfaces/_typings_.earnedmediationfeeslistobject.md)>

*Defined in [src/UserInformation.ts:49](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/UserInformation.ts#L49)*

Get all the mediation fees the loaded user has earned

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | the address of the network for which to get the fees |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  } | {} |  |

**Returns:** Promise&#60;[EarnedMediationFeesListObject](../interfaces/_typings_.earnedmediationfeeslistobject.md)>

___

### getTotalTransferredSum

▸ **getTotalTransferredSum**(`networkAddress`: string, `senderAddress`: string, `receiverAddress`: string, `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  }): Promise&#60;[TransferredSumObject](../interfaces/_typings_.transferredsumobject.md)>

*Defined in [src/UserInformation.ts:178](https://github.com/trustlines-protocol/clientlib/blob/8b30ce1/src/UserInformation.ts#L178)*

Get the sum of all transfer made in time window and network from sender to receiver
Does take into account transfer from receiver to sender, or any other transfer
The value returned can only be positive

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`networkAddress` | string | - | the address of the network |
`senderAddress` | string | - | the address of the sender of transfers |
`receiverAddress` | string | - | the address of the receiver of transfers |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  } | {} |  |

**Returns:** Promise&#60;[TransferredSumObject](../interfaces/_typings_.transferredsumobject.md)>
