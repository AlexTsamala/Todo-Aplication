import React from "react";
import CheckBox from "./CheckBox";
import FooterTodo from "./FooterOfTodoList";
const TodoList = (props) => {
    const {todoList,deleteList} = props;
    const handleDelete = (id) =>{
        deleteList(id);
    }
    const filterHandler = (status) => {
        props.filterHandler(status)
    }
    return (
        <div className={`todo-list-container ${props.darkMode ? "todo-list-container-light" :""}`}>
            <div className="todo-list-section">
                <ul className="lists-parent-style">
                    {todoList.map((todoItem) => {
                    return (   
                            <React.Fragment key={todoItem.id}>
                                <li className={`lists-style ${props.darkMode ? "lists-style-light" :""}`}>
                                    <CheckBox darkMode={props.darkMode} statusHandler={props.statusHandler} id={todoItem.id}  status={todoItem.status} text={todoItem.todolist}/>
                                    <svg onClick={() => handleDelete(todoItem.id)} className="x-style" fillRule="evenodd" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                                        <path fill="#494C6B"  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
                                    </svg>
                                </li>
                                <hr className={`lists-bottom-line ${props.darkMode ? "lists-bottom-line-light" :""}`}></hr>
                            </React.Fragment> 
                        );
                    }) }
                </ul>
            </div>
            <FooterTodo darkMode={props.darkMode}  clearCompleted={props.clearCompleted} filterHandler={filterHandler} todoList={todoList}/>
        </div>
     );
}
 
export default TodoList;