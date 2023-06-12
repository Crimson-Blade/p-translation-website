import * as React from "react"
import { Link, graphql } from "gatsby"
import { Card, Button } from "antd"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-7xl font-bold text-green-500 text-center">Blog</h1>
        </div>

      <div className="p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <Card
              key={post.fields.slug}
              title={title}
              bordered={false}
              className="max-w-xs " // Apply the custom CSS class here
            >
              <small>{post.frontmatter.date}</small>
              <br />
              <br />
              <p>{post.frontmatter.description || post.excerpt}</p>
              <Link to={post.fields.slug}>
                <Button>Read More</Button>
              </Link>
            </Card>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All Blog posts" />

export const pageQuery = graphql`
  query BlogsPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      limit: 8
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
