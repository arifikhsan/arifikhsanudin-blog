import React from "react"
import LocalizedAniLink from "../../components/links/localized-ani-link"

const MenuLink = props => {
  return (
    <div
      className="flex justify-start flex-col md:row md:justify-end items-center"
      {...props}
    >
      <LocalizedAniLink
        to="/showcase"
        title="showcase"
        className="md:ml-6 mt-6 md:mt-0"
      />
      <LocalizedAniLink
        to="/experiment"
        title="experiment"
        className="md:ml-6 mt-6 md:mt-0"
      />
      <LocalizedAniLink
        to="/certificate"
        title="certificate"
        className="md:ml-6 mt-6 md:mt-0"
      />
      <LocalizedAniLink
        to="/blog"
        title="blog"
        className="md:ml-6 mt-6 md:mt-0"
      />
    </div>
  )
}

export default MenuLink
