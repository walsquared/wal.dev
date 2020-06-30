import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'

import { Button } from './components'
import NavBar from './navBar'

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
    <Button label='Test' link='hi' />
  </Router>
)

ReactDOM.render(<App userName='Wal' lang='TypeScript' />, document.getElementById('root'))
