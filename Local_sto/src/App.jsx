import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { Todoform, Todoitem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !(prevTodo.completed) } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])  // Add todos as a dependency here

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="box">
        <div className='items'>
          <h1>Manage Your Tasks</h1>
          <div className='go'>
            {/* todo form goes here */}
            <Todoform />
          </div>

          <div className='add'>
            {/* Add todo item here */}
            {todos.map((todo) => (
              <div key={todo.id}>
                <Todoitem todo={todo} />
              </div>
            ))}

          </div>

        </div>
      </div>
    </TodoProvider>
  )
}

export default App
