import React, { useState } from 'react';

const TimeHook = () =>{
 
    let newTime= new Date().toLocaleTimeString();
  const [cTime , setTime] = useState(newTime);
  
  const UpdateTime = () => {

     newTime= new Date().toLocaleTimeString();
    setTime(newTime);

  }
  
  return(
     <>
        <div>
            <h1> {cTime} </h1>
            <button onClick={UpdateTime}> get Time</button>
        </div>
     </>
    );
}

export default TimeHook;