import React, { Component } from "react";
import "./custom-css/App.css";
import 'mapbox-gl/dist/mapbox-gl.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LoginPage from "./login/Login";
import DashView from "./routing/DashView";
import Map from "./dashboard-pages/MapPage";
import Registration from "./login/Registration"; 
import ForgotPassword from "./login/ForgotPassword";
class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/register" component={Registration} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/forgot" component={ForgotPassword} />
            <Route exact path="*" component={DashView} />
          </Switch>
        </Router> 
    );
  }
}

export default App;