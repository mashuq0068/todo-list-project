import { createSlice } from "@reduxjs/toolkit";


const todoSlice =  createSlice({
    name : 'allTodo',
    initialState : [],
    reducers: {
        addTodo(state , action) {
         state.push(action.payload)

        },
        deleteTodo() {}
    }
})

export const {addTodo , deleteTodo} = todoSlice.actions
export default todoSlice.reducer;