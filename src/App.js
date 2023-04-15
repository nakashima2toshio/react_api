// src/App.js
import React, { useState } from 'react';
import './App.css';
import AppNavbar from './components/Navbar';
import QuestionInput from './components/QuestionInput';
import ResponseDisplay from './components/ResponseDisplay';
import useOpenAI from './useOpenAI';

function App() {
    const [response, setResponse] = useState(null);
    const { askQuestion } = useOpenAI();

    const handleQuestionSubmit = async (question) => {
        const result = await askQuestion(question);
        setResponse(result);
    };

    return (
        <div className="App">
            <AppNavbar />
            <div className="container mt-5">
                <QuestionInput onQuestionSubmit={handleQuestionSubmit} />
                <ResponseDisplay response={response} />
            </div>
        </div>
    );
}

export default App;
