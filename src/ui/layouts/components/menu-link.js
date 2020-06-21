import React from "react"
import LocalizedAniLink from "../../components/links/localized-ani-link"

const MenuLink = props => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center md:row md:justify-end"
      {...props}
    >
      <hr className="w-full md:hidden" />
      <LocalizedAniLink
        to="/showcase"
        title="showcase"
        className="w-full px-4 py-6 md:ml-6 md:mt-0"
      />
      <hr className="w-full md:hidden" />
      <LocalizedAniLink
        to="/experiment"
        title="experiment"
        className="w-full px-4 py-6 md:ml-6 md:mt-0"
      />
      <hr className="w-full md:hidden" />
      <LocalizedAniLink
        to="/certificate"
        title="certificate"
        className="w-full px-4 py-6 md:ml-6 md:mt-0"
      />
      <hr className="w-full md:hidden" />
      <LocalizedAniLink
        to="/blog"
        title="blog"
        className="w-full px-4 py-6 md:ml-6 md:mt-0"
      />
      <hr className="w-full md:hidden" />
    </div>
  )
}

export default MenuLink
