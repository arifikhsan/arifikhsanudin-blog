import React from "react"
import titleize from "titleize"
import BlogLayout from "../../layouts/BlogLayout"
import SEO from "../../components/seo"
import { FormattedMessage } from "react-intl"
import { Link } from "gatsby"

const Posts = ({ posts }) => {
  return (
    <div className="grid gap-10 mt-8">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link
                  className="text-2xl font-semibold text-gray-800 hover:underline"
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
      <div className="py-12">
        <h1 className="text-3xl font-black text-center">
          <FormattedMessage id="latest-blog" />
        </h1>
        <div className="py-6">
          <Posts posts={posts} />
        </div>
      </div>
    </BlogLayout>
  )
}

export default BlogScreen
