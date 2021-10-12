import React from "react";
import Axios from 'axios'
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginRibbon from "../LoginRibbon";
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
      <div id = "wrapper">
        <LoginRibbon />
        <div className = "mt-auto mb-auto mr-auto ml-auto">
        
          <input 
            className="mt-2"
            type="text" 
            name="username"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value); 
              }}
            />
            <br />
          <input 
            className="mt-2"
            type="text"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value); 
              }}
            
          />
          <br />
          <div className="btn-group mt-2 mb-2" role="group">
          <button className="btn btn-primary shadow">Login</button>
            <Link to="/" className="btn btn-light shadow">Go To DB Page</Link> 
          </div>
          <p>Don't have an account? <Link to="/register" className="link">Register</Link></p> 
        </div>
      </div>
    );
  }
  

export default LoginPage;