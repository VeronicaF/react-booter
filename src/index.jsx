import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { hot } from 'react-hot-loader'
import App from './App'
import './index.css'

@hot(module)
class Container extends Component {
    render() {
        return (
            <App />
        )
    }
}


ReactDom.render(
    <Container />,
    document.querySelector('#root'),
    () => console.log('react loaded!')
)
