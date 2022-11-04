import {useState } from "react";

const ThreeButton = (props) => {
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
    return (
            <div className={props.className}>
                <button onClick={allButtonHandler} className={`footer-buttons active-button ${allButtonStatus === "all" ? "active-status" : ""} ${props.darkMode ? "footer-buttons-light" : ""  }`} type="button">All</button>
                <button onClick={activeButtonHandler} className={`footer-buttons active-button ${allButtonStatus ==="active" ? "active-status" : ""} ${props.darkMode ? "footer-buttons-light" : "" }`} type="button">Active</button>
                <button onClick={completedButtonHandler} className={`footer-buttons active-button ${allButtonStatus === "completed" ? "active-status" : ""} ${props.darkMode ? "footer-buttons-light" : "" }`} type="button">Completed</button>
            </div>
      );
}
 
export default ThreeButton;