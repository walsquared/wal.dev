import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './index.css'

import { WorkPage, AboutPage, ResumePage } from 'pages'

import NavBar from './navBar'
import Footer from './footer'

const App = () => (
  <Router>
    <NavBar />
    <Route exact path='/' component={WorkPage} />
    <Route path='/work' render={() => <Redirect to='/' />} />
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/resume' component={ResumePage} />
    <Footer />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
