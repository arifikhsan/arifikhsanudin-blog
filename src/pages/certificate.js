// import React from "react"
// import { graphql } from "gatsby"
// import CertificateScreen from "../ui/screens/certificate/CertificateScreen"

// const CertificatePage = ({ data, location, pageContext: { locale } }) => {
//   return <CertificateScreen data={data} location={location} locale={locale} />
// }

// export default CertificatePage

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     certificates: allFile(
//       filter: {
//         sourceInstanceName: { eq: "certificate" }
//         extension: { eq: "md" }
//       }
//       sort: { fields: [childMarkdownRemark___frontmatter___date], order: ASC }
//       limit: 1000
//     ) {
//       edges {
//         node {
//           # childMarkdownRemark {
//           #   id
//           #   fields {
//           #     slug
//           #   }
//           frontmatter {
//             title
//             category
//             description
//             featuredImage: featured_image {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             # }
//           }
//           extension
//           name
//         }
//       }
//     }
//   }
// `
