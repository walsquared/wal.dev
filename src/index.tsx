import React, { lazy, Suspense, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Switch, useLocation } from 'react-router-dom'
import './index.css'

import NavBar from './navBar'
import Footer from './footer'

const WorkPage = lazy(() => import(/* webpackChunkName: "work-page" */ './pages/work'))
const AboutPage = lazy(() => import(/* webpackChunkName: "about-page" */ './pages/about'))
const ResumePage = lazy(() => import(/* webpackChunkName: "resume-page" */ './pages/resume'))
const NotFound = lazy(() => import(/* webpackChunkName: "not-found-page" */ './pages/notFound'))

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => (
  <Router>
    <ScrollToTop />
    <NavBar />
    <Suspense fallback={() => <div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={WorkPage} />
        <Route path='/work' render={() => <Redirect to='/' />} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/resume' component={ResumePage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
    <Footer />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
