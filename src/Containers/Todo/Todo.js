import React from 'react';
import "./Todo.scss";
import TodosRef from '../../Components/Todos/TodosRef';
import TodosValue from '../../Components/Todos/TodosValue';

export default function Todo() {
    return (
        <div className='todo-page'>
            <div>
                <h1>With Ref</h1>
                <TodosRef />
            </div>
            <div>
                <h1>Without Ref</h1>
                <TodosValue />
            </div>
        </div>
    )
};
