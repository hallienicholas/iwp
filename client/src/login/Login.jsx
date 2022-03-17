import React from "react";
import Axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import LoginRibbon from "../global/LoginRibbon";
function LoginPage () {

    /* Login States */
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);

    Axios.defaults.withCredentials = true;

    const login = () => {
      Axios.post("http://localhost:3001/login", {
        username: username, 
        password: password,
      }).then((response) => {
        console.log(response);
        if (!response.data.auth){
          setLoginStatus(false);
        } else {
          console.log(response.data)
          localStorage.setItem("token", response.data.token);
          setLoginStatus(true);
        }
      });
    };

    const userAuthenticated = () => {
      Axios.get("http://localhost:3001/isUserAuth", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }).then((response) => {
        console.log(response);
      });
      
    };


// Check this vvvvv
    useEffect(()=> {
      Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn == true) {
          //setLoginStatus(response.data.user[0].user_email);
          console.log(response.data.user[0].user_email);
        } 
      });
    }, []);

    console.log(loginStatus);
  
    return (
      <div id = "wrapper">
        <LoginRibbon />
        <div className="container mt-auto mb-auto">
          <div className="row">
            <div className="col-sm"></div>
            <div className="col-sm">
                {/* Beginning of Login Section */}
                <br />
                Login
                <br />
                <input 
                  className="mt-2"
                  type="text" 
                  name="username"
                  placeholder="Email Address"
                  onChange={(event) => {
                    setUsername(event.target.value); 
                    }}
                  />
                  <br />
                <input 
                  className="mt-2"
                  type="password"
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

                {loginStatus && (
                  <button onClick= {userAuthenticated}> Check if Authenticated</button>

                )}

                <h1></h1>
                <p>Don't have an account? <Link to="/register" className="link">Register</Link></p> 
                <p>Forgot your password? <Link to="/forgot" className="link">Reset password</Link></p>
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
        {loginStatus ? <Redirect to="/" /> : <></>}
      </div>
      
    );
  }
  

export default LoginPage;