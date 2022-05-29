import { BsFillEyeFill } from '@react-icons/all-files/bs/BsFillEyeFill'
import { BsHeartFill } from '@react-icons/all-files/bs/BsHeartFill'
import React from 'react'
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const BlogPreviewCard = ({ post }) => {
  return (
    <div className='flex rounded-lg bg-slate-300 shadow-md dark:bg-gray-700 transition-transform duration-200 ease-out hover:translate-x-3 hover:-translate-y-3 hover:border-2 hover:border-blue dark:hover:border-red'>
      <article className='contents'>
        <header>
          {post.frontmatter.featuredimage ? (
            <PreviewCompatibleImage
              imageInfo={{
                image: post.frontmatter.featuredimage,
                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                width:
                  post.frontmatter.featuredimage.childImageSharp.gatsbyImageData
                    .width,
                height:
                  post.frontmatter.featuredimage.childImageSharp.gatsbyImageData
                    .height,
              }}
              imageStyle={'rounded-l-lg'}
            />
          ) : null}
        </header>
        <Link to={post.fields.slug} className='group flex flex-col justify-evenly p-4 '>
            <h1 className='text-lg font-bold'>{post.frontmatter.title}</h1>
            <div className='flex justify-between text-sm text-gray-600 dark:text-slate-400'>
              <p className=''>{post.frontmatter.date}</p>
              <div className='flex space-x-4'>
                <p className='flex items-center'>
                  <BsFillEyeFill className='mr-1 ' />
                  69
                </p>
                <p className='flex items-center'>
                  <BsHeartFill className='mr-1 fill-red' />
                  69
                </p>
                <p>{post.timeToRead} Min</p>
              </div>
            </div>
            <div className='flex justify-between'>
              <ul className='flex space-x-2'>
                <li>Tag 1</li>
                <li>Tag 2</li>
                <li>Tag 3</li>
              </ul>
              <p className='underline decoration-blue decoration-2 underline-offset-4 opacity-0 transition duration-500 ease-linear group-hover:opacity-100 dark:decoration-red '>
                Keep Reading <span>&rarr;</span>
              </p>
            </div>
        </Link>
      </article>
    </div>
  )
}

export default BlogPreviewCard
