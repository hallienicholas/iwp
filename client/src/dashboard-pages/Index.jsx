import React, { useEffect, useLayoutEffect } from "react";
import Axios from 'axios'
import {useState} from "react";
import { Link } from "react-router-dom";
//vv
import LoginPopUp from '../popups/LoginPopUp';
import useToken from '../popups/useToken';
//^^
import sortPieData from "./sortPieData.js";
import PieChart from "./PieChart";
import VolumeChart from "./VolumeChart";

function DbPage() {

  const [pumpList, setPumpList] = useState([]);
  //const [pieData, setPieData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [volumeData, setVolumeData] = useState([]);
  const [volume, setVolume] = useState(0);

  const getVolume = () => {
    Axios.get("http://localhost:3001/calcs").then((response) => {
      setVolumeData(response.data);
    })
  }

  const getData = () => {
    Axios.get("http://localhost:3001/dangerData").then((response) => {
      setPumpList(response.data);
    });
    getPieData();
  };

  useEffect(() => {
    getData();
    getVolume();
  }, []);

  function calcSum(data){
    var sum = 0;
    data.forEach(element => {
      sum = sum + parseInt(element.daily_volume_sum)
    });
    return sum;
  }

  const getPieData = () => {
    Axios.get("http://localhost:3001/lastTrans").then((response) => {
      setChartData(sortPieData(response.data))
    })
  };

  const determineStatus = (battery, leak) => {
    if(battery < 3.1 || leak > 20){return "Danger"}
    else{return "Healthy"}
  }

  //vv
  const { token, setToken } = useToken();
  

  //if(!token) {
  //  return <LoginPopUp setToken={setToken} />
  //}

  // Code for conditional render based on token status.
  //if(localStorage.getItem('token') != null){
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>

      <div className="row">
        <div className="col-4">
          <div className="card border-left-primary shadow">
            <div className="card-body">
              <div className="row">
                <div className="col mr-2">
                  <div className="text-xs text-uppercase font-weight-bold text-primary mb-1">Pumps</div>
                  <div className="mb-1 h5 text-uppercase">{pumpList.length}</div>
                </div>
                <div className="col-auto">
                  <span><i className="fas fa-faucet fa-2x text-gray-300"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
        <div className="card border-left-primary shadow">
            <div className="card-body">
              <div className="row">
                <div className="col mr-2">
                  <div className="text-xs text-uppercase font-weight-bold text-primary mb-1">Total Volume Pumped</div>
                  <div className="mb-1 h5 text-uppercase">{calcSum(volumeData)} l</div>
                </div>
                <div className="col-auto">
                  <span><i className="fa-water fas fa-2x text-gray-300"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-4">
          <div className="card border-left-primary shadow">
            <div className="card-header">
              <h4>Pumps</h4>
            </div>
            <div className="card-body">
              {this.props.dangerData}
            </div>
          </div>
        </div> */}
      </div>

      <div className="row">
        <div className="col">
          <div className="btn-group mt-2 mb-2" role="group">
            <button className="btn-primary btn d-inline shadow" onClick={getData}>Show Data</button> 
            <Link to="/login" className="btn btn-light shadow">Go To Login Page</Link> 
          </div>
        </div>
      </div>
        
      <div className="row mb-4">
        <div className="col-8">
          <div className="card shadow">
            <table className="table">
              <thead>
                <tr>
                  <th>Pump ID</th>
                  <th>Location</th>
                  <th>Volume Sum</th>
                  <th>Battery Percentage</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {pumpList.map((val,key) => {
                  return(
                    <tr>
                      <td>{val.iwp_pump_id_fk}</td>
                      <td>{val.pump_name}</td>
                      <td>{val.daily_volume_sum || "null"}</td>
                      <td>{val.battery_percentage}</td>
                      <td>{determineStatus(val.battery_percentage, val.leakage_coefficient)}</td>
                    </tr>
                  );
                })}
                </tbody>
            </table>
          </div>
        </div>
        <div className="col-4">
                <PieChart data={chartData} />
        </div>
      </div>
    </div>
  // );

  // Code for conditional render based on token status.
  // } else {
  //   return(
  //     <div className="container-fluid">
  //   <>You are not permitted to see this page.</>
  //   </div>
  //   )
  // }
  );
}

export default DbPage;