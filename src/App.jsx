import axios from 'axios';
import Header from './header';
import TodoList from './TodoList';
import { useEffect, useState } from 'react';
function App () {
    const [todoList,setTodoList] = useState([]);
    const [filterText,setFilterText] = useState("all");
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
        <div className='main-container'>
            <Header addList={addList}/>
            <TodoList clearCompleted={clearCompleted} filterHandler={filterHandler}  todoList={filterText === "active"? active : filterText ==="completed" ? notActive : todoList} deleteList={deleteList}/>
            <span className='drag-drop-style'>Drag and drop to reorder list</span>
        </div>
    );
} 

export default App