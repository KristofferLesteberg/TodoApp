 import React from 'react'
import './Todo'

import styles from './Styles/EditTodo.module.css'

const EditTodo = ({ todo, updateTodo, newData, setNewData, showEdit, setShowEdit }) => {
  return (
    <form className={styles.updateForm} onSubmit={(e) => updateTodo(e, todo.id)}>
        <div className={styles.infoTodo}>
            <button onClick={() => setShowEdit(!showEdit)}>x</button>
            <div className={styles.input}>
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
                </div>
                <button
                    type='submit'
                    className={styles.button}
                    
                 
                 >Edit
                 </button>
            </div>
     </form>
  )
}

export default EditTodo