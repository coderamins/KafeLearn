import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage.jsx";

const Account =() =>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/Login" component={LoginPage} />
    </Switch>
)

export default Account;