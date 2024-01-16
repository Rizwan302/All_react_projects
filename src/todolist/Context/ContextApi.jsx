import React, { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            task: "Hello World",
            completed: false
        }
    ],
    addTodos: (todo) => {},
    deleteTodo: (id) => {},
    updataTodo: (id, todo) => {}
})

export default function ContextApi() {
 return useContext(TodoContext)
}

// exports const 
