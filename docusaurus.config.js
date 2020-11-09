module.exports = {
  title: "Trustlines Developer Docs",
  tagline:
    "Leveraging trust to achieve financial & economic inclusion of all people.",
  url: "https://trustlines.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/tl-favicon.png",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "trustlines-protocol", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Trustlines Dev Docs",
      logo: {
        alt: "Trustlines logo",
        src: "img/tl-favicon.png",
      },
      items: [
        {
          to: "docs/blockchain/nodes",
          label: "Blockchain",
          position: "left",
        },
        {
          to: "docs/relay/relay_server",
          label: "Relay",
          position: "left",
        },
        {
          to: "clientlib/clientlib/",
          label: "Clientlib",
          position: "left",
        },
        {
          href: "https://github.com/trustlines-protocol/tl-dev-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Websites",
          items: [
            {
              label: "Trustlines Blog",
              href: "https://blog.trustlines.network",
            },
            {
              label: "Trustlines Foundation",
              href: "https://trustlines.foundation/",
            },
            {
              label: "Trustlines User Docs",
              href: "https://docs.trustlines.network//",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Trustlines Forum",
              href: "https://forum.trustlines.network/",
            },
            {
              label: "Trustlines Newsletter",
              href: "http://eepurl.com/gHqYyX",
            },
            {
              label: "Trustlines Network in Telegram",
              href: "https://t.me/trustlines_network",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Trustlines on github",
              href: "https://github.com/trustlines-protocol",
            },
            {
              label: "Trustlines Technical Chat",
              href: "https://gitter.im/trustlines/community",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Trustlines.`,
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "clientlib",
        path: "clientlib",
        editUrl: "https://github.com/trustlines-protocol/tl-dev-docs",
        routeBasePath: "clientlib",
        sidebarPath: require.resolve("./sidebars_clientlib.js"),
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/trustlines-protocol/tl-dev-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}
