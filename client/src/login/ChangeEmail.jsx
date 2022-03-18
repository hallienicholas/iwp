import React, {Component} from "react";
import Axios from 'axios'
import { useState } from "react";
import LoginRibbon from "../global/LoginRibbon";
import { Link } from "react-router-dom";

function ChangeEmail () {

    const [email, setEmail] = useState("");
    const [PassStatus, setPassStatus] = useState("");
    const [tStatus, setTStatus] = useState("");

    const resetPassword = () => {
        Axios.post("http://localhost:3001/sendPasswordResetEmail", {
          email: email
        }).then((response) => {
          
            if (response.data.message == "Email sent!") {
                setPassStatus(response.data.message);
            } console.log(response);
            if (response.data.message == "Email sent!") {
                setTStatus("text-success");

            } else setTStatus("text-danger");
            setPassStatus(response.data.message);
        });
    };

    return(
        <div id="wrapper">
            <LoginRibbon />
            <div className="container mb-auto mt-auto">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                            To change the email for your account, enter your current email and follow the link delivered to your inbox
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
                            <button className="btn btn-primary mt-2 mb-2" type="button" data-toggle="modal" data-target="success" onClick={resetPassword}>Send</button>
                            <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm">
                                    <div class="modal-content">
                                        ...
                                    </div>
                                </div>
                            </div>   
                            <p><br /><Link to="/User" className="link">Return to Settings</Link></p>
                            <p className={tStatus}>{PassStatus}</p>
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
            </div>
      )
}

export default ChangeEmail;