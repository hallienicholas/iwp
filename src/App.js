import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import { useState } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className = "get_data_button">
        <button onClick={getData}>Show Data</button>  

        {pumpList.map((val, key) => {
          return (
            <div className = "dataTables">
              <h3>data transmission id: {val.iwp_sensor_data_id}</h3>
              <h3>pump id: {val.iwp_pump_id_fk}</h3>
              <h3>battery percentage: {val.battery_percentage}</h3> 
            </div>
          )
        })}

      </div>

      </div>
    );
  }
}

export default App;