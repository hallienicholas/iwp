import React, {Component} from "react";

class DropDownMessage extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            message: "",
            display: true,
        }
    }

    
    
    sortData = () => {
        const pumpName      = this.state.data.iwp_pump_id_fk
        const date          = this.state.data.date_sensed;
        const battery       = this.state.data.battery_percentage;
        const leak          = this.state.data.leak_coefficient_avg;
        const transmission  = this.state.data.iwp_sensor_data_id;
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
            this.setState({display: false});
        }
        return(message);
    }

    closeCard = () => {
        this.setState({display: false});
    }

    componentDidMount() {
        this.setState({message: this.sortData()});
    }
    render(){
        var message = this.state.message;
        return(
        <>
            <a className="dropdown-item border-left-danger" href="/messages">
                {message.battery}
                {message.leak}
            </a>
        </>);
    }
}

export default DropDownMessage;