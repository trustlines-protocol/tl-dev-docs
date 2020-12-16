module.exports = {
  Relay: [
    {
      type: "category",
      label: "Relay",
      collapsed: false,
      items: ["introduction", "contributing"]
    },
    {
      type: "category",
      label: "Getting started",
      collapsed: false,
      items: ["getting_started/docker", "getting_started/manual", "getting_started/configuration"]
    },
    {
      type: "category",
      label: "Tutorials",
      collapsed: false,
      items: ["tutorials/trustlines_system"]
    },
    {
      type: "category",
      label: "REST API",
      collapsed: false,
      items: ["api/introduction", {
        type: "category",
        label: "Endpoints",
        collapsed: false,
        items: ['api/network', 'api/user', 'api/miscellaneous']
      }]
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/trustlines-protocol/relay/blob/master/CHANGELOG.rst"
    }
  ],
}
