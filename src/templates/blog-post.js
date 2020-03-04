import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import TransitionLink from 'gatsby-plugin-transition-link'
import { TimelineMax, Power1 } from 'gsap'

import BlogLayout from "../components/blog-layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props)

    this.layoutContents = React.createRef()
    this.layoutWrapper = React.createRef()
    this.transitionCover = React.createRef()

    this.exitHorizontal = this.exitHorizontal.bind(this)
  }

  exitHorizontal = ({ length }, direction) => {
    const seconds = length

    const directionTo = direction === 'left' ? '-100%' : '100%'
    const directionFrom = direction === 'left' ? '100%' : '-100%'

    return new TimelineMax()
      .set(this.transitionCover, { x: directionFrom, display: 'block' })
      .to(this.transitionCover, seconds / 2, {
        x: '0%',
        ease: Power1.easeInOut,
      })
      .set(this.layoutWrapper, { opacity: 0 })
      .to(this.transitionCover, seconds / 2, {
        x: directionTo,
        ease: Power1.easeInOut,
      })
  }

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
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section
            style={{ marginTop: rhythm(2) }}
            dangerouslySetInnerHTML={{ __html: post.html }} />
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
            <li>
              {previous && (
                <AniLink
                  swipe
                  to={previous.fields.slug}
                  rel="prev"
                // exit={{
                //   length: 2,
                //   trigger: ({ exit }) => this.exitHorizontal(exit, 'left'),
                // }}
                // entry={{ delay: 1 }}
                >
                  ← {previous.frontmatter.title}
                </AniLink>
              )}
            </li>
            <li>
              {next && (
                <AniLink
                  swipe
                  to={next.fields.slug}
                  rel="next"
                // exit={{
                //   length: 2,
                //   trigger: ({ exit }) => this.exitHorizontal(exit, 'right'),
                // }}
                // entry={{
                //   delay: 1,
                //   state: { pass: 'Whatever you want', to: 'the next page' },
                // }}
                >
                  {next.frontmatter.title} →
                </AniLink>
              )}
            </li>
          </ul>
        </nav>
      </BlogLayout>
    )
  }
}
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
