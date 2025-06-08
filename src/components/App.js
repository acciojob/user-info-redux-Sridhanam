
import './../styles/App.css';
import React from "react";
import InputForm from "./input";
import Display from "./displayData";


const App = () => {
  return (
    <div>
        <h1>User Information</h1>
        <InputForm/>
        <p>Current values in store:</p>
        <Display/>
    </div>
  )
}

export default App
