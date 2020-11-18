import React from 'react';
import {add ,sub , mul , div } from "./Cal";

function Appp(){
   return( <>
    <ul>
        <li> sum of two numbers is {add(30,10)} </li>
        <li> sub of two numbers is {sub(30,10)} </li>
        <li> div of two numbers is {div(30,7)} </li>
        <li> mul of two numbers is {mul(30,10)} </li>
    </ul>
    </> 
   );
}

export default Appp;