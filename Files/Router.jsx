import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Services from './Services';
import User from './User';
import Search from './Search';

const Router = () => {

    const Name = () => {
        return <h1>NAME PAGE</h1>
    }
    return (
        <>

            <Navbar />

            <Switch>
                <Route exact path='/' component={() => <About name="About" />} />
                <Route exact path='/contact' render={() => <Contact name="Contact" />} />
                <Route exact path='/services' component={() => <Services name="Services" />} />
                <Route path="/user/:name/:lname" component={User} />
                <Route path='/contact/Name' component={Name} />
                <Route path='/search' component={Search} />
                <Route component={Error} />
            </Switch>

            {/* <About />
        <Contact /> */}
        </>
    )


}
export default Router;