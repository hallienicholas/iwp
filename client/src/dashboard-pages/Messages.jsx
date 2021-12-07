import React, {Component} from "react";

class Messages extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h1 className="h3 mb-4 text-gray-800">Messages</h1>
                <div className="row">
                    <div className="col">
                        <div className="card shadow mb-4 border-left-info">
                            <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                                <h6 className="m-0 font-weight-bold text-primary">Pump 275 12-3-2021</h6>
                            </a>
                            <div className="collapse show" id="collapseCardExample">
                                <div className="card-body">
                                    <strong>Pump 275</strong> has no battery power.
                                    <br className="mb-2"/>
                                    <button className="btn btn-success mr-1">Resolve</button>
                                    <button className="btn btn-danger mr-1">Ignore</button>
                                </div>
                            </div>
                            <a href="#collapseCardExample2" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample2">
                                <h6 className="m-0 font-weight-bold text-primary">Pump 275 12-3-2021</h6>
                            </a>
                            <div className="collapse show" id="collapseCardExample2">
                                <div className="card-body">
                                    <strong>Pump 275</strong> has pumped no water recently (last 4 days).
                                    <br className="mb-2"/>
                                    <button className="btn btn-success mr-1">Resolve</button>
                                    <button className="btn btn-danger mr-1">Ignore</button>
                                </div>
                            </div>
                            <a href="#collapseCardExample3" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample3">
                                <h6 className="m-0 font-weight-bold text-primary">Pump 275 12-2-2021</h6>
                            </a>
                            <div className="collapse show" id="collapseCardExample3">
                                <div className="card-body">
                                    <strong>Pump 275</strong> is running low on battery.
                                    <br className="mb-2"/>
                                    <button className="btn btn-success mr-1">Resolve</button>
                                    <button className="btn btn-danger mr-1">Ignore</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )};
}

export default Messages;