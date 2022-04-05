import React, {Component} from "react";
import { Link } from "react-router-dom";

//Landing page for mechanics. Donors SHOULDN'T be booted to this page after login.

class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    //sorts an array into pairs (aka [277, 283, 284, 285] => [[277, 283], [284, 285]])
    pairUp(pumpArray){
        var pairedArray = [[]];
        for(var i=0; i<pumpArray.length; i++){
            if(i%2==1){continue}
            pairedArray[i/2] = [pumpArray[i], pumpArray[i+1]].filter(this.removeUndef);
        }
        
        return pairedArray;
    }

    removeUndef(element){
        return element != undefined;
    }

    componentDidMount(){
        console.log(this.state.cards);
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="h3 mb-4 text-gray-800">Landing</div>
                </div>
                {this.pairUp(this.props.dangerData).map((val, key) => {
                    return(<div className="row mb-4">
                        {val.map((v2, k2) =>{
                            return(
                                
                                <div className="col-4">
                                    <Link className="text-decoration-none" to="/pump">
                                        <div className={v2.battery_percentage > 3.1? "card border-left-primary shadow py-2":"card border-left-danger shadow py-2"}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="h1 text-gray-800 text-uppercase"><strong>{v2.iwp_pump_id}</strong></div>
                                                        <div className="">Battery voltage: {v2.battery_percentage || "null"}</div>
                                                        <div className="">Leakage coefficient: {v2.leakage_coefficient_avg || "null"}</div>
                                                        <div className="">Priming rate: {v2.longest_prime || "null"}</div>
                                                    </div>
                                                    <div className="col-auto mb-auto mt-auto">
                                                        <i className="fas fa-fw fa-faucet fa-4x text-dark"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>)
                })}
            </div>
        )
    }
}

export default Landing;