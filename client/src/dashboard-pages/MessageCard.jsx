import { Component } from "react"

class MessageCard extends Component{
    constructor(props){
        super(props)
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
                <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                    <h6 className="m-0 font-weight-bold text-primary">Pump {this.state.data.iwp_pump_id_fk} ({this.state.data.date_sensed.split(":")[0].slice(0,-3)})</h6>
                </a>
                <div className="collapse show" id="collapseCardExample">
                    <div className="card-body">
                        {message.battery}
                        {message.leak}
                        {message.tagline}
                        <br className="mb-2"/>
                        <button className="btn btn-success mr-1">Resolve</button>
                        <button className="btn btn-danger mr-1">Ignore</button>
                    </div>
                </div>
            </>
        );
    }
}

export default MessageCard;