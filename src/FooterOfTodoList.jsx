import { useState } from "react";
import axios from "axios";
const FooterTodo = (props) => {
    const [allButtonStatus,setAllButtonStatus] = useState("all");
    const allButtonHandler = () =>{
        setAllButtonStatus("all");
        props.filterHandler("all");
    }
    const activeButtonHandler = () =>{
        setAllButtonStatus("active");
        props.filterHandler("active");
    }
    const completedButtonHandler = () =>{
        setAllButtonStatus("completed");
        props.filterHandler("completed");
    }
    const clearCompletedButtonHandler = async () =>{
            const response = await axios.delete("http://localhost:4001/clear-completed/");
            console.log(response);
            props.clearCompleted();
        }
    
    
    return ( 
        <div className="todo-list-footer">
            <div className={`items-left ${props.darkMode ? "items-left-light" : ""}`}><span className="number-of-item">{props.todoList.length}</span>items left</div>
            <div className="all-active-completed-section">
                <button onClick={allButtonHandler} className={`footer-buttons active-button ${allButtonStatus === "all" ? "active-status" : "" , props.darkMode ? "footer-buttons-light" : ""  }`} type="button">All</button>
                <button onClick={activeButtonHandler} className={`footer-buttons active-button ${allButtonStatus ==="active" ? "active-status" : "" , props.darkMode ? "footer-buttons-light" : "" }`} type="button">Active</button>
                <button onClick={completedButtonHandler} className={`footer-buttons active-button ${allButtonStatus === "completed" ? "active-status" : "" , props.darkMode ? "footer-buttons-light" : "" }`} type="button">Completed</button>
            </div>
            <button onClick={clearCompletedButtonHandler}  className={`clear-completed-button footer-buttons  ${props.darkMode ? "footer-buttons-light" : ""}`} type="button">Clear Completed</button>
        </div>
     );
}
 
export default FooterTodo;