import React from "react"
import { graphql } from "gatsby"
import ExperimentScreen from "../ui/screens/experiment/ExperimentScreen"

const ExperimentPage = ({ data, location, pageContext: { locale } }) => {
  return <ExperimentScreen data={data} location={location} locale={locale} />
}

export default ExperimentPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    experiments: allFile(
      filter: {
        sourceInstanceName: { eq: "experiment" }
        extension: { eq: "md" }
      }
      sort: { fields: [childMarkdownRemark___frontmatter___date], order: DESC}
      limit: 1000
    ) {
      edges {
        node {
          childMarkdownRemark {
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              github_url
            }
          }
          extension
          name
        }
      }
    }
  }
`
