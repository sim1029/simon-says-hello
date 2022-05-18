import * as React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='footer is-light'>
        <div className='content has-text-centered'>
          <ul>
            <li>
              <Link to='skills'>Skills</Link>
            </li>
            <li>
              <Link to='projects'>Projects</Link>
            </li>
            <li>
              <Link to='blog'>Blog</Link>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
