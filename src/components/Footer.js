import * as React from 'react'
import logo from '../img/logo.png'
import githubLogoDark from '../img/social/github-icon-dark.svg'
import githubLogo from '../img/social/github-icon.svg'
import Logo from './Logo'
import NavLinks from './NavLinks'
import SocialLinks from './SocialLinks'

const Footer = ({ theme }) => {
  const github = theme === 'dark' ? githubLogoDark : githubLogo

  const socialsLinks = [
    { alt: 'GitHub', src: github, url: 'https://github.com/sim1029' },
    { alt: 'GitHub1', src: github, url: 'https://github.com/sim1029' },
    { alt: 'GitHub2', src: github, url: 'https://github.com/sim1029' },
    { alt: 'GitHub3', src: github, url: 'https://github.com/sim1029' },
  ]

  const navPages = [
    ['Projects', '/projects'],
    ['Skills', '/skills'],
    ['Blog', '/blog'],
  ]

  const contact = [
    ['Message', '/'],
    ['Newsletter', '/'],
  ]

  const linksStyle =
    'text-3xl lg:text-xl decoration-blue decoration-[3px] underline-offset-4 hover:underline dark:decoration-red'

  return (
    <footer className='flex w-full flex-col bg-slate-200 text-gray-800 duration-300 ease-linear dark:bg-gray-800 dark:text-slate-200'>
      <hr className='mb-12 h-0.5 w-10/12 self-center bg-gray-800 '></hr>
      <div className='flex justify-around lg:hidden'>
        <div className='flex flex-col space-y-16'>
          <Logo imgStyles='h-10 w-10' />
          <ul className='flex flex-col items-center space-y-4'>
            <li className='text-3xl font-bold'>Socials</li>
            <SocialLinks
              imgStyle='w-10 md:w-16 lg:w-6'
              socialsLinks={socialsLinks}
            />
          </ul>
        </div>
        <div className='flex flex-col space-y-8'>
          <ul className='space-y-4'>
            <li className='mb-2 text-3xl font-bold'>Pages</li>
            <NavLinks
              className='space-y-2'
              linkStyles={linksStyle}
              navPages={navPages}
            />
          </ul>
          <ul className='space-y-4'>
            <li className='mb-2 text-3xl font-bold'>Contact</li>
            <NavLinks linkStyles={linksStyle} navPages={contact} />
          </ul>
        </div>
      </div>

      <div className='hidden justify-evenly lg:flex'>
        <a href='/'>
          <img src={logo} alt='logo' className='h-10 w-10' />
        </a>
        <ul>
          <li className='mb-2 text-2xl font-bold'>Pages</li>
          <NavLinks linkStyles={linksStyle} navPages={navPages} />
        </ul>
        <ul>
          <li className='mb-2 text-2xl font-bold'>Contact</li>
          <NavLinks
            linkStyles={linksStyle}
            navPages={contact}
          />
        </ul>
        <ul className='flex flex-col items-center'>
          <li className='mb-2 text-2xl font-bold'>Socials</li>
          <div className='flex space-x-4'>
            <SocialLinks
              imgStyle={'w-10 md:w-16 lg:w-6'}
              socialsLinks={socialsLinks}
            />
          </div>
        </ul>
      </div>

      <p className='mt-8 mb-4 self-center lg:mt-12'>© 2022 Simon Schueller</p>
    </footer>
  )
}

export default Footer
