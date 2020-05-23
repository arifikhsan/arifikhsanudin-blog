import React from "react"
import PageLayout from "../../layouts/page-layout"
import SEO from "../../components/seo"
import { FormattedMessage } from "react-intl"

const HomeScreen = ({ location, siteTitle, locale }) => {
  return (
    <PageLayout location={location} title={siteTitle} locale={locale}>
      <SEO title="Homepage" />
      <div className="py-24 md:py-32">
        <div className="py-12 text-center">
          <h1 className="py-6 font-black text-4xl text-gray-900">
            <FormattedMessage id="hello" />
          </h1>
          <h2 className="py-6 font-medium text-xl text-gray-800">
            <FormattedMessage id="whatdoido" />
          </h2>
        </div>
      </div>
    </PageLayout>
  )
}

export default HomeScreen
