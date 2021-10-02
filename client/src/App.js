import React, { Component } from "react";
import logo from "./logo.svg";
import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import Dashboard from "./pages/Dashboard";
import LoginRibbon from "./pages/LoginRibbon";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
  //Link,
  //Redirect
} from "react-router-dom";
import DbPage from "./pages";
import LoginPage from "./pages/login";
// 
class App extends Component {
  render() {
    return (
      <div className="App" id="wrapper">
        <Router>
          <Sidebar />
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/" component={DbPage} />
            </Switch>
        <div id="content-wrapper" class="d-flex flex-column">
         
          <Navbar />
          <div className="container-fluid">
            <Dashboard />
          </div>
        </div>
        </Router> 
      </div>
    );
  }
}

export default App;