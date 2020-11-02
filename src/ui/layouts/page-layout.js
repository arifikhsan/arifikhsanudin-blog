import React from "react"
import Layout from "./layout"

const PageLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <div className="w-full h-full">{children}</div>
    </Layout>
  )
}

export default PageLayout
