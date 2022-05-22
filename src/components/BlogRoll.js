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
      <div className='flex ml-10 flex-col items-center'>
        <h1 className='mt-10 self-start text-3xl font-bold'>Spotlight Post</h1>
        <div className='group mt-10 flex w-3/4 items-center justify-center space-x-10 rounded-xl shadow-md bg-slate-300 p-12 hover:cursor-pointer dark:bg-gray-700'>
          <div className='flex w-[400px] skew-y-3 flex-col items-center bg-blue  dark:bg-red'>
            <div
              className='prose prose-sm prose-slate w-[400px] translate-x-1 -translate-y-1 bg-white p-4 transition-transform duration-200 ease-out group-hover:translate-x-3 group-hover:-translate-y-3'
              dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}
            />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-2xl font-bold'>
              {edge.node.frontmatter.title}
            </h1>
            <p className='mt-8'>{edge.node.frontmatter.description}</p>
            <p className='mx-2 my-8 self-end underline decoration-blue decoration-2 underline-offset-4 opacity-0 transition duration-500 ease-linear group-hover:opacity-100 dark:decoration-red'>
              Keep Reading <span>&rarr;</span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  const RecentBlogs = ({ posts }) => {
    return (
      <div className='mt-10 ml-10 flex flex-col'>
        <h1 className='self-start text-3xl font-bold'>Recent Posts</h1>
        <div className='flex mt-10 space-x-12'>
          {posts.map(({ node: post }, index) => {
            if (index != 0) {
              return (
                <div
                  className='flex flex-col items-center rounded-lg bg-slate-300 p-8 shadow-md dark:bg-gray-700'
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
    <div className='mx-20 flex flex-col'>
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
