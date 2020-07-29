import React from 'react'
import styled from 'styled-components'
import NavBar from './navBar'
import Footer from './footer'
import BackToTopButton from './backToTopButton'

import './layout.css'
import 'typeface-inter'
import 'typeface-open-sans'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
`

const Layout = (props) => (
  <div id='faux-root'>
    <NavBar />
    <Main>{props.children}</Main>
    <BackToTopButton />
    <Footer />
  </div>
)

export default Layout
