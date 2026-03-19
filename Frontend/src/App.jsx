import React from 'react'
import { useState } from 'react'


import CreateTodo from '../Components/CreateTodo'


const App = () => {
  const [todos, setTodos] = useState([])


  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
