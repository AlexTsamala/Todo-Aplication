import axios from 'axios';
import Header from './header';
import TodoList from './TodoList';
import { useEffect, useState } from 'react';
function App () {
    const [todoList,setTodoList] = useState([]);
    const [filterText,setFilterText] = useState("all");
    const [darkMode,setDarkMode] = useState(true)
    const active = todoList.filter( (item) => !item.status);
    const notActive = todoList.filter( (item) => item.status);
    
    const getTodo = async () => {
        const resp = await axios.get("http://localhost:4001");
        setTodoList(resp.data);
    }

    const deleteList = async (id) => {
        await axios.delete("http://localhost:4001/delete-todo/"+id);
        const newItemsList = todoList.filter( (item) => item.id !== id );
        setTodoList(newItemsList);
    }
    
    const clearCompleted = () => {
        setTodoList(active)
    }
    
    const statusHandler = async (id,status) =>{
        const newItemsList = todoList.slice();
        const clickedItem = newItemsList.find( (item) => item.id===id );
        clickedItem.status = !status;
        setTodoList(newItemsList);
        const response = await axios.put("http://localhost:4001/change-status/"+id,{
            status: status,
            });
            console.log(response)
    }

    const filterHandler = (status) => {
        setFilterText(status)
    }
    const addList = () => {
        getTodo()
    }
    useEffect(() => {
      getTodo();
    }, [])
    
    return(
        <div className={`main-container ${darkMode ? "main-container-light" :""}`}>
            <Header darkMode={darkMode} darkModeFunction={setDarkMode} addList={addList}/>
            <TodoList darkMode={darkMode} statusHandler={statusHandler} clearCompleted={clearCompleted} filterHandler={filterHandler}  todoList={filterText === "active"? active : filterText ==="completed" ? notActive : todoList} deleteList={deleteList}/>
            <span className={`drag-drop-style ${darkMode ? "drag-drop-style-light" :""}`}>Drag and drop to reorder list</span>
        </div>
    );
} 

export default App