import React from "react"
import ExperimentLayout from "../../layouts/ExperimentLayout"
import { FormattedMessage } from "react-intl"
import GithubLink from "../../components/links/GithubLink"
import GithubActionsLink from "../../components/links/GithubActionsLink"
import SEO from "../../components/seo"

const Posts = ({ experiments }) => {
  return (
    <div className="">
      <div className="flex flex-wrap w-full max-w-3xl mx-auto mt-4">
        {experiments.edges.map(experiment => {
          const frontmatter = experiment.node.childMarkdownRemark.frontmatter
          const id = experiment.node.childMarkdownRemark.id

          return (
            <div key={id} className="p-4 my-8 md:w-1/2">
              <h3 className="py-4 text-2xl font-bold text-gray-800">{frontmatter.title}</h3>
              <p className="py-4">{frontmatter.description}</p>
              <div className="flex mt-4 justify-evenly">
                <GithubLink repo={frontmatter.github_url} />
                <GithubActionsLink repo={frontmatter.github_url} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ExperimentScreen = ({ location, data, locale }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <ExperimentLayout location={location} title={siteTitle} locale={locale}>
      <SEO title="Experiment" description="Everything i touched." />
      <div style={{ textAlign: `center` }}>
        <div className="flex flex-col items-center justify-center pt-24">
          <h1 className="text-3xl font-black">
            <FormattedMessage id="experiment" />
          </h1>
          <p className="mt-4">
            Trying about different things. Experiment does not have to be
            successful.
          </p>
        </div>
        <div className="my-4">
          <h2 className="mt-10 text-2xl font-bold">Flutter</h2>
          <Posts experiments={data.experiments} />
        </div>
      </div>
    </ExperimentLayout>
  )
}

export default ExperimentScreen
