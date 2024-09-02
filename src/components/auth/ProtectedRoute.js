import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { auth } = useContext(AuthContext) || {};
    if (!auth) {
        console.log('Auth: ', auth);
    }

    return (
        <Route
            {...rest}
            element={auth ? <Component /> : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;
