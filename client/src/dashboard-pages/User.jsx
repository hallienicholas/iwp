import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h1 className="h3 mb-4 text-gray-800">User Settings</h1>
                <div className="row ml-1">
                    <span className="">Your email address:</span>
                    <span className="font-weight-light ml-1">Email@site.com</span>
                </div>
                <div className='row ml-1'>
                    <a href="/forgot">Reset your password</a>
                </div>
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