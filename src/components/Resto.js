import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const Resto = () => {
    const {id} = useParams()
    const [restaurant, setRestaurant] = useState({})

    useEffect(async()=>{
        const data = await fetch(`http://localhost:3000/api/${id}`)
        const json = await data.json()
        setRestaurant(json)
    },[])
  return (
    <div>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.address}</p>
        <p>{restaurant.cuisine}</p>
        <p>{restaurant.rating}</p>
        <p>{restaurant.reviews}</p>
    </div>
  )
}

export default Resto