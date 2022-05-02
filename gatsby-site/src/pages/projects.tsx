import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

interface ProjectsProps {
  readonly data: PageQueryData
}

const Projects: React.FC<ProjectsProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Head title="All tags" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <article>About Jeff Rafter...</article>
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

export default Projects