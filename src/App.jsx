import Header from './header';
import TodoList from './TodoList';
import { useEffect, useState } from 'react';
import ThreeButton from './ThreeButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoLists } from './store/actions/todoListActions';


function App () {
    const [filterText,setFilterText] = useState("all");
    const [darkMode,setDarkMode] = useState(true);
    
    const dispatch = useDispatch();
    const toDos = useSelector(state => state.todoList.items);
    const active = toDos.filter( (item) => !item.status);
    const notActive = toDos.filter( (item) => item.status);
    
    const filterHandler = (status) => {
        setFilterText(status)
    }
    
    useEffect(() => {
        dispatch(fetchTodoLists());
    },[dispatch])
    
    return(
        <div className={`main-container ${darkMode ? "main-container-light" :""}`}>
            <Header darkMode={darkMode} darkModeFunction={setDarkMode}/>
            <TodoList darkMode={darkMode} filterHandler={filterHandler}  todoList={filterText === "active"? active : filterText ==="completed" ? notActive : toDos}/>
            <ThreeButton className={`all-active-completed-section-mobile ${ darkMode ? "":"all-active-completed-section-mobile-dark"}`} filterHandler={filterHandler} darkMode={darkMode}/>
            <span className={`drag-drop-style ${darkMode ? "drag-drop-style-light" :""}`}>Drag and drop to reorder list</span>
        </div>
    );
} 

export default App