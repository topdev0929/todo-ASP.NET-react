import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

test('calls onToggleComplete when item is clicked', () => {
    const todo = { id: 1, name: 'Test Todo', isComplete: false };
    const onToggleComplete = jest.fn();
    render(<TodoItem todo={todo} onToggleComplete={onToggleComplete} onDelete={() => { }} />);

    fireEvent.click(screen.getByText('Test Todo'));
    expect(onToggleComplete).toHaveBeenCalledWith(1);
});

test('calls onDelete when delete button is clicked', () => {
    const todo = { id: 1, name: 'Test Todo', isComplete: false };
    const onDelete = jest.fn();
    render(<TodoItem todo={todo} onToggleComplete={() => { }} onDelete={onDelete} />);

    fireEvent.click(screen.getByTitle('Delete'));
    expect(onDelete).toHaveBeenCalledWith(1);
});
