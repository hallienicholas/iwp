import React, { Component } from "react";
import Sidebar from "../global/Sidebar";
import Navbar from "../global/Navbar";
import DbPage from "../dashboard-pages/Index";
import About from "../dashboard-pages/About";
import Pump from "../dashboard-pages/PumpView";
import Error from "../dashboard-pages/Error";
import Contact from "../dashboard-pages/Contact";
import {
    Route,
    Switch,
    //Redirect
  } from "react-router-dom";

  

class DashView extends Component {
    render(){
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
                            <Route path="*" component={Error} />
                        </Switch>
                    </div>
            </div>
        );
    }
}





export default DashView;