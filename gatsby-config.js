module.exports = {
  // pathPrefix: "/Stock-Calculator",
  siteMetadata: {
    title: "Simple Stock Calculator",
    description: `Stock Profit Calculator | Short Position Calculator | Margin Trade Calculator`,
    siteUrl: `https://simplestockcalculator.com`,
    menuLinks: [
      {
        name: "Profit Calculator",
        link: "/",
      },
      {
        name: "Short Position Calculator",
        link: "/position-calc",
      },
      {
        name: "Margin Trade Calculator",
        link: "/margin-trade",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sitemap",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stock-calculator`,
        short_name: `stockcalc`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/stock-calculator.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-141695483-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        variationId: "0",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
