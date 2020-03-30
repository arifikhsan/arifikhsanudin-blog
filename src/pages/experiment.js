import React from "react"
import SEO from "../components/seo"
import ExperimentLayout from "../layouts/experiment-layout"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { useMediaQuery } from "react-responsive"
import GithubLink from "../components/links/github-link"
import GithubActionsLink from "../components/links/github-actions-link"
import { FormattedMessage } from "react-intl"

const ExperimentPage = ({ data, location, pageContext: { locale } }) => {
  const siteTitle = data.site.siteMetadata.title
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <ExperimentLayout location={location} title={siteTitle} locale={locale}>
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
          <h1>
            <FormattedMessage id="experiment" />
          </h1>
          <p>
            Trying about different things. Please dont mind at github commit
            message, because only me who works in this project. This experiment
            does not have to be successful.
          </p>
        </div>
        <div>
          <h2>Flutter</h2>
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
                marginTop: rhythm(1),
                padding: rhythm(0.5),
              }}
            >
              <div
                style={{
                  padding: rhythm(1),
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              >
                <h3 style={{ marginTop: rhythm(0) }}>
                  Dark Theme Switch using BLoC
                </h3>
                <p>
                  Switching theme using button from dark to light and vice
                  versa. State of theme is done using Business Logic Components.
                  All code are tested using unit test, integration test, and
                  driver test.
                </p>
                <div
                  style={{
                    display: `flex`,
                    justifyContent: `space-evenly`,
                  }}
                >
                  <GithubLink repo="flutter_theme_bloc" />
                  <GithubActionsLink repo="flutter_theme_bloc" />
                </div>
              </div>
            </div>
            <div
              style={{
                width: isTabletOrMobile ? `100%` : `50%`,
                marginTop: rhythm(1),
                padding: rhythm(0.5),
              }}
            >
              <div
                style={{
                  padding: rhythm(1),
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              >
                <h3 style={{ marginTop: 0 }}>
                  Flutter Github Action Automated Build, Test, and Upload
                  Artifact
                </h3>
                <p>
                  Build flutter project in Github Action. Automated tests
                  including unit testing, integration testing, and driver
                  testing. Test also run on three different os. Ubuntu, windows,
                  and Macos.
                </p>
                <div
                  style={{
                    display: `flex`,
                    justifyContent: `space-evenly`,
                  }}
                >
                  <GithubLink repo="flutter_github_actions" />
                  <GithubActionsLink repo="flutter_github_actions" />
                </div>
              </div>
            </div>
            <div
              style={{
                width: isTabletOrMobile ? `100%` : `50%`,
                marginTop: rhythm(1),
                padding: rhythm(0.5),
              }}
            >
              <div
                style={{
                  padding: rhythm(1),
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              >
                <h3 style={{ marginTop: 0 }}>Flutter Components</h3>
                <p>A small project built for trying many flutter widgets.</p>
                <div
                  style={{
                    display: `flex`,
                    justifyContent: `space-evenly`,
                  }}
                >
                  <GithubLink repo="flutter_components" />
                  <GithubActionsLink repo="flutter_components" />
                </div>
              </div>
            </div>
            <div
              style={{
                width: isTabletOrMobile ? `100%` : `50%`,
                marginTop: rhythm(1),
                padding: rhythm(0.5),
              }}
            >
              <div
                style={{
                  padding: rhythm(1),
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              >
                <h3 style={{ marginTop: 0 }}>Flutter Number Trivia</h3>
                <p>
                  Get a meaning from a number. This made by following TDD
                  tutorial from Reso Coder. But i change the code a little bit.
                </p>
                <div
                  style={{
                    display: `flex`,
                    justifyContent: `space-evenly`,
                  }}
                >
                  <GithubLink repo="flutter_number_trivia_season_2" />
                  <GithubActionsLink repo="flutter_number_trivia_season_2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExperimentLayout>
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
