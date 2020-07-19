/* Based off of technique described in this Medium article:
 *  https://medium.com/frontend-digest/progressively-loading-images-in-react-107cb075417a
 */

import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { useIntersectionObserver } from 'hooks'

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.05);
`

const StyledImage = styled.img<{ isLoaded: boolean }>`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`

const Thumbnail = styled(StyledImage)`
  visibility: ${(props) => (props.isLoaded ? 'hidden' : 'visible')};

  filter: blur(5px);
  transition: visibility 0ms ease 400ms;
`

const ProperImage = styled(StyledImage)`
  opacity: ${(props) => (props.isLoaded ? 1 : 0)};
  transition: opacity 0.4s ease 0s;
`

interface ImageProps {
  className?: string
  thumbnail: string
  src: string
  alt?: string
}

const LazyImage = (props: ImageProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting && null !== ref.current) {
        setIsVisible(true)
        observerElement.unobserve(ref.current)
      }
    }
  })

  return (
    <Container ref={ref} className={props.className}>
      {isVisible && (
        <>
          <Thumbnail alt={props.alt} src={props.thumbnail} isLoaded={isLoaded} />
          <ProperImage
            onLoad={() => {
              setIsLoaded(true)
            }}
            isLoaded={isLoaded}
            alt={props.alt}
            src={props.src}
          />
        </>
      )}
    </Container>
  )
}

export default LazyImage
