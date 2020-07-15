import React from 'react'
import styled from 'styled-components'
import Form from './form'

import { ThemeColor } from '../../types'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: var(--mobile-width);
  margin-bottom: 50px;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1200px) {
    max-width: var(--desktop-width);
  }
`

const Dialogue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 50px;

  h1 {
    margin: 0;
  }

  p {
    margin: 20px 0;

    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
  }

  @media only screen and (min-width: 700px) {
    margin-right: 5vw;

    p {
      margin: 10px 0 30px;

      font-family: 'Inter', sans-serif;
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 1200px) {
  }
`

interface Props {
  theme: ThemeColor
  children: React.ReactNode
}

const ContactPrompt = (props: Props) => (
  <StyledDiv>
    <Dialogue>{props.children}</Dialogue>
    <Form theme={props.theme} />
  </StyledDiv>
)

export default ContactPrompt
