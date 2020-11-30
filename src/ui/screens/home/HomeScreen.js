import React from "react"
import PageLayout from "../../layouts/page-layout"
import SEO from "../../components/seo"
import { FormattedMessage } from "react-intl"
// import BackgroundParticle from "./BackgroundParticle"

const HomeScreen = ({ location, siteTitle, locale }) => {
  return (
    <PageLayout location={location} title={siteTitle} locale={locale}>
      <SEO title="Homepage" />
      {/* <BackgroundParticle /> */}
      <div className="flex items-center justify-center py-12 md:w-full md:h-full md:py-24">
        <div className="flex flex-col items-center justify-center h-full py-6 text-center md:py-12">
          <h1 className="py-3 text-5xl font-black text-gray-900 font-display">
            <FormattedMessage id="hello" />
          </h1>
          <h2 className="py-3 text-xl font-bold text-gray-800">
            <FormattedMessage id="whatdoido" />
          </h2>
        </div>
      </div>
    </PageLayout>
  )
}

export default HomeScreen
