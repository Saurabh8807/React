import { useState,useEffect } from "react";

const useOnlineStatus=()=>{
    const [isOnline, setUseOnline] = useState(true)
    useEffect(()=>{
        window.addEventListener("online",()=>setUseOnline(true))  
        window.addEventListener("offline",()=>setUseOnline(false))  
    },[])
console.log(isOnline)
    return isOnline;

}

export default useOnlineStatus