import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import titleize from 'titleize'
import BlogLayout from "../layouts/blog-layout"

class ServicePageTemplate extends React.Component {
  render() {
    const { data, pageContext, location } = this.props
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext

    return (
      <BlogLayout location={location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {titleize(post.frontmatter.title)}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                opacity: `0.8`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section
            style={{ marginTop: rhythm(2) }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr
            style={{
              marginBottom: rhythm(1),
              margin: `${rhythm(2)} ${rhythm(1)}`,
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li
              style={{
                width: `50%`,
                textAlign: `justify`,
                paddingRight: rhythm(1 / 2),
              }}
            >
              {previous && (
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  style={{
                    textDecoration: `none`,
                    boxShadow: `none`,
                  }}
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li
              style={{
                width: `50%`,
                textAlign: `justify`,
                paddingLeft: rhythm(1 / 2),
              }}
            >
              {next && (
                <Link
                  to={next.fields.slug}
                  rel="next"
                  style={{
                    textDecoration: `none`,
                    boxShadow: `none`,
                  }}
                >
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </BlogLayout>
    )
  }
}
export default ServicePageTemplate

export const pageQuery = graphql`
  query ServicePageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
      }
    }
  }
`