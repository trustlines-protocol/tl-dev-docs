---

title: Currency Networks on Trustlines Blockchain
sidebar_label: Currency Networks
---

## Currency Networks Version 1

The first verions of the currency networks were deployed as of commit: 
[trustlines-protocol/contracts@baebb30](https://github.com/trustlines-protocol/contracts/commit/baebb308d9ef868408c3449250aa9d963cc61d71)

US Dollar: `0x12657128d7fa4291647eC3b0147E5fA6EebD388A`  
Euro: `0xF2320a5371DA3CB967B9355597AA7adEc17E4220`  
Japanese Yen: `0x18BDC736b23Ff7294BED9fa988a1443357C7B0ed`  
Pound Sterling: `0x0A6f0C541Be542c098B7Ee03C9C634f20BCf8422`  
Australian Dollar: `0x01564a4b7C327c84763D7fCf629B02584AE72973`  
Canadian Dollar: `0x8B2c0e43F69a8a25c94510cC85138260bb24e381`  
Swiss Franc: `0x7A6049b3A96E7a6D68e6e6813a19594Ea336d080`  
Chinese Yuan Renminbi: `0xB57C960Ee760cDa8184C9C9d9b7D0FeBE4557616`  
Swedish Krona: `0x8306e229ea6Edf3aD2670681912CcC0C338f7963`  
Mexican Peso: `0x70d4db4eC56b398D7cbA3666835490cb0e39f008`  
New Zealand Dollar: `0x049D814ED22bEA4394aC2Ec48bace8A1e31BC376`  
Singapore Dollar: `0xc3790A6df080381ebf3eF9BeB35e6b70431bB420`  
Hong Kong Dollar: `0xa81DE4DA252E012a5e8b0Fe1FE91BB0a55Dc5f9d`  
Norwegian Krone: `0xB365694dB0961Fe81cA5e296c1250d24a4Ee627f`  
South Korean Won: `0x1A64Bd5e956DA93E912CB7eb9b00B8D2Bc9015F9`  
Turkish Lira: `0x714dabD79B7962dA47c8fEA446064523CE0456fE`  
Indian Rupee: `0xC0f1030d83AEEF1616deef060114E31B3A25De81`  
Russian Ruble: `0x15933718E2e3478e756C13d516f7f4f4F749b3D6`  
Brazilian Real: `0x77626459240b8105DeC70dC97D61441924f166Df`  
South African Rand: `0x264B1775Ce5d2831608575974CfB9EB9F8F659f5`  
Bitcoin: `0xb2B3A0E958e3eEb333b734ABF34ACA2dB5b94B8F`  
Ether: `0xA31fA3D8DaEBc1d7fb91a6F5F6805873dC958Ff2`  
Dai: `0x603f22B1D3854b985E0a61Ce4c0349534a0e5673`  
Hours: `0x5F74eD72158566c05328Eb815544461bD0b45116`  
Beer: `0x7Ac3fC1C428df99D81d9b644106FF67c44A155aA`  
Indonesian Rupiah: `0xef5bC01da9AC8B32F78dC847D84454E48510Ef72`  
Pakistani Rupee: `0x97668E07c122f7701b804A4eA6fd196F1e264423`  
Bangladeshi Taka: `0x57c4a2cCF2CC99f3dF7855465d1528C110Ff4F14`  
Nigerian Naira: `0xa809D5e740AA324FF94751836b1d7Aa6BA2de81E`  
West African CFA Franc: `0xF455c46823Cdb5A899217A0f085525874bA194A8`  
Central African CFA Franc: `0xc8a0a3aA3A98F27198De126379386D8aA7D01950`  
Vietnamese Dong: `0xCaa5B04e6E44EC3106EEBdAAd7D6C7bE9370Be32`  
Philippine Peso: `0x2421A2ea7B24b5D26177B78afcf8F4B40255324d`  
Ethiopian Birr: `0x2aB3f469D041aE68F45b3C255B7CB46370FfffF5`  
Egyptian Pound: `0x03FE2A6a589e33b7d3cD8208705092BE572A76d1`  
~~Turkish Lira: `0x55997a8d56840508b1f78e9c0B2aA27d7D62430B`~~  
Iranian Rial: `0xFe54Cbb23414467CcC052dACA1ecc908745D71Eb`  
Thai Baht: `0x4D4dd71A818D4F7d3349F936382ea70979123F81`  
Congolese Franc: `0xCC6039e0681548002bcF39bf65d444beD65980B0`  
Burmese Kyat: `0x821b770a4b5D1228322B2A2Bb29354b5faabD29F`  
Ukrainian Hryvnia: `0x86D50E94e6Ba4B99C5c19439c13a07E5B7c231f9`  
Colombian Peso: `0x6212C2783B2acCA8468b1befb19a4aAccb3c4970`  
Argentine Peso: `0x4B1Ce992B04539786DF19dDC416490cd6595DB01`  
Polish Zloty: `0x8588173E0322089Efe851b14d041aC15AC991C07`  
Tanzanian Shilling: `0xcb02a08a72Cb459fE41E987065fE1E2D7438E64E`  
Solomon Islands Dollar: `0x0FbD56e384826246dC795C1A1951c781184F8faa`

[Currency Networks contracts.json](./json/currency_networks_contracts_json)

## Currency Networks Version 2

New currency networks are using a proxy pattern with a beacon. 
The beacon points to an implementation, the different proxies points to the beacon.
Each contract has been deployed as of commit https://github.com/trustlines-protocol/contracts/tree/58b43d3f1771e120e21a93b73ba4f08e9f6fdc25 (contracts version 1.3.0),
apart from the fake currency network which was deployed as of commit https://github.com/trustlines-protocol/contracts/tree/d94f8b395491a3bac9d76236fc8003688daa9ca4.

### Implementation

**Address**: `0x3d494502d15E8eAE385fC86e116CD9Db6e4C38ec`  
[Implementation.json](./json/currency_network_implementation_json)

### Beacon

**Address**: `0xDEE27a84fB3Ef2be305b17b202D0b2E78B2e1252`  
[Beacon.json](./json/beacon_json)

### Proxies

**Addresses**:

US Dollar: `0xdCBcdbA450eBAE81d99E8FC6B165a948D4ae5012`  
Euro: `0x71Eb52d37fCB47a149Fb26232B67b9244A58FE6c`  
Japanese Yen: `0x7AF4AcE4bdAe5918825Dc0eB22Bc4F67c69c645b`  
Pound Sterling: `0x9aBd28551C551Ac329dB9A25C59e3fB639A343BB`  
Australian Dollar: `0xfbd90D5859Fad02b9Be55C706eBd052c52F8df21`  
Canadian Dollar: `0x9a7624dd0520F5F54a5B209cD93D7F7993c459ec`  
Swiss Franc: `0x865cbDF17Fd3205E25369A079d7171466dC6c8cc`  
Chinese Yuan Renminbi: `0x9b19Aa3a3938f3e9e24ded8a76c3fED2D2d5328c`  
Swedish Krona: `0xd73E3db84e0EE4aB15D0144eF60764A1894dBD7c`  
Mexican Peso: `0x66248105a7c96854eE9a0134Bb7657A4667cd8e9`  
New Zealand Dollar: `0x96AF9CA9881c88456cABd0800b919Bc55778bFC4`  
Singapore Dollar: `0xff1FD88079eabA0e6F05Db99A602f70242F25349`  
Hong Kong Dollar: `0xEDE296b57824F4b1c24842c8f5c2AaBb56d23d65`  
Norwegian Krone: `0x553253115D0efa1BaBefdEd2a65C9E53CA8f7df6`  
South Korean Won: `0xCDd5371f67F65cD6D5ECcd0aBb62F423bABFb15A`  
Turkish Lira: `0x7fFFa9096fCED0B26E6519B2037a9F045C21330d`  
Indian Rupee: `0x2E72DB771cb4f70288e015dE36b78e269b3a6397`  
Russian Ruble: `0x7E984f5B56B6272D1f41ad1372B129EAD550628C`  
Brazilian Real: `0xd33FD4A1a96cf7d13b8E44A8e81b1e76f3ce92Ed`  
South African Rand: `0x1Bf1e2bA541f36B6651ceFf2aCc53eCadf7c82E3`  
Bitcoin: `0xA6E914e1E7efB19D0c7894d6e561C26d96a45998`  
Ether: `0xB447d648da8a780Ae8C837f726e601c7A43D4FFF`  
Dai: `0x5Ff657c6aEf090ab7B761E2775EAd3e3fD3f96A1`  
Hours: `0xEcA5A9BC6502c564d3F421EA0E05252f2252649a`  
Beer: `0x35c2D7Ec13af15D6ED7a3eb1e5b911E419D9636d`  
Indonesian Rupiah: `0x56711Fd7e9D27490b356b217d7Fb589141b8f654`  
Pakistani Rupee: `0xFab1BfDA181b998298D206Bd6EfB9CE7cd919f5F`  
Bangladeshi Taka: `0xC0F2EEc3a550248dd8BC24961cf323055b41b8BF`  
Nigerian Naira: `0xc1671Be60dB024e0eA2393D03F7E3905cEF75de2`  
West African CFA Franc: `0x1e3aD4E7f8375baD6e1322E3801487B7bb692830`  
Central African CFA Franc: `0x59421C3664FaB317E26e8889a4a34ebA07384A9c`  
Vietnamese Dong: `0x946b88048887Af4259A1cD6545eBB514d7cFD05F`  
Philippine Peso: `0xBfA29944Fa6B7f06b084C2De943a5767159fc86e`  
Ethiopian Birr: `0x40AD287A86051010FC46cC68674048cD1f1AF892`  
Egyptian Pound: `0x364B777CEF8c2E67c6a10c33BFc57c1c56EC5FFC`  
Iranian Rial: `0x504be87de98C1E3A0494dF16B4327A74736126E5`  
Thai Baht: `0x0f7a5Edb2855C9208B260e7eF801dF9f5E79B8c3`  
Congolese Franc: `0x11933E474C632D8a0CB69e2a86a761E627F75dEd`  
Burmese Kyat: `0x61963C98ee147c65BA4E630E09730bf90DBbB003`  
Ukrainian Hryvnia: `0xC8De4Ad7Cd5D0C0BFdCB2cd4a36E819F7bC70734`  
Colombian Peso: `0xEcECf14185482071667ccCC5F823485CF18f5A83`  
Argentine Peso: `0x7D31aE4D8D7bE97550968897F24060503C25F76c`  
Polish Zloty: `0x9a24ff1377C785E82736285948a092c681ff6B45`  
Tanzanian Shilling: `0x7dAfA79fcfb8E23A96d564Ba762D7Efceff74Ebf`  
Solomon Islands Dollar: `0xf5BB5C1DBdd0822d0Fa9E93e82B0cD0D0A388f51`  
Kenyan Shilling: `0x70F42a5B8455cEA42de824bDf46b6b01BF805EeA`
Fake Currency: `0x5cAB49127Cb1f19bCbd6494c1396F2f72b4bEC3A`

[Administrative Proxy.json](./json/administrative_proxy_json)

### Currency Network Registry

**Commit**: [trustlines-protocol/contracts@baebb30](https://github.com/trustlines-protocol/contracts/commit/baebb308d9ef868408c3449250aa9d963cc61d71)
**Address**: `0x02c3cA67cF3310295195173cb654cfd61f4c849D`

**[View on TLBC Explorer](https://explore.tlbc.trustlines.foundation/address/0x02c3ca67cf3310295195173cb654cfd61f4c849d/transactions)**

[Currency Networks Registry contracts.json](./json/currency_networks_registry_contracts_json)
