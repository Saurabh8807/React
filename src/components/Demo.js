import React,{useState,useRef} from 'react'

const Demo3 = () => {
  let x=0;
  const [y,setY]=useState(0)
  const z =useRef(0)
  console.log(z)
  console.log("renderring")
  return (
    <div className="" >
      <div>
        <h1>1st</h1> 
        <button onClick={()=>{x=x+1;console.log("x:",x)}}>x button</button>  
        <p>x : {x}</p>     
      </div>
      <div>
        <h1>2st</h1> 
        <button onClick={()=>{setY(y+1);;console.log("y:",y)}}> y button</button>  
        <p>y : {y}</p>     
      </div>
      <div>
        <h1>3st</h1> 
        <button onClick={()=>{z.current=z.current+1 ;console.log("z:",z.current)}}> z button</button>  
        <p>z : {z.current}</p>     
      </div>
      {/* <input type="text" ref={z} /> */}
    </div>
  )
}

export default Demo3