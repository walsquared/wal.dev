import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div<{ factor: number; delay: number }>`
  opacity: 0;
  animation: componentFadeAnimation 0.2s ease-out 0s forwards;
  animation-delay: ${({ factor, delay }) => `calc(0s + ${delay * factor}s)`};
  will-change: opacity;

  @keyframes componentFadeAnimation {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

interface Props {
  children: Array<JSX.Element>
  delay?: number
}

const FadeAnimation = ({ children, delay = 0.2 }: Props) => {
  const newChildren = children.map((child, index) => (
    <StyledDiv key={index} factor={index} delay={delay}>
      {child}
    </StyledDiv>
  ))
  return <>{newChildren}</>
}

export default FadeAnimation
