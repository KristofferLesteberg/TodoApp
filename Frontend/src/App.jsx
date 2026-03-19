import React from 'react'
import { useState } from 'react'


import CreateTodo from '../Components/CreateTodo'
import GetTodos from '../Components/GetTodos'


const App = () => {
  const [todos, setTodos] = useState([])
//<<CreateTodo todos={todos} setTodos={setTodos} /> 

  return (
    <div>
      
      <GetTodos />
    </div>
  )
}

export default App
