import * as React from 'react'
import { Link } from 'gatsby'
import { GlobalStyle, styled } from '../styles/theme'

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 16px;

    a {
      background: none;
    }
  }
`

const StyledFooter = styled.footer`
  padding-bottom: 36px;
`

interface LayoutProps {
  readonly title?: string
  readonly children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledNav className="navigation">
        <ul>
          <li><Link to="/">Splash</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </StyledNav>
      <main className="content" role="main">
        {children}
      </main>
      <StyledFooter className="footer">
        © {new Date().getFullYear()},{` `}
        <a href="https://jeffrafter.com">jeffrafter.com</a>. Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </StyledFooter>
    </>

  )
}

export default Layout
