import { Component } from "react";

class Splash extends Component{
    render(){
        return(
            <>
            <div className="navbar shadow static-top navbar-light bg-white mb-4">
                <a className="navbar-brand d-flex align-items-center justify-content-center mt-2 mb-2" href="/">
                    <div className="navbar-brand-icon">
                        <img className="mr-auto ml-auto" alt="The logo of IWP, a water droplet." display="inline" width="40px" height="55px" src="../img/minimallogo.png"></img>
                    </div>
                </a>
                <div className="navbar-brand-text mx-3">Intelligent Water Project</div>
                <div className="nav-item text-uppercase nav-link ml-auto mr-3">
                    Login
                </div>
            </div>
            <div className="container-fluid bg-primary text-light h-100">
                <div className="row">
                    <div className="col-lg-7">
                        <h1 className="text-uppercase mr-0 ml-auto">Intelligent Water Project</h1>
                    </div>
                    <div className="col-lg-5">
                        <p>Bringing water to everyone.</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default Splash;