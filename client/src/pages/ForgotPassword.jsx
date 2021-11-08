import React, {Component} from "react";
import LoginRibbon from "../LoginRibbon";

class ForgotPassword extends Component{
    render(){
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
                    />
                    <br />
                    <button className="btn btn-primary mt-2">Send Password Reset</button>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;