module.exports = {
  title: "Trustlines Developer Docs",
  tagline:
    "Leveraging trust to achieve financial & economic inclusion of all people.",
  url: "https://dev.trustlines.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/tl-favicon.png",
  organizationName: "trustlines-protocol",
  projectName: "tl-dev-docs",
  themeConfig: {
    navbar: {
      title: "Trustlines Dev Docs",
      logo: {
        alt: "Trustlines logo",
        src: "img/tl-favicon.png",
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          docsPluginId: "clientlib",

          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
        },
        {
          to: "blockchain/tlbc",
          activeBasePath: "blockchain",
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
          to: "relay/relay_server",
          activeBasePath: "relay",
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
      additionalLanguages: ["javascript", "typescript", "bash", "toml"],
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "blockchain",
        path: "blockchain",
        editUrl: "https://github.com/trustlines-protocol/tl-dev-docs",
        routeBasePath: "blockchain",
        sidebarPath: require.resolve("./sidebars_blockchain.js"),
      },
    ],
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
      "@docusaurus/plugin-content-docs",
      {
        id: "relay",
        path: "relay",
        editUrl: "https://github.com/trustlines-protocol/tl-dev-docs",
        routeBasePath: "relay",
        sidebarPath: require.resolve("./sidebars_relay.js"),
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
    customNavbarConfig: {
      clientlib: {
        displayOnlyWhenPathIncludes: "clientlib",
      }
    }
  },
}
