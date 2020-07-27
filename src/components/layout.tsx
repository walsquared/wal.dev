import React from 'react'
import NavBar from './navBar'
import Footer from './footer'
import BackToTopButton from './backToTopButton'

import './layout.css'
import 'typeface-inter'
import 'typeface-open-sans'

const Layout = (props) => (
  <div id='faux-root'>
    <NavBar />
    {/* <main>{props.children}</main> */}
    <>{props.children}</>
    <BackToTopButton />
    <Footer />
  </div>
)

export default Layout
