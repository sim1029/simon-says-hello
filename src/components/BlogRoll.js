import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

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
            html
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
                  gatsbyImageData(layout: CONSTRAINED, width: 200, height: 150)
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

  const SpotlightBlog = ({ edge }) => {
    return (
      <div className='my-10 flex justify-around'>
        <div className='flex flex-col justify-center bg-slate-200 p-10 '>
          <div className='prose prose-sm prose-slate' dangerouslySetInnerHTML={{ __html: edge.node.html }} />
        </div>
        <div className='flex flex-col'>{edge.node.frontmatter.description}</div>
      </div>
    )
  }

  const RecentBlogs = ({ posts }) => {
    return (
      <div className='flex space-x-12'>
        {posts.map(({ node: post }, index) => {
          if (index != 0) {
            return (
              <div
                className='flex flex-col items-center rounded-lg bg-red p-8 text-slate-200 shadow-md'
                key={post.id}
              >
                <article>
                  <header>
                    <div className='flex justify-between'>
                      {post.frontmatter.featuredimage ? (
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            width:
                              post.frontmatter.featuredimage.childImageSharp
                                .gatsbyImageData.width,
                            height:
                              post.frontmatter.featuredimage.childImageSharp
                                .gatsbyImageData.height,
                          }}
                        />
                      ) : null}
                      <h1>{post.frontmatter.title}</h1>
                    </div>
                    <p className='font-bold'>{post.frontmatter.date}</p>
                    <p>{post.timeToRead} Min</p>
                  </header>
                </article>
              </div>
            )
          }
        })}
      </div>
    )
  }

  const PopularBlogs = ({ posts }) => {
    return (
      <div className='flex'>
        <h1>Popular Blogs</h1>
      </div>
    )
  }

  return (
    <div className='flex flex-col space-y-20 mx-20'>
      {posts && (
        <>
          <SpotlightBlog edge={posts[0]} />
          <RecentBlogs posts={posts} />
          <PopularBlogs posts={posts} />
        </>
      )}
    </div>
  )
}

export default BlogRoll
