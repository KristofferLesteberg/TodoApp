import React from 'react'
import { useState } from 'react';
import EditTodo from './EditTodo';

import styles from './Styles/Todo.module.css'

const Todo = ({ todo, updateTodo, deleteTodo, editingId, setEditingId, newData, setNewData }) => {

    const [showEdit, setShowEdit] = useState(false)
    
  return (
    <div className={styles.todoContainer}>

        <div className={styles.todoInfo}>
            <button className={todo.isComplete ? styles.Complete : styles.notComplete}>
                {todo.isComplete ? "Done" : "Not done"}
            </button>
            <div className={styles.todoText}>
                <h3>{todo.name}</h3>
                
                <p>{todo.description}</p>
            </div>
        </div>
        <div className={styles.todoBtn}>
            <button className={styles.deleteBtn} onClick={() => deleteTodo(todo.id)}>x</button>
            <button className={styles.editBtn} onClick={() => {
                setEditingId(todo.id);
                setNewData({
                    "name": "",
                    "description": "",
                    "isComplete": false
                });
                setShowEdit(!showEdit)
                }}>
                    Edit
                </button>
                {editingId == todo.id && showEdit && (
                    <EditTodo
                        todo={todo}
                        updateTodo={updateTodo}
                        newData={newData}
                        setNewData={setNewData}
                        showEdit={showEdit}
                        setShowEdit={setShowEdit}
                    />
                )}
            </div>
    </div>
  )
}

export default Todo 