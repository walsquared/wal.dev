import React, { lazy, Suspense, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Switch, useLocation } from 'react-router-dom'
import './index.css'

import NavBar from './navBar'
import Footer from './footer'
import { LoadingSpinner } from 'components'

const WorkPage = lazy(() => import(/* webpackChunkName: "work-page" */ './pages/work'))
const AboutPage = lazy(() => import(/* webpackChunkName: "about-page" */ './pages/about'))
const ResumePage = lazy(() => import(/* webpackChunkName: "resume-page" */ './pages/resume'))
const BlogPage = lazy(() => import(/* webpackChunkName: "blog-page" */ './pages/blog'))
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
    <Suspense fallback={() => <LoadingSpinner color='var(--text)' />}>
      <Switch>
        <Route exact path='/' component={WorkPage} />
        <Route path='/work' render={() => <Redirect to='/' />} />
        <Route path='/about' component={AboutPage} />
        <Route path='/resume' component={ResumePage} />
        <Route path='/blog' component={BlogPage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Suspense>
    <Footer />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
