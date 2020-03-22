import React from "react"
import Layout from "./layout"

const ServiceLayout = ({ children }) => {
  return (
    <Layout>
      <main>{children}</main>
    </Layout>
  )
}

export default ServiceLayout
