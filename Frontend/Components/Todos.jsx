import React from 'react'
import { useState, useEffect } from 'react'

import '../src/App'


const Todos = ({ todos, setTodos }) => {
    const [name, setName] = useState("")
    const [description, setDescription] =useState("")

    const [newName, setNewName] = useState("")
    const [newdescription, setNewDescription] =useState("")
    const [newIsComplete, setNewIsComplete] = useState(false)


    const [update, setUpdate] = useState(false)
    const [editingId, setEditingId] = useState(null)
    
    const [loading, setLoading] = useState(false)

    //Get todos
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

//Add todos
         
    const addTodo = async (e) => {
        e.preventDefault()
    
        //Create POST request - method, headers and content(body)
        const POSTdata = {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(
                { "name": name, 
                  "description": description, 
                  "isComplete": false 
                }
            )
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
    
    const deleteTodo = async (id) => {

        try {
            const respons = await fetch(`/api/TodoApp/DeleteTodo?todoId=${id}`, {
                method: "DELETE"
            })

            if(!respons.ok) {
                throw new Error("Respons was not ok")
            }
            //update Todos array
            setTodos(todos.filter((newArray) => newArray.id != id))

        } catch(error) {
            console.log(error.message)
        }

    }

    const updateTodo = async (e, id) => {
        e.preventDefault()

        const updatedData = {
            method: "PUT",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                "Id": id,
                "Name": newName,
                "IsComplete": false,
                "Description": newdescription
            })
        }

        try {
            const respons = await fetch(`/api/TodoApp/UpdateTodo`, updatedData)
            const updatedTodo = await respons.json()
           
           
        } catch(error) {
            console.log(error.message)
        }
    }

  return (
    <main>

        <div>
                {todos.map((todo, key) => (
                    <div key={key}>
                        <p>{key}</p>
                        <p>{todo.name}</p>
                        <p>{todo.description}</p>
                        <p>{todo.isComplete}</p>
                        <button onClick={() => deleteTodo(todo.id)}>Delete todo</button>
                        <button onClick={() => setEditingId(todo.id)}>Update Todo</button>
                        
                        {editingId == todo.id && (
                            <form onSubmit={(e) => updateTodo(e, todo.id)}>
                                <input
                                    type='text'
                                    value={newName}
                                    placeholder='Todo name..'
                                    onChange={(e) => setNewName(e.target.value)}
                                />
                                <input
                                    type='text'
                                    value={newdescription}
                                    placeholder='Todo description..'
                                    onChange={(e) => setNewDescription(e.target.value)}
                                />
                                <button type='submit'>Add todo</button>
                            </form>
                        )}
                    </div>
                ))}
        </div>
        
        <div>
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
        </div>
    </main>
    
    
  )
}

export default Todos