import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Tutorials from '../pages/tutorialspage';
import About from '../pages/About';
import Contact from '../pages/Contactus'
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage.jsx";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const Main =() =>(
    <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/tutorials" component={Tutorials} />
        <PrivateRoute path="/about" component={About} />
        <PrivateRoute path="/contact" component={Contact} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/Login" component={LoginPage} />
    </Switch>
)

export default Main;