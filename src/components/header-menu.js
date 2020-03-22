import React from "react"
import { rhythm } from "../utils/typography"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const HeaderMenu = () => {
  return (
    <nav
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <AniLink
        paintDrip
        hex="#1E88E5"
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        Home
      </AniLink>
      <div style={{ display: `flex`, justifyContent: `flex-end` }}>
        <AniLink
          paintDrip
          hex="#1E88E5"
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/service`}
        >
          Service
        </AniLink>
        <AniLink
          paintDrip
          hex="#1E88E5"
          style={{
            marginLeft: rhythm(1.5),
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/experiment`}
        >
          Experiment
        </AniLink>
        <AniLink
          paintDrip
          hex="#1E88E5"
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

export default HeaderMenu
