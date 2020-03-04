import React from "react"
import Links from './links'

import { rhythm } from "../utils/typography"

const BlogLayout = ({ children }) => {

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Links />
      <main>{children}</main>
      <footer style={{ marginTop: rhythm(4), textAlign: `center` }}>Build with Gatsby</footer>
    </div>
  )
}

export default BlogLayout
