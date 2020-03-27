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
  const thisWebsite = data.thisWebsite.childImageSharp.fluid

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
            <div
              style={{
                width: isTabletOrMobile ? `100%` : `50%`,
                marginTop: rhythm(1.5),
                padding: rhythm(1),
              }}
            >
              <img src="https://via.placeholder.com/400x250" alt="" />
              <h3>Webkita</h3>
              <p>
                Webkita is a website for providing website creation services.
                made with GatsbyJS and TailwindCSS. SEO optimized.
              </p>
              <div>
                <span>
                  <a
                    href="https://webkita.now.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ boxShadow: `none` }}
                  >
                    Go to page
                  </a>
                </span>
              </div>
            </div>
            <div
              style={{
                width: isTabletOrMobile ? `100%` : `50%`,
                marginTop: rhythm(1.5),
                padding: rhythm(1),
              }}
            >
              <Img fluid={thisWebsite} />
              <h3>Arif Ikhsanudin (This) Website</h3>
              <p>
                Simple website for myself. This website is made to represent the
                results of my work. There are certificate pages, showcases,
                experiments, and blogs. A blog is written with a markdown file,
                called with graphql, and displayed with html.
              </p>
              <div
                style={{
                  display: `flex`,
                  justifyContent: `space-evenly`,
                }}
              >
                <Link to="/" style={{ boxShadow: `none` }}>
                  Go to Homepage
                </Link>
                <a
                  href="https://github.com/arifikhsan/arifikhsanudin-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ boxShadow: `none` }}
                >
                  Code
                </a>
              </div>
            </div>
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
    thisWebsite: file(
      sourceInstanceName: { eq: "asset" }
      extension: { eq: "png" }
      relativePath: { eq: "showcases/arif-ikhsanudin-blog.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
