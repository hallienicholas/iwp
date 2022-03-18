import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h1 className="h3 mb-4 text-gray-800">User Settings</h1>
                <div className="row ml-1">
                    <span className="">Firstname Lastname</span>
                </div>
                <div className="row ml-1">
                    <span className="">Your email address:</span>
                    <span className="font-weight-light ml-1">Email@site.com</span>
                </div>
                <div className="row ml-1">
                    <span className="">Priveledges:</span>
                    <span className="font-weight-light ml-1">Admin</span>
                </div>
                <div className="row ml-1">
                    <span className="">You have access to data for the following organizations:</span>
                    <span className="font-weight-light ml-1">All</span>
                </div>
                <br></br>
                <div className='row ml-1'>
                    <a href="/change-email">Change your email</a>
                </div>
                <div className='row ml-1'>
                    <a href="/forgot">Change your password</a>
                </div>
                <br></br>
                <h1 className="h3 mb-4 mt-2 text-gray-800">Administration</h1>
                <div className="row">
                    <div className="col-lg-4 col-sm-fluid">
                        <Link to="./requests"><button className='btn btn-primary'>See requests</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;