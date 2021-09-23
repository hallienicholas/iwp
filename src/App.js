import React, { Component } from 'react';
import logo from './logo.svg';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
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