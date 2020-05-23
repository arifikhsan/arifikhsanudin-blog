import React from "react"
import Layout from "./layout"
import SEO from "../components/seo"

const BlogLayout = ({ children, ...props }) => {
  return (
    <Layout {...props}>
      <SEO title="Blog tentang pemrograman ruby, javascript, android, flutter, dan lain lain" />
      <div className="mt-4 max-w-xl mx-auto p-4">
        <main>{children}</main>
      </div>
    </Layout>
  )
}

export default BlogLayout
