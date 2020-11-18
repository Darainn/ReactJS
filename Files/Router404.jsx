import React from 'react';
import { Switch , Route ,Redirect } from 'react-router-dom';
import About404 from './About404';
import Contact404 from './Contact404';
import Error404 from './Error404';
import Home404 from './Home404';
import Navbar404 from './Navbar404';

const Router404 = () => {

   return (
       <>
    <Navbar404 />
    <Switch>
        <Route exact path="/" component={Home404}  />
        <Route exact path="/about404" component={About404}  />
        <Route exact path="/contact404" component={Contact404}  />
        <Redirect to="/" /> 
        <Route component={Error404} /> 
    </Switch>
       </>
   );

};
export default Router404;