import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'

import { Button } from './components'

interface HelloWorldProps {
  userName: string
  lang: string
}

const App = (props: HelloWorldProps) => (
  <h1>
    I'm {props.userName} using {props.lang} with React!
    <Button label='Test' link='hi' />
  </h1>
)

ReactDOM.render(<App userName='Wal' lang='TypeScript' />, document.getElementById('root'))
