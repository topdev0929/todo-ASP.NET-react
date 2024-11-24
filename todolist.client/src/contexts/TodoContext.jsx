import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        api.getTodos().then(setTodos);
    }, []);

    const addTodo = (todo) => {
        api.addTodo(todo).then((newTodo) => {
            setTodos((prevTodos) => [...prevTodos, newTodo]);
        });
    };

    const deleteTodo = (id) => {
        api.deleteTodo(id).then((deleted_id) => {
            setTodos((prevTodos) => prevTodos.filter((t) => t.id !== deleted_id));
        });
    };

    const toggleComplete = (id) => {
        api.markComplete(id).then((complete_id) => {
            setTodos((prevTodos) =>
                prevTodos.map((t) => (t.id === complete_id ? { ...t, isComplete: !t.isComplete } : t))
            );
        });
    };

    return (
        <TodoContext.Provider value={{ todos, filter, setFilter, addTodo, deleteTodo, toggleComplete }}>
            {children}
        </TodoContext.Provider>
    );
};
