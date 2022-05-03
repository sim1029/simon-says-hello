import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

interface BlogsProps {
  readonly data: PageQueryData
}

const Blogs: React.FC<BlogsProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Head title="All tags" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <article>Simon Schueller projects</article>
    </Layout>
  )
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Blogs