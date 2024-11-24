import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

test('calls onAddTodo when form is submitted', () => {
    const onAddTodo = jest.fn();
    render(<TodoForm onAddTodo={onAddTodo} />);

    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add'));
    expect(onAddTodo).toHaveBeenCalledWith({ name: 'New Todo' });
});
