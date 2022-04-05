import { Component } from "react"

class MessageCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: this.props.data,
            message: "",
            display: true,
            pumpString: "display" + this.props.data.iwp_pump_id,
        }
    }
    
    sortData = () => {
        const pumpName      = this.state.data.iwp_pump_id;
        const date          = this.props.data.date_sensed || "null";
        const battery       = this.state.data.battery_percentage || "null";
        const leak          = this.state.data.leak_coefficient_avg;
        const transmission  = this.state.data.iwp_sensor_data_id;
        var message = {battery:"", leak:"", tagline:""};

        if(battery < 3.1){
            message.battery = 'Pump ' + pumpName + '\'s battery voltage has fallen below 3.1. '
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

    ignore = () => {
        localStorage.setItem(this.state.pumpString, "false");
        this.setState({display: false});
    }

    componentDidMount() {
        this.setState({message: this.sortData()});
    }
    
    render(){
        console.log(this.state.data);
        var message = this.state.message;
        if(this.state.display == true){
            return(
                <div className="card shadow mb-4 border-left-info">
                    <a href={"#collapse" + this.state.data.iwp_pump_id} className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls={"collapse" + this.state.data.iwp_pump_id}>
                        <h6 className="m-0 font-weight-bold text-primary">Pump {this.state.data.iwp_pump_id} ({this.props.data.date_sensed == null? "null": this.props.data.date_sensed.split(":")[0].slice(0,-3)})</h6>
                    </a>
                    <div className="collapse show" id={"collapse" + this.state.data.iwp_pump_id}>
                        <div className="card-body">
                            {message.battery}
                            {message.leak}
                            {message.tagline}
                            <br className="mb-2"/>
                            <button className="btn btn-danger mr-1" onClick={this.ignore}>Ignore</button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(<></>);
        }
    }
}

export default MessageCard;