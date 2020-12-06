import React, { Component } from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import SEO from "../components/seo"
import titleize from "titleize"
import BlogLayout from "../layouts/BlogLayout"

class BlogPostTemplate extends Component {
  render() {
    const { data, location } = this.props
    const post = data.markdownRemark

    return (
      <BlogLayout location={location} locale="en">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1 className="text-4xl font-bold font-display">
              {titleize(post.frontmatter.title)}
            </h1>
            <p className="mt-2 text-sm opacity-75">{post.frontmatter.date}</p>
          </header>
          <section
            className="py-16 prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr className="p-4" />
          <footer>
            <Bio />
          </footer>
        </article>
      </BlogLayout>
    )
  }
}
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
