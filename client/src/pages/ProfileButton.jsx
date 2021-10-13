import React, {Component} from "react";

class ProfileButton extends Component{
    render(){
        return(
            <a className="ml-1 mr-4" href="/"><i className="fas fa-user fa-2x"></i></a>
        );
    }
}

export default ProfileButton;