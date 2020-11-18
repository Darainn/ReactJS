import React, { useState } from 'react';
import SerachResult from './SearchResult';

const Serach = () => {

   const [img , setImg] = useState("");
   const inputEvent = (event) => {
        const data =event.target.value;
        setImg(data);
        

   };

    return (
        <>
        <div className="search"> 
        <input type="text" placeholder="search anything" onChange={inputEvent} value={img} />
       
       { img === "" ? null : <SerachResult name={img} />}  
        </div>
        </>
    )


}
export default Serach;