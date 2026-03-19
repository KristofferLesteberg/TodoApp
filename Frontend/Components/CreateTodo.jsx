import React from 'react'
import { useState, useEffect } from 'react'

const CreateTodo = (todos, setTodos) => {
    const [Name, setName] = useState("")
    const [Description, setDescription] = useState("")
 
    useEffect(() => {

        const addTodo = async (e) => {
            e.preventDefault()

            const newTodo = {
                name: Name,
                description: Description
            }

            try {

            } catch(error) {

            }

        }
        addTodo()
    }, [])
    
    return (
        <form onSubmit={addTodo}>
            <input
                type="text"
                placeholder='Name'
                value={Name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type='text'
                placeholder='Description'
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type='submit'/>
        </form>    
  )
}

export default CreateTodo