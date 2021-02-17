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
    colorMode: {
      defaultMode: 'dark',
    },
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
          type: 'docsVersionDropdown',
          position: 'right',
          docsPluginId: "relay",

          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          docsPluginId: "contracts",

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
          to: "contracts/introduction",
          activeBasePath: "contracts",
          label: "Contracts",
          position: "left",
        },
        {
          to: "relay/introduction",
          activeBasePath: "relay",
          label: "Relay",
          position: "left",
        },
        {
          to: "clientlib/introduction",
          label: "Clientlib",
          activeBasePath: "clientlib",
          position: "left",
        },
        {
          to: "mobileapp/introduction",
          label: "Trustlines App",
          activeBasePath: "mobileapp",
          position: "left",
        },
        {
          to: "docs/contributing",
          label: "Contributing",
          activeBasePath: "contributing",
          position: "left",
        },
      ],
    },
    footer: {
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
      additionalLanguages: ["javascript", "typescript", "bash", "toml", "ini"],
    },
    algolia: {
      apiKey: '041cd85f0507f5d0386c4ddd7b78046f',
      indexName: 'trustlines',

      // !!! Currently doesn't work when set to true!
      contextualSearch: false,

      // Optional: Algolia search parameters
      searchParameters: {
        // 'facetFilters': ["type:content"]
      },
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "blockchain",
        path: "blockchain",
        editUrl: "https://github.com/trustlines-protocol/tl-dev-docs/edit/master/",
        routeBasePath: "blockchain",
        sidebarPath: require.resolve("./sidebars_blockchain.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "mobileapp",
        path: "mobileapp",
        editUrl: "https://github.com/trustlines-protocol/tl-dev-docs/edit/master/",
        routeBasePath: "mobileapp",
        sidebarPath: require.resolve("./sidebars_mobileapp.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "clientlib",
        path: "clientlib",
        editUrl: "https://github.com/trustlines-protocol/tl-dev-docs/edit/master/",
        routeBasePath: "clientlib",
        sidebarPath: require.resolve("./sidebars_clientlib.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "contracts",
        path: "contracts",
        editUrl: "https://github.com/trustlines-protocol/tl-dev-docs/edit/master/",
        routeBasePath: "contracts",
        sidebarPath: require.resolve("./sidebars_contracts.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "relay",
        path: "relay",
        editUrl: "https://github.com/trustlines-protocol/tl-dev-docs/edit/master/",
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
          editUrl: "https://github.com/trustlines-protocol/tl-dev-docs/edit/master/",
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
      "blockchain": "https://github.com/trustlines-protocol/blockchain/",
      "contracts": "https://github.com/trustlines-protocol/contracts/",
      "relay": "https://github.com/trustlines-protocol/relay",
    },
    customNavbarConfig: {
      clientlib: {
        displayOnlyWhenPathIncludes: "clientlib",
      },
      relay: {
        displayOnlyWhenPathIncludes: "relay",
      },
      contracts: {
        displayOnlyWhenPathIncludes: "contracts",
      }
    }
  },
}
