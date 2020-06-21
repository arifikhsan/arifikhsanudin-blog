import React from "react"
import Layout from "./layout"
import SEO from "../components/seo"

const ShowcaseLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <SEO title="Showcase" description="Every project i have done." />
      <main>{children}</main>
    </Layout>
  )
}

export default ShowcaseLayout
