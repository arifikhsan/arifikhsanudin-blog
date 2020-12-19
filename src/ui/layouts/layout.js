import React from "react"
import { IntlProvider } from "react-intl"
import id from "../../config/locales/id.json"
import en from "../../config/locales/en.json"
import "../../assets/styles/index.css"
import HeaderMenu from "./components/header-menu"
import Footer from "./components/Footer"

const messages = { id, en }

const Layout = ({ locale, children }) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <HeaderMenu />
      <div className="z-30 font-body">
        <div className="h-full max-w-5xl p-4 mx-auto">
          <main className="h-full">{children}</main>
        </div>
      </div>
      <Footer />
    </IntlProvider>
  )
}

export default Layout
