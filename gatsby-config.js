/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Agnieszka Ziolkowska - front end developer',
    description: 'Personal landing page',
    author: 'Agnieszka Ziolkowska',
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
  ],
}
