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
            excerpt(pruneLength: 1500, format: HTML)
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
                  gatsbyImageData(layout: CONSTRAINED, width: 150, height: 250)
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
    <div className='px-4 md:px-8 py-4 gap-y-10 lg:px-20 lg:py-10 flex flex-col'>
      {posts && (
        <div className='contents'>
          <div className='flex gap-y-8 flex-col items-center'>
            <h1 className='text-4xl font-bold'>
              Spotlight Post
            </h1>
            <SpotlightBlog edge={posts[0]} />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-4xl self-center lg:self-start font-bold'>Recent Posts</h1>
            <ScrollableBlogs posts={posts} />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-4xl self-center lg:self-start font-bold'>Popular Posts</h1>
            <ScrollableBlogs posts={posts} />
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogRoll
