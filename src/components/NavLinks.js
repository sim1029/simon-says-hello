import React from 'react'
import { Link } from 'gatsby'

function NavLinks({ navPages, linkStyles }) {
  return navPages.map(([title, url]) => (
    <li key={title}>
      <Link
        to={url}
        className={linkStyles}
      >
        {title}
      </Link>
    </li>
  ))
}

export default NavLinks
