import { useEffect, useState } from 'react'
import GhostContentAPI, { PostsOrPages, GhostContentAPIOptions } from '@tryghost/content-api'
import ghostConfig from '../../ghostConfig.json'

const api = new GhostContentAPI(ghostConfig as GhostContentAPIOptions)

const useGhost = () => {
  return {
    // async getSinglePost(slug: string) {
    //   try {
    //     return await api.posts.read({ slug })
    //   } catch (error) {
    //     console.log('Error getting post: ', error)
    //   }
    // }
    async getPosts(page: number) {
      try {
        return api.posts.browse({
          include: 'tags',
          limit: 7,
          page
        })
      } catch (error) {
        console.error('[Ghost Error] Failed to load page: ', error)
      }
    }
  }
}

export default useGhost
