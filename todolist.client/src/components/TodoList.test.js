import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';
import { TodoContext } from '../contexts/TodoContext';

const mockTodos = [
    { id: 1, name: 'Todo 1', isComplete: false },
    { id: 2, name: 'Todo 2', isComplete: true },
];

const mockAddTodo = jest.fn();
const mockDeleteTodo = jest.fn();
const mockToggleComplete = jest.fn();
const mockSetFilter = jest.fn();

const renderComponent = (todos, filter) => {
    render(
        <TodoContext.Provider
            value={{
                todos,
                filter,
                setFilter: mockSetFilter,
                addTodo: mockAddTodo,
                deleteTodo: mockDeleteTodo,
                toggleComplete: mockToggleComplete,
            }}
        >
            <TodoList />
        </TodoContext.Provider>
    );
};

test('renders all todos correctly', () => {
    renderComponent(mockTodos, '');

    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
});

test('filters completed todos', () => {
    renderComponent(mockTodos, 'true');

    expect(screen.queryByText('Todo 1')).not.toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
});

test('filters incomplete todos', () => {
    renderComponent(mockTodos, 'false');

    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.queryByText('Todo 2')).not.toBeInTheDocument();
});