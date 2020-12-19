import React from "react"
import LocalizedAniLink from "../../components/links/localized-ani-link"

const HeaderDesktopMenu = props => {
  return (
    <div className="font-semibold" {...props}>
      <LocalizedAniLink
        to="/showcase"
        title="showcase"
        className="inline-block px-6 py-4 text-gray-800 transition duration-500 hover:underline hover:text-primary md:py-6 md:px-8"
      />
      <LocalizedAniLink
        to="/experiment"
        title="experiment"
        className="inline-block px-6 py-4 text-gray-800 transition duration-500 hover:underline hover:text-primary md:py-6 md:px-8"
      />
      <LocalizedAniLink
        to="/certificate"
        title="certificate"
        className="inline-block px-6 py-4 text-gray-800 transition duration-500 hover:underline hover:text-primary md:py-6 md:px-8"
      />
      <LocalizedAniLink
        to="/blog"
        title="blog"
        className="inline-block px-6 py-4 text-gray-800 transition duration-500 hover:underline hover:text-primary md:py-6 md:px-8"
      />
    </div>
  )
}

export default HeaderDesktopMenu
