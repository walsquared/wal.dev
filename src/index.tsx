import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'

interface HelloWorldProps {
  userName: string
  lang: string
}

const App = (props: HelloWorldProps) => (
  <h1>
    I'm {props.userName} using {props.lang} with React!
  </h1>
)

ReactDOM.render(<App userName='Wal' lang='TypeScript' />, document.getElementById('root'))
