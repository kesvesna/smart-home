import React, { useState } from 'react';
import { register, login, logout } from './auth';

const AuthForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // const handleRegister = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await register(username, password);
    //         setMessage(response.message);
    //     } catch (error) {
    //         setMessage(error);
    //     }
    // };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await login(username, password);

            setMessage(response.message);
        } catch (error) {
            console.log('err: ', error);
            setMessage(error);
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
                    <form>
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
                        <button className="btn btn-success w-100 mb-2" onClick={handleLogin}>Войти</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
export default AuthForm;