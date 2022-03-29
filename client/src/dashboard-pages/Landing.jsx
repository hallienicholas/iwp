import React, {Component} from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="h3 mb-4 text-gray-800">Landing</div>
                </div>
                <div className="row mb-4">
                    <div className="col-4">
                        <Link className="text-decoration-none" to="/pump">
                            <div className="card border-left-primary shadow py-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="h1 text-gray-800 text-uppercase"><strong>277</strong></div>
                                            <div className="">Battery voltage: 3.1</div>
                                            <div className="">Leakage coefficient: 20</div>
                                            <div className="">Priming rate: 20</div>
                                        </div>
                                        <div className="col-auto mb-auto mt-auto">
                                            <i className="fas fa-fw fa-faucet fa-4x text-dark"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-4">
                        <Link to="/pump" className="text-decoration-none">
                            <div className="card border-left-primary shadow py-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="h1 text-gray-800 text-uppercase"><strong>281</strong></div>
                                            <div className="">Battery voltage: 3.1</div>
                                            <div className="">Leakage coefficient: 20</div>
                                            <div className="">Priming rate: 20</div>
                                        </div>
                                        <div className="col-auto mb-auto mt-auto">
                                            <i className="fas fa-fw fa-faucet fa-4x text-dark"></i>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;