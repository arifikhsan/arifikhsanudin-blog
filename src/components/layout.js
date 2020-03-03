import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const BlogLayout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header style={{ display: `flex`, justifyContent: `flex-end` }}>
        <div>Showcase</div>
      </header>
      <main>{children}</main>
      <footer style={{ marginTop: rhythm(4) }}>Build with Gatsby</footer>
    </div>
  )
}

export default BlogLayout
