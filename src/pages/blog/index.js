import * as React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

const BlogIndexPage = () =>  {
    return (
      <Layout>
        <div className='min-h-screen bg-slate-200 text-gray-800 duration-300 ease-linear dark:bg-gray-800 dark:text-slate-200'>
          <section>
            <BlogRoll/>
          </section>
        </div>
      </Layout>
    )
}

export default BlogIndexPage
