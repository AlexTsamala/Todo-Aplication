import axios from "axios";
import { useDispatch } from "react-redux";
import { todoListActions } from "./store/slices";
import ThreeButton from "./ThreeButton";

const FooterTodo = (props) => {
    const dispatch = useDispatch()
    const clearCompletedButtonHandler = async () =>{
            const result = await axios.delete("http://localhost:4001/clear-completed/");
            dispatch(todoListActions.clearCompletedTodoLists(result.data))
        }
    return ( 
        <div className="todo-list-footer">
            <div className={`items-left ${props.darkMode ? "items-left-light" : ""}`}>
                <span className="number-of-item">{props.todoList.length}</span>
                items left
            </div>
                <ThreeButton className="all-active-completed-section" filterHandler={props.filterHandler} darkMode={props.darkMode}/>
            <button onClick={clearCompletedButtonHandler}  className={`clear-completed-button footer-buttons  ${props.darkMode ? "footer-buttons-light" : ""}`} type="button">Clear Completed</button>
        </div>
     );
}
 
export default FooterTodo;