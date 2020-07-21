import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostOrPage } from '@tryghost/content-api'
import styled from 'styled-components'

import { useGhost } from 'hooks'
import { LoadingSpinner } from 'components'

const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--mobile-width);

  h1,
  h2,
  h3 {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    margin: 25px 0 15px;
  }

  h3 {
    font-size: 1.1rem;
    margin: 20px 0 12px;
  }
`

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

const Excerpt = styled.p`
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

const Preview = styled.img`
  margin: 30px 0 50px;
  width: 100vw;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: var(--mobile-width);
`

const PostPage = () => {
  const ghost = useGhost()
  const { slug } = useParams()
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState<PostOrPage>({} as PostOrPage)

  useEffect(() => {
    setLoading(true)

    const getPost = async () => {
      try {
        const blogPost = await ghost.getSinglePost(slug)
        if (!blogPost) throw new Error('Blog post returned undefined')

        setPost(blogPost)
      } catch (error) {
        console.error('Error fetching page: ', error)
      }

      setLoading(false)
    }

    getPost()
  }, [slug])

  console.log(post)
  if (loading) {
    return <LoadingSpinner color='var(--blue)' />
  } else {
    const date = post.published_at
      ? new Date(post.published_at)
          .toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
          .toUpperCase()
      : ''

    const readingTime = post.reading_time == 0 ? 1 : post.reading_time

    return (
      <BlogPost>
        <Synopsis>
          <Tag>{post.tags?.[0].name?.toUpperCase()}</Tag>
          <Title>{post.title}</Title>
          <Excerpt>{post.excerpt}</Excerpt>
          <Meta>
            {date} • {readingTime} MIN READ
          </Meta>
        </Synopsis>
        <Preview src={post.feature_image ? post.feature_image : ''} alt='Preview' />
        <Content dangerouslySetInnerHTML={{ __html: post.html ? post.html : '<div>unable to load content :(</div>' }} />
      </BlogPost>
    )
  }
}

export default PostPage
