import React,{Component} from 'react';

function Danger(props) {

    const SystemMessage = `.system-message {
        top:50px;
        left:300px;
        right:300px;
        }`;

        console.log(props.display)

    if(props.display == true){
        return(
            <div className="system-message position-fixed" onClick={props.close}>
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
    }else{
        return(<></>);
    }
}

export default Danger;