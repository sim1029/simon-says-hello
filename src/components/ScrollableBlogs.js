import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const ScrollableBlogs = ({ posts }) => {
  return (
    <div className='mt-10 flex space-x-12'>
      {posts.map(({ node: post }, index) => {
        if (index != 0) {
          return (
            <div
              className='flex flex-col items-center rounded-lg bg-slate-300 p-4 shadow-md dark:bg-gray-700'
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

export default ScrollableBlogs
