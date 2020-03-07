import React from 'react'
import { rhythm } from "../utils/typography"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default function links() {
  return (
    <nav style={{
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
    }}>
      <AniLink paintDrip color="rebeccapurple"
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        Home
        </AniLink>
      <div style={{ display: `flex`, justifyContent: `flex-end`, }}>
        <AniLink paintDrip color="rebeccapurple"
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/showcase`}
        >
          Showcase
        </AniLink>
        <AniLink paintDrip color="rebeccapurple"
          style={{
            marginLeft: rhythm(1.5),
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/blog`}
        >
          Blog
        </AniLink>
      </div>
    </nav>
  )
}

