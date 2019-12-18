import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Tutorials from '../pages/tutorialspage';
import About from '../pages/About';
import Contact from '../pages/Contactus'
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage.jsx";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import MainLayout from "../components/Layouts/MainLayout";
import UserLayout from "../components/Layouts/UserLayout";
import EmailVerify from "../pages/EmailVerify/email-verify";

const Main =() =>(
    <Switch>
        <Route exact path="/" component={Home} layout={MainLayout} />
        <PrivateRoute path="/home" component={Home} layout={MainLayout} />
        <PrivateRoute path="/tutorials" component={Tutorials} layout={MainLayout} />
        <PrivateRoute path="/about" component={About} layout={MainLayout} />
        <PrivateRoute path="/contact" component={Contact} layout={MainLayout} />
        <Route exact path="/email-verify" component={EmailVerify} layout={EmailVerify} />
        <Route exact path="/signup" component={SignUpPage} layout={UserLayout} />
        <Route exact path="/Login" component={LoginPage} layout={UserLayout} />
    </Switch>
)

export default Main;