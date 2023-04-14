// src/components/ResponseDisplay.js
import React from 'react';

function ResponseDisplay({ response }) {
    return (
        <div className="mt-3">
            <h3>Response:</h3>
            <p>{response}</p>
        </div>
    );
}

export default ResponseDisplay;
