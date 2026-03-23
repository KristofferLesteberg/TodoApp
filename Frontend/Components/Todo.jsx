import React from 'react'

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
                <form onSubmit={(e) => updateTodo(e, todo.id)}>
                      <input
                        type='text'
                        value={newData.name}
                        placeholder='Todo name..'
                        onChange={(e) => setNewData({
                            
                            
                        })}
                    />
                    <input
                        type='text'
                        value={newData.description}
                        placeholder='Todo description..'
                        onChange={(e) => setNewDescription({
                            "description": e.target.value
                        })}
                    />
                        <button type='submit'>Add todo</button>
                </form>
                                  
                
            )} 




    </div>
  )
}

export default Todo