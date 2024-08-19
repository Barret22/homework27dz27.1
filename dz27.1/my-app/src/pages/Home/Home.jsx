import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input) {
            setTodos([...todos, { text: input, completed: false }]);
            setInput('');
        }
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="home">
            <h2>Список TODO</h2>
            <div className="todo-form">
                <input
                    className="todo-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Введіть задачу..."
                />
                <button className="add-button" onClick={addTodo}>Додати</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className={`todo-item ${todo.completed ? 'completed' : ''}`}
                    >
                        <span onClick={() => toggleTodo(index)}>{todo.text}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTodo(index)}
                        >
                            Видалити
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
