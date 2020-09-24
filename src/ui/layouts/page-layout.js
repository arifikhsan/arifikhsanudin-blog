import React from "react"
import Layout from "./layout"

const PageLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <div>{children}</div>
    </Layout>
  )
}

export default PageLayout
