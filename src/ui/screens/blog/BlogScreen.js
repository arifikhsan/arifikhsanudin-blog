import React from "react"
import titleize from "titleize"
import BlogLayout from "../../layouts/BlogLayout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const Posts = ({ posts }) => {
  return (
    <div className="grid gap-12 mt-8">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link
                  className="text-xl font-medium text-gray-800 hover:underline"
                  to={node.fields.slug}
                >
                  {titleize(title)}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {node.frontmatter.date}
              </p>
            </header>
            <section className="mt-4">
              <p
                className="text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </div>
  )
}

export const BlogScreen = ({ location, data, locale }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <BlogLayout location={location} title={siteTitle} locale={locale}>
      <SEO title="Blog tentang pemrograman ruby, javascript, android, flutter, dan lain lain" />
      <div className="pt-12 pb-24">
        <h1 className="text-3xl font-black text-center">
          Blog
        </h1>
        <p className="mt-2 text-center">Blog and publication</p>
        <div className="py-6">
          <Posts posts={posts} />
        </div>
      </div>
    </BlogLayout>
  )
}

export default BlogScreen
