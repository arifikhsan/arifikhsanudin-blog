import React from "react"
import { rhythm } from "../utils/typography"
import LocalizedAniLink from "./localized-ani-link"

const HeaderMenu = () => {
  const style = {
    nav: {
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
    },
    linkGroups: {
      display: `flex`,
      justifyContent: `flex-end`,
      alignItems: `center`,
    },
    marginLeft: {
      marginLeft: rhythm(1.5),
    },
  }
  return (
    <nav style={style.nav}>
      <LocalizedAniLink to="/" title="home" />
      <div style={style.linkGroups}>
        <LocalizedAniLink
          to="/showcase"
          title="showcase"
          style={style.marginLeft}
        />
        <LocalizedAniLink
          to="/experiment"
          title="experiment"
          style={style.marginLeft}
        />
        <LocalizedAniLink
          to="/certificate"
          title="certificate"
          style={style.marginLeft}
        />
        <LocalizedAniLink to="/blog" title="blog" style={style.marginLeft} />
      </div>
    </nav>
  )
}

export default HeaderMenu
