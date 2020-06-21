import React from "react"
import Layout from "./layout"

const ShowcaseLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <main>{children}</main>
    </Layout>
  )
}

export default ShowcaseLayout
