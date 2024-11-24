import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim()) {
            onAddTodo({ name });
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
