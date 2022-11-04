import { todoListActions } from "../slices";
import axios from 'axios';

export const fetchTodoLists = () => {
    return async (dispatch) => {
        const fetchTodoListInfo = async () => {
            const response = await axios.get("http://localhost:4001");
            return response.data
        }
    

    try {
        const todoLists = await fetchTodoListInfo();
        dispatch(todoListActions.fetchTodoLists(todoLists))
    } catch (error) {}
    };
}

