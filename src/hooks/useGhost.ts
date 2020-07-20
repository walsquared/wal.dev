import { useEffect, useState } from 'react'
import GhostContentAPI, { PostsOrPages, GhostContentAPIOptions } from '@tryghost/content-api'
import ghostConfig from '../../ghostConfig.json'

const api = new GhostContentAPI(ghostConfig as GhostContentAPIOptions)

const useGhost = () => {
  const [posts, setPosts] = useState<PostsOrPages>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const getPosts = async () => {
      try {
        const blog = await api.posts.browse({
          limit: 'all'
        })

        setPosts(blog)
      } catch (error) {
        console.log('Error fetching posts: ', error)
      }

      setLoading(false)
    }

    getPosts()
  }, [])

  return {
    posts,
    isLoading: loading
  }
}

export default useGhost
