import React, { useContext, useState } from 'react'
import TryCode from './page'

export default function dataUpload() {
    const setData = useContext(TryCode);
    const [inputData, setInputData] = useState("")
    const upload = () => {
        setInputData(setData)
    }
  return (
    <div>
      <input type="text" placeholder='data' value={inputData}/>
      <button onSubmit={upload}>Send</button>
    </div>
  )
}
