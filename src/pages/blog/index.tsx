import React from 'react'
import styled from 'styled-components'

import { useGhost } from 'hooks'

const BlogPage = () => {
  const ghost = useGhost()

  console.log(ghost.posts)
  return <div>{ghost.isLoading ? 'loading...' : 'hi'}</div>
}

export default BlogPage
