import React, { useEffect } from 'react'
import { useState } from 'react';

const Effect = () => {

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
    

    useEffect(() => {
        alert("i am clicked")
    }, [num])

return (
    <>
        <h1>{num} </h1>
        <button onClick={() => {setNum(num + 1) }} > Click Me
        </button>
        <br />
        <h1>{nums} </h1>
        <button onClick={() => {setNums(nums + 1) }} > Click Me
        </button>
    </>
)

}
export default Effect;