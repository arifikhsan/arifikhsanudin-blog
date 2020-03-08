import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"

import rails from "../../content/assets/svg/rails.svg"
import vue from "../../content/assets/svg/vue.svg"
import react from "../../content/assets/svg/react.svg"
import flutter from "../../content/assets/svg/flutter.svg"
import android from "../../content/assets/svg/android.svg"
import github from "../../content/assets/svg/github.svg"
import gitlab from "../../content/assets/svg/gitlab.svg"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

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
            justifyContent: `space-around`,
            textAlign: `center`,
          }}
        >
          <div>
            <p>I like to work with</p>
            <div
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `center`,
              }}
            >
              <img style={{ height: 24, margin: 4 }} src={rails} />
              <img style={{ height: 24, margin: 4 }} src={vue} />
              <img style={{ height: 24, margin: 4 }} src={react} />
              <img style={{ height: 24, margin: 4 }} src={flutter} />
              <img style={{ height: 24, margin: 4 }} src={android} />
            </div>
          </div>
          <div>
            <p>Find me on</p>
            <div style={{ display: `flex`, justifyContent: `center` }}>
              <img style={{ height: 24, margin: 4 }} src={github} />
              <img style={{ height: 24, margin: 4 }} src={gitlab} />
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
