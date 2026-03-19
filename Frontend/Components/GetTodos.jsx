import React, { useEffect, useState } from 'react'

const GetTodos = () => {
    const [loading, setLoading] = useState(true)
    const [todosData, setTodosData] = useState(null)

    useEffect(() => {
        try {
            const respons = fetch("http://localhost:8080/api/TodoApp/GetTodos")

            if(!respons.ok) {
                throw new Error("Respons was not ok")
            }
            
            const result = respons.json()
            setTodosData(result)

        } catch(error) {
            console.log(error.message)
        }

    }, [])





  return (
    <div>




    </div>
  )
}

export default GetTodos