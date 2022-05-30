import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import ScrollableBlogs from './ScrollableBlogs'
import SpotlightBlog from './SpotlightBlog'

const BlogRoll = () => {
  const data = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 1000, format: HTML)
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              description
              featuredimage {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, width: 100, height: 200)
                }
              }
            }
            timeToRead
          }
        }
      }
    }
  `)

  const { edges: posts } = data.allMarkdownRemark

  return (
    <div className='mx-20 flex flex-col'>
      {posts && (
        <>
          <div className='ml-10 flex flex-col items-center'>
            <h1 className='mt-10 self-start text-3xl font-bold'>
              Spotlight Post
            </h1>
            <SpotlightBlog edge={posts[0]} />
          </div>
          <div className='mt-10 ml-10 flex flex-col'>
            <h1 className='self-start text-3xl font-bold'>Recent Posts</h1>
            <ScrollableBlogs posts={posts} />
          </div>
          <div className='mt-10 ml-10 flex flex-col'>
            <h1 className='self-start text-3xl font-bold'>Popular Posts</h1>
            <ScrollableBlogs posts={posts} />
          </div>
        </>
      )}
    </div>
  )
}

export default BlogRoll
