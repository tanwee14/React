import React, { useState } from 'react'
import './TodoItem.css'
import { useTodo } from '../context';

function Todoitem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div className='item'>
            <input type='checkbox'
                className='tod'
                checked={todo.completed}
                onChange={toggleCompleted} />

            <input type='text'
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
                className={todo.completed ? 'completed' : ''} />

            <button className='editbtn'
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    }
                    else {
                        setIsTodoEditable((prev) => !prev);
                    }
                }}
                disabled={todo.completed}>
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            <button className='Delete'
                onClick={() => deleteTodo(todo.id)} >
                ❌
            </button>
        </div>
    );
}

export default Todoitem
