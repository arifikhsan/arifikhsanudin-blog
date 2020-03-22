import React from "react"
import Layout from "./layout"

const PageLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <main>{children}</main>
    </Layout>
  )
}

export default PageLayout
