/*
 * useInterval: A hook that makes setInterval declarative
 * source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * Converted to TypeScript by Wal Wal
 */

import { useEffect, useRef } from 'react'

const useInterval = (callback: () => void, interval: number) => {
  const savedCallback = useRef<any>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (interval !== null) {
      let id = setInterval(tick, interval)
      return () => clearInterval(id)
    }
  }, [interval])
}

export default useInterval
