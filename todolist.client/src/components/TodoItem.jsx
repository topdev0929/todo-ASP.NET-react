import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
    return (
        <div className="todo-item">
            <span
                style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}
                onClick={() => onToggleComplete(todo.id)}
                title={todo.name}
            >
                {todo.name && todo.name.length > 20 ? `${todo.name.substring(0, 17)}...` : todo.name}
            </span>
            <div onClick={() => onDelete(todo.id)} title="Delete"><img src="src/assets/trash.svg" alt="Delete" className="trash-icon" /></div>
        </div>
    );
};

export default TodoItem;
