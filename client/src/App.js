import React, { Component } from "react";
//import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  //Redirect
} from "react-router-dom";
import LoginPage from "./pages/login";
import DashView from "./pages/DashView";
import Registration from "./pages/Registration"; 
import ForgotPassword from "./pages/ForgotPassword";
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