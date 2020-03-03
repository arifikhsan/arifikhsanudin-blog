import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='Hello, nice to meet you' />
      <div>
        <h1>Hello, my name is Arif Ikhsanudin</h1>
        <h2>I am a Junior Fullstack Developer</h2>
        <div style={{marginTop: 32}}>
          <p>I like to work with:</p>
          <div style={{display: `flex`}}>
            <span>Ruby on Rails</span>
            <span style={{marginLeft: 4}}>Vue</span>
            <span style={{marginLeft: 4}}>React</span>
            <span style={{marginLeft: 4}}>Flutter</span>
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <p>Find me on:</p>
          <div>
            <span>Github</span>
            <span>Gitlab</span>
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
