import React,{Component, useState, useEffect} from 'react';

function Danger(props) {

    const [display, setDisplay] = useState(true);
    const [message, setMessage] = useState({});

    const SystemMessage = `.system-message {
        top:50px;
        left:300px;
        right:300px;
        }`;

    const closePopup = () => {
        setDisplay(false)
    }

    const sortData = () => {
        const pumpName      = props.data.iwp_pump_id_fk
        const date          = props.data.date_sensed;
        const battery       = props.data.battery_percentage;
        const leak          = props.data.leak_coefficient_avg;
        const transmission  = props.data.iwp_sensor_data_id;
        var message = {battery:"", leak:"", tagline:""};

        if(battery < 5){
            message.battery = 'Pump ' + pumpName + '\'s battery percentage has fallen below 5%.'
        }
        
        if(leak > 20){
            message.leak = 'Pump ' + pumpName + '\'s leakage coefficient average has risen above 20.'
        }

        if(message.battery != '' || message.leak != ''){
            message.tagline = "Based on transmission " + transmission + " from " + date;
            message.tagline = 'This should be cause for concern.'
        } else {
            setDisplay(false);
        }
        return(message);
    }

    useEffect(() => {
        setMessage(sortData())
    }, [])

    if(display == true){
        return(
            <div className="system-message position-fixed" onClick={closePopup}>
                <style>{SystemMessage}</style>
                <div className="card border-left-danger mb-4 shadow">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-danger">System warning</h6>
                    </div>
                <div className="card-body">
                    <p><b>{message.battery}</b></p>
                    <p><b>{message.leak}</b></p>
                    <i>{message.tagline}</i>
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