import React, { useState } from "react"
import { rhythm } from "../utils/typography"
import LocalizedAniLink from "./localized-ani-link"
import { FormattedMessage } from "react-intl"

const HeaderMenu = () => {
  console.log(isMobile)
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
      visibility: isMobile ? `hidden` : `visible`,
    },
    hamburger: {
      visibility: isMobile ? `visible` : `hidden`,
    },
    marginLeft: {
      marginLeft: rhythm(1.5),
    },
  }
  return (
    <nav style={style.nav}>
      <LocalizedAniLink to="/">
        <FormattedMessage id="home" />
      </LocalizedAniLink>
      <div style={style.linkGroups}>
        <LocalizedAniLink to="/experiment" style={style.marginLeft}>
          <FormattedMessage id="experiment" />
        </LocalizedAniLink>
        <LocalizedAniLink to="/blog" style={style.marginLeft}>
          <FormattedMessage id="blog" />
        </LocalizedAniLink>
      </div>
    </nav>
  )
}

export default HeaderMenu
