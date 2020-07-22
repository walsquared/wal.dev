import React from 'react'
import styled from 'styled-components'

import Layout from 'components/layout'
import SEO from 'components/seo'

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

const ShowCase = () => (
  <Layout>
    <SEO title='Automating the Automator' />
    <Page>
      <h1>Automating the Automator</h1>
      <p>A tale of conquest at Ribbon Communications</p>
      <StyledButton color='var(--black)' label='Home' link='/' />
    </Page>
  </Layout>
)

export default ShowCase
