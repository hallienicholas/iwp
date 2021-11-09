import React, {Component} from "react";

class ProfileButton extends Component{
    render(){
        return(
            <div className="nav-item dropdown no-arrow show">
                <a id="userDropdown" className="ml-1 mr-4 nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-2x"></i></a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <span className="dropdown-header">Account class</span>
                    <a className="dropdown-item">User Settings</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="./login">Logout</a>
                </div>
            </div>
        );
    }
}

export default ProfileButton;