import React,{Component} from 'react';

class Danger extends Component{
    render(){

        const SystemMessage = `.system-message {
            top:50px;
            left:300px;
            right:300px;
            }`

        return(
            <div className="system-message position-fixed">
                <style>{SystemMessage}</style>
                <div className="card border-left-danger mb-4 shadow">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-danger">System warning</h6>
                    </div>
                <div className="card-body">Some error has occured.
                    <h6 className="font-weight-light">Click this popup to close.</h6>
                </div>
                </div>
            </div>
        )
    }
}

export default Danger;