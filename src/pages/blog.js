import React from "react"
import { Link, graphql } from "gatsby"
import BlogLayout from "../ui/layouts/blog-layout"
import SEO from "../ui/layouts/blog-layout"
import titleize from "titleize"
import { FormattedMessage } from "react-intl"

const BlogIndex = ({ data, location, pageContext: { locale } }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <BlogLayout location={location} title={siteTitle} locale={locale}>
      <SEO title="All posts" />
      <h2 style={{ textAlign: `center` }}>
        <FormattedMessage id="latest-blog" />
      </h2>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3 className="mt-8">
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {titleize(title)}
                </Link>
              </h3>
              <small style={{ opacity: `0.8` }}>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </BlogLayout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
      filter: { fileAbsolutePath: { regex: "/blogs/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            description
          }
        }
      }
    }
  }
`
