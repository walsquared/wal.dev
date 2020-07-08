import React from 'react'
import styled from 'styled-components'

import { Button } from 'components'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: var(--mobile-width);
  height: calc(100vh - 285px); /* 285px comes from the combined height of the navbar and footer */

  min-height: 300px;

  h1 {
    font-family: 'Inter', sans-serif;
  }

  @media only screen and (min-width: 700px) {
    height: 50vh;
  }

  @media only screen and (min-width: 1200px) {
    width: var(--desktop-width);
  }
`

const StyledButton = styled(Button)`
  margin: 50px 0;
`

const NotFound = () => (
  <Page>
    <h1>Umm this is embarrassing...</h1>
    <p>You’re not supposed to be here. Let’s get you back to safety.</p>
    <StyledButton color='var(--black)' label='Home' link='/' />
  </Page>
)

export default NotFound
