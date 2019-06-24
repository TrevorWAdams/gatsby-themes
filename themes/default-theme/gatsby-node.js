exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
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
  const items = result.data.allMdx.nodes

  const postTemplate = require.resolve('./src/templates/post-template.js')
  // const categoryTemplate = require.resolve(
  //   './src/templates/category-template.js',
  // )

  // const categorySet = new Set()
  // items.forEach(edge => {
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


  const posts = items.filter(item => item.frontmatter.template === 'post');

  posts.forEach((post, index) => {
    const next = index === 0 ? undefined : posts[index - 1].node
    const prev = index === posts.length - 1 ? undefined : posts[index + 1].node

    createPage({
      path: post.frontmatter.slug,
      component: postTemplate,
      context: {
        slug: post.frontmatter.slug,
        prev,
        next,
      },
    })
  })
}
