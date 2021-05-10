module.exports = {
  Relay: [
    {
      type: "category",
      label: "Relay",
      collapsed: false,
      items: ["introduction", "contributing"],
    },
    {
      type: "category",
      label: "Getting started",
      collapsed: false,
      items: [
        "getting_started/docker",
        "getting_started/manual",
      ],
    },
    {
      type: "category",
      label: "Developing",
      collapsed: false,
      items: [
        "develop/develop",
        "develop/configuration",
        "develop/pre_commit_hooks",
        "develop/dependencies",
        "develop/release",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      collapsed: false,
      items: ["tutorials/trustlines_system", "tutorials/trustlines_tlbc_system"],
    },
    {
      type: "category",
      label: "REST API",
      collapsed: false,
      items: [
        "api/introduction",
        {
          type: "category",
          label: "Endpoints",
          collapsed: false,
          items: ["api/network", "api/user", "api/miscellaneous"],
        },
      ],
    },
    {
      type: "link",
      label: "Release Notes",
      href:
        "https://github.com/trustlines-protocol/relay/blob/master/CHANGELOG.rst",
    },
  ],
}
