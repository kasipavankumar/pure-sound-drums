import React, { Fragment, FunctionComponent } from 'react'

const Spinner: FunctionComponent = (): JSX.Element => (
    <Fragment>
        <div className="spinner-container">
            <div className="spinner"></div>
            <p className="spinner-message">Initializing your drum machine!</p>
        </div>
    </Fragment>
)

export default Spinner
