import React from "react"
import SEO from "../components/seo"
import PageLayout from "../layouts/page-layout"
import { graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { useMediaQuery } from "react-responsive"
import Img from "gatsby-image"

const ShowcasePage = ({ data, location, pageContext: { locale } }) => {
  const siteTitle = data.site.siteMetadata.title
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" })
  const showcases = data.allMarkdownRemark.edges

  return (
    <PageLayout location={location} title={siteTitle} locale={locale}>
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
          <h2>ReactJS + GatsbyJS</h2>
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              flexWrap: `wrap`,
            }}
          >
            {showcases
              .filter(({ node }) => node.frontmatter.category === "gatsby")
              .map(({ node }) => {
                const title = node.frontmatter.title
                const image =
                  node.frontmatter.featuredImage.childImageSharp.fluid

                return (
                  <div
                    key={node.fields.slug}
                    style={{
                      width: isTabletOrMobile ? `100%` : `50%`,
                      marginTop: rhythm(1.5),
                      padding: rhythm(1),
                    }}
                  >
                    <Img
                      fluid={image}
                      style={{
                        boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                        borderRadius: `0.5rem`,
                        height: `16rem`,
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
                              <Link
                                to={link.link}
                                style={{ boxShadow: `none` }}
                              >
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
