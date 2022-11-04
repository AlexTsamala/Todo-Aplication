import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
}

const todoListSlice = createSlice({
    name:'todos',
    initialState,
    reducers: {
        fetchTodoLists: (state,action) => {
            state.items = action.payload
        },
        deleteTodoList:(state,action) => {
            let newItemsList = state.items.slice().filter( (item) => item.id !== action.payload)
            state.items = newItemsList;
        },
        updateTodoList:(state,action) => {
            const newItemsList = state.items.slice();
            const clickedItem = newItemsList.findIndex( (item) => item.id===action.payload );
            newItemsList[clickedItem].status = !newItemsList[clickedItem].status;
            state.items = newItemsList;
        },
        addInTodoList:(state,action) => {
            state.items = action.payload;
        },
        clearCompletedTodoLists:(state,action) => {
            state.items = action.payload;
        }
    },
})

export const todoListReducer = todoListSlice.reducer;
export const  todoListActions = todoListSlice.actions;
