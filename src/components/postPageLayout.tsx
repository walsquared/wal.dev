import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './layout'

/* Here you can pass components down to Mdx so they don't need to be imported
 * You can also define how the regular markdown components are rendered.
 * See: https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/?=mdx#components
 */
const shortcodes = { Link, h1: (props) => <h1 style={{ color: 'red' }} {...props} /> }

const Synopsis = styled.div``

const Tag = styled.p`
  margin: 0;

  color: var(--blue);

  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 0.9rem;

  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
  }
`

const Title = styled.h1`
  margin: 5px 0;
`

const Brief = styled.p`
  color: #888;
  font-size: 1.1rem;
  /* margin-bottom: 10vw; */

  @media only screen and (min-width: 700px) {
    /* margin-bottom: 35px; */
  }
  @media only screen and (min-width: 1200px) {
    font-size: 1.25rem;
  }
`

const Meta = styled.p`
  margin: 0;

  color: var(--blue);

  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 0.8rem;

  @media only screen and (min-width: 700px) {
  }

  @media only screen and (min-width: 1200px) {
    position: unset;
    font-size: 1rem;
  }
`

const Preview = styled(Img)`
  margin: 30px 0 50px;
  width: 100vw;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: var(--mobile-width);
`

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <article>
        <Synopsis>
          <Tag>{mdx.frontmatter.tags[0].toUpperCase()}</Tag>
          <Title>{mdx.frontmatter.title}</Title>
          <Brief>{mdx.frontmatter.brief}</Brief>
          <Preview fluid={mdx.frontmatter.cover.childImageSharp.fluid} />
          <Meta>
            {mdx.frontmatter.date.toUpperCase()} • {mdx.frontmatter.readingTime} MIN READ
          </Meta>
        </Synopsis>
        <Content>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Content>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        brief
        cover {
          childImageSharp {
            fluid(maxWidth: 1200) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
        date(formatString: "D MMM YYYY")
        readingTime
        tags
      }
    }
  }
`
