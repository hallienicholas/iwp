import React, {Component} from "react";
import Axios from 'axios'
import { useState } from "react";
import LoginRibbon from "../LoginRibbon";
import { Link } from "react-router-dom";

function ForgotPassword () {

    const [email, setEmail] = useState("");

    const resetPassword = () => {
        Axios.post("http://localhost:3001/sendPasswordResetEmail", {
          email: email
        });
    };
    return(
        <div id="wrapper">
            <LoginRibbon />
            <div className = "mb-auto mr-auto ml-auto">
                <h2 className="mt-5 text-gray align-left">Forgot Password</h2>
                <br className="mt-5 mb-5" />
                <input 
                    className="mt-2"
                    type="text" 
                    name="email"
                    placeholder="Email"
                    onChange={(event) => {
                        setEmail(event.target.value); 
                        }}
                />
                <br />
                <button className="btn btn-primary mt-2 mb-2"onClick={resetPassword}>Send Password Reset</button>
                <p>I remembered my password. <Link to="/login" className="link">Log me in</Link></p>
            </div>
        </div>
    )
}

export default ForgotPassword;