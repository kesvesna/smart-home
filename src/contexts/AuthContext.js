import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const response = await axios.post('/api/auth/login', { email, password });
        setUser(response.data.user);
    };

    const register = async (email, password) => {
        await axios.post('/api/auth/register', { email, password });
    };

    const logout = () => {
        setUser(null);
    };

    const resetPassword = async (email) => {
        await axios.post('/api/auth/reset-password', { email });
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, resetPassword }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
