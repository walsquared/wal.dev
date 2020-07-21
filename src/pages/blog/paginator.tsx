import React from 'react'
import styled from 'styled-components'

import { useGhost } from 'hooks'
import { PostPreview, NewestPostPreview } from './postPreview'

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

const Paginator = () => {
  const { isLoading, posts } = useGhost()
  console.log(posts)

  if (isLoading) {
    return <Posts>loading...</Posts>
  } else {
    return (
      <Posts>
        <NewestPostPreview key={posts?.[0].id} post={posts?.[0]} />
        {posts?.slice(1).map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </Posts>
    )
  }
}

export default Paginator
