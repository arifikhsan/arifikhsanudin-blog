import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { FormattedMessage } from "react-intl"
import ExperimentLayout from "../layouts/experiment-layout"
import GithubLink from "../components/links/github-link"
import GithubActionsLink from "../components/links/github-actions-link"

const ExperimentPage = ({ data, location, pageContext: { locale } }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <ExperimentLayout location={location} title={siteTitle} locale={locale}>
      <SEO title="Experiment" />
      <div style={{ textAlign: `center` }}>
        <div className="mt-12 flex flex-col justify-center items-center">
          <h1>
            <FormattedMessage id="experiment" />
          </h1>
          <p>
            Trying about different things. Experiment does not have to be
            successful.
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
            <div className="w-full md:w-1/2 mt-4 pr-4">
              <div
                className="p-4"
                style={{
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              >
                <h3>Dark Theme Switch using BLoC</h3>
                <p>
                  Switching theme using button from dark to light and vice
                  versa. State of theme is done using Business Logic Components.
                  All code are tested using unit test, integration test, and
                  driver test.
                </p>
                <div className="flex justify-evenly">
                  <GithubLink repo="flutter_theme_bloc" />
                  <GithubActionsLink repo="flutter_theme_bloc" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-4 pr-4">
              <div
                className="p-4"
                style={{
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
            <div className="w-full md:w-1/2 mt-4 pr-4">
              <div
                className="p-4"
                style={{
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              >
                <h3 style={{ marginTop: 0 }}>Flutter Components</h3>
                <p>A small project built for trying many flutter widgets.</p>
                <div className="flex justify-evenly">
                  <GithubLink repo="flutter_components" />
                  <GithubActionsLink repo="flutter_components" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-4 pr-4">
              <div
                className="p-4"
                style={{
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              >
                <h3>Flutter Number Trivia</h3>
                <p>
                  Get a meaning from a number. This made by following TDD
                  tutorial from Reso Coder. But i change the code a little bit.
                </p>
                <div className="flex justify-evenly">
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
