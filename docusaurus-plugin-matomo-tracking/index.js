module.exports = function (context, opts) {
  const { matomoUrl, siteId } = opts

  if (!matomoUrl) {
    throw new Error(
      "You didn't specify `matomoUrl` field in the plugin options. " +
        "Please ensure this is not a mistake."
    )
  }

  if (!siteId) {
    throw new Error(
      "You didn't specify `siteId` in the plugin options. " +
        "Please ensure this is not a mistake."
    )
  }

  const isProd = process.env.NODE_ENV === "production"

  return {
    name: "docusaurus-plugin-matomo-tracking",

    injectHtmlTags() {
      if (!isProd) {
        return {}
      }
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="${matomoUrl}";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '${siteId}']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();`,
          },
        ],
      }
    },
  }
}
