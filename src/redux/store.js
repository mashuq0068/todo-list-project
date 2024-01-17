const { configureStore } = require("@reduxjs/toolkit");
const { default: todoSlice } = require("./slices/todoSlice");

const store = configureStore({
    reducer : {
    allTodo : todoSlice
    }
})
export default store