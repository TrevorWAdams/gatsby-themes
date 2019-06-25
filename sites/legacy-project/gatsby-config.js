const remarkPlugins = [require('remark-slug')]

module.exports = {
  __experimentalThemes: ['gatsby-theme-ui'],
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        remarkPlugins,
        gatsbyRemarkPlugins: ['gatsby-remark-prismjs', { resolve: 'gatsby-remark-images' }],
      },
    },
  ],
}
