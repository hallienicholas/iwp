import React from "react";
import Axios from 'axios';
import {useState} from "react";
import { Link } from "react-router-dom";
//vv
import LoginPopUp from '../LoginPopUp';
import useToken from '../useToken';
//^^


function DbPage() {

  const [pumpList, setPumpList] = useState([]);

  const getData = () => {
    Axios.get("http://localhost:3001/data").then((response) => {
      setPumpList(response.data);
    });
  };
  //vv
  const { token, setToken } = useToken();

  if(!token) {
    return <LoginPopUp setToken={setToken} />
  }
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>
      <div className="btn-group mt-2 mb-2" role="group">
        <button className="btn-primary btn d-inline shadow" onClick={getData}>Show Data</button> 
        <Link to="/login" className="btn btn-light shadow">Go To Login Page</Link> 
      </div>
      <div className="row">
        <div className="col-8">
          <div className="card shadow">
            <table className="table">
              <thead>
                <tr>
                  <th>Transmission ID</th>
                  <th>Pump ID</th>
                  <th>Battery Percentage</th>
                </tr>
              </thead>
              <tbody>
                {pumpList.map((val,key) => {
                  return(
                    <tr>
                      <td>{val.iwp_sensor_data_id}</td>
                      <td>{val.iwp_pump_id_fk}</td>
                      <td>{val.battery_percentage}</td>
                    </tr>
                  );
                })}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DbPage;