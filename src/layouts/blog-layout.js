import React from "react"

import { rhythm } from "../utils/typography"
import Links from "../components/links"

const BlogLayout = ({ children }) => {
  const style = {
    container: {
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(32),
      padding: `${rhythm(3 / 2)} ${rhythm(3 / 4)}`,
    },
    blog: {
      marginTop: rhythm(1),
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(3 / 4)} ${rhythm(3 / 4)}`,
    },
  }
  return (
    <div style={style.container}>
      <Links />
      <div style={style.blog}>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default BlogLayout
