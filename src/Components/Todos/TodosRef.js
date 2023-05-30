import React, { useState } from 'react'

export default function TodosRef() {
    const [todos, setTodos] = useState([]);
    let updatedInput;

    const addTask = (text) => {
        if (!todos.includes(text) && text.length > 0) {
          setTodos([...todos, text]);
        }
    }

    function deleteTodo(i) {
        setTodos(todos.filter((j) => j !== i));
    }

    return (
        <div>
            <input 
                ref={(input) => (updatedInput = input)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      addTask(e.target.value);
                    }
                }}
            />
            <button onClick={() => addTask(updatedInput.value)}>Add Task</button>

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
