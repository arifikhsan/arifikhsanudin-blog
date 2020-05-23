import React from "react"
import SEO from "../ui/components/seo"
import PageLayout from "../ui/layouts/page-layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const CertificatePage = ({ data, location, pageContext: { locale } }) => {
  const siteTitle = data.site.siteMetadata.title
  const seo = data.skillAcademySeo.childImageSharp.fluid
  const azure = data.azure.childImageSharp.fluid
  const aws = data.aws.childImageSharp.fluid
  const binar = data.binar.childImageSharp.fluid
  const kotlin = data.kotlin.childImageSharp.fluid
  const androidBeginner = data.androidBeginner.childImageSharp.fluid

  return (
    <PageLayout location={location} title={siteTitle} locale={locale}>
      <SEO title="Certificate" />
      <div style={{ textAlign: `center` }}>
        <div className="mt-12 flex flex-col justify-center items-center">
          <h1>Certificate</h1>
        </div>
        <div>
          <h2>Coding</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 mt-6 p-4">
              <Img
                fluid={azure}
                style={{
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              />
              <h3>Basic Azure Cloud</h3>
              <p>
                I learned about using Azure services. Including repositories,
                database, web server, and deploy code.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-6 p-4">
              <Img
                fluid={kotlin}
                style={{
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              />
              <h3>Start Coding using Kotlin</h3>
              <p>I learned about how to code using kotlin.</p>
            </div>
            <div className="w-full md:w-1/2 mt-6 p-4">
              <Img
                fluid={aws}
                style={{
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              />
              <h3>Be AWS Solutions Architect Associate</h3>
              <p>
                I learned about AWS services. Including RDS, S3, IAM, EC2,
                Elastic Beanstalk, and many more.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-6 p-4">
              <Img
                fluid={androidBeginner}
                style={{
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              />
              <h3>Buid Android App for Beginner</h3>
              <p>
                I learned about how to make android apps that using
                RecyclerView.
              </p>
            </div>

            <div className="w-full md:w-1/2 mt-6 p-4">
              <Img
                fluid={binar}
                style={{
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              />
              <h3>Junior Backend Engineer at Binar Academy</h3>
              <p>
                Coding bootcamp in Yogyakarta, Indonesia. I learned about how to
                build a backend services using golang, using git, gitlab, deploy
                to heroku, and provide REST API for web frontend and android.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Others</h2>
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              flexWrap: `wrap`,
            }}
          >
            <div className="w-full md:w-1/2 mt-6 p-4">
              <Img
                fluid={seo}
                style={{
                  boxShadow: `0px 0px 16px rgba(0,0,0,0.1)`,
                  borderRadius: `0.5rem`,
                }}
              />
              <h3>SEO Course in Skill Academy</h3>
              <p>
                I learned about the SEO mindset, how to research keywords in
                Ubersuggest, how to research and design content, and monitor SEO
                development on websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default CertificatePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    skillAcademySeo: file(
      sourceInstanceName: { eq: "asset" }
      extension: { eq: "jpg" }
      relativePath: { eq: "certificates/skill-academy-seo.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    azure: file(
      sourceInstanceName: { eq: "asset" }
      extension: { eq: "jpg" }
      relativePath: { eq: "certificates/azure.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aws: file(
      sourceInstanceName: { eq: "asset" }
      extension: { eq: "jpg" }
      relativePath: { eq: "certificates/aws.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    binar: file(
      sourceInstanceName: { eq: "asset" }
      extension: { eq: "jpg" }
      relativePath: { eq: "certificates/binar.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kotlin: file(
      sourceInstanceName: { eq: "asset" }
      extension: { eq: "jpg" }
      relativePath: { eq: "certificates/kotlin.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    androidBeginner: file(
      sourceInstanceName: { eq: "asset" }
      extension: { eq: "jpg" }
      relativePath: { eq: "certificates/android-beginner.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
