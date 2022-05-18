import * as React from 'react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Navbar from './Navbar'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }, [])

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

  return (
    <div className='bg-slate-100 dark:bg-gray-800'>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes='16x16'
        />

        <link
          rel='mask-icon'
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color='#ff4400'
        />
        <meta name='theme-color' content='#fff' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta
          property='og:image'
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar themeToggle={toggleDarkMode} />
      <div>
        {children}
      </div>
      <Footer theme={theme} />
    </div>
  )
}

export default TemplateWrapper
