import React from 'react'
import styled from 'styled-components'

const Caption = styled.p`
  width: var(--mobile-width);
  color: var(--grey);
  font-size: 1rem;
  font-style: italic;
  text-align: center;
  line-height: 100% !important;
  margin: 1rem 0;

  @media only screen and (min-width: 700px) {
    max-width: 680px;
  }
`

export default Caption
