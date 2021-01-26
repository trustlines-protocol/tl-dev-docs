module.exports = {
  Contracts: [
    {
      type: "category",
      label: "Contracts",
      collapsed: false,
      items: [
        "introduction",
        "types_of_contracts",
        "contributing",
        // "contracts_deployment",
        "currency_networks_tlbc",
        // "deployed_contracts",
      ],
    },
    {
      type: "category",
      label: "Getting started",
      collapsed: false,
      items: [
        "getting_started/installation",
      ],
    },
    {
      type: "category",
      label: "Developing",
      collapsed: false,
      items: [
        "develop/develop",
        "develop/dependencies",
        "develop/testing",
        "develop/release",
      ],
    },
    {
      type: "category",
      label: "Deploy tools",
      collapsed: false,
      items: [
        "deploy_tools/introduction",
        "deploy_tools/installation",
        "deploy_tools/usage",
      ],
    },
    {
      type: "link",
      label: "Release Notes",
      href:
        "https://github.com/trustlines-protocol/contracts/blob/master/CHANGELOG.rst",
    },
  ],
  // Contracts: [
  //   "introduction",
  //   "contracts_README",
  //   "contracts_deployment",
  //   "currency_networks_tlbc",
  //   "deployed_contracts",
  // ],
}
