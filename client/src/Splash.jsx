import { Component } from "react";
import Axios from "axios";

class Splash extends Component{
    constructor(props){
        super(props);
        this.state = {
            volumeData: [],
        }
    }

    getVolumeData(){
        Axios.get("http://localhost:3001/calcs").then((response) => {
            this.setState({volumeData: response.data});
        })
    }

    calcSum(data){
        var sum = 0;
        data.forEach(element => {
          sum = sum + parseInt(element.daily_volume_sum)
        });
        return sum;
      }

    componentDidMount(){
        this.getVolumeData();
    }

    render(){
        return(
            <>
            <div className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <a className="navbar-brand d-flex align-items-center justify-content-center mt-2 mb-2" href="/">
                    <div className="navbar-brand-icon">
                        <img className="mr-auto ml-auto" alt="The logo of IWP, a water droplet." display="inline" width="40px" height="55px" src="../img/minimallogo.png"></img>
                    </div>
                
                <div className="navbar-brand-text text-dark text-uppercase mx-3"><strong>Intelligent Water Project</strong></div>
                </a>
                <div className="nav-item text-uppercase nav-link ml-auto mr-3">
                    <a href="/login">Login</a>
                </div>
            </div>
            <div className="container-fluid bg-primary text-light h-100">
                <div className="row mb-5 pt-5">
                    <span className="mx-auto"><h3>{this.calcSum(this.state.volumeData)} liters and counting.</h3></span>
                </div>
                <div className="row py-5 mt-auto mb-auto">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3 col-sm-5" style={{"border-right": "1px solid white", textAlign: "right"}}>
                        <h1 className="text-uppercase ml-auto px-3" >Bringing water to everyone.</h1>
                    </div>
                    <div className="col-lg-3 col-sm-5">
                        <p className="mr-50">The Intelligent Water Alerts application turns stored data from the Intelligent Water Project and converts it to accessible forms for use by mechanics and donors. Intelligent Water Alerts currently serves over 15 water pumps across the world.</p>
                        <h4 className="link text-uppercase">Enter site</h4>
                    </div>
                    <div className="col-lg-3 col-sm-1"></div>
                </div>
            </div>
            </>
        );
    }
}
export default Splash;