import React from "react";
const initialState = {name:"",email:""};

const Reducer = (state = initialState,action) =>{
    switch(action.type){
        case "input" : 
            return {...state, ...action.payload};
        default:
            return state;
    }
}
export default Reducer;
