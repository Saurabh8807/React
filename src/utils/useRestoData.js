import { useEffect, useState } from "react";

 const useRestoData = (id)=>{
     const [ resto , setResto] =useState({})
     console.log(resto)
    console.log("hii")
    useEffect(()=>{
        fetchData()
    },[])
    async function fetchData(){
    // console.log("hiii")
    const data = await fetch(`http://localhost:3000/api/${id}`)
    // console.log("data",data)
    const json = await data.json();
    // console.log("json",json)
    setResto(json)
    // console.log("resto2",resto)
    }
    return resto
}

export default useRestoData;