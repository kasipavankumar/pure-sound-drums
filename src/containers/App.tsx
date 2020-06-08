import '../static/less/App.less'

import React, { Fragment, useEffect, useState, FunctionComponent, lazy, Suspense } from 'react'
import { render } from 'react-dom'

import Spinner from '../components/Spinner/Spinner'

const Drums = lazy(() => import('../components/Drums/Drums'))

const gradients: string[] = [
    'linear-gradient(to right, #4e54c8, #8f94fb)',
    'linear-gradient(to right, #ff416c, #ff4b2b)',
    'linear-gradient(to right, #8360c3, #2ebf91)',
    'linear-gradient(to right, #f12711, #f5af19)',
    'linear-gradient(to right, #373b44, #4286f4)',
    'linear-gradient(to right, #8e2de2, #4a00e0)',
    'linear-gradient(to right, #d31027, #ea384d)',
    'linear-gradient(to right, #F37335, #FDC830)',
    'linear-gradient(to right, #e52d27, #b31217)',
    'linear-gradient(to right, #314755, #26a0da)',
    'linear-gradient(to right, #e65c00, #f9d423)',
    'linear-gradient(to right, #1488cc, #2b32b2)',
    'linear-gradient(to right, #ffe259, #ffa751)',
    'linear-gradient(to right, #11998e, #38ef7d)',
    'linear-gradient(to right, #06beb6, #48b1bf)',
    'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
    'linear-gradient(to right, #355c7d, #6c5b7b, #c06c84)',
    'linear-gradient(to right, #5433ff, #20bdff, #a5fecb)',
    'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
]

const App: FunctionComponent = (): JSX.Element => {
    useEffect(() => {
        document.body.style.background = gradients[Math.floor(Math.random() * gradients.length)]
        localStorage.setItem('visited', JSON.stringify(true))
    }, [gradients])

    return (
        <Fragment>
            <Suspense fallback={<Spinner />}>
                <Drums />
            </Suspense>
        </Fragment>
    )
}

render(<App />, document.getElementById('App'))
