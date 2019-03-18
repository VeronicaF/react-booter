import React from 'react'
import ReactDom from 'react-dom'
import { hot } from 'react-hot-loader'
import './index.css'

const App = hot(module)(() => (
    <h1>hello world!</h1>
))

ReactDom.render(
    <App />,
    document.body,
    () => console.log('react loaded!')
)
