import React from 'react'
import { useState } from 'react'


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
