import React from 'react'

export default MoreRestoData = ({data}) => {
  console.log(data)
    return (
    <div>
        <h1>{data?.title}</h1>
    </div>
  )
}
