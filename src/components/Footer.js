import * as React from 'react'
import { Link } from 'gatsby'
import githubLogo from '../img/social/github-icon.svg'
import githubLogoDark from '../img/social/github-icon-dark.svg'
import logo from '../img/logo.png'

const Footer = ({ theme }) => {
  const github = theme === 'dark' ? githubLogoDark : githubLogo

  const socialsLinks = [
    { alt: 'GitHub', src: github, url: 'https://github.com/sim1029' },
    { alt: 'GitHub1', src: github, url: 'https://github.com/sim1029' },
    { alt: 'GitHub2', src: github, url: 'https://github.com/sim1029' },
    { alt: 'GitHub3', src: github, url: 'https://github.com/sim1029' },
  ]

  const socials = socialsLinks.map(({ alt, src, url }) => (
    <li key={alt}>
      <a href={url}>
        <img alt={alt} src={src} className='w-10 md:w-16 lg:w-6' />
      </a>
    </li>
  ))

  const navPages = [
    ['Projects', '/projects'],
    ['Skills', '/skills'],
    ['Blog', '/blog'],
  ]

  const contact = [
    ['Message', '/'],
    ['Newsletter', '/'],
  ]

  const navLinks = navPages.map(([title, url]) => (
    <li key={title} className='my-1'>
      <Link
        to={url}
        className='text-3xl decoration-blue decoration-2 underline-offset-4 hover:underline dark:decoration-red lg:text-xl'
      >
        {title}
      </Link>
    </li>
  ))

  const contactLinks = contact.map(([title, url]) => (
    <li key={title} className='my-1'>
      <Link
        to={url}
        className='text-3xl lg:text-xl decoration-blue decoration-2 underline-offset-4 hover:underline dark:decoration-red'
      >
        {title}
      </Link>
    </li>
  ))

  return (
    <footer className='flex w-full flex-col bg-slate-200 text-gray-800 duration-300 ease-linear dark:bg-gray-800 dark:text-slate-200'>
      <hr className='mb-12 h-0.5 w-10/12 self-center bg-gray-800 dark:bg-slate-200'></hr>
      <div className='flex justify-around lg:hidden'>
        <div className='flex flex-col space-y-16'>
          <a href='/'>
            <img src={logo} alt='logo' className='h-10 w-10' />
          </a>
          <ul className='flex flex-col items-center space-y-4'>
            <li className='text-3xl font-bold'>Socials</li>
            {socials}
          </ul>
        </div>
        <div className='flex flex-col space-y-8'>
          <ul className='space-y-4'>
            <li className='mb-2 text-3xl font-bold'>Pages</li>
            {navLinks}
          </ul>
          <ul className='space-y-4'>
            <li className='mb-2 text-3xl font-bold'>Contact</li>
            {contactLinks}
          </ul>
        </div>
      </div>

      <div className='hidden justify-evenly lg:flex'>
        <a href='/'>
          <img src={logo} alt='logo' className='h-10 w-10' />
        </a>
        <ul>
          <li className='mb-2 text-2xl font-bold'>Pages</li>
          {navLinks}
        </ul>
        <ul>
          <li className='mb-2 text-2xl font-bold'>Contact</li>
          {contactLinks}
        </ul>
        <ul className='flex flex-col items-center'>
          <li className='mb-2 text-2xl font-bold'>Socials</li>
          <div className='flex space-x-4'>{socials}</div>
        </ul>
      </div>

      <p className='mt-8 mb-4 self-center lg:mt-12'>© 2022 Simon Schueller</p>
    </footer>
  )
}

export default Footer
