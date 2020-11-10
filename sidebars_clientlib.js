module.exports = {
  clientlib: [
    "clientlib",
    "clientlib-development",
    {
      Guides: [
        "guides/intro",
        "guides/create_wallet",
        "guides/discover_networks",
        "guides/setup_trustline",
        "guides/transfer",
      ],
    },
    {
      API: [
        'notes_on_api',
        ...require("./sidebars_clientlib_api_typedoc.js"),
      ],
    },
  ],
}
