import React from "react"
import Layout from "./layout"

const CertificateLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <main>{children}</main>
    </Layout>
  )
}

export default CertificateLayout
