import React, { useState } from 'react';

export default function TodosValue() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");

    const addTask = (text) => {
        if (!todos.includes(text) && text.length > 0) {
          setTodos([...todos, text]);
          setValue("")
        }
    }

    function deleteTodo(i) {
        setTodos(todos.filter((j) => j !== i));
    }

    return (
        <div>
            <input 
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      addTask(e.target.value);
                    }
                }}
            />
            <button onClick={() => addTask(value)}>Add Task</button>

            <ul>
                {todos.map((i) => (
                <li key={i}>
                    {i} <button onClick={() => deleteTodo(i)}>delete</button>
                </li>
                ))}
            </ul>
        </div>
    )
}
