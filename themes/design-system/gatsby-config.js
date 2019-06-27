var path = require("path")
var defaultLayout = require.resolve(`./src/layouts/default.js`)
console.log('defaultLayout', defaultLayout);

module.exports = {
  siteMetadata: {
    title: "Design System Theme",
    description: "A design system theme."
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: defaultLayout
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        name: `pages`,
        path: path.resolve(__dirname, `content/pages`),
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        name: `posts`,
        path: path.resolve(__dirname, `content/posts`),
      }
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: "static"
      }
    }
  ]
}
