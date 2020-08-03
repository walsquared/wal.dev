import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { graphql, Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import { useLocation } from '@reach/router'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import ReactTooltip from 'react-tooltip'

import Button from './button'
import Caption from './caption'
import ExternalLink from './inlineExternalAnchor'
import Layout from './layout'
import SEO from './seo'

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Synopsis = styled.div`
  width: var(--mobile-width);

  @media only screen and (min-width: 700px) {
    max-width: 680px;
  }
`

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

const styledHeader = css`
  font-family: 'Inter', sans-serif;
  font-weight: bold;

  margin: 0;
`

const Title = styled.h1`
  ${styledHeader}

  font-size: 2.25rem;
  margin: 5px 0 0;

  @media only screen and (min-width: 700px) {
    font-size: 2.75rem;

    @media only screen and (min-width: 1200px) {
      font-size: 2.8rem;
    }
  }
`

const Brief = styled.p`
  color: var(--grey);
  font-size: 1.1rem;
  margin: 5vw 0;

  @media only screen and (min-width: 700px) {
    margin: 25px 0;
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
    font-size: 1rem;
  }

  @media only screen and (min-width: 1200px) {
    position: unset;
    font-size: 1rem;
  }
`
const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 5vw 0 2.5vw;
  width: 100vw;

  @media only screen and (min-width: 700px) {
    margin: 50px 0;
    max-width: 1200px;
  }
`

const Image = styled(Img)`
  width: 100%;
`

interface PreviewProps {
  fluid: FluidObject
  caption?: string
}

const Preview = (props: PreviewProps) => (
  <PreviewContainer>
    <Image fluid={props.fluid} />
    {props.caption ? <Caption>{props.caption}</Caption> : <></>}
  </PreviewContainer>
)

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: var(--mobile-width);

  font-size: 1.1rem;

  p {
    line-height: 160%;
  }

  @media only screen and (min-width: 700px) {
    max-width: 680px;
  }
`

const EndDivider = styled.hr`
  width: 80%;
  margin: 50px 0;
  align-self: center;

  border: 1px solid var(--grey);

  @media only screen and (min-width: 700px) {
    max-width: calc(680px * 0.8);
    margin: 50px 0;
  }
`

const SharePrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;

  margin-bottom: 50px;

  width: var(--mobile-width);

  h1 {
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  p {
    margin: 20px 0;

    font-family: 'Open Sans', sans-serif;
    font-size: 1.25rem;
  }

  @media only screen and (min-width: 700px) {
    max-width: 680px;

    p {
      margin: 10px 0 30px;
      font-size: 1.5rem;
    }
  }
`

/* Here you can pass components down to Mdx so they don't need to be imported
 * You can also define how the regular markdown components are rendered.
 * See: https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/?=mdx#components
 */
const StyledP = styled.p`
  margin: 2.5vw 0;
  line-height: 160%;
  font-size: 1.1rem;

  @media only screen and (min-width: 700px) {
    margin: 10px 0;
    font-size: 1.25rem;
  }
`

const StyledH1 = styled.h1`
  ${styledHeader}
  font-size: 2rem;
  margin: 5vw 0 2.5vw;

  @media only screen and (min-width: 700px) {
    font-size: 2.5rem;
    margin: 30px 0 10px;
  }
`

const StyledH2 = styled.h2`
  ${styledHeader}
  font-size: 1.5rem;
  margin: 4.5vw 0 2.25vw;

  @media only screen and (min-width: 700px) {
    font-size: 1.8rem;
    margin: 25px 0 10px;
  }
`

const StyledH3 = styled.h3`
  ${styledHeader}
  font-size: 1.25rem;
  margin: 4vw 0 2vw;

  @media only screen and (min-width: 700px) {
    font-size: 1.5rem;
    margin: 20px 0 10px;
  }
`

const StyledH4 = styled.h4`
  ${styledHeader}
  font-size: 1.2rem;
  margin: 4vw 0 2vw;

  @media only screen and (min-width: 700px) {
    font-size: 1.4rem;
    margin: 20px 0 10px;
  }
`

const StyledH5 = styled.h5`
  ${styledHeader}
  font-size: 1.1rem;
  margin: 4vw 0 2vw;

  @media only screen and (min-width: 700px) {
    font-size: 1.3rem;
    margin: 20px 0 10px;
  }
`

const StyledH6 = styled.h6`
  ${styledHeader}
  font-size: 1rem;
  margin: 4vw 0 2vw;

  @media only screen and (min-width: 700px) {
    font-size: 1.25rem;
    margin: 20px 0 10px;
  }
`

const StyledBlockquote = styled.blockquote`
  border-left: 2px solid var(--grey);

  margin-left: 5vw;
  padding-left: 15px;

  p {
    margin: 0;
  }

  @media only screen and (min-width: 700px) {
    margin-left: 25px;
    padding-left: 25px;
  }
`

const listStyle = css`
  padding-left: 5vw;

  @media only screen and (min-width: 700px) {
    padding-left: 25px;
  }
`

const StyledUl = styled.ul`
  ${listStyle}

  p {
    margin: 0;
  }
`

const StyledOl = styled.ol`
  ${listStyle}

  p {
    margin: 0;
  }
`

const StyledTable = styled.table`
  /* Style this if you ever come to using an html table*/
`

const StyledHr = styled.hr`
  width: 80%;
  margin: 5vw 0;
  align-self: center;

  border: 1px solid var(--grey);

  @media only screen and (min-width: 700px) {
    margin: 50px 0;
  }
`

const StyledA = styled.a`
  text-decoration: underline;
`

const blogStyle = {
  p: (props) => <StyledP {...props} />,
  h1: (props) => <StyledH1 {...props} />,
  h2: (props) => <StyledH2 {...props} />,
  h3: (props) => <StyledH3 {...props} />,
  h4: (props) => <StyledH4 {...props} />,
  h5: (props) => <StyledH5 {...props} />,
  h6: (props) => <StyledH6 {...props} />,
  blockquote: (props) => <StyledBlockquote {...props} />,
  ul: (props) => <StyledUl {...props} />,
  ol: (props) => <StyledOl {...props} />,
  table: (props) => <StyledTable {...props} />,
  hr: (props) => <StyledHr {...props} />,
  a: (props) => <StyledA target='_blank' rel='noopener noreferrer external' link={props.href} {...props} />
}

const shortcodes = { Link, Caption, ...blogStyle }

export default function PageTemplate({ data: { mdx } }) {
  const { href } = useLocation()
  const [copyText, setCopyText] = useState<'Click to Copy' | 'Copying...' | 'Copied!' | 'Failed to Copy :('>(
    'Click to Copy'
  )

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description={mdx.frontmatter.brief} />
      <Article>
        <Synopsis>
          <Tag>{mdx.frontmatter.tags[0].toUpperCase()}</Tag>
          <Title>{mdx.frontmatter.title}</Title>
          <Brief>{mdx.frontmatter.brief}</Brief>
          <Meta>
            {mdx.frontmatter.date.toUpperCase()} • {mdx.frontmatter.readingTime} MIN READ
          </Meta>
        </Synopsis>
        <Preview caption={mdx.frontmatter.coverCaption} fluid={mdx.frontmatter.cover.childImageSharp.fluid} />
        <Content>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Content>
      </Article>
      <EndDivider />
      <SharePrompt>
        <h1>Liked this post?</h1>
        <p>
          Share it with a friend, or discuss with me on{' '}
          <ExternalLink link='https://twitter.com/walsquared' style={{ fontStyle: 'normal' }}>
            Twitter
          </ExternalLink>
          !
        </p>
        <Button
          data-tip
          data-for='copyToClipboard'
          color='var(--blue)'
          label='Copy Link to Post'
          action={() => {
            setCopyText('Copying...')
            navigator.clipboard.writeText(href).then(
              () => {
                setCopyText('Copied!')
              },
              (error) => {
                setCopyText('Failed to Copy :(')
                console.error(error)
              }
            )
          }}
        />
        <ReactTooltip id='copyToClipboard' type='info' effect='solid' getContent={() => copyText} />
      </SharePrompt>
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
            fluid(maxWidth: 1200, quality: 100) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
        coverCaption
        date(formatString: "D MMM YYYY")
        readingTime
        tags
      }
    }
  }
`
