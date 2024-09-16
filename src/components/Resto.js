import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestoData from '../utils/useRestoData'
import Shimmer from './Shimmer'

const Resto = () => {
    const {id} = useParams()
    // const [restaurant, setRestaurant] = useState({})

    // useEffect(async()=>{
    //     const data = await fetch(`http://localhost:3000/api/${id}`)
    //     const json = await data.json()
    //     setRestaurant(json)
    // },[])

    const resto = useRestoData(id)
    console.log("resto",resto)

    //  if (!resto) {
    //    return <Shimmer/> // Render loading state while data is being fetched
    //  }

  return (
    <div>
      <h1>{resto.name}</h1>
      <p>{resto.address}</p>
      <p>{resto.cuisine}</p>
      <p>{resto.rating}</p>
      <p>{resto.reviews}</p>
    </div>
  );
}

export default Resto