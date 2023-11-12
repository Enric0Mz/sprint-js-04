// src/components/ItemList.js
import React, { useEffect, useState } from 'react';
import { fetchItems } from '../services/apiService';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchItems();
                setItems(data);
            } catch (error) {
                
            }
        };

        fetchData();
    }, []); 

    return (
        <div>
            {items.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default ItemList;


