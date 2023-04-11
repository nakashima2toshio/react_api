// src/authContext.js
import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authToken, setAuthToken] = useState(null);

    async function login(username, password) {
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username,
                password,
            });
            setAuthToken(response.data.token);
        } catch (error) {
            console.error(error);
        }
    }

    async function logout() {
        try {
            await axios.post(
                'http://localhost:8000/api/logout/',
                {},
                {
                    headers: { Authorization: `Token ${authToken}` },
                }
            );
            setAuthToken(null);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
