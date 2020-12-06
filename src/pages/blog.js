import React from "react"
import { graphql } from "gatsby"
import { BlogScreen } from "../ui/screens/blog/BlogScreen"

const BlogPage = ({ data, location, pageContext: { locale } }) => {
  console.log(data)
  return <BlogScreen data={data} location={location} locale={locale} />
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
      filter: { fileAbsolutePath: { regex: "/blogs/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            description
          }
        }
      }
    }
  }
`
