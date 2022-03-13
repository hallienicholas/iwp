import React from "react";
import Axios from 'axios'
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginRibbon from "../global/LoginRibbon";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";

function Registration () {

    /* Registration States */
    const [firstNameReg, setFirstNameReg] = useState("");
    const [lastNameReg, setLastNameReg] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [regStatus, setRegStatus] = useState("");
    const [textStatus, setTextStatus] = useState("");
    const [nextAction, setNextAction] = useState("");
    const regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    const register = () => {
        //call validatePass function
        //let textStatus = "not-determined"
        // let valid passwords go ahead with backend registration call
        
            Axios.post("http://localhost:3001/register", {
                username: usernameReg,
                password: passwordReg,
                firstname: firstNameReg,
                lastname: lastNameReg
            }).then((response) => {

                if (response.data.message){
                    setRegStatus(response.data.message);
                    if (response.data.message == "Account successfully created!") {
                        setTextStatus("text-success");
                    } else {
                        setTextStatus("text-danger");
                    }
                } console.log(response);
                setTimeout(() => {
                    if (response.data.message == "Account successfully created!") {
                        setNextAction(<Route><Redirect to="./Login"/></Route>);
                    }
                }, 3000);
                /* if (response.data.message == "Account successfully created!") {
                    textStatus = "text-success";
                } else {
                    console.log('There was an issue writing to the database:', response.data.message);
                    textStatus = "text-danger";
                } */
            
        //} else {
            //setRegStatus(valmessage);
            //console.log('Password Validation Failed:');
            //textStatus = "text-danger";
        
    })
    };

        return(
            <div id = "wrapper">
                <LoginRibbon />
                <div className="container mb-auto mt-auto">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                            
                            {/* Beginning of registration Section */}
                                Register
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
                                    placeholder="Email Address"
                                    onChange={(event) => {
                                        setUsernameReg(event.target.value); 
                                        }}
                                    />
                                    <br />
                                    <input 
                                    className="mt-2"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(event) => {
                                        setPasswordReg(event.target.value); 
                                        }}
                                    />
                                    <br />
                                <div className="btn-group mt-2 mb-2" role="group">
                                <button className="btn btn-primary shadow" onClick={register}>Submit</button>
                                </div>
                                
                                <p className={textStatus}>{regStatus}</p>
                                    {nextAction}
                                <p>Already have an account? <Link to="/login" className="link">Login</Link></p>
                                
                            </div>
                                {/* End of Create Account Section */}
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
            </div>
        );
}

export default Registration;