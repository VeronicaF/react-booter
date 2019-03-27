import React, { useState } from 'react'

const App = () => {
    const [counter, setCounter] = useState(0)
    const add = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <h1>{ counter }</h1>
            <button onClick={ add } >click me</button>
        </>
    )
}

export default App