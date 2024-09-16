import User from "./User";
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";
import { useEffect, useState } from "react";

const About = ()=>{
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("hello i am useEffect About");

      return()=>{
        console.log("i am in return useeffect ")
      }
    });
    console.log("i am about");

    const self={ 
        name: "John Doe",
        age: 30,
        address: {
          street: "123 Main St",
          city: "New York",
          state: "NY",
          zip: "12345"
        }
    }


    return (
      <>
        {count}
        <User info={self} name="ooooooo" />
        <button onClick={() => setCount(count + 1)}>c</button>
        {/* {/* <UserClass info={self} name="ooooooo" /> */}
        {/* <UserClass2 info={self} name="ooooooo" />  */}
      </>
    );
}

export default About