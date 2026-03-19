import React from 'react'
import { useState, useEffect } from 'react'

const CreateTodo = (todos, setTodos) => {
    const [Name, setName] = useState("")
    const [Description, setDescription] = useState("")
 
    useEffect(() => {

        const addtodo = async (e) => {
            e.preventDefault()

            const newTodo = {
                name: Name,
                description: Description
            }

            try {

            } catch(error) {

            }

        }

    }, [])
    return (
        <form onSubmit={addtodo}>
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