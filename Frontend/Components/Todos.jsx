import React from 'react'
import { useState, useEffect } from 'react'

import '../src/App'
import Todo from './Todo'

import styles from './Styles/Todos.module.css'

const Todos = ({ todos, setTodos }) => {
    const [name, setName] = useState("")
    const [description, setDescription] =useState("")

    const [newData, setNewData] = useState({
        name: "",
        description: "",
        isComplete: false
    })
    const [editingId, setEditingId] = useState(null)
    
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
            } 
        }
        getTodos()
    }, [])

//Add todos
         
    const addTodo = async (e) => {
        e.preventDefault()

        if(name === "" || description === "") {
            return 0;
        }
    
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
                "Name": newData.name,
                "IsComplete": newData.isComplete,
                "Description": newData.description
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
    <main className={styles.todoContainer}>
        <div className={styles.AddTodoContainer}>
            <form onSubmit={addTodo}>
                <input
                    className={styles.input}
                    type='text'
                    value={name}
                    placeholder='Todo name..'
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className={styles.input}
                    type='text'
                    value={description}
                    placeholder='Todo description..'
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type='submit'>Add todo</button>
            </form>
        </div>

        <div className={styles.todos}>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    editingId={editingId}
                    setEditingId={setEditingId}
                    newData={newData}
                    setNewData={setNewData}
                />
            ))}
        </div>
        
        
    </main>
    
    
  )
}

export default Todos