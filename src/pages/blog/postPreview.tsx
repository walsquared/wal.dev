import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { PostOrPage } from '@tryghost/content-api'

const postPreviewStyle = css`
  border: 2px solid var(--black);
  padding: 5vw;
  display: inline-block;
  position: relative;

  @media only screen and (min-width: 700px) {
    padding: 33px 38px;

    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: #ffffff;

    transition: 0.1s ease-in;

    &:hover {
      background-color: #ffffff88;
    }
  }
`

const PostPreviewDiv = styled(Link)<{ bkg?: string | null | undefined }>`
  ${postPreviewStyle}

  @media only screen and (min-width: 700px) {
    background-image: ${(props) => (props.bkg ? `url(${props.bkg})` : `unset`)};
  }
`

const tagStyle = css`
  margin: 0;

  color: var(--blue);

  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 0.9rem;
`

const Tag = styled.p`
  ${tagStyle}
`

const NewestTag = styled.p`
  ${tagStyle}

  @media only screen and (min-width: 1200px) {
    font-size: 1rem;
  }
`

const titleStyle = css`
  margin: 5px 0;

  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;

  @media only screen and (min-width: 700px) {
    font-size: 1.75rem;
  }
`

const Title = styled.h2`
  ${titleStyle}
`

const NewestTitle = styled.h2`
  ${titleStyle}

  @media only screen and (min-width: 1200px) {
    font-size: 2.5rem;
  }
`

const excerptStyle = css`
  margin-bottom: 10vw;

  @media only screen and (min-width: 700px) {
    margin-bottom: 35px;
  }
`

const Excerpt = styled.p`
  ${excerptStyle}
`

const NewestExcerpt = styled.p`
  ${excerptStyle}

  @media only screen and (min-width: 1200px) {
    font-size: 1.25rem;
  }
`

const metaStyle = css`
  margin: 0;
  position: absolute;
  bottom: 5vw;

  color: var(--blue);

  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 0.8rem;

  @media only screen and (min-width: 700px) {
    bottom: 35px;
  }
`

const Meta = styled.p`
  ${metaStyle}
`

const NewestMeta = styled.p`
  ${metaStyle}

  @media only screen and (min-width: 1200px) {
    position: unset;
    font-size: 1rem;
  }
`
export const PostPreview = ({ post }: { post: PostOrPage }) => {
  const date = post.published_at
    ? new Date(post.published_at)
        .toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
        .toUpperCase()
    : ''

  const readingTime = post.reading_time == 0 ? 1 : post.reading_time

  return (
    <PostPreviewDiv to={`/blog/${post.slug}`} bkg={post.feature_image}>
      <Tag>{post.tags?.[0].name?.toUpperCase()}</Tag>
      <Title>{post.title}</Title>
      <Excerpt>{post.excerpt}</Excerpt>
      <Meta>
        {date} • {readingTime} MIN READ
      </Meta>
    </PostPreviewDiv>
  )
}

const NewestPostPreviewDiv = styled(Link)<{ bkg?: string | null | undefined }>`
  ${postPreviewStyle}

  @media only screen and (min-width: 700px) {
    background-image: ${(props) => (props.bkg ? `url(${props.bkg})` : `unset`)};
  }

  @media only screen and (min-width: 1200px) {
    grid-column: 1 / span 3;
    background-image: none;

    display: flex;

    &:hover {
      background-color: #5379ff22;
    }
  }
`

const Preview = styled.div<{ image?: string | undefined | null }>`
  display: none;

  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-shrink: 0;
    width: 62.5%;
    height: 400px;
    max-width: 750px;
    max-height: unset;
    background-image: ${(props) => (props.image ? `url(${props.image})` : `unset`)};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    overflow: hidden;
  }
`

const PostBrief = styled.div`
  @media only screen and (min-width: 1200px) {
    padding-left: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const NewestPostPreview = ({ post }: { post?: PostOrPage }) => {
  if (!post) return <></>

  const date = post.published_at
    ? new Date(post.published_at)
        .toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
        .toUpperCase()
    : ''

  const readingTime = post.reading_time == 0 ? 1 : post.reading_time

  return (
    <NewestPostPreviewDiv to={`/blog/${post.slug}`} bkg={post.feature_image}>
      <Preview image={post.feature_image} />
      <PostBrief>
        <NewestTag>{post.tags?.[0].name?.toUpperCase()}</NewestTag>
        <NewestTitle>{post.title}</NewestTitle>
        <NewestExcerpt>{post.excerpt}</NewestExcerpt>
        <NewestMeta>
          {date} • {readingTime} MIN READ
        </NewestMeta>
      </PostBrief>
    </NewestPostPreviewDiv>
  )
}
