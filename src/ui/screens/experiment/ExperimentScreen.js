import React from "react"
import ExperimentLayout from "../../layouts/ExperimentLayout"
import { FormattedMessage } from "react-intl"
import GithubLink from "../../components/links/GithubLink"
import GithubActionsLink from "../../components/links/GithubActionsLink"

const ExperimentScreen = ({ location, data, locale }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <ExperimentLayout location={location} title={siteTitle} locale={locale}>
      <div style={{ textAlign: `center` }}>
        <div className="flex flex-col items-center justify-center mt-12">
          <h1 className="text-3xl font-black">
            <FormattedMessage id="experiment" />
          </h1>
          <p className="mt-4">
            Trying about different things. Experiment does not have to be
            successful.
          </p>
        </div>
        <div className="my-4">
          <h2 className="mt-8 text-2xl font-bold">Flutter</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full mt-4 md:w-1/2">
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
            <div className="w-full pr-4 mt-4 md:w-1/2">
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
            <div className="w-full pr-4 mt-4 md:w-1/2">
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
            <div className="w-full pr-4 mt-4 md:w-1/2">
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

export default ExperimentScreen
