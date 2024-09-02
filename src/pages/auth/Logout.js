import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setAuth }) => {

    const navigate = useNavigate();
    const handleLogout = () => {
        setAuth(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <button className="btn btn-sm btn-primary" onClick={handleLogout}>Выйти</button>
    );
};

export default Logout;
