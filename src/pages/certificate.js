import React from "react"
import SEO from "../components/seo"
import PageLayout from "../layouts/page-layout"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { useMediaQuery } from "react-responsive"

const CertificatePage = ({ data, location, pageContext: { locale } }) => {
  const siteTitle = data.site.siteMetadata.title
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
          <h2>Flutter</h2>
          <div
            style={{
              display: `flex`,
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
        <div>
          <h2>GatsbyJS</h2>
          <div
            style={{
              display: `flex`,
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
              <img src="https://via.placeholder.com/400x250" alt="" />
              <h3 style={{ marginTop: rhythm(1 / 4) }}>Webkita</h3>
              <p>
                Sint excepteur nostrud aliqua veniam tempor commodo
                reprehenderit qui culpa ex. In eiusmod proident elit est
                voluptate est dolor duis labore. Deserunt ad nisi nulla
                incididunt labore amet anim est quis. Minim nostrud minim
                exercitation nostrud irure esse adipisicing pariatur labore
                aliquip labore ex occaecat cupidatat.
              </p>
              <div>
                <span>Go to page</span>
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
                Arif Ikhsanudin (This) Website
              </h3>
              <p>
                Duis voluptate quis sunt qui commodo in. Sint magna dolore anim
                mollit mollit ad nostrud enim. Est eiusmod excepteur mollit
                labore officia mollit in ad esse magna nisi incididunt nulla.
                Nulla eu nisi ex nulla proident eu qui irure veniam ipsum
                officia. Sit consequat commodo do incididunt sint esse ad tempor
                qui ea occaecat ullamco sit commodo.
              </p>
              <div>
                <span>Test Coverage</span>
                <span>Workflow</span>
              </div>
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
  }
`
