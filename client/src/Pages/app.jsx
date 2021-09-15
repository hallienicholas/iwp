import React from "react";
import Axios from 'axios'
import { useState } from "react";
//Functional Component 


function DbPage() {
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

export default DbPage;