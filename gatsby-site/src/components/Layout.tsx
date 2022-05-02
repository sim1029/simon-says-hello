import * as React from 'react'
import { Link, PageProps } from 'gatsby'

type LayoutProps = {
  page: {
    title: String
  }
}

const Layout = ({ data: {page}, children }: PageProps<LayoutProps>) => {
  return (
    <div>
      <title>{page.title}</title>
      <nav>
        <ul>
          <li><Link to="/">Splash</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{page.title}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout