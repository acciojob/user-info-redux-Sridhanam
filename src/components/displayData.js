import {useSelector} from "react-redux";
import React from "react";
import "./display.css";

const Display = () =>{
    const {name,email} = useSelector((state)=>state);
    return(
        <>
        <div>
            <p className="output">Name - {name}</p>
            <br></br>
            <p className="output">Email - {email}</p>
        </div>
        </>
    )
}
export default Display;
