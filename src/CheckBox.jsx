import { useState } from "react";
const CheckBox = (props) => {
    const [status,setStatus] = useState(props.status);
    const clickHandle = () =>{
        setStatus(!status);
        if(props.statusHandler){
            props.statusHandler()
        }
    }
    return (
        <div className="list-parent-div">
            <div className={`checkbox-background-div ${status ? "" : "checkbox-background-div-1"}`}>
                <label className="container">
                    <input type="checkbox" checked={status} onChange={clickHandle}/>
                    <span className="checkMark"></span>
                </label>
            </div>
            <span className={status ? "false-text-style" : ""}>{props.text}</span>
        </div>
      );
}
 
export default CheckBox;