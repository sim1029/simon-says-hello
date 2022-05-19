import React from 'react'

const SocialLinks = ({ imgStyle, socialsLinks }) => {
  return (socialsLinks.map(({ alt, src, url }) => (
    <li key={alt}>
      <a href={url}>
        <img alt={alt} src={src} className={imgStyle} />
      </a>
    </li>
  )))
}

export default SocialLinks