
import React, { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(!!localStorage.getItem('accessToken'));

    useEffect(() => {
        setAuth(!!localStorage.getItem('accessToken'));
    }, [auth]);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        setAuth(false);
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

