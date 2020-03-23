import React from "react"
import SEO from "../components/seo"
import PageLayout from '../layouts/page-layout'
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { useMediaQuery } from "react-responsive"

const ServicePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <PageLayout location={location} title={siteTitle}>
      <SEO title="Jasa pembuatan website wordpress untuk semua kategori" />
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
          <h1>Jasa</h1>
        </div>
        <div>
          <h2>Jasa Pembuatan Website Wordpress</h2>
          <div
            style={{
              display: `flex`,
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
              <h3 style={{ marginTop: rhythm(1 / 4) }}>
                Jasa Pembuatan Website Fotografi
              </h3>
              <p>
                Occaecat deserunt sunt aute incididunt laborum. Ea pariatur
                occaecat ullamco irure excepteur cillum elit exercitation
                eiusmod pariatur sint veniam. Tempor do aliqua ipsum ullamco
                officia deserunt consequat. Velit irure laborum ut aute amet.
              </p>
            </div>
            <div
              style={{
                width: isTabletOrMobile ? `100%` : `50%`,
                marginTop: rhythm(1.5),
                padding: rhythm(1),
              }}
            >
              <img src="https://via.placeholder.com/400x250" alt="" />
              <h3 style={{ marginTop: rhythm(1 / 4) }}>
                Jasa Pembuatan Website Bengkel Mobil
              </h3>
              <p>
                Occaecat eiusmod reprehenderit commodo consectetur tempor ipsum
                ad reprehenderit. Tempor fugiat minim adipisicing est dolor.
                Dolore aute magna duis incididunt eu duis veniam est in sit
                nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default ServicePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
