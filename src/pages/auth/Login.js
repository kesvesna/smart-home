
import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from "bcryptjs";
import {useNavigate} from "react-router-dom";


const API_URL = 'http://localhost:5000/';

const Login = () => {

    // TODO make change navbar links after user authorized

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_URL + 'login', { username, password });
            setMessage(response.data.message);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('username', response.data.username);
            navigate("/");
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    const cardStyle = {
        "width": "100%",
        "maxWidth": "50%"
    };

    return (

    <div className="container mt-3">
        <div className="d-flex align-items-center justify-content-center">
            <div className="card" style={cardStyle}>
                <div className="card-body">
                    <h5 className="card-title text-center">Вход</h5>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="username"
                                   aria-describedby="usernameHelp"
                                   required
                                   placeholder="Username"
                                   value={username}
                                   onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="password" required
                                   placeholder="Password"
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}
                            />
                            <p className="text-danger mt-2 fw-bold">{message}</p>
                        </div>
                        <button className="btn btn-success w-100 mb-2" type="submit">Войти</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;
