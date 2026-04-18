import React, { useEffect, useState } from 'react'
import './Todo.css'
const Todo = () => {
    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState('')

    function handleChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        setTask([...task, newTask])
        setNewTask(' ')
    }

    function deleteHandler(index) {
        const update = task.filter((task, i) => i !== index)
        setTask(update)
    }

    function updateHandler(index) {
        const updatedTask = prompt('Enter the updated task:')
        setTask(prev => prev.map((t, i) => i === index ? updatedTask : t))
    }
    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            <div className="todos">
                <input
                    type="text"
                    value={newTask}
                    placeholder='Enter a task'
                    onChange={handleChange}
                />
                <button onClick={addTask}>Add Task</button>
            </div>

            <ul>
                {task.map((task, index) =>
                    <div key={index}>
                        <span>{task}</span>
                        <button onClick={() => deleteHandler(index)}>Delete</button>
                        <button onClick={() => updateHandler(index)}>Update</button>
                    </div>
                )}
            </ul>

        </div>
    )
}

export default Todo