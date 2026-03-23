import React from 'react'
import EditTodo from './EditTodo';

const Todo = ({ todo, updateTodo, deleteTodo, editingId, setEditingId, newData, setNewData }) => {
  return (
    <div>
        <p>{todo.name}</p>
        <br />
        <p>{todo.description}</p>
        <p>{todo.isComplete}</p>

        <button onClick={() => deleteTodo(todo.id)} >Delete</button>
        <button onClick={() => {
            setEditingId(todo.id);
            setNewData({
                "name": "",
                "description": "",
                "isComplete": false
            })
            }}>
                Edit
            </button>


            {editingId == todo.id && (
                <EditTodo
                    todo={todo}
                    updateTodo={updateTodo}
                    newData={newData}
                    setNewData={setNewData}
                />
                                  
                
            )} 




    </div>
  )
}

export default Todo