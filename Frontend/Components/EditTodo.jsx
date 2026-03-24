import React from 'react'
import './Todo'

const EditTodo = ({ todo, updateTodo, newData, setNewData }) => {
  return (
    <form onSubmit={(e) => updateTodo(e, todo.id)}>
        <input
            type='text'
            value={newData.name}
            placeholder='Todo name..'
            onChange={(e) => setNewData({
                    ...newData,
                    "name": e.target.value,
                })}
        />
        <input
            type='text'
            value={newData.description}
            placeholder='Todo description..'
            onChange={(e) => setNewData({
                    ...newData,
                    "description": e.target.value
                })}
        />
        <button type='submit'>Edit</button>
     </form>
  )
}

export default EditTodo