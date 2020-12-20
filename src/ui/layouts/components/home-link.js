import React from "react"
import LocalizedAniLink from "../../components/links/localized-ani-link"

const HomeLink = () => {
  return (
    <button className="font-semibold text-gray-800 duration-500 md:py-6 md:px-8 hover:text-primary hover:underline">
      <LocalizedAniLink className="px-4 py-6" to="/" title="home" />
    </button>
  )
}

export default HomeLink
