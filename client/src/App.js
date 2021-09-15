import React, { Component } from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import DbPage from "./pages";
import LoginPage from "./pages/login";

class App extends Component {
  render() {
    return (
      <Router>
       <Route exact path="/" component={DbPage} />
       <Route exact path="/login" component={LoginPage} />
      </Router>
    );
  }
}

export default App;
