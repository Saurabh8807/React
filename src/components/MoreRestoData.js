
import React, {useState} from 'react'
import Options from './Options'


export default MoreRestoData = ({data,visible,setShowIndex}) => {
  // const[visible,setVisible]=useState(false)
  console.log(setShowIndex)

console.log("he")

const show=()=>{
  setShowIndex()
}

  console.log(data)
    return (
      <>
        <div onClick={show} className="bg-gray-300 cursor-pointer flex justify-between h-16 items-center text-center border-b-8 border-gray-100 ">
            <h1 className='font-bold'>{data?.title}</h1>
            <span>🔽</span>
        </div>
       {visible&& <Options resto={data.restaurants} />}
      </>
  )
}
