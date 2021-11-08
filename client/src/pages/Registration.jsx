import React, {Component} from "react";
import Axios from 'axios'
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginRibbon from "../LoginRibbon";

class Registration extends Component{
    render(){
        return(
            <div id = "wrapper">
                <LoginRibbon />
                <div className = "mt-auto mb-auto mr-auto ml-auto">
                
                <input 
                    className="mt-2"
                    type="text" 
                    name="username"
                    placeholder="Username"
                    /> <br />
                <input 
                    className="mt-2"
                    type="text"
                    placeholder="Password"             
                /> <br />
                <input 
                    className="mt-2"
                    type="text"
                    placeholder="Confirm password"
                />
                <br />
                <p>Already have an account? <Link to="/login" className="link">Login</Link></p>
                <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        );
    }
}

export default Registration;