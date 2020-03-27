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
      <LocalizedAniLink to="/" name="home" />
      <div style={style.linkGroups}>
        <LocalizedAniLink
          to="/experiment"
          name="experiment"
          style={style.marginLeft}
        />
        <LocalizedAniLink to="/blog" name="blog" style={style.marginLeft} />
      </div>
    </nav>
  )
}

export default HeaderMenu
