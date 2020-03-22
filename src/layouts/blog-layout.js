import React from "react"

import { rhythm } from "../utils/typography"
import Layout from "./layout"
import SEO from "../components/seo"

const BlogLayout = ({ children }) => {
  const style = {
    blog: {
      marginTop: rhythm(1),
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(3 / 4)} ${rhythm(3 / 4)}`,
    },
  }
  return (
    <Layout>
      <SEO title="Blog tentang pemrograman ruby, javascript, android, flutter, dan lain lain" />
      <div style={style.blog}>
        <main>{children}</main>
      </div>
    </Layout>
  )
}

export default BlogLayout
