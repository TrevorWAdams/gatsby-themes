exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { template: { ne: "part" } } }) {
        nodes {
          frontmatter {
            template
            slug
            categories
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors)
  }
  const posts = result.data.allMdx.nodes

  const postTemplate = require.resolve('./src/templates/post-template.js')
  // const categoryTemplate = require.resolve(
  //   './src/templates/category-template.js',
  // )

  // const categorySet = new Set()
  // posts.forEach(edge => {
  //   const {
  //     node: {
  //       frontmatter: { categories },
  //     },
  //   } = edge

  //   if (categories) {
  //     categories.forEach(category => {
  //       categorySet.add(category)
  //     })
  //   }
  // })

  // const categoryList = Array.from(categorySet)
  // categoryList.forEach(category => {
  //   createPage({
  //     path: `/categories/${_.kebabCase(category)}/`,
  //     component: categoryTemplate,
  //     context: {
  //       category,
  //     },
  //   })
  // })

  posts.forEach(post => {
    createPage({
      path: post.frontmatter.slug,
      component: postTemplate,
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
