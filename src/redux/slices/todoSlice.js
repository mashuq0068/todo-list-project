import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
  name: 'allTodo',
 initialState :  typeof window !== 'undefined' && localStorage.getItem('todoList')
  ? JSON.parse(localStorage.getItem('todoList'))
  : [],
  reducers: {
    // addingTodo
    addTodo(state, action) {
      state.push(action.payload);
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    // deletingTodo
    deleteTodo(state, action) {
      state.splice(action.payload, 1);
      localStorage.setItem('todoList', JSON.stringify(state));
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
