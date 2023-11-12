import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
    const [localData, setLocalData] = useState('');

    useEffect(() => {
        // Retrieve data from localStorage
        const savedLocalData = localStorage.getItem('localData');

        if (savedLocalData) {
            setLocalData(savedLocalData);
        }
    }, []);

    const handleSaveToLocalStorage = () => {
        const dataToSave = 'This data is stored in localStorage!';
        // Save data to localStorage
        localStorage.setItem('localData', dataToSave);
        setLocalData(dataToSave);
    };

    return (
        <div>
            <p>Local Data: {localData}</p>
            <button onClick={handleSaveToLocalStorage}>Save to LocalStorage</button>
        </div>
    );
};

export default LocalStorage;
