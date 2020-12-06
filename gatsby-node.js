const path = require(`path`)
const siteConfig = require("./src/config/siteConfig")
const { createFilePath } = require(`gatsby-source-filesystem`)
const locales = require("./src/config/i18n/locales")
const { kebabCase } = require("lodash")
const moment = require("moment")
// add slug
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${kebabCase(node.frontmatter.title)}`
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${kebabCase(node.frontmatter.slug)}`
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat)
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter)

        createNodeField({
          node,
          name: "date",
          value: date.toISOString(),
        })
      }
    }
    createNodeField({ node, name: "slug", value: slug })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/ui/templates/blog-post.js`)
  const markdownQueryResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors)
    throw markdownQueryResult.errors
  }

  // Create blog posts pages.
  const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges;

  postsEdges.forEach((post, index) => {
    const previous = index === postsEdges.length - 1 ? null : postsEdges[index + 1].node
    const next = index === 0 ? null : postsEdges[index - 1].node

    // console.log(post.node.fields)
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
        apa: "aaa",
      },
    })
  })
}

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
