import React from "react"
import LocalizedAniLink from "../../components/links/localized-ani-link"

const HomeLink = () => {
  return (
    <button className="px-4 py-6 font-semibold text-gray-800 duration-500 md:py-6 md:px-8 hover:text-gray-600">
      <LocalizedAniLink className="" to="/" title="home" />
    </button>
  )
}

export default HomeLink
