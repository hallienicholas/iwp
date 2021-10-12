import React, { Component } from "react";
//import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  //Redirect
} from "react-router-dom";
import LoginPage from "./pages/login";
import DashView from "./pages/DashView";
// 
class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/" component={DashView} />
            <Route exact path="/about" component={DashView} />
            <Route exact path="/pump" component={DashView} />
          </Switch>
        </Router> 
    );
  }
}

export default App;