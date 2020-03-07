import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const ShowcasePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Showcase" />
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
          <h1>Showcase</h1>
        </div>
        <div>
          <h2>Flutter</h2>
          <div
            style={{
              marginTop: rhythm(4),
              // display: `flex`,
              // justifyContent: `space-around`,
            }}
          >
            <div style={{ maxWidth: `200` }}>
              <img src="https://via.placeholder.com/250" />
              <p>Dark Theme Switch using BLOC</p>
              <p>
                Switching theme using button from dark to light and vice versa.
                all code are tested using unit test, integration test, and
                driver test.
              </p>
              <div>
                <span>Github</span>
                <span>Download</span>
                <span>Test Coverage</span>
                <span>Workflow</span>
              </div>
            </div>
            <div>
              <img src="https://via.placeholder.com/250" />
              <p>Flutter Github Action Automated Build, Test, and Upload Artifact</p>
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

export default ShowcasePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
