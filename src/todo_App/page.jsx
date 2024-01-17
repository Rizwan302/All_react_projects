import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";
import { ImPencil } from "react-icons/im";
import InputBox from './components/inputBox';
import './style.css'
import { removeTask, updateTask } from './features/todo/todoSlice';

export default function Todo() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [update, setUpdate] = useState('');
    const [updateID, setUpdateID] = useState(null)

    const handleUpdate = (id, updatemessage) => {
        setUpdateID(id);
        setUpdate(updatemessage);
    };

    const handleUpdateState = () => {
        const data = {updateID, update}
        dispatch(updateTask(data));
        setUpdateID(null);
        setUpdate("");
    };

    return (
        <div className='container'>
            <div className='todo_main_Box'>
                <h1>Todo App</h1>
                <InputBox />

                <ul className="todo-list">
                    {todos.map((item) => (
                        <li key={item.id}>
                            <div className="todo-item">
                                {item.message}
                                {updateID === item.id ? (
                                    <div className='updateBox'>
                                        <input
                                            type="text"
                                            placeholder='Update Task'
                                            className='inpotBox'
                                            value={update}
                                            onChange={(e) => setUpdate(e.target.value)} />
                                        <button onClick={handleUpdateState}>Save</button>
                                    </div>
                                ) : (
                                    <div className="todo-buttons">
                                        <button onClick={() => handleUpdate(item.id, item.message)}>
                                            <ImPencil />
                                        </button>
                                        <button onClick={() => dispatch(removeTask(item.id))}>
                                            <MdDeleteForever />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
