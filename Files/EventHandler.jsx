import React from 'react';
import { useState } from 'react';

const EventHandler = () => {
    
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name , setName] = useState('Click Me');
    
    const bgChange = () => {
        
    let newBg = '#34495e';
    setBg(newBg);
    setName("ouch!! 😂 ");
       

    };

    const bgBack = () => {
        setBg(purple);
        setName("ayyo!! 😫")
    };
    return (
        <>
            <div style={{ backgroundColor: bg }}>

                <button onClick={bgChange} onDoubleClick = {bgBack} > {name}</button>

            </div>

        </>

    )
};

export default EventHandler;