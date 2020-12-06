import React from "react"
import ShowcaseLayout from "../../layouts/ShowcaseLayout"
import { FormattedMessage } from "react-intl"
import SEO from "../../components/seo"

const GatsbySection = ({ data }) => {
  const showcases = data.allMarkdownRemark.edges

  return (
    <div className="grid grid-flow-row gap-4 mt-12 lg:grid-cols-3 md:gap-8 md:grid-cols-2">
      {showcases.map(({ node }) => {
        const title = node.frontmatter.title

        return (
          <a target="_blank" rel="noreferrer" href={node.frontmatter.link}>
            <div
              key={node.fields.slug}
              className="w-full px-4 py-8 text-white rounded-lg bg-gradient-to-br from-indigo-500 to-light-blue-500"
            >
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-4 text-xs">{node.frontmatter.link}</p>
              <p className="mt-4">{node.frontmatter.description}</p>
            </div>
          </a>
        )
      })}
    </div>
  )
}

const ShowcaseScreen = ({ location, data, locale }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <ShowcaseLayout location={location} locale={locale} title={siteTitle}>
      <SEO
        title="Showcase"
        description="Every project i have ever worked on."
      />
      <div className="py-24 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-black">
            <FormattedMessage id="showcase" />
          </h1>
          <p className="mt-2">Every project i have ever worked on</p>
        </div>
        <GatsbySection data={data} />
      </div>
    </ShowcaseLayout>
  )
}

export default ShowcaseScreen
