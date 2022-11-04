import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "./slices";

const store = configureStore({
    reducer:{
        todoList: todoListReducer,
    }
})


export default store 