import React from "react"
import Layout from "./layout"

const ExperimentLayout = ({ children }) => {
  return (
    <Layout>
      <main>{children}</main>
    </Layout>
  )
}

export default ExperimentLayout
