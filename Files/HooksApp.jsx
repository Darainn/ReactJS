import React from 'react';
import { useState } from 'react';



const HooksApp = () => {

    const state = useState();

    const [count , setCount] = useState(5);
    
     const IncNum = () => {
         setCount(count + 1);
         };

    const DecNum = () =>  {
        setCount(count - 1);
    }

    return (
        <>
            <div>
                <h1> {count} </h1>
                <button onClick={IncNum}> Click Me To Increase</button>
                <button onClick={DecNum}> Click Me To Decrease</button>
            </div>
        

      
        </>
    );
};
export default HooksApp;