const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const locales = require("./src/config/i18n/locales")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/ui/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              html
              frontmatter {
                slug
                date(formatString: "DD MMMM YYYY")
                title
                description
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
    // throw result.errors
    return
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPost,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  // posts.forEach((post, index) => {
  //   const previous = index === posts.length - 1 ? null : posts[index + 1].node
  //   const next = index === 0 ? null : posts[index - 1].node

  //   createPage({
  //     path: post.node.fields.slug,
  //     component: blogPost,
  //     context: {
  //       slug: post.node.fields.slug,
  //       previous,
  //       next,
  //       apa: "aaa",
  //     },
  //   })
  // })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage, deletePage } = actions

//   return new Promise((resolve) => {
//     deletePage(page)

//     Object.keys(locales).map((lang) => {
//       const localizedPath = locales[lang].default
//         ? page.path
//         : locales[lang].path + page.path
//       // const localizedPath = locales[lang].path + page.path

//       return createPage({
//         ...page,
//         path: localizedPath,
//         context: {
//           locale: lang,
//         },
//       })
//     })

//     resolve()
//   })
// }
