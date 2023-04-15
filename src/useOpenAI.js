// src/useOpenAI.js
import { useState } from 'react';
import axios from 'axios';

export default function useOpenAI() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const askQuestion = async (question) => {
        setLoading(true);
        setError(null);

        try {
            const result = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    prompt: question,
                    max_tokens: 50,
                    n: 1,
                    stop: null,
                    temperature: 0.5,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    },
                }
            );

            setResponse(result.data.choices[0].text);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { askQuestion, response, loading, error };
}
