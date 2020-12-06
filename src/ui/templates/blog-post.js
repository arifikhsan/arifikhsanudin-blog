import React, { Component } from "react"

// import Bio from "../components/bio"
// import SEO from "../components/seo"
// import titleize from "titleize"
// import BlogLayout from "../layouts/BlogLayout"
// import './blog-post.css'

class BlogPostTemplate extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { data, location } = this.props

    return <p>p</p>
    // const post = data.markdownRemark
    // const siteTitle = data.site.siteMetadata.title

    // return (
    //   <BlogLayout location={location} title={siteTitle} locale="en">
    //     <SEO
    //       title={post.frontmatter.title}
    //       description={post.frontmatter.description || post.excerpt}
    //     />
    //     <article>
    //       <header>
    //         <h1 className="mt-4 text-3xl font-bold">{titleize(post.frontmatter.title)}</h1>
    //         <p className="mt-2 text-sm opacity-75">{post.frontmatter.date}</p>
    //       </header>
    //       <section
    //         className="py-16"
    //         dangerouslySetInnerHTML={{ __html: post.html }}
    //       />
    //       <hr className="p-4" />
    //       <footer>
    //         <Bio />
    //       </footer>
    //     </article>
    //   </BlogLayout>
    // )
  }
}
export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//   }
// `
