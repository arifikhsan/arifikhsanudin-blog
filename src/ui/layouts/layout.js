import React from "react"
import { IntlProvider } from "react-intl"
import id from "../locales/id.json"
import en from "../locales/en.json"
import "../styles/index.css"
import HeaderMenu from "./components/header-menu"

const messages = { id, en }

const Layout = ({ locale, children }) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="max-w-5xl mx-auto p-4">
        <HeaderMenu />
        <main>{children}</main>
      </div>
    </IntlProvider>
  )
}

export default Layout
