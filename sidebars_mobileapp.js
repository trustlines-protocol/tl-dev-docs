module.exports = {
  mobileapp: [
    {
      type: "category",
      label: "The Basics",
      collapsed: false,
      items: ["introduction", "getting_started"],
    },
    {
      type: "category",
      label: "Customizations",
      collapsed: false,
      items: [
        "customizations/structure",
        "customizations/custom_icons",
        "customizations/clientlib",
        "customizations/state",
        "customizations/storybook",
        "customizations/styling",
        "customizations/cloud_backup",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Known issues",
      items: [
        "known_issues/javascript",
        "known_issues/android",
        "known_issues/ios",
      ],
    },
    {
      type: "category",
      label: "Testing",
      collapsed: false,
      items: [
        { type: "doc", id: "testing/e2e" },
        { type: "doc", id: "testing/unit" },
      ],
    },
    {
      type: "doc",
      id: "localizations",
    },
    {
      type: "doc",
      id: "deploy",
    },
    {
      type: "category",
      label: "Tutorials",
      collapsed: false,
      items: [
        { type: "doc", id: "tutorials/localhost_with_docker" },
        { type: "doc", id: "tutorials/crashlytics-stack-traces" }
      ],
    },
  ],
}
