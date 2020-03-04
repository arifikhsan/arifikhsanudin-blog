import React from "react"

import { rhythm } from "../utils/typography"
import Links from "./links"

const BlogLayout = ({ children }) => {

  return (
    <div style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(32),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }}>
      <Links />
      <div
        style={{
          marginTop: rhythm(1),
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

export default BlogLayout
