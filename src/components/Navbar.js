import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import logoDark from '../img/logo-dark.svg'
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
    <Link to={url} className='text-3xl lg:text-xl'>
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
      console.log(document.documentElement)
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
    <div className='flex justify-between px-8 lg:justify-around items-center py-8 lg:py-10 bg-slate-200 dark:bg-gray-800 dark:text-slate-200 text-gray-800'>
      <Link to='/'>
        <h1 className='font-bold'>SimonSaysHello</h1>
      </Link>
      <nav>
        <section className='flex lg:hidden'>
          <div
            className='space-y-2 cursor-pointer'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className='block h-1 w-10 dark:bg-slate-200 bg-gray-800'></span>
            <span className='block h-1 w-10 dark:bg-slate-200 bg-gray-800'></span>
            <span className='block h-1 w-10 dark:bg-slate-200 bg-gray-800'></span>
          </div>
          <div
            className={
              isNavOpen
                ? 'fixed w-screen h-screen top-0 left-0 z-10 flex flex-col items-center justify-evenly bg-slate-200 dark:bg-gray-800'
                : 'hidden'
            }
          >
            <div
              className='absolute top-0 right-0 px-8 py-8 cursor-pointer'
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
            <ul className='flex flex-col justify-between min-h-[250px] mx-10'>
              {navLinks}
            </ul>
          </div>
        </section>
        <ul className='hidden lg:flex sm:space-x-8 lg:space-x-16'>
          {navLinks}
        </ul>
      </nav>
      <div className='hidden lg:flex'>
        <ToggleSlider onClick={toggleDarkMode}></ToggleSlider>
      </div>
    </div>
  )
}

export default Navbar
