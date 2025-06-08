import {useDispatch} from "react-redux";
import { useState } from "react";
import { UpdateValues } from "./actions";
import React from "react";

const InputForm =()=>{
    const [data,setData] = useState({
        name:"",
        email:""
    })
    const dispatch = useDispatch();

    const inputText = (e) =>{
        const {name,value} = e.target;
        setData((prev) => {
            const updatedData = { ...prev, [name]: value };
            dispatch(UpdateValues(updatedData.name, updatedData.email));
            return updatedData;
          });
    }
    return(
        <>
        <form>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={data.name}
                placeholder="enter name"
                onInput={inputText}
            />
            <br/>
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={data.email}
                placeholder="enter email"
                onInput={inputText}
            />
        </form>
        </>
    )
}

export default InputForm;
