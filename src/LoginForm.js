// src/LoginForm.js
import React, { useState } from 'react';
import { useAuth } from './authContext';

function LoginForm() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const { authToken, login, logout } = useAuth();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        login(formData.username, formData.password);
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <div>
            {!authToken ? (
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    <br/>
                    <button type="submit">Login</button>
                </form>
            ) : (
                <button onClick={handleLogout}>Logout</button>
            )}
        </div>
    );
}

export default LoginForm;
