import React from "react"
import ExperimentLayout from "../../layouts/ExperimentLayout"
import { FormattedMessage } from "react-intl"
import SEO from "../../components/seo"

const Posts = ({ experiments }) => {
  return (
    <div className="">
      <div className="grid grid-flow-row gap-8 mt-12 lg:grid-cols-3 md:grid-cols-2">
        {experiments.edges.map((experiment) => {
          const frontmatter = experiment.node.childMarkdownRemark.frontmatter
          const id = experiment.node.childMarkdownRemark.id

          return (
            <a
              key={id}
              href={frontmatter.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col px-4 py-8 space-y-4 transition duration-500 transform rounded-lg shadow-xl hover:rotate-2 focus:-rotate-2 hover:shadow-2xl text-secondary bg-gradient-to-tr from-purple-500 to-fuchsia-500"
            >
              <h3 className="py-4 text-xl font-bold text-white">
                {frontmatter.title}
              </h3>
              <p className="text-sm break-all">{frontmatter.url}</p>
              <p className="">{frontmatter.description}</p>
            </a>
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
      <div className="pt-12 pb-24 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-black">
            <FormattedMessage id="experiment" />
          </h1>
          <p className="mt-4">
            Trying about different things. Experiment does not have to be
            successful.
          </p>
        </div>
        <div className="my-4">
          {/* <h2 className="mt-10 text-2xl font-bold">Flutter</h2> */}
          <Posts experiments={data.experiments} />
        </div>
      </div>
    </ExperimentLayout>
  )
}

export default ExperimentScreen
