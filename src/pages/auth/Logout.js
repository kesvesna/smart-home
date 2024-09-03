import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../../contexts/AuthContext";

const Logout = () => {

    const navigate = useNavigate();
    const {auth} = useAuth();

    useEffect(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        navigate('/');
    }, [auth]);

    return (
        <>
        </>
    );
};

export default Logout;
