```graphql
{
  avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
    childImageSharp {
      fixed(width: 50, height: 50) {
        # ...GatsbyImageSharpFixed
        width
        height
        aspectRatio
        originalName
      }
    }
  }
  arifIkhsanudinLogo: file(absolutePath: { regex: "/ai.png/" }) {
    childImageSharp {
      fluid {
        originalName
        sizes
        presentationWidth
        presentationHeight
      }
    }
  }
  skillAcademySeo: file(
    sourceInstanceName: { eq: "asset" }
    extension: { eq: "jpg" }
    relativePath: { eq: "certificates/skill-academy-seo.jpg" }
  ) {
    childImageSharp {
      fluid {
        originalName
        sizes
        presentationWidth
        presentationHeight
      }
    }
  }
}
```

search multi image

{
  allFile(
    filter: {
      sourceInstanceName: { eq: "asset" }
      extension: { eq: "svg" }
      name: { in: ["github", "gitlab"] }
    }
    sort: { fields: name }
  ) {
    edges {
      node {
        name
      }
    }
  }
}
