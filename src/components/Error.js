import React from 'react'

import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
        <h1>{error.data}</h1>
        <p>Oops! Something went wrong.</p>
        <p>Please try again later.</p>
        <a href="/">Return to Homepage</a>
  
    </div>
  )
}

export default Error