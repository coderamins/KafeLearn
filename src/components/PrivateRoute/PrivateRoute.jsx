import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../utils';

const PrivateRoute = ({component:Component,layout:Layout,...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;