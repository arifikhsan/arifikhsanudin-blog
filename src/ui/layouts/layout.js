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
      <div className="z-30 h-screen min-h-full pt-12 overflow-y-auto font-body">
        <div className="h-full max-w-5xl p-4 mx-auto">
          <main className="h-full">{children}</main>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t">
          <div className="flex flex-row items-center justify-center px-4 py-6 bg-white">
            <a
              className="underline"
              href="https://www.instagram.com/arif.ikhsanudin.ids/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="ml-6 underline"
              href="https://github.com/arifikhsan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="ml-6 underline"
              href="https://www.dicoding.com/users/273428"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dicoding
            </a>
          </div>
        </div>
      </div>
    </IntlProvider>
  )
}

export default Layout
