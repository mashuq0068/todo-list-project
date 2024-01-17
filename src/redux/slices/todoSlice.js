import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
  name: 'allTodo',
  initialState: JSON.parse(localStorage.getItem('todoList')) || [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    deleteTodo(state, action) {
      state.splice(action.payload, 1);
      localStorage.setItem('todoList', JSON.stringify(state));
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
