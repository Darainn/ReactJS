import React, { useEffect, useState } from 'react';

const ChallengeEffect = () => {

    const [num , setNum] = useState(0);

    const incNum = () => {
        setNum(num+1);
    }
    useEffect( () => {
        document.title=`you clickem me ${num} times `;
    });

return (
    <> 
{/*     
    <button onClick = { () => {
         setNum(num +1)
     } } > Click {num} Times </button> */}
     
     <button onClick = {incNum} > Click {num} Times </button>
    </>
    
)


}

export default ChallengeEffect;