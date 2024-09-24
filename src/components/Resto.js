import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestoData from '../utils/useRestoData'
import Shimmer from './Shimmer'
import useDetailData from '../utils/useDetailData'
import  MoreRestoData  from './MoreRestoData'

const Resto = () => {
    const {id} = useParams()
    // const [restaurant, setRestaurant] = useState({})

    // useEffect(async()=>{
    //     const data = await fetch(`http://localhost:3000/api/${id}`)
    //     const json = await data.json()
    //     setRestaurant(json)
    // },[])

    //  if (!resto) {
    //    return <Shimmer/> // Render loading state while data is being fetched
    //  }
    // console.log("hello i am in resto 1")
    const resto = useRestoData(id)
    // console.log("res",resto)
    const detailData =  useDetailData();
    console.log(detailData);
    
    // console.log("hello i am in resto 2")


    console.log("detail",detailData)

  return (
    <div className='w-1/2 mx-auto'>
      <div className='text-center'>
        <h1 className='font-bold text-3xl'>{resto.name}</h1>
        <p className='text-lg'>{resto.address}</p>
        <p className='text-lg'>{resto.cuisine}</p>
        <p className='text-lg'>{resto.rating}</p>
        <p className='text-lg'>{resto.reviews}</p>
      </div>

      {
        detailData.map((detail)=>(
          <MoreRestoData key={detail.title} data={detail}/>
        ))
      }

      {/* {
         <MoreRestoData key={detailData[0]?.title} data={detailData[0]}/>
      } */}
    </div>
  );
}

export default Resto