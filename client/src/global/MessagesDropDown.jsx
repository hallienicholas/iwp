import React, {Component} from "react";

class MessagesDropDown extends Component{
    render(){
        return(
            <div className="nav-item dropdown no-arrow ml-auto mr-4 show">
                <a id="userDropdown" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bell fa-2x"></i>
                </a>
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <h6 className="dropdown-header">Messages</h6>
                    <a className="dropdown-item border-left-danger" href="/messages">
                        <b>Pump 275</b> has no battery power.
                    </a>
                    <a className="dropdown-item border-left-danger" href="/messages">
                        <b>Pump 275</b> has pumped no water recently.
                    </a>
                    <a className="dropdown-item border-left-warning" href="/messages">
                        <b>Pump 275</b> is getting low on battery.
                    </a>
                    <a className="dropdown-item">See more...</a>
                </div>
            </div>
        );
    }
}

export default MessagesDropDown;