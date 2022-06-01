import React from 'react'
import BlogPreviewCard from './BlogPreviewCard'

const ScrollableBlogs = ({ posts }) => {
  return (
    <div className='mt-10 flex space-x-12'>
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
