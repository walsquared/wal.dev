import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, SEO } from 'components'
import { PostPreview, NewestPostPreview } from 'components/postPreview'

const BlogText = styled.div`
  background-color: var(--blue);
  color: var(--white);

  margin: 0 0 100px;
  padding: 0 5vw;
  width: calc(var(--mobile-width) - 10vw);

  font-size: 1.2rem;
  text-align: center;

  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 2rem;

    span {
      color: var(--white);
      font-weight: 900;
    }
  }

  @media only screen and (min-width: 700px) {
    padding: 35px 40px;
    width: calc(var(--mobile-width) - 80px);
    max-width: 600px;

    h1 {
      margin: 0;
      font-size: 2.25rem;
    }

    p {
      margin: 20px 0 0 0;
    }
  }

  @media only screen and (min-width: 1200px) {
    font-size: 1.5rem;
    max-width: 800px;

    h1 {
      font-size: 3rem;
    }

    p {
      margin: 35px 0 0 0;
    }
  }
`

const Posts = styled.div`
  width: var(--mobile-width);
  margin-bottom: 50px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5vw;

  @media only screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: var(--desktop-width);
  }
`

const BlogPage = ({ data }) => {
  const { edges } = data.allMdx

  const posts = edges
    .map((edge) => edge.node)
    .sort((nodeA, nodeB) => new Date(nodeB.frontmatter.date).getTime() - new Date(nodeA.frontmatter.date).getTime())

  return (
    <Layout>
      <SEO title='Blog' description={`My thoughts, lessons, and experiences immortalized for your consumption.`} />
      <BlogText>
        <h1>A simple blog.</h1>
        <p>My thoughts, lessons, and experiences immortalized for your consumption. 📎</p>
      </BlogText>
      <Posts>
        {posts.length !== 0 ? <NewestPostPreview key={posts[0].id} post={posts[0]} /> : <></>}
        {posts.slice(1).map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </Posts>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            brief
            cover {
              childImageSharp {
                fluid(quality: 100) {
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
          fields {
            slug
          }
        }
      }
    }
  }
`
