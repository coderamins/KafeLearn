import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

const AppRoute=({component:Component,layout:Layout,...rest})=>(
    <Route
        {...rest}
        render={props=>(
            <Layout>
                isLogin() ?
                <Component {...props}/>:
                <Redirect to="/login" />
            </Layout>
        )}
    />
);

export default AppRoute;