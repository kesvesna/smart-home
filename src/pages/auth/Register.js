import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/';


const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_URL + 'register', { username, password });
            setMessage(response.data.message);
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
                        <h5 className="card-title text-center">Регистрация</h5>
                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="username"
                                       aria-describedby="usernameHelp"
                                       required
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
                            <button className="btn btn-success w-100 mb-2" type="submit">Регистрация</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;