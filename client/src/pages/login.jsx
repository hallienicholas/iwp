import React from "react";
import Axios from 'axios'
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginRibbon from "../LoginRibbon";
function LoginPage () {

    /* Login States */
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    /* Registration States */
    const [firstNameReg, setFirstNameReg] = useState("");
    const [lastNameReg, setLastNameReg] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const register = () => {
      Axios.post("http://localhost:3001/register", {
        username: usernameReg, 
        password: passwordReg,
        firstname: firstNameReg,
        lastname: lastNameReg
      }).then((response) => {
        console.log(response);
      });
    };

    const login = () => {
      Axios.post("http://localhost:3001/login", {
        username: username, 
        password: password,
      }).then((response) => {
        if (response.data.message){
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].user_email);
        }
      });
    };
  
    return (
      <div id = "wrapper">
        <LoginRibbon />
        <div className = "mt-auto mb-auto mr-auto ml-auto">

          {/* Beginning of Create Account Section */}
          Registration
          <div>
            <input 
              className="mt-2"
              type="text"
              placeholder="First Name"
              onChange={(event) => {
                setFirstNameReg(event.target.value); 
                }}
              />
              <br />
            <input 
              className="mt-2"
              type="text"
              placeholder="Last Name"
              onChange={(event) => {
                setLastNameReg(event.target.value); 
                }}
              />
              <br />
            <input 
              className="mt-2"
              type="text" 
              name="username"
              placeholder="Username"
              onChange={(event) => {
                setUsernameReg(event.target.value); 
                }}
              />
              <br />
            <input 
              className="mt-2"
              type="text"
              placeholder="Password"
              onChange={(event) => {
                setPasswordReg(event.target.value); 
                }}
              />
              <br />

            <br />
          <div className="btn-group mt-2 mb-2" role="group">
          <button className="btn btn-primary shadow" onClick={register}>Submit</button>
          </div>

          </div>
          {/* End of Create Account Section */}

          {/* Beginning of Login Section */}
          <br />
          Login
          <br />
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
          <button className="btn btn-primary shadow" onClick={login}>Login</button>
            <Link to="/" className="btn btn-light shadow">Go To DB Page</Link> 
          </div>

          {/* End of Login Section */}

          <h1>{loginStatus}</h1>
          <p>Don't have an account? <Link to="/register" className="link">Register</Link></p> 
          <p>Forgot your password? <Link to="/forgot" className="link">Reset password</Link></p>
        </div>
      </div>
    );
  }
  

export default LoginPage;