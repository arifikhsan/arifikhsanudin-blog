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
      <div className="z-0 font-body">
        <div className="max-w-5xl mx-auto">
          <HeaderMenu />
        </div>
        <div className="max-w-5xl p-4 mx-auto">
          <main>{children}</main>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center p-4">
            <p>Built with ReactJS & GatsbyJS</p>
            <p className="mt-2">{"o((>ω< ))o  🎉🎉"}</p>
          </div>
        </div>
      </div>
    </IntlProvider>
  )
}

export default Layout
