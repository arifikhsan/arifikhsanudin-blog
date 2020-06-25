import React from "react"
import LocalizedAniLink from "../../components/links/localized-ani-link"

const HomeLink = () => {
  return (
    <button className="p-4" >
      <LocalizedAniLink className="" to="/" title="home" />
    </button>
  )
}

export default HomeLink
