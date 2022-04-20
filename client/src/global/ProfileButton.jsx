import React, {Component} from "react";

class ProfileButton extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div className="nav-item dropdown no-arrow show">
                <a id="userDropdown" className="ml-1 mr-4 nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-user fa-2x"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <span className="dropdown-header">Account class</span>
                    <a className="dropdown-item" href="/user">User Settings</a>
                    <a className="dropdown-item" href="/messages">Messages</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" onClick={() => this.props.setLoginStatus(false)}>Logout</a>
                </div>
            </div>
        );
    }
}

export default ProfileButton;