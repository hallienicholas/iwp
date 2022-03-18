import React, {Component, useEffect, useState} from "react";

function DangerChild(props){

    const [message, setMessage] = useState({});
    const pumpString = 'display' + props.data.iwp_pump_id_fk;
    const [display, setDisplay] = useState(localStorage.getItem(pumpString)||"true");

    const sortData = () => {
        const pumpName      = props.data.iwp_pump_id_fk
        const date          = props.data.date_sensed;
        const battery       = props.data.battery_percentage;
        const leak          = props.data.leak_coefficient_avg;
        const transmission  = props.data.iwp_sensor_data_id;
        var message = {battery:"", leak:"", tagline:""};

        if(battery < 5){
            message.battery = 'Pump ' + pumpName + '\'s battery percentage has fallen below 5%. '
        }
        
        if(leak > 20){
            message.leak = 'Pump ' + pumpName + '\'s leakage coefficient average has risen above 20. '
        }

        if(message.battery != '' || message.leak != ''){
            message.tagline = "Based on transmission " + transmission + " from " + date + ". ";
            message.tagline += 'This should be cause for concern.'
        } else {
            localStorage.setItem(pumpString, "false");
            setDisplay(localStorage.getItem(pumpString));
        }
        return(message);
    }

    const closeCard = () => {
        localStorage.setItem(pumpString, "false");
        setDisplay(localStorage.getItem(pumpString));
    }

    useEffect(() => {
        setMessage(sortData())
    }, [])

    if(display != "false"){
        return(
            <div className="card dangerChild p-1 mb-1" onClick={closeCard}>

            {message.battery}
            {message.leak}
            {message.tagline}
            </div>
        )
    } else {
        return(<></>);
    }
}

export default DangerChild;