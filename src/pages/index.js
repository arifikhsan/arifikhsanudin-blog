import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"

import rails from "../assets/svg/rails.svg"
import vue from "../assets/svg/vue.svg"
import react from "../assets/svg/react.svg"
import flutter from "../assets/svg/flutter.svg"
import android from "../assets/svg/android.svg"
import github from "../assets/svg/github.svg"
import gitlab from "../assets/svg/gitlab.svg"
import { useMediaQuery } from "react-responsive"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Homepage" />
      <div>
        <div
          style={{
            marginTop: rhythm(3),
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            alignContent: `center`,
            textAlign: `center`,
          }}
        >
          <h1>Hello, my name is Arif Ikhsanudin</h1>
          <h2>I am a Fullstack Developer</h2>
        </div>
        <div
          style={{
            marginTop: rhythm(4),
            display: `flex`,
            flexWrap: `wrap`,
            textAlign: `center`,
          }}
        >
          <div style={{ width: isMobile ? `100%` : `50%` }}>
            <p>I like to work with</p>
            <div
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `center`,
              }}
            >
              <img style={{ height: 24, margin: 4 }} src={rails} alt="rails" />
              <img style={{ height: 24, margin: 4 }} src={vue} alt="vue" />
              <img style={{ height: 24, margin: 4 }} src={react} alt="react" />
              <img
                style={{ height: 24, margin: 4 }}
                src={flutter}
                alt="flutter"
              />
              <img
                style={{ height: 24, margin: 4 }}
                src={android}
                alt="android"
              />
            </div>
          </div>
          <div
            style={{
              width: isMobile ? `100%` : `50%`,
              marginTop: isMobile && rhythm(2),
            }}
          >
            <p>Find me on</p>
            <div style={{ display: `flex`, justifyContent: `center` }}>
              <img
                style={{ height: 24, margin: 4 }}
                src={github}
                alt="github"
              />
              <img
                style={{ height: 24, margin: 4 }}
                src={gitlab}
                alt="gitlab"
              />
              {/* // TODO: Add Whatsapp Contact */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
