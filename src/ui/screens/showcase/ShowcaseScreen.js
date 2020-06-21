import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import ShowcaseLayout from "../../layouts/ShowcaseLayout"
import { FormattedMessage } from "react-intl"
import SEO from "../../components/seo"

const GatsbySection = ({ data }) => {
  const showcases = data.allMarkdownRemark.edges

  return (
    <div>
      <h2 className="mt-4">ReactJS + GatsbyJS</h2>
      <div className="flex flex-wrap justify-center my-4">
        {showcases
          .filter(({ node }) => node.frontmatter.category === "gatsby")
          .map(({ node }) => {
            const title = node.frontmatter.title
            const image = node.frontmatter.featuredImage.childImageSharp.fluid

            return (
              <div key={node.fields.slug} className="w-full my-8 md:w-1/2">
                <Img
                  fluid={image}
                  className="rounded-lg h-52"
                  style={{
                    boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  }}
                />
                <h3 className="mt-8 text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-base">{node.frontmatter.description}</p>
                {node.frontmatter.links &&
                  node.frontmatter.links.map(link => {
                    return (
                      <div
                        key={link.title}
                        className="flex mt-8 justify-evenly"
                      >
                        {link.internal ? (
                          <Link
                            to={link.link}
                            className="px-6 py-4 duration-500 rounded-lg hover:bg-blue-500 hover:text-white"
                          >
                            {link.title}
                          </Link>
                        ) : (
                          <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-4 duration-500 rounded-lg hover:bg-blue-500 hover:text-white"
                          >
                            {link.title}
                          </a>
                        )}
                      </div>
                    )
                  })}
              </div>
            )
          })}
      </div>
    </div>
  )
}

const ShowcaseScreen = ({ location, data, locale }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <ShowcaseLayout location={location} locale={locale} title={siteTitle}>
      <SEO title="Showcase" description="Every project i have done." />
      <div className="text-center">
        <div className="flex flex-col items-center justify-center mt-12">
          <h1 className="text-3xl font-black">
            <FormattedMessage id="showcase" />
          </h1>
        </div>
        <GatsbySection data={data} />
      </div>
    </ShowcaseLayout>
  )
}

export default ShowcaseScreen
