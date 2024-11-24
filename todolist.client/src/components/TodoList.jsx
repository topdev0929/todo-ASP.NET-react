import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Filter from './Filter';
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => {
    const { todos, filter, setFilter, addTodo, deleteTodo, toggleComplete } = useContext(TodoContext);

    const filteredTodos = todos.filter((todo) => {
        if (filter === '') return true;
        return todo.isComplete === (filter === 'true');
    });

    return (
        <div>
            <TodoForm onAddTodo={addTodo} />
            <Filter onFilterChange={setFilter} />
            <div className="todo-list">
                {filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggleComplete={toggleComplete}
                        onDelete={deleteTodo}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
