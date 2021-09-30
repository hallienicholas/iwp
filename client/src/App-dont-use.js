import React, { Component } from 'react';
import logo from './logo.svg';
import Sidebar from './pages/Sidebar';
import Navbar from './pages/Navbar';
import Dashboard from './pages/Dashboard';
import LoginRibbon from './pages/LoginRibbon';
// 
class App extends Component {
  render() {
    return (
      <div className="App" id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <Navbar />
          <div class="container-fluid">
            <Dashboard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;