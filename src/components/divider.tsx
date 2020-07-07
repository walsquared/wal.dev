import React from 'react'
import styled from 'styled-components'
import { ThemeColor } from '../types'

interface DividerProps {
  className?: string
  theme: ThemeColor
}

const StyledDiv = styled.div<{ theme: ThemeColor }>`
  background-color: ${(props) => `var(--${props.theme})`};

  width: 250px;
  height: 8px;
  border-radius: 4px;
  margin: 20px 0;

  @media only screen and (min-width: 700px) {
    margin: 40px 0;
  }

  @media only screen and (min-width: 1200px) {
    margin: 50px 0;
  }
`

const Divider = (props: DividerProps) => <StyledDiv className={props.className} theme={props.theme} />

export default Divider
