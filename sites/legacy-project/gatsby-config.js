const remarkPlugins = [require("remark-slug")]

module.exports = {
  __experimentalThemes: ["gatsby-theme-ui"],
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        remarkPlugins,
        gatsbyRemarkPlugins: [
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-prismjs",
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          }
        ]
      }
    }
  ]
}
