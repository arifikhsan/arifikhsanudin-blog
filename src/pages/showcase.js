import React from "react"
import { graphql } from "gatsby"
import ShowcaseScreen from "../ui/screens/showcase/ShowcaseScreen"

const ShowcasePage = ({ data, location, pageContext: { locale } }) => {
  return (
    <ShowcaseScreen
      location={location}
      data={data}
      locale={locale}
    />
  )
}

export default ShowcasePage

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
      filter: { fileAbsolutePath: { regex: "/showcases/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            description
            category
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            links {
              title
              link
            }
          }
        }
      }
    }
  }
`
