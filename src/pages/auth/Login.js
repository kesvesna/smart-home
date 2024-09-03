
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";


const API_URL = 'http://localhost:5000/';

const Login = () => {

    const { auth, setAuth } = useAuth();

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
            setAuth(true);
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

        <>
            {!auth &&
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
                                               autoFocus={true}
                                               placeholder="Имя пользователя"
                                               value={username}
                                               onChange={e => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" id="password" required
                                               placeholder="Пароль"
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
                    <iframe src="http://5.16.20.15:5000" width="468" height="60" align="left">
                        Ваш браузер не поддерживает плавающие фреймы!
                    </iframe>
                </div>
            }
        </>
    );
};

export default Login;
