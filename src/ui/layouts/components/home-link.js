import React from "react"
import LocalizedAniLink from "../../components/links/localized-ani-link"

const HomeLink = () => {
  return (
    <div >
      <LocalizedAniLink className="p-4" to="/" title="home" />
    </div>
  )
}

export default HomeLink
