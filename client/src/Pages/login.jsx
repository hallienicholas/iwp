import React from "react";
import Axios from 'axios'
import { useState } from "react";
import { Link } from "react-router-dom";
function LoginPage () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const sendValues = () => {
      Axios.post("http://localhost:3001/login", {
        username: username, 
        password: password
      }).then(() => {
        console.log("success");
        });
    };
  
    return (
      <div className = "LoginPage">
        <div className = "loginBoxes">
          <label>Username:</label>
          <input 
            type="text" 
            onChange={(event) => {
              setUsername(event.target.value); 
              }}
            />
          <label>Password:</label>
          <input 
            type="text" 
            onChange={(event) => {
              setPassword(event.target.value); 
              }}
            
          />
          <button>Login</button>
        </div>
        <Link to="/">Go To DB Page</Link>
      </div>
    );
  }
  

export default LoginPage;