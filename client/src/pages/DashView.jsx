import React, { Component } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import DbPage from "./index";
import About from "./About";
import Pump from "./PumpView";
import Error from "./error";
import Contact from "./Contact";
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
                        <Route exact path="/" component={DbPage}>
                        </Route>
                        <Route exact path="/about" component={About}>
                        </Route>
                        <Route exact path="/pump" component={Pump}>
                        </Route>
                        <Route exact path="/contact" component={Contact} />
                        <Route path="*" component={Error} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default DashView;