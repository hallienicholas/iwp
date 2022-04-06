import React, { Component } from "react";
import Sidebar from "../global/Sidebar";
import Navbar from "../global/Navbar";
import DbPage from "../dashboard-pages/Index";
import About from "../dashboard-pages/About";
import Pump from "../dashboard-pages/PumpView";
import Error from "../dashboard-pages/Error";
import Contact from "../dashboard-pages/Contact";
import Messages from "../dashboard-pages/Messages";
import MapPage from "../dashboard-pages/MapPage";
import DangerHandling from "../popups/DangerHandling.jsx";
import User from "../dashboard-pages/User";
import Requests from "../dashboard-pages/Requests";
import Axios from "axios";

import {
    Route, 
    Switch,
    //Redirect
  } from "react-router-dom";

import Landing from "../dashboard-pages/Landing";

  
class DashView extends Component {

    constructor(){
        super()
        this.state = {
            display: true,
            dangerData: [],
            pumps : null,
        }
    }

    getDangerData = () => {
        Axios.get("http://localhost:3001/dangerData").then((response) => {
          this.setState({dangerData: response.data})
        })
    }

    setDangerData(stuff){
        this.setState({dangerData: stuff})
    }

    useEffect(){
        Axios.get("http://localhost:3001/pumps").then((response) => {
            this.setState({pumps: response.data});
        })
    }

    componentDidMount(){
        this.getDangerData();
    }

    render() {
        
        return(
            <div id="wrapper" className="display-flex">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <Navbar dangerData={this.state.dangerData}/>
                        <Switch>
                            <Route exact path="/dashboard">
                                <DbPage dangerData={this.state.dangerData} />
                            </Route>
                            <Route exact path="/">
                                <Landing dangerData={this.state.dangerData}/>
                            </Route>
                            <Route exact path="/about" component={About} />
                            <Route exact path="/pump" component={Pump} />
                            <Route exact path="/contact" component={Contact} />
                            <Route path="/messages">
                                <Messages dangerData={this.state.dangerData} setDangerData={this.setDangerData.bind(this)}/>
                            </Route>
                            <Route exact path="/Map" component={MapPage} />
                            <Route exact path="/User" component={User} />
                            <Route exact path="/requests" component={Requests} />
                            <Route path="*" component={Error} />
                        </Switch>
                        
                    </div>
                    <DangerHandling dangerData={this.state.dangerData} setDangerData={this.setDangerData.bind(this)} />
                    {this.state.pumps}
            </div>
        );
    }
}





export default DashView;