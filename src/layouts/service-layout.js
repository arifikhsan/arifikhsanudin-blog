import React from "react"
import Layout from "./layout"

const ServiceLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <main>{children}</main>
    </Layout>
  )
}

export default ServiceLayout
