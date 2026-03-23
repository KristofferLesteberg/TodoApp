import React from 'react'
import { useState } from 'react'


import CreateTodo from '../Components/CreateTodo'
import GetTodos from '../Components/GetTodos'
import DeleteTodo from '../Components/DeleteTodo'
import Todos from '../Components/Todos'


const App = () => {
  const [todos, setTodos] = useState([])

  return (
    <div>     

      <Todos todos={todos} setTodos={setTodos} />
      
    </div>
  )
}

export default App
