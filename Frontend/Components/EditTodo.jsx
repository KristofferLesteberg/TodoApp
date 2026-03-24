 import React from 'react'
import './Todo'

import styles from './Styles/EditTodo.module.css'

const EditTodo = ({ todo, updateTodo, newData, setNewData, showEdit, setShowEdit }) => {
  return (
    <form className={styles.updateForm} onSubmit={(e) => {
        updateTodo(e, todo.id);
        setShowEdit(!showEdit)
        }}>
        <div className={styles.infoTodo}>
            <button 
                onClick={() => setShowEdit(!showEdit)}
                className={styles.exitBtn}
                >
                    x
                </button>
            <div className={styles.input}>
                <h1>Edit {todo.name}</h1>
                
                    <input
                        type='text'
                        value={newData.name}
                        placeholder='Set a new name'
                        onChange={(e) => setNewData({
                                ...newData,
                                "name": e.target.value,
                            })}
                    />
                    <input
                        type='text'
                        value={newData.description}
                        placeholder='Set a new description'
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