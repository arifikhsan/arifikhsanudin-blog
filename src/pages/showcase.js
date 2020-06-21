import React from "react"
import SEO from "../ui/components/seo"
import PageLayout from "../ui/layouts/page-layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const GatsbySection = ({ data }) => {
  const showcases = data.allMarkdownRemark.edges

  return (
    <div>
      <h2>ReactJS + GatsbyJS</h2>
      <div className="flex flex-wrap justify-center">
        {showcases
          .filter(({ node }) => node.frontmatter.category === "gatsby")
          .map(({ node }) => {
            const title = node.frontmatter.title
            const image = node.frontmatter.featuredImage.childImageSharp.fluid

            return (
              <div key={node.fields.slug} className="w-full md:w-1/2 p-4">
                <Img
                  fluid={image}
                  className="h-64 rounded-lg"
                  style={{
                    boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  }}
                />
                <h3>{title}</h3>
                <p>{node.frontmatter.description}</p>
                {node.frontmatter.links &&
                  node.frontmatter.links.map(link => {
                    return (
                      <div
                        key={link.title}
                        style={{
                          display: `flex`,
                          justifyContent: `space-evenly`,
                        }}
                      >
                        {link.internal ? (
                          <Link to={link.link} style={{ boxShadow: `none` }}>
                            {link.title}
                          </Link>
                        ) : (
                          <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ boxShadow: `none` }}
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

const ShowcasePage = ({ data, location, pageContext: { locale } }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <PageLayout location={location} title={siteTitle} locale={locale}>
      <SEO title="Showcase" />
      <div className="text-center">
        <div className="flex flex-col justify-center items-center mt-12">
          <h1>Showcase</h1>
        </div>
        <GatsbySection data={data} />
      </div>
    </PageLayout>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
      filter: { fileAbsolutePath: { regex: "/showcases/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            description
            category
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            links {
              title
              link
            }
          }
        }
      }
    }
  }
`
