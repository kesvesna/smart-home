import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        navigate('/');
    };

    return (
        <button className="btn btn-sm btn-primary" onClick={handleLogout}>Выйти</button>
    );
};

export default Logout;
