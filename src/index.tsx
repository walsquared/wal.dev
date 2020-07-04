import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import CuHackingPreview from './pages/work/cuHacking-preview.svg'
import './index.css'

import { Button, Divider } from './components'
import NavBar from './navBar'
import Footer from './footer'

interface HelloWorldProps {
  userName: string
  lang: string
}

const App = (props: HelloWorldProps) => (
  <Router>
    <NavBar />
    <h1>
      I'm {props.userName} using {props.lang} with React!
    </h1>
    <Divider theme='red' />
    <CuHackingPreview />
    <Button color='turquoise' label='Button' link='hi' />
    <Footer />
  </Router>
)

ReactDOM.render(<App userName='Wal' lang='TypeScript' />, document.getElementById('root'))
