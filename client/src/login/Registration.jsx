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

    const valPassword = (passwordReg, usernameReg) => {
        let valmessage = "OK";
        if (this.passwordReg.length < 8) {
            valmessage = "The password is too short.";
        } else if (!passwordReg.includes("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9")) {
            valmessage = "The password needs to contain a number.";
        } else if (usernameReg || regexp.test(usernameReg) === false) {
            valmessage = "You've entered an invalid email address.";
        }
        return valmessage;
    };
    
    const register = () => {
        //call validatePass function
        let validation = valPassword;
        //let textStatus = "not-determined"
        // let valid passwords go ahead with backend registration call
        if (validation = "OK") {
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
            })
        } else {
            console.log('Password Validation Failed:', validation);
            //textStatus = "text-danger";
        }
    };

    /* const valPassword = () => {
            let val;
                try {
                 if (passwordReg.length < 8) {
                    throw "Short";
                    console.log("it is short");
                } if (!password.contains("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9")) {
                    throw "Number";
                } if (this.username || regex.test(username) === false) {
                    throw "Invalid";
                } if (err) {
                    throw "Exist";
              }

            }
            catch(e) {
            console.log("In the catch");
                if (e == "Short") {
                  res.send({message: "Password requires more than 8 characters."});
                }
                if (e == "Number") {
                  res.send({message: "Password must contain a numeric symbol."});
                }
                if (e == "Invalid") {
                  res.send({message: "You've entered an invalid email address."});
                }
                if (e == "Exist") {
                  res.send({message: "An account with that email already exists." });
                }
            }
            return(false);
          } 
          true; */
    
    /* const register = () => {
        //call validatePass function
        //valPassword;
      Axios.post("http://localhost:3001/register", {
        username: usernameReg, 
        password: passwordReg,
        firstname: firstNameReg,
        lastname: lastNameReg
      }).then((response) => {
        if (response.data.message){
            setRegStatus(response.data.message);
        } console.log(response);
        setTimeout(() =>{
            if (response.data.message == "Account successfully created!") {
                setNextAction(<Route><Redirect to="./Login"/></Route>);
            }
        }, 3000);

        if (response.data.message == "Account successfully created!") {
            setTextStatus("text-success");
        } else {
            setTextStatus("text-danger");
        };

      });
    }; */


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