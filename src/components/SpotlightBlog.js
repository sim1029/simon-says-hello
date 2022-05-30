import { Link } from 'gatsby'
import React from 'react'

const SpotlightBlog = ({ edge }) => {
  return (
    <Link to={edge.node.fields.slug} className='contents'>
      <div className='group mt-10 flex w-3/4 items-center justify-center space-x-10 rounded-xl bg-slate-300 p-12 shadow-md hover:cursor-pointer dark:bg-gray-700'>
        <div className='flex w-[400px] skew-y-3 flex-col items-center bg-blue dark:bg-red'>
          <div
            className='prose prose-sm prose-slate w-[400px] translate-x-1 -translate-y-1 bg-white p-4 transition-transform duration-200 ease-out group-hover:translate-x-3 group-hover:-translate-y-3'
            dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold'>{edge.node.frontmatter.title}</h1>
          <p className='mt-8'>{edge.node.frontmatter.description}</p>
          <p className='mx-2 my-8 self-end underline decoration-blue decoration-2 underline-offset-4 opacity-0 transition duration-500 ease-linear group-hover:opacity-100 dark:decoration-red'>
            Keep Reading <span>&rarr;</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default SpotlightBlog
