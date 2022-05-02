/* eslint-disable @typescript-eslint/camelcase */
'use strict'

module.exports = {
  siteMetadata: {
    title: 'Simon Says Hello',
    description: 'Personal website of software engineer Simon Schueller',
    siteUrl: 'https://simonsayshello.com',
    author: {
      name: 'Simon Schueller',
      url: 'https://twitter.com/_SimonSchueller',
      email: 'sps67@pitt.edu',
    },
    social: {
      twitter: 'https://twitter.com/_SimonSchueller',
      github: 'https://github.com/sim1029',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blogs`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://simonsayshello.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simon Schueller`,
        short_name: `simonsayshello.com`,
        start_url: `/`,
        background_color: `#ffffff`, // EDIT
        theme_color: `#663399`, // EDIT
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site., EDIT
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
  ],
}