var path = require('path')

module.exports = {
  plugins: [
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`)
        }
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: path.resolve(__dirname, `src/pages`),
      }
    }
  ]
}
