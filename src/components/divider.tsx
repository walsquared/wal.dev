import React from 'react'
import styled from 'styled-components'
import { ThemeColor } from '../types'

interface DividerProps {
  theme: ThemeColor
}

const StyledDiv = styled.div<{ theme: ThemeColor }>`
  background-color: ${(props) => `var(--${props.theme})`};

  width: 250px;
  height: 8px;
  border-radius: 4px;
  margin: 50px 0;
`

const Divider = ({ theme }: DividerProps) => <StyledDiv theme={theme} />

export default Divider
