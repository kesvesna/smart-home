import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {

    const { auth } = useContext(AuthContext) || false;

    return (
        auth === true ? <Component /> : <Navigate to="/" />
    );
};

export default ProtectedRoute;
