import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Home from "../../pages/main/Home";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {

        return (
            <Route
                {...rest}
                element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />}
            />
        );
};

export default PrivateRoute;
