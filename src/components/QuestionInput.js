// src/components/QuestionInput.js
import React, { useState } from 'react';

function QuestionInput({ onQuestionSubmit }) {
    const [question, setQuestion] = useState('');

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onQuestionSubmit(question);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="questionInput" className="form-label">Ask a question:</label>
                <input
                    type="text"
                    className="form-control"
                    id="questionInput"
                    value={question}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default QuestionInput;

