import {Component} from "react";
import {Link} from "react-router-dom";

const $ = require('jquery');
$.DataTable = require('datatables.net');

class MultiTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            dangerData: this.props.dangerData
        }
    }

    determineStatus = (battery, leak) => {
        if(battery < 3.1 || leak > 20){return "Danger"}
        else{return "Healthy"}
      }

    componentDidUpdate(){
        console.log(this.state.dangerData.dangerData)
        $(this.refs.main).DataTable();
    }

    componentWillUnmount(){
        $('.data-table-wrapper')
        .find('table')
        .DataTable()
        .destroy(true);
     }


    render(){
        return(
            <table className="table" ref="main">
                    <thead>
                    <tr>
                        <th>Pump ID</th>
                        <th>Location</th>
                        <th>Volume Sum</th>
                        <th>Battery Percentage</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.dangerData.dangerData.map((val,key) => {
                        return(
                        <tr>
                            <td>
                            <Link to={{pathname:"/pump", state:{id: val.iwp_pump_id, pumps: [{iwp_pump_id: val.iwp_pump_id, pump_name: val.pump_name}] }}}>
                            {val.iwp_pump_id}
                            </Link>
                            </td>
                            <td>{val.pump_name}</td>
                            <td>{val.daily_volume_sum || "null"}</td>
                            <td>{val.battery_percentage || "null"}</td>
                            <td>{this.determineStatus(val.battery_percentage, val.leakage_coefficient)}</td>
                        </tr>
                        );
                    })}
                    </tbody>
            </table>
        );
    }
}

export default MultiTable;