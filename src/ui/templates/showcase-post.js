import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import SEO from "../components/seo"
import titleize from "titleize"
import ShowcaseLayout from "../layouts/ShowcaseLayout"

class ShowcasePostTemplate extends React.Component {
  render() {
    const { data, pageContext, location } = this.props
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext

    return (
      <ShowcaseLayout location={location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1 className="mt-4">{titleize(post.frontmatter.title)}</h1>
            <p className="opacity-75">{post.frontmatter.date}</p>
          </header>
          <section
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr className="m-4" />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul className="flex flex-wrap justify-between">
            <li className="w-1/2 pr-2 text-justify">
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
            <li className="w-1/2 pr-2 text-justify">
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
      </ShowcaseLayout>
    )
  }
}
export default ShowcasePostTemplate

export const pageQuery = graphql`
  query ShowcasePostBySlug($slug: String!) {
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
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
