import React from 'react';
import { NavLink} from 'react-router-dom';

const Navbar404 = () => {

   return (
       
    <>
    <div className="menu_style" >
       <NavLink exact activeClassName="active_class" to="/" > Home Page </NavLink>
       <NavLink exact activeClassName="active_class" to="/contact404"> Contact Us </NavLink>
       <NavLink exact activeClassName="active_class" to="/about404"> About Us </NavLink>
       
      
    </div>
    </>
       
   )

}
export default Navbar404;