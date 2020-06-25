import React from "react"
import { injectIntl } from "react-intl"

import locales from "../../../config/i18n/locales"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FormattedMessage } from "react-intl"

const LocalizedAniLink = ({
  to,
  title,
  intl: { locale },
  children,
  style,
  ...props
}) => {
  const path = locales[locale].default ? to : `/${locale}${to}`
  return (
    <AniLink paintDrip hex="#1E88E5" to={path} {...props}>
      <div className="inline-block">
        <FormattedMessage id={title} />
      </div>
    </AniLink>
  )
}

export default injectIntl(LocalizedAniLink)
