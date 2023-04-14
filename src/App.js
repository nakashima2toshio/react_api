// src/App.js
import React from 'react';
import './App.css';
import NavigationBar from './components/Navbar';
import QuestionInput from './components/QuestionInput';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <QuestionInput />
            <ResponseDisplay />
        </div>
    );
}

export default App;
