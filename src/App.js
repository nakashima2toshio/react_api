// src/App.js
import React from 'react';
import { AuthProvider } from './authContext';
import LoginForm from './LoginForm';

function App() {
  return (
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
  );
}

export default App;
