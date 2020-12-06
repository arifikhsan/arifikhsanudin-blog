import React from "react"
import Layout from "./layout"

const BlogLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <div className="max-w-xl mx-auto">
        <main>{children}</main>
      </div>
    </Layout>
  )
}

export default BlogLayout
