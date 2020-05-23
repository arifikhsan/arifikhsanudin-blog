import React from "react"
import SEO from "../components/seo"
import PageLayout from "../layouts/page-layout"
import { graphql } from "gatsby"

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

  return (
    <PageLayout location={location} title={siteTitle} locale={locale}>
      <SEO title="Homepage" />
      <div>
        <div className="mt-12 flex flex-col justify-center items-center text-center">
          <h1>
            <FormattedMessage id="hello" />
          </h1>
          <h2>
            <FormattedMessage id="whatdoido" />
          </h2>
        </div>
        <div className="mt-16 flex flex-wrap text-center">
          <div className="w-full md:w-1/2">
            <p>I like to work with</p>
            <div className="flex flex-wrap justify-center">
              <ImageIcon name="rails" image={rails} />
              <ImageIcon name="vue" image={vue} />
              <ImageIcon name="react" image={react} />
              <ImageIcon name="flutter" image={flutter} />
              <ImageIcon name="android" image={android} />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <p>Find me on</p>
            <div className="flex justify-center">
              <a href="https://www.github.com/arifikhsan">
                <ImageIcon name="github" image={github} />
              </a>
              <a href="https://www.gitlab.com/arifikhsan">
                <ImageIcon name="gitlab" image={gitlab} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=6289516784488">
                <ImageIcon name="whatsapp" image={whatsapp} />
              </a>
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
