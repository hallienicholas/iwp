import React, {Component} from "react";
import LoginRibbon from "../global/LoginRibbon";
import { Link } from "react-router-dom";

class ForgotPassword extends Component{
    render(){
        return(
            <div id="wrapper">
                <LoginRibbon />
                <div className="container mb-auto mt-auto">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                            Reset Password<br />
                            <input 
                                className="mt-2"
                                type="text" 
                                name="email"
                                placeholder="Email"
                            />
                            <br />
                            <button className="btn btn-primary mt-2 mb-2">Send Password Reset</button>
                            <p>I remembered my password. <br></br><Link to="/login" className="link">Log me in</Link></p>
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;