import React from "react"
import LocalizedAniLink from "../../components/links/localized-ani-link"
import { rhythm } from "../../utils/typography"

const MenuLink = ({ isMobile }) => {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: !isMobile && `flex-end`,
        alignItems: `center`,
        flexDirection: isMobile ? `column` : `row`,
      }}
    >
      <LocalizedAniLink
        to="/showcase"
        title="showcase"
        style={{
          marginLeft: isMobile ? `0` : rhythm(1.5),
          marginTop: isMobile ? rhythm(1.5) : `0`,
        }}
      />
      <LocalizedAniLink
        to="/experiment"
        title="experiment"
        style={{
          marginLeft: isMobile ? `0` : rhythm(1.5),
          marginTop: isMobile ? rhythm(1.5) : `0`,
        }}
      />
      <LocalizedAniLink
        to="/certificate"
        title="certificate"
        style={{
          marginLeft: isMobile ? `0` : rhythm(1.5),
          marginTop: isMobile ? rhythm(1.5) : `0`,
        }}
      />
      <LocalizedAniLink
        to="/blog"
        title="blog"
        style={{
          marginLeft: isMobile ? `0` : rhythm(1.5),
          marginTop: isMobile ? rhythm(1.5) : `0`,
        }}
      />
    </div>
  )
}

export default MenuLink
