import React from "react";
import Axios from 'axios'
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginRibbon from "../LoginRibbon";

function Registration () {

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

        return(
            <div id = "wrapper">
                <LoginRibbon />
                <div className = "mt-auto mb-auto mr-auto ml-auto">
                
                {/* Beginning of Registration Section */}
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
                        placeholder="Email Address"
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

                    <h1>{loginStatus}</h1>
                    <p>Already have an account? <Link to="/login" className="link">Login</Link></p>
                    </div>
                </div>
                    {/* End of Create Account Section */}
                </div>
            </div>
        );
}

export default Registration;