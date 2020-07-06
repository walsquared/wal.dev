import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './index.css'

import { Button } from 'components'
import { WorkPage } from 'pages'

import NavBar from './navBar'
import Footer from './footer'

interface HelloWorldProps {
  userName: string
  lang: string
}

const App = (props: HelloWorldProps) => (
  <Router>
    <NavBar />
    <Route exact path='/' component={WorkPage} />
    <Route path='/work' render={() => <Redirect to='/' />} />
    <Footer />
  </Router>
)

ReactDOM.render(<App userName='Wal' lang='TypeScript' />, document.getElementById('root'))
