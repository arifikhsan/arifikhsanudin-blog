import React from "react"
import Layout from "./layout"

const ExperimentLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <main>{children}</main>
    </Layout>
  )
}

export default ExperimentLayout
