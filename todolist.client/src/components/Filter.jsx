import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
    const [isComplete, setIsComplete] = useState('');

    const handleFilterChange = (event) => {
        const value = event.target.value;
        setIsComplete(value);
        onFilterChange(value);
    };

    return (
        <div className="filter-todo">
            <select value={isComplete} onChange={handleFilterChange}>
                <option value=''>All</option>
                <option value="true">Completed</option>
                <option value="false">Incomplete</option>
            </select>
        </div>
    );
};

export default Filter;
