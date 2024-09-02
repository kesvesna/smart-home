
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(!!localStorage.getItem('accessToken'));

    useEffect(() => {
        setAuth(!!localStorage.getItem('accessToken'));
    }, []);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setAuth(false);
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
