import * as React from "react"
import { render } from "@testing-library/react"

import HeaderMenu from "../header-menu"
import en from '../../../locales/en.json'
import { IntlProvider } from "react-intl"
import Layout from "../../layout"
const messages = { en }

describe(`HeaderMenu`, () => {
  it(`renders siteTitle`, () => {
    const siteTitle = `Hello World`
    const { getByText } = render(
      <Layout>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <HeaderMenu siteTitle={siteTitle} />
        </IntlProvider>
      </Layout>
    )

    const title = getByText(siteTitle)

    expect(title).toBeInTheDocument()
  })
})
