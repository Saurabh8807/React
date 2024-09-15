import { useEffect, useState } from "react"


const User =(info)=>{
    const [count , setCount] = useState(0)
    console.log(info)

    useEffect(()=>{
        console.log("hello i am useEffect User")
    })
    console.log("i am user");

    return (
      <div className="userCard">
        {count}
        <h1>User</h1>
        <h3>Name :Saurabh</h3>
        <h3>City :Mumbai</h3>
        <h3>Age :25</h3>
        <button onClick={() => setCount(count + 1)}>more</button>
        <button onClick={() => setCount(count - 1)}>less</button>
      </div>
    );
}

export default User;