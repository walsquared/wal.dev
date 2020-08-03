import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import defaultImage from 'images/twitter-card-default.jpg'

interface SEOProps {
  description?: string
  title?: string
  image?: string
}

export default ({ description, title, image }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaFullTitle = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title
  const metaTitle = title || site.siteMetadata.title
  const metaImage = `http://walwal.me${image || defaultImage}`

  return (
    <Helmet>
      <html lang='en' />
      <title>{metaFullTitle}</title>
      <meta name='image' content={metaImage} />
      <meta name='description' content={metaDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='http://walwal.me/' />
      <meta property='og:title' content={metaTitle} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:image' content={metaImage} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:domain' content='walwal.me' />
      <meta name='twitter:url' content='http://walwal.me/' />
      <meta name='twitter:site' content={site.siteMetadata.author} />
      <meta name='twitter:creator' content={site.siteMetadata.author} />
      <meta name='twitter:title' content={metaTitle} />
      <meta name='twitter:description' content={metaDescription} />
      <meta name='twitter:image' content={metaImage} />
    </Helmet>
  )
}
