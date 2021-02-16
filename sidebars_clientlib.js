module.exports = {
  clientlib: [
    {
      type: "category",
      label: "Client library",
      collapsed: false,
      items: [
        "introduction",
        "contributing",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Getting started",
      items: ["getting_started/installation", "getting_started/example_usage"],
    },
    {
      type: "category",
      collapsed: false,
      label: "Developing",
      items: ["develop/develop", "develop/release"],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      items: [
        "guides/intro",
        "guides/create_wallet",
        "guides/discover_networks",
        "guides/setup_trustline",
        "guides/transfer",
      ],
    },
    {
      type: "category",
      label: "API",
      collapsed: false,
      items: [
        "notes_on_api",
        ...require("./sidebars_clientlib_api_typedoc.js"),
      ],
    },
    {
      type: "link",
      label: "Release Notes",
      href:
        "https://github.com/trustlines-protocol/clientlib/blob/master/CHANGELOG.md",
    },
  ],
}
