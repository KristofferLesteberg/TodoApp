import React, { useEffect, useState } from 'react'
import '../src/App'

const GetTodos = ({ todos, setTodos }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTodos = async () => {
            try {
                const respons = await fetch("/api/TodoApp/GetTodos")

                if(!respons.ok) {
                    throw new Error("Error fetching")
                }

                const result = await respons.json()

                console.log(result)

                setTodos(result)
            } catch(error) {
                console.log(error.message)
            } finally {
                setLoading(false)
            }
        
        }
        getTodos()
    }, [])

   if(loading) {
    return (
        <div>loading...</div>
    )
   } else {
     return (
    <div>
            {todos.map((todo, key) => (
                <div key={key}>
                    <p>{key}</p>
                    <p>{todo.name}</p>
                    <p>{todo.description}</p>
                    <p>{todo.isComplete}</p>
                </div>
            ))}
        
    </div>
  )

   }

}

export default GetTodos