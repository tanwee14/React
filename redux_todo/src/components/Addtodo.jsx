import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todoSlice'
import './Addtodo.css'

function Addtodo() {


    const[input,setInput]=useState('')
    const dispatch=useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    } 


  return (
    <div className='form1'>
        <form className='form2' onSubmit={addTodoHandler}>
            <input  type='text' className='ip' value={input} placeholder='Enter a Task..' 
            onChange={(e)=>setInput(e.target.value)}/>
        <button type='submit' >ADD</button>
        </form>
    </div>
  )
}

export default Addtodo