import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { TodoProvider } from './contexts/TodoContext';

const App = () => {
	return (
		<TodoProvider>
			<div className="App">
				<div className="todos-title">
					<img src="src/assets/todos.svg" alt="Title" />
				</div>
				<TodoList />
			</div>
		</TodoProvider>
	);
};

export default App;
