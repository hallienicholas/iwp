import React, {Component, useEffect, useState} from "react";
import DropDownMessage from "./DropDownMessage";

function MessagesDropDown(props){

    return(
        <div className="nav-item dropdown no-arrow ml-auto mr-4 show">
            <a id="userDropdown" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bell fa-2x"></i>
            </a>
            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <h6 className="dropdown-header">Messages</h6>
                {props.data.slice(0,3).map((val, key) => {
                    return(
                    <DropDownMessage data={val}/>
                )
                })}
                <a href="/messages" className="dropdown-item">See more...</a>
            </div>
        </div>
    );
    
}

export default MessagesDropDown;