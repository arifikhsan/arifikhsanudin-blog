import React from 'react'
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

export default function links() {
  return (
    <nav style={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
      <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          Home
        </Link>
      <div style={{ display: `flex`, justifyContent: `flex-end`}}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          Showcase
        </Link>
        <Link
          style={{
            marginLeft: rhythm(2),
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/blog`}
        >
          Blog
        </Link>
      </div>
    </nav>
  )
}

