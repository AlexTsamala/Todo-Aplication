import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoListActions } from "./store/slices";
import axios from "axios";

const CheckBox = (props) => {
    const [status,setStatus] = useState(props.status);
    const dispatch = useDispatch();
    const clickHandle = async () =>{
        setStatus(!status);
        if(!props.id){
            props.statusHandler();
        }else{
        dispatch(todoListActions.updateTodoList(props.id))
        await axios.put("http://localhost:4001/change-status/"+props.id,{
            status: status,
            });
        }
    }
    return (
        <div className="list-parent-div">
            <div className={`checkbox-background-div ${status ? "" : "checkbox-background-div-1"}`}>
                <label className="container">
                    <input type="checkbox" checked={status} onChange={clickHandle}/>
                    <span className={`checkMark ${props.darkMode ? "checkMark-light" :""}`}></span>
                </label>
            </div>
            <span className={status ? "false-text-style" : ""}>{props.text}</span>
        </div>
      );
}
 
export default CheckBox;