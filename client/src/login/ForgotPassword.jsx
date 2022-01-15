import React, {Component} from "react";
import Axios from 'axios'
import { useState } from "react";
import LoginRibbon from "../global/LoginRibbon";
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
            <div className="container mb-auto mt-auto">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                            Forgot Password
                            <br/>
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
                            <button className="btn btn-primary mt-2 mb-2" type="button" data-toggle="modal" data-target="success" onClick={resetPassword}>Send Password Reset</button>
                            <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm">
                                    <div class="modal-content">
                                        ...
                                    </div>
                                </div>
                            </div>   

                            <p>I remembered my password. <Link to="/login" className="link">Log me in</Link></p>
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
            </div>
    )
}

export default ForgotPassword;