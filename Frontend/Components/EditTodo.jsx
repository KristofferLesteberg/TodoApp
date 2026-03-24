import React from 'react'
import './Todo'

import styles from './Styles/EditTodo.module.css'

const EditTodo = ({ todo, updateTodo, newData, setNewData }) => {
  return (
    <form className={styles.updateForm} onSubmit={(e) => updateTodo(e, todo.id)}>
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