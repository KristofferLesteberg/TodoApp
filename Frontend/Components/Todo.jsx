import React from 'react'
import EditTodo from './EditTodo';

import styles from './Styles/Todo.module.css'

const Todo = ({ todo, updateTodo, deleteTodo, editingId, setEditingId, newData, setNewData }) => {
  return (
    <div className={styles.todoContainer}>
        <div className={styles.todoInfo}>
            <p>{todo.isComplete == false ? "ikke ferdig" : "Ferdig"}</p>
            <p>{todo.name}</p>
        </div>
        <div className={styles.todoBtn}>
            <button className={styles.deleteBtn} onClick={() => deleteTodo(todo.id)}>x</button>
            <button className={styles.editBtn} onClick={() => {
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
    </div>
  )
}

export default Todo