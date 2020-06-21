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
  }
`
