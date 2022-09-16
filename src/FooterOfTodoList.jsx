import axios from "axios";
import ThreeButton from "./ThreeButton";
const FooterTodo = (props) => {
    const clearCompletedButtonHandler = async () =>{
            const response = await axios.delete("http://localhost:4001/clear-completed/");
            console.log(response);
            props.clearCompleted();
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