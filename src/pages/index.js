import React from "react"
import { graphql } from "gatsby"
import HomeScreen from "../ui/screens/home/HomeScreen"

const IndexPage = ({ data, location, pageContext: { locale } }) => {
  return (
    <HomeScreen
      location={location}
      siteTitle={data.site.siteMetadata.title}
      locale={locale}
    />
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
