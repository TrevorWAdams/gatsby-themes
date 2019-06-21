var path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Default Gatsby Theme',
    description:
      'A default theme.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`)
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: path.resolve(__dirname, `src/pages`),
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path:  path.resolve(__dirname, `src/content/posts`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path:  path.resolve(__dirname, `src/content/images`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'parts',
        path:  path.resolve(__dirname, `src/content/parts`),
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ]
}
