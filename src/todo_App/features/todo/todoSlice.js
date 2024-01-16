import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            message: "Hello New Todo App"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const todo = {
                id: nanoid(),
                message: action.payload
            }
            state.todos.push(todo)
        },
        removeTask: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTask: (state, action) => {
            const data = action.payload
            const filter = state.todos.find((item) => item.id == data.updateID)
            if(filter)
            {
                filter.message = data.update
            }
            
          },


    }
})

export const { addTask, removeTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer