import React from 'react';
import { NavLink} from 'react-router-dom';

const Navbar = () => {

   return (
       
    <>
    <div className="menu_style" >
       <NavLink exact activeClassName="active_class" to="/" > About us </NavLink>
       <NavLink exact activeClassName="active_class" to="/contact"> Contact Us </NavLink>
       <NavLink exact activeClassName="active_class" to="/services"> Service Us </NavLink>
       <NavLink activeClassName="active_class" to="/user"> User </NavLink>
       <NavLink activeClassName="active_class" to="/search"> Search </NavLink>
       {/* <br />
       <a href="/" > About Us </a>
       <a href="/contact">Contact us</a> */}
    </div>
    </>
       
   )

}
export default Navbar;