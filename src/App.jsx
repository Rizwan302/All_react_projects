import { useState } from 'react'
import './App.css'
// import PasswordApp from './PasswordGengert/page'
import Currency from './currencyconverter/page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <PasswordApp/> */}
      <Currency />
    </>
  )
}

export default App
