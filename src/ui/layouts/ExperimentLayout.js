import React from "react"
import Layout from "./layout"
import SEO from "../components/seo"

const ExperimentLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <SEO title="Experiment" description="Everything i touched." />
      <main>{children}</main>
    </Layout>
  )
}

export default ExperimentLayout
