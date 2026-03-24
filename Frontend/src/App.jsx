import React from 'react'
import { useState } from 'react'


import Todos from '../Components/Todos'
import '../src/App.css'


const App = () => {
  const [todos, setTodos] = useState([])

  return (
    <div>     
      <h1>Todo App</h1>
      <Todos todos={todos} setTodos={setTodos} />

    </div>
  )
}

export default App
