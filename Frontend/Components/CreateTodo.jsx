import React from 'react'
import { useState, useEffect } from 'react'
import '../src/App'

const CreateTodo = ({ todos, setTodos }) => {

    const [name, setName] = useState("")
    const [description, setDescription] =useState("")
    

    const addTodo = async (e) => {
        e.preventDefault()


        //Create POST request - method, headers and content(body)
        const POSTdata = {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ "name": name, "description": description, "isComplete": false })
        }

        try {
            const respons = await fetch("/api/TodoApp/CreateTodo", POSTdata)

            if(!respons.ok) {
                throw new Error("respons was not ok")
            }
            const result = await respons.json()
            console.log(result)


            //add new array to the todo-array
            setTodos([...todos, result])
            
        } catch(error) {
            console.log(error.message)
        } finally {
            setName("")
            setDescription("")
        } 
    }

  return (
    <form onSubmit={addTodo}>
        <input
            type='text'
            value={name}
            placeholder='Todo name..'
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type='text'
            value={description}
            placeholder='Todo description..'
            onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit'>Add todo</button>
    </form>
  )
}

export default CreateTodo