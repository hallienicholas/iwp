import React, {Component} from "react";

class Error extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="text-center">
                    <div className="error mx-auto" data-text="404">404</div>
                    <div className="lead text-gray mb-5">Page not found</div>
                    <div className="text-gray mb-0">It looks like you tried to access a page that doesn't exist. Make sure the spelling is correct.</div>
                    <div className="text-gray mb-0">Still having trouble? <a href="./contact">Contact us</a></div> 
                </div>
            </div>
        )
    }
}

export default Error;