import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {

   return (
       <>
       <div className="setStyle2">
       <h1> 404 ERROR PAGE</h1>
       <p> Page not found</p>
       </div>
       <div className="nav_div">
       <NavLink  to="/" > Go back </NavLink>
       </div>
       
       </>
   )

}
export default Error404;