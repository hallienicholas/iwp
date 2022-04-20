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
import Registration from "./login/Registration"; 
import ForgotPassword from "./login/ForgotPassword";
import ChangeEmail from "./login/ChangeEmail";
import NewEmail from "./login/NewEmail";
import Splash from "./Splash";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginStatus: false
    }
  }

  setLoginStatus(arg){
    this.setState({loginStatus: arg})
  }

  componentDidMount(){
    console.log(this.state.loginStatus)
  }

  
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/splash" component={Splash} />
            <Route exact path="/register" component={Registration} />
            <Route path="/login">
              <LoginPage loginStatus={this.state.loginStatus} setLoginStatus={this.setLoginStatus.bind(this)} />
            </Route> 
            <Route exact path="/forgot" component={ForgotPassword} />
            <Route exact path="/change-email" component={ChangeEmail} />
            <Route exact path="/newemail" component={NewEmail} />
            <Route path="*">
              <DashView loginStatus={this.state.loginStatus} setLoginStatus={this.setLoginStatus.bind(this)}/>  
            </Route>
          </Switch>
        </Router> 
    );
  }
}

export default App;