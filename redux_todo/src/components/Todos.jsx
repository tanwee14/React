import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo ,updateTodo } from '../features/todoSlice'; // Adjusted path
import './Todos.css';

function Todos() {
  // Ensure correct reference to the todos state
  const todos = useSelector((state) => state.todos.todos); 
  const dispatch = useDispatch();
  const [edittext,seteditText]=useState('');

  const handleUpdate=()=>{
    dispatch(updateTodo({id,text:edittext}))
    seteditText('')
  }

  return (
    <div className='main'>
      <div className='each'>Todos</div>
      {Array.isArray(todos) && todos.map((todo) => ( // Check if todos is an array
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
          <input value={edittext}
           type='text'
           onChange={(e)=>seteditText(e.target.value)} />
          <button 
          onClick={()=>handleUpdate(todo.id)}>✏️</button>
        </li>
      ))}
    </div>
  );
}

export default Todos;
