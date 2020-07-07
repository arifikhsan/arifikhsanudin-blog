import React from "react"
import Layout from "./layout"

const BlogLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <div className="max-w-xl p-4 mx-auto mt-4">
        <main>{children}</main>
      </div>
    </Layout>
  )
}

export default BlogLayout