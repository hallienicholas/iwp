import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component{

    refreshAlerts(){
        localStorage.setItem("display", "true")
    }

    render(){
        return(
            <div className="container-fluid">
                <h1 className="h3 mb-4 text-gray-800">User Settings</h1>
                <div className="row mb-1">
                    <div className='card shadow w-100'>
                        <div className='card-body'>
                            Firstname Lastname                  <br />
                            Your email address: Email@site.com  
                            <span className='ml-2'><a href="/change-email"><i className='fas fa-edit'></i></a></span><br />
                            Privileges: Admin                   <br />
                        </div>
                    </div>
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
                <button className='btn btn-primary mt-2 mb-2' onClick={this.refreshAlerts}>Refresh alerts</button>
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