import React from 'react';
import { Todo } from '../types/todo';
import styles from '../styles/Home.module.css';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <div className={styles.container}>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => toggleTodo(todo.id)} 
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
            </span>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.description}
            </span>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.priority}
            </span>
            <button className={styles.button} onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;