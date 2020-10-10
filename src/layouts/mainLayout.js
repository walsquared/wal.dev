import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BackToTopButton } from 'components'
import 'typeface-inter'
import 'typeface-open-sans'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  body {
    --black: #212121;
    --grey: #8a8887;
    --white: #fbfbfb;
    --red: #ee5947;
    --green: #00af6c;
    --yellow: #ebaf16;
    --blue: #5379ff;
    --desktop-width: 1200px;
    --mobile-width: 90vw;
    --bkg: var(--white);
    --text: var(--black);
    --body-font: 'Open Sans', sans-serif;
    --title-font: 'Inter', sans-serif;

    background-color: var(--bkg);
    color: var(--text);
    font-family: var(--body-font);

    margin: 0;
  }

  a {
    text-decoration: none;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: unset;
  }
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);
  position: relative;

  @media only screen and (min-width: 700px) {
    min-height: 100vh;
  }
`

const Main = styled.main`
  column-count: 1;
  row-gap: 20px;
  margin: 5vw 0 20vw;
  width: var(--mobile-width);
  max-width: var(--desktop-width);
`

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Root>
      <Main>{children}</Main>
      <BackToTopButton />
    </Root>
  </>
)

export default MainLayout
