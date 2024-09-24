import { useEffect, useState } from "react"

const useDetailData = () => {
    const [detailData,setDetailData] = useState([])
    // console.log("i am in useDetaildata")
    async function fetchData(){
        const res = await fetch("http://localhost:3000/api/cat")
        const json = await res.json();

        setDetailData(json)
    } 

    useEffect(()=>{
        fetchData()
    },[])

    return detailData;

}

export default useDetailData;

