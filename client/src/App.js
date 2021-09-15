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

class App extends Component {
  render() {
    return (
      <Router>
       <Route exact path="/" component={DbPage} />
      </Router>
    );
  }
}

export default App;
