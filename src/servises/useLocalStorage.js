import { useState, useEffect } from 'react';
import { getNotes } from 'servises/api';

const useLocalStorage = (key) => {
    const [response, setResponse] = useState(() => {
        return JSON.parse(window.localStorage.getItem(key) || '[]');
    });

    useEffect(() => {
        getNotes().then(response => setResponse(response.data.comments));
    }, []);

    window.localStorage.setItem('comments', JSON.stringify(response));

    return [response, setResponse]
};
export default useLocalStorage;
