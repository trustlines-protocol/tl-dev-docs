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

*Defined in [src/UserInformation.ts:28](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/UserInformation.ts#L28)*

#### Parameters:

Name | Type |
------ | ------ |
`params` | { currencyNetwork: [CurrencyNetwork](_currencynetwork_.currencynetwork.md) ; provider: [TLProvider](../interfaces/_providers_tlprovider_.tlprovider.md) ; user: [User](_user_.user.md)  } |

**Returns:** [UserInformation](_userinformation_.userinformation.md)

## Methods

### getAccruedInterests

▸ **getAccruedInterests**(`networkAddress`: string, `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  }): Promise&#60;[UserAccruedInterestsObject](../modules/_typings_.md#useraccruedinterestsobject)>

*Defined in [src/UserInformation.ts:74](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/UserInformation.ts#L74)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`networkAddress` | string | - |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  } | {} |

**Returns:** Promise&#60;[UserAccruedInterestsObject](../modules/_typings_.md#useraccruedinterestsobject)>

___

### getAccruedInterestsOnTrustline

▸ **getAccruedInterestsOnTrustline**(`networkAddress`: string, `counterpartyAddress`: string, `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  }): Promise&#60;[TrustlineAccruedInterestsObject](../interfaces/_typings_.trustlineaccruedinterestsobject.md)>

*Defined in [src/UserInformation.ts:108](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/UserInformation.ts#L108)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`networkAddress` | string | - |
`counterpartyAddress` | string | - |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  } | {} |

**Returns:** Promise&#60;[TrustlineAccruedInterestsObject](../interfaces/_typings_.trustlineaccruedinterestsobject.md)>

___

### getEarnedMediationFees

▸ **getEarnedMediationFees**(`networkAddress`: string, `options?`: { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  }): Promise&#60;[EarnedMediationFeesListObject](../interfaces/_typings_.earnedmediationfeeslistobject.md)>

*Defined in [src/UserInformation.ts:40](https://github.com/trustlines-protocol/clientlib/blob/4830efe/src/UserInformation.ts#L40)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`networkAddress` | string | - |
`options` | { decimalsOptions?: [DecimalsOptions](../interfaces/_typings_.decimalsoptions.md) ; timeWindowOption?: { endTime: number ; startTime: number  }  } | {} |

**Returns:** Promise&#60;[EarnedMediationFeesListObject](../interfaces/_typings_.earnedmediationfeeslistobject.md)>
