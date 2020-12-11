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
        "customizations/custom_icons",
        "customizations/clientlib",
        "customizations/state",
        "customizations/storybook"
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
      type: "doc",
      id: "e2e_testing",
    },
  ],
}
