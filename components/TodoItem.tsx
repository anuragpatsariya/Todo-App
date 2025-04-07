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
        <div className={styles.todoItem}>
            <div className={styles.todoTitle}>
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={() => toggleTodo(todo.id)} 
                    style={{ marginRight: '8px' }}
                />
                <span style={{ 
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#6c757d' : '#212529'
                }}>
                    {todo.title}
                </span>
            </div>
            
            <div className={styles.todoDescription} style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none',
                opacity: todo.completed ? 0.7 : 1
            }}>
                {todo.description}
            </div>
            
            <div className={styles.todoPriority}>
                Priority: {todo.priority}
            </div>
            
            <div className={styles.todoControls}>
                <button className={styles.button} onClick={() => deleteTodo(todo.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;