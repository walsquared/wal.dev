import GhostContentAPI, { GhostContentAPIOptions } from '@tryghost/content-api'
import ghostConfig from '../../ghostConfig.json'

const api = new GhostContentAPI(ghostConfig as GhostContentAPIOptions)

const useGhost = () => {
  return {
    async getSinglePost(slug: string) {
      try {
        return await api.posts.read({ slug }, { include: 'tags', formats: ['html', 'plaintext'] })
      } catch (error) {
        console.log('[Ghost Error] Failed to load page: ', error)
      }
    },
    async getPosts(page: number) {
      try {
        return api.posts.browse({
          include: 'tags',
          limit: 7,
          page
        })
      } catch (error) {
        console.error('[Ghost Error] Failed to fetch posts: ', error)
      }
    }
  }
}

export default useGhost
