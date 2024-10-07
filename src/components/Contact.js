import React, { useCallback, useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper"; 

const Contact = () => {
    const [text, setText] = useState(1); 
    const [darkTheme, setDarkTheme] = useState(false);

    const prime = () => {
        console.log("I am inside prime",text);
        return findNthPrime(text);
    };
    // const cache = useMemo(prime,[text])
    const cache = useCallback(prime,[text])
    // const cache = prime()

    const changeTheme = () => setDarkTheme(!darkTheme);

    console.log("rendering...");

    return (
        <>
            <div className={`p-5 ${darkTheme ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <button onClick={changeTheme} className="p-5 bg-blue-500">Toggle Theme</button>
                <div className="">
                    <input
                        type="number"
                        className="border border-black"
                        value={text}
                        onChange={(e) => {
                            const value = parseInt(e.target.value, 10);
                            if (!isNaN(value) && value > 0) {
                                setText(value);
                            }
                        }}
                    />
                </div>

                <h1>{text}</h1>
                <h1>nth prime: {cache()}</h1>
            </div>
        </>
    );
}

export default Contact;
