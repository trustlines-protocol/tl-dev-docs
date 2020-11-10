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
          to: "docs/blockchain/tlbc",
          activeBasePath: "docs/blockchain",
          label: "Blockchain",
          position: "left",
        },
        {
          to: "contracts/contracts_README",
          activeBasePath: "contracts",
          label: "Contracts",
          position: "left",
        },
        {
          to: "docs/relay/relay_server",
          activeBasePath: "docs/relay",
          label: "Relay",
          position: "left",
        },
        {
          to: "clientlib/clientlib/",
          label: "Clientlib",
          activeBasePath: "clientlib",
          position: "left",
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
    prism: {
      additionalLanguages: ["typescript", "bash", "toml"],
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "contracts",
        path: "contracts",
        editUrl: "https://github.com/trustlines-protocol/tl-dev-docs",
        routeBasePath: "contracts",
        sidebarPath: require.resolve("./sidebars_contracts.js"),
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        inputFiles: ["./submodules/clientlib/src/"],
        mode: "modules",
        docsRoot: "clientlib",
        out: "api",
        excludePrivate: true,
        excludeNotExported: true,
        module: "commonjs",
        target: "ES6",
        hideSources: false,
        hideBreadcrumbs: true,
        readme: "none",
        sidebar: {
          sidebarFile: 'sidebars_clientlib_api_typedoc.js',
          readmeLabel: 'README',
          globalsLabel: 'Globals',
          fullNames: false,
        },
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
  customFields: {
    githubBadge: {
      default: "https://github.com/trustlines-protocol/",
      clientlib: "https://github.com/trustlines-protocol/clientlib",
      "docs/blockchain": "https://github.com/trustlines-protocol/blockchain/",
      "docs/contracts": "https://github.com/trustlines-protocol/contracts/",
      "docs/relay": "https://github.com/trustlines-protocol/relay",
    },
  },
}
