import React, { useState } from "react"
import { rhythm } from "../../utils/typography"
import { useMediaQuery } from "react-responsive"
import MenuLink from "./menu-link"
import HomeLink from "./home-link"

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
  marginEach: {
    marginLeft: rhythm(1.5),
  },
}

const HeaderMenu = () => {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" })
  return (
    <div>
      {isMobile && open && (
        <div
          style={{
            backgroundColor: `white`,
            position: `fixed`,
            right: `0`,
            left: `0`,
            top: `0`,
            bottom: `0`,
            height: `100vh`,
          }}
        >
          <div style={{ padding: `${rhythm(1.5)} ${rhythm(3 / 4)}` }}>
            <div style={{ display: `flex`, justifyContent: `space-between` }}>
              <div></div>
              <div onClick={() => setOpen(false)} style={{ cursor: `pointer` }}>
                Keluar
              </div>
            </div>
            <div style={{ marginTop: `6rem` }}>
              <MenuLink isMobile={isMobile} />
            </div>
          </div>
        </div>
      )}
      <nav style={style.nav}>
        <HomeLink />
        {isMobile ? (
          <a
            style={{
              marginBottom: `0px`,
              boxShadow: `none`,
              color: `black`,
              cursor: `pointer`,
            }}
            onClick={() => setOpen(true)}
          >
            Menu
          </a>
        ) : (
          <MenuLink isMobile={isMobile} />
        )}
      </nav>
    </div>
  )
}

export default HeaderMenu
