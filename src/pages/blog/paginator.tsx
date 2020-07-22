import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Button } from 'components'
import { PostPreview, NewestPostPreview } from './postPreview'

interface PostOrPage {
  id: string
  published_at: string
  feature_image: string
  title: string
  excerpt: string
  slug: string
  reading_time: number
  tags: Array<{ name: string }>
  html: string
}

const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 700px;
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

const Paginator = () => {
  // const ghost = useGhost()
  // const [pageMeta, setPageMeta] = useState<Pagination>()
  const [posts, setPosts] = useState<Array<PostOrPage>>([])
  const [loading, setLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)

  // useEffect(() => {
  //   setLoading(true)

  //   const getPosts = async () => {
  //     try {
  //       const blog = await ghost.getPosts(pageNumber)
  //       if (!blog) throw new Error('Blog returned undefined')

  //       setPageMeta(blog.meta.pagination)

  //       // This turns `blog` back into an array of PostOrPage (as opposed to being PostsOrPages)
  //       const newPosts = blog?.map((post) => post)

  //       setPosts(posts.concat(newPosts))
  //     } catch (error) {
  //       console.error('Error fetching posts: ', error)
  //     }

  //     setLoading(false)
  //   }

  //   getPosts()
  // }, [pageNumber])

  return (
    <Posts>
      {posts.length !== 0 ? <NewestPostPreview key={posts[0].id} post={posts[0]} /> : <></>}
      {posts.slice(1).map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Posts>
  )
}

export default Paginator
