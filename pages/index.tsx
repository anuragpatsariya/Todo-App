import React, { useState } from 'react';
import { Todo } from '../types/todo';
import TodoList from '../components/TodoList';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [priority, setPriority] = useState<number>(0);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now().toString(),
            title: text,
            description: description,
            priority: priority,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setNewTodo('');
        setDescription('');
        setPriority(0);
    };
    
    const toggleTodo = (id: string) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id: string) => {
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
        <div className={styles.container}>
          <h1 className={styles.title}>Todo App</h1>
          <form className={styles.form} onSubmit={handleAddTodo}>
            <input 
              className={styles.input}
              type="text" 
              value={newTodo} 
              onChange={(e) => setNewTodo(e.target.value)} 
              placeholder="Add a new todo"
            />
            <input 
              className={styles.input}
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="Todo Description"
            />
            <input 
              className={styles.input}
              type="number" 
              value={priority} 
              onChange={(e) => setPriority(Number(e.target.value))} 
              placeholder="Todo Priority"
            />
            <button className={styles.button} type="submit">Add Todo</button>
          </form>
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
      );
}

export default Home;