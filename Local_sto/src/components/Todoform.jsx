import React, { useState } from 'react'
import { useTodo } from '../context';
import './Todoform.css'

function Todoform() {
    const[todo,setTodo]=useState("")
    const {addTodo}=useTodo()

    const add =(e)=>{
        e.preventDefault()

        if(!todo) return

        addTodo({todo,completed:false})
        setTodo("")
    }

  return (
    <div className='form'>
        <form className='iform'
        onSubmit={add}>
        <input className='finput'
        placeholder='WRITE YOUR TASKS HERE...'
        type='text' 
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}/>

        <button type='submit'
        className='btn'
        >Add Task </button>
        </form>

    </div>
  );
}

export default Todoform