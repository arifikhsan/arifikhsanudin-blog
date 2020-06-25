import React from "react"
import { IntlProvider } from "react-intl"
import id from "../../config/locales/id.json"
import en from "../../config/locales/en.json"
import "../../assets/styles/index.css"
import HeaderMenu from "./components/header-menu"

const messages = { id, en }

const Layout = ({ locale, children }) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <HeaderMenu />
      <div className="z-0 max-w-5xl p-4 mx-auto font-body">
        <main>{children}</main>
      </div>
      <div className="max-w-5xl mx-auto border-t">
        <div className="flex flex-col items-center justify-center p-4">
          <p>arif.ikhsanudin.id@gmail.com</p>
        </div>
      </div>
    </IntlProvider>
  )
}

export default Layout
