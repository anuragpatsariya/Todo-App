import React, { useState } from 'react';
import { Todo } from '../types/todo';
import TodoList from '../components/TodoList';

const Home: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            title: text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };
    
    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodo.trim()) {
          addTodo(newTodo.trim());
          setNewTodo('');
        }
      };

      return (
        <div>
          <h1>Todo App</h1>
          <form onSubmit={handleAddTodo}>
            <input 
              type="text" 
              value={newTodo} 
              onChange={(e) => setNewTodo(e.target.value)} 
              placeholder="Add a new todo"
            />
            <button type="submit">Add Todo</button>
          </form>
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
      );
    
    
}

export default Home;