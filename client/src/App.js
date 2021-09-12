import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'
import { useState } from "react";

function App() {
  const [pumpList, setPumpList] = useState([]);

  const getData = () => {
    Axios.get("http://localhost:3001/data").then((response) => {
      setPumpList(response.data);
    });
  };

  return (
    <div className="App">
      <h1>IWP Database</h1>
      <div className = "get_data_button">
        <button onClick={getData}>
          Show Data</button>  

        {pumpList.map((val, key) => {
          return (
            <div className = "dataTables">
              <h3>Timestamp: {val.date_sensed}</h3>
              <h3>Data Transmission Id: {val.iwp_sensor_data_id}</h3>
              <h3>Pump Id: {val.iwp_pump_id_fk}</h3>
              <h3>Battery Percentage: {val.battery_percentage}</h3> 
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;