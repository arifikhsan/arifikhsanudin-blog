import React from "react"
import LocalizedAniLink from "../../components/links/localized-ani-link"

const HomeLink = () => {
  return (
    <button >
      <LocalizedAniLink className="p-4" to="/" title="home" />
    </button>
  )
}

export default HomeLink
