import { Link } from 'gatsby'
import React from 'react'

const SpotlightBlog = ({ edge }) => {
  return (
    <Link to={edge.node.fields.slug} className='contents'>
      <div className='group flex flex-col gap-y-8 lg:gap-x-12 lg:flex-row items-center rounded-xl bg-slate-300 p-8 lg:p-12 shadow-md hover:cursor-pointer dark:bg-gray-700'>
        <div className='flex lg:shrink-0 skew-y-3 max-w-prose max-h-96 flex-col items-center bg-blue dark:bg-red'>
          <div
            className='prose lg:shrink-0 prose-sm max-w-prose max-h-96 overflow-hidden prose-slate translate-x-1 -translate-y-1 bg-white p-4 transition-transform duration-200 ease-out group-hover:translate-x-3 group-hover:-translate-y-3'
            dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}
          />
        </div>
        <div className='flex gap-y-4 flex-col max-w-xl'>
          <h1 className='text-2xl font-bold'>{edge.node.frontmatter.title}</h1>
          <p>{edge.node.frontmatter.description}</p>
          <p className='self-end underline decoration-blue decoration-2 underline-offset-4 opacity-0 transition duration-500 ease-linear group-hover:opacity-100 dark:decoration-red'>
            Keep Reading <span>&rarr;</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default SpotlightBlog
