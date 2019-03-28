import React, { useState, lazy, Suspense } from 'react'
const Test = lazy(() => import(/*webpackChunkName: 'test'*/'./test.jsx'))

const App = () => {
    const [counter, setCounter] = useState(0)
    const add = () => {
        setCounter(counter + 1)
        throw new Error('haha')
    }

    return (
        <>
            <h1>{ counter }</h1>
            <button onClick={ add } >click me</button>
            {
                counter > 1
                    ? (
                        <Suspense fallback='shit'>
                            <Test />
                        </Suspense>
                    )
                    : null
            }
        </>
    )
}

export default App
