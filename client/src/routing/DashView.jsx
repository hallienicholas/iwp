import React, { Component } from "react";
import Sidebar from "../global/Sidebar";
import Navbar from "../global/Navbar";
import DbPage from "../dashboard-pages/Index";
import About from "../dashboard-pages/About";
import Pump from "../dashboard-pages/PumpView";
import Error from "../dashboard-pages/Error";
import Contact from "../dashboard-pages/Contact";
import Messages from "../dashboard-pages/Messages";
import Map from "../dashboard-pages/Map";
import Danger from "../popups/Danger";
import DangerHandling from "../popups/DangerHandling.jsx";
import Axios from "axios";

import {
    Route, 
    Switch,
    //Redirect
  } from "react-router-dom";

  
class DashView extends Component {

    constructor(){
        super()
        this.state = {
            display: true,
            dangerData: [],
            pumps: [],
        }
    }

    closePopup = () => {
        this.setState({
            display: false
        })
    }

    render() {

        // const getPumpList = () => {
        //     Axios.get("http://localhost:3001/pumps").then((response) => {
        //       //this.setState({pumps: response.data});
        //       console.log("Response: " + response.data);
        //       console.log("Pumps: " + this.state.pumps);
        //     })
        //   }
        //   console.log(getPumpList())


        return(
            <div id="wrapper" className="display-flex">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={DbPage} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/pump" component={Pump} />
                            <Route exact path="/contact" component={Contact} />
                            <Route path="/messages" component={Messages} />
                            <Route exact path="/Map" component={Map} />
                            <Route path="*" component={Error} />
                        </Switch>
                        <DangerHandling />
                    </div>
            </div>
        );
    }
}





export default DashView;