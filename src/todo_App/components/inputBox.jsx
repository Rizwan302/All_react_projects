import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/todo/todoSlice'
import '../style.css'

export default function InputBox() {
    const dip = useDispatch()
    const todos = useSelector(state => state.todos);
    const [inputData, setInputData] = useState("")

    const tasks = () => {
        // e.preventDefault();
        dip(addTask(inputData))
        setInputData("")
    }
    // console.log(todoss)
  return (
    <div className="input-box">
      <input
        type="text"
        placeholder='Enter Task'
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={tasks}>Add</button>
    </div>
  )
}
