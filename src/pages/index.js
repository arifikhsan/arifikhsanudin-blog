import React from "react"
import SEO from "../components/seo"
import PageLayout from "../layouts/page-layout"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"

import rails from "../assets/svg/rails.svg"
import vue from "../assets/svg/vue.svg"
import react from "../assets/svg/react.svg"
import flutter from "../assets/svg/flutter.svg"
import android from "../assets/svg/android.svg"
import github from "../assets/svg/github.svg"
import gitlab from "../assets/svg/gitlab.svg"
import whatsapp from "../assets/svg/whatsapp.svg"
import { useMediaQuery } from "react-responsive"
import { FormattedMessage } from "react-intl"
import ImageIcon from "../components/image-icon"

const IndexPage = ({ data, location, pageContext: { locale } }) => {
  const siteTitle = data.site.siteMetadata.title
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" })

  const style = {
    hero: {
      marginTop: rhythm(3),
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      alignContent: `center`,
      textAlign: `center`,
    },
  }

  return (
    <PageLayout location={location} title={siteTitle} locale={locale}>
      <SEO title="Homepage" />
      <div>
        <div style={style.hero}>
          <h1>
            <FormattedMessage id="hello" />
          </h1>
          <h2>
            <FormattedMessage id="whatdoido" />
          </h2>
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
              <ImageIcon name="rails" image={rails} />
              <ImageIcon name="vue" image={vue} />
              <ImageIcon name="react" image={react} />
              <ImageIcon name="flutter" image={flutter} />
              <ImageIcon name="android" image={android} />
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
              <a href="https://www.github.com/arifikhsan">
                <ImageIcon name="github" image={github} />
              </a>
              <a href="https://www.gitlab.com/arifikhsan">
                <ImageIcon name="gitlab" image={gitlab} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=6289516784488">
                <ImageIcon name="whatsapp" image={whatsapp} />
              </a>
              <style jsx>{`
                a {
                  box-shadow: none;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
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
