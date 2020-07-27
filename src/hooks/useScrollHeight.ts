import { useEffect, useState } from 'react'

const useScrollHeight = () => {
  const [scrollHeight, setScrollHeight] = useState(window.pageYOffset)
  const handleScroll = () => setScrollHeight(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return scrollHeight
}

export default useScrollHeight
