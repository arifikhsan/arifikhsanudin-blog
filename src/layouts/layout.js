import React from "react"
import HeaderMenu from "../components/header-menu"

import { rhythm } from "../utils/typography"
import { IntlProvider } from "react-intl"

import id from "../locales/id.json"
import en from "../locales/en.json"

import '../styles/main.scss'

const messages = { id, en }

const Layout = ({ locale, children }) => {
  const style = {
    container: {
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(32),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    },
  }
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div style={style.container}>
        <HeaderMenu />
        <main>{children}</main>
      </div>
    </IntlProvider>
  )
}

export default Layout
