import React from 'react'
import { useState } from 'react'


import CreateTodo from '../Components/CreateTodo'
import GetTodos from '../Components/GetTodos'


const App = () => {
  const [todos, setTodos] = useState([])


  return (
    <div>
      
      <GetTodos todos={todos} setTodos={setTodos} />

      <CreateTodo todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
