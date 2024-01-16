import React from 'react'
import TaskList from './taskList'

export default function Todo_list() {
    return (
        <div className=''>
            <h1>Todo App</h1>

            <div className="">
                <input type="text" placeholder='Enter the Task' />
                <button>Add</button>
            </div>

            <div className="">
                <TaskList/>
            </div>
        </div>
    )
}
