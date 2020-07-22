/*
 * useIntersectionObserver: A hook to wrap Intersection Observer
 * source: https://medium.com/frontend-digest/progressively-loading-images-in-react-107cb075417a
 * Converted to TypeScript by Wal Wal
 */
import { useEffect, MutableRefObject, RefObject } from 'react'

interface hookProps {
  target: RefObject<any>
  onIntersect: IntersectionObserverCallback
  threshold?: number
  rootMargin?: string
}

const useIntersectionObserver = ({ target, onIntersect, threshold = 0.1, rootMargin = '0px' }: hookProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold
    })

    const current = target.current
    observer.observe(current)

    return () => {
      observer.unobserve(current)
    }
  })
}

export default useIntersectionObserver
