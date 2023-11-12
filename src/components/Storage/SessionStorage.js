import React, { useState, useEffect } from 'react';

const SessionStorage = () => {
    const [sessionData, setSessionData] = useState('');

    useEffect(() => {
        const savedSessionData = sessionStorage.getItem('sessionData');

        if (savedSessionData) {
            setSessionData(savedSessionData);
        }
    }, []);

    const handleSaveToSessionStorage = () => {
        const dataToSave = 'This data is stored in sessionStorage!';
        sessionStorage.setItem('sessionData', dataToSave);
        setSessionData(dataToSave);
    };

    return (
        <div>
            <p>Session Data: {sessionData}</p>
            <button onClick={handleSaveToSessionStorage}>Save to SessionStorage</button>
        </div>
    );
};

export default SessionStorage;