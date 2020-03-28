import React from "react"
import SEO from "../components/seo"
import PageLayout from "../layouts/page-layout"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { useMediaQuery } from "react-responsive"
import Img from "gatsby-image"

const CertificatePage = ({ data, location, pageContext: { locale } }) => {
  const siteTitle = data.site.siteMetadata.title
  const seo = data.skillAcademySeo.childImageSharp.fluid
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <PageLayout location={location} title={siteTitle} locale={locale}>
      <SEO title="Certificate" />
      <div style={{ textAlign: `center` }}>
        <div
          style={{
            marginTop: rhythm(3),
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            alignContent: `center`,
          }}
        >
          <h1>Certificate</h1>
        </div>
        <div>
          <h2>Others</h2>
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              flexWrap: `wrap`,
            }}
          >
            <div
              style={{
                width: isTabletOrMobile ? `100%` : `50%`,
                marginTop: rhythm(1.5),
                padding: rhythm(1),
              }}
            >
              <Img
                fluid={seo}
                style={{
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              />
              <h3>SEO Course in Skill Academy</h3>
              <p>
                I learned about the SEO mindset, how to research keywords in
                Ubersuggest, how to research and design content, and monitor SEO
                development on websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default CertificatePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    skillAcademySeo: file(
      sourceInstanceName: { eq: "asset" }
      extension: { eq: "jpg" }
      relativePath: { eq: "certificates/skill-academy-seo.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
