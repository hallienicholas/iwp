import React,{Component, useState, useEffect} from 'react';
import DangerChild from "./DangerChild"

function Danger(props) {

    const [display, setDisplay] = useState(
        localStorage.getItem('display') || "true"
    );
    

    const SystemMessage = `.system-message {
        top:50px;
        left:300px;
        right:300px;
        bottom:auto;
        }`;

    const closeContainer = () => {
        setDisplay("false")
        localStorage.setItem('display', "false");
    }

    useEffect(() => {
        localStorage.setItem('display', display);
    }, [])

    if(display === "true"){
        return(
            <div className="system-message position-fixed">
                <style>{SystemMessage}</style>
                <div className="card system-card border-left-danger mb-4 shadow vw-50">
                    <a href="#collapseDanger" className="card-header d-block py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseDanger">
                        <span className="ml-0 h6 mr-auto font-weight-bold text-danger float-left">System warning</span>
                        <a className="float-right h6 text-muted text-decoration-none close-button" onClick={closeContainer}>
                            <b>x</b>
                        </a>
                    </a>
                <div className="collapse show" id="collapseDanger">
                    <div className="card-body">
                        {props.data.map((val, key) => {
                            return(
                                <DangerChild data={val} key={key}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
        )
    }else{
        return(<></>);
    }
}

export default Danger;