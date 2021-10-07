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
        
          <label className="mb-0">Username</label><br />
          <input 
            className="mt-0"
            type="text" 
            name="username"
            onChange={(event) => {
              setUsername(event.target.value); 
              }}
            />
          <br />
          <label className="mt-1 mb-auto">Password</label><br />
          <input 
            className="mt-0"
            type="text" 
            onChange={(event) => {
              setPassword(event.target.value); 
              }}
            
          />
          <br />
          <div className="btn-group mt-2 mb-2" role="group">
          <button className="btn btn-primary shadow">Login</button>
            <Link to="/" className="btn btn-light shadow">Go To DB Page</Link> 
          </div>
        </div>
      </div>
    );
  }
  

export default LoginPage;