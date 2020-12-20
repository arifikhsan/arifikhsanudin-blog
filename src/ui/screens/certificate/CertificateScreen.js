import React from "react"
import CertificateLayout from "../../layouts/CertificateLayout"
import Img from "gatsby-image"
import SEO from "../../components/seo"
import { FormattedMessage } from "react-intl"
import "./certificate-screen.css"
import lodash from "lodash"
import titleize from "titleize"

const Certificates = ({ certificates }) => {
  const categoryCertificate = lodash.groupBy(
    certificates.edges,
    "node.childMarkdownRemark.frontmatter.category"
  )

  return (
    <div>
      <div>
        {Object.entries(categoryCertificate).map((category) => {
          let categoryName = category[0]
          let categoryValue = category[1]

          return (
            <div key={categoryName}>
              <h3 className="mt-10 text-2xl font-bold">
                {titleize(categoryName)}
              </h3>
              <div className="mt-8">
                <div className="max-w-3xl mx-auto mt-4 md:flex-wrap md:flex md:justify-center md:items-start">
                  {categoryValue.map((certificate) => {
                    const id = certificate.node.childMarkdownRemark.id
                    const frontmatter =
                      certificate.node.childMarkdownRemark.frontmatter
                    const image =
                      frontmatter.featuredImage.childImageSharp.fluid

                    return (
                      <div key={id} className="w-full py-6 md:px-4 md:w-1/2">
                        <Img
                          fluid={image}
                          className="object-cover transition duration-500 rounded-lg shadow-xl hover:shadow-2xl"
                        />
                        <h3 className="py-4 mt-4 text-xl font-bold">
                          {frontmatter.title}
                        </h3>
                        <p className="py-4">{frontmatter.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const CertificateScreen = ({ location, data, locale }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <CertificateLayout location={location} title={siteTitle} locale={locale}>
      <SEO
        title="Certificate"
        description="Everything i have achieved. But not all."
      />
      <div className="pt-12 pb-24 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-black">
            <FormattedMessage id="certificate" />
          </h1>
          <p className="mt-2">Achievement and certificates</p>
        </div>
        <div className="my-10">
          <Certificates certificates={data.certificates} />
        </div>
      </div>
    </CertificateLayout>
  )
}

export default CertificateScreen
