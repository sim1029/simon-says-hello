import React from 'react'
import BlogPreviewCard from './BlogPreviewCard'

const ScrollableBlogs = ({ posts }) => {
  return (
    <div className='flex max-h-full flex-nowrap items-start gap-x-4 overflow-x-auto md:gap-x-8 lg:gap-x-12 py-12'>
      {posts.map(({ node: post }, index) => {
        if (index !== 0) {
          return <BlogPreviewCard post={post} key={post.id} />
        }
        return null
      })}
    </div>
  )
}

export default ScrollableBlogs
