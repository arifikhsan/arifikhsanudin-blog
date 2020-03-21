import React from "react"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { useMediaQuery } from "react-responsive"

const ExperimentPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Experiment" />
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
          <h1>Experiment</h1>
        </div>
        <div>
          <h2>Flutter</h2>
          <div
            style={{
              // padding: rhythm(2 / 4),
              display: `flex`,
              flexWrap: `wrap`,
              // justifyContent: `space-around`,
            }}
          >
            <div
              style={{
                width: isTabletOrMobile ? `100%` : `50%`,
                marginTop: rhythm(1.5),
                padding: rhythm(1),
              }}
            >
              <img src="https://via.placeholder.com/400x250" alt="" />
              <h3 style={{ marginTop: rhythm(1 / 4) }}>
                Dark Theme Switch using BLoC
              </h3>
              <p>
                Switching theme using button from dark to light and vice versa.
                State of theme is done using Business Logic Components. All code
                are tested using unit test, integration test, and driver test.
              </p>
              <div>
                <span>Github</span>
                <span>Download</span>
                <span>Test Coverage</span>
                <span>Workflow</span>
              </div>
            </div>
            <div
              style={{
                width: isTabletOrMobile ? `100%` : `50%`,
                marginTop: rhythm(1.5),
                padding: rhythm(1),
              }}
            >
              <img src="https://via.placeholder.com/400x250" alt="" />
              <h3 style={{ marginTop: rhythm(1 / 4) }}>
                Flutter Github Action Automated Build, Test, and Upload Artifact
              </h3>
              <p>
                Build flutter project in Github Action. Automated tests
                including unit testing, integration testing, and driver testing.
                Test also run on three different os. Ubuntu, windows, and Macos.
              </p>
              <div>
                <span>Github</span>
                <span>Download</span>
                <span>Test Coverage</span>
                <span>Workflow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
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
