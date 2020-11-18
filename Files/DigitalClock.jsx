import React from 'react';
import { useState } from 'react';

const DigitalClock = () => {

  let time = new Date().toLocaleTimeString();
  const [curTime , UpdateTime] = useState(time);

  const getTime = () => {
    time = new Date().toLocaleTimeString();
     UpdateTime(time);
  }

  setInterval(getTime,1000)

   return(
       <>
       <div>
           <h1> {curTime} </h1>
           
       </div>
       </>
   )
}
export default DigitalClock;