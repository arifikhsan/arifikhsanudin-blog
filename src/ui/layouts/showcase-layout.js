import React from "react"
import Layout from "./layout"
import SEO from "../components/seo"

const ShowcaseLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <SEO title="Showcase" />
      <div className="max-w-5xl mx-auto p-4">
        <main>{children}</main>
      </div>
    </Layout>
  )
}

export default ShowcaseLayout
