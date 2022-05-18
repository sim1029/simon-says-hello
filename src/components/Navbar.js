import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import ToggleSlider from './ToggleSlider'
import githubLogo from '../img/social/github-icon.svg'
import githubLogoDark from '../img/social/github-icon-dark.svg'

const navPages = [
  ['Projects', '/projects'],
  ['Skills', '/skills'],
  ['Blog', '/blog'],
]

const navLinks = navPages.map(([title, url]) => (
  <li key={title}>
    <Link
      to={url}
      className='text-3xl hover:underline decoration-blue dark:decoration-red decoration-2 underline-offset-4 lg:text-xl'
    >
      {title}
    </Link>
  </li>
))

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.theme)

  const toggleDarkMode = () => {
    if (theme === 'dark') {
      localStorage.theme = 'light'
      setTheme('light')
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.theme = 'dark'
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }

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

  return (
    <div className='flex items-center justify-between bg-slate-200 px-8 py-8 text-gray-800 duration-300 ease-linear dark:bg-gray-800 dark:text-slate-200 lg:justify-around lg:py-10'>
      <Link to='/' className='flex items-center space-x-4'>
        <img src={logo} alt='logo' className='h-10 w-10' />
        <h1 className='text-xl font-bold'>Simon-Says-Hello</h1>
      </Link>
      <nav>
        <section className='flex lg:hidden'>
          <div
            className='cursor-pointer space-y-2'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className='block h-1 w-10 bg-gray-800 dark:bg-slate-200'></span>
            <span className='block h-1 w-10 bg-gray-800 dark:bg-slate-200'></span>
            <span className='block h-1 w-10 bg-gray-800 dark:bg-slate-200'></span>
          </div>
          <div
            className={
              isNavOpen
                ? 'fixed top-0 left-0 z-10 flex h-screen w-screen flex-col items-center justify-evenly bg-slate-200 dark:bg-gray-800'
                : 'hidden'
            }
          >
            <div
              className='absolute top-0 right-0 cursor-pointer px-8 py-8'
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className='h-8 w-8'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <div className='absolute top-0 left-0 px-8 py-8'>
              <ToggleSlider onClick={toggleDarkMode}></ToggleSlider>
            </div>
            <ul className='mx-10 flex min-h-[250px] flex-col justify-between'>
              {navLinks}
            </ul>
          </div>
        </section>
        <div className='hidden space-x-8 lg:flex'>
          <ul className='hidden sm:space-x-8 lg:flex lg:space-x-16'>
            {navLinks}
          </ul>
          <ToggleSlider onClick={toggleDarkMode}></ToggleSlider>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
