import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'gatsby'

function Logo({ imgStyles, children }) {
  return (
    <Link to='/' className='flex items-center space-x-4'>
      <img src={logo} alt='logo' className={imgStyles} />
      {children}
    </Link>
  )
}

export default Logo