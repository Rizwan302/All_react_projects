import { useState } from 'react'
import './App.css'
// import PasswordApp from './PasswordGengert/page'
// import Currency from './currencyconverter/page'
// import Todo_list from './todolist/page'
import Todo from './todo_App/page'
import { Provider } from 'react-redux'
import store from './todo_App/store/Store'

function App() {

  return (
    <>
      {/* <PasswordApp/> */}
      {/* <Currency /> */}
    

      <Provider store={store}>
      <Todo/>
      </Provider>
      
    </>
  )
}

export default App
