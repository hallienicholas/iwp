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

  const getData = () => {
    Axios.get("http://localhost:3001/dangerData").then((response) => {
      setPumpList(response.data);
    });
    getPieData();
  };

  useEffect(() => {
    getData();
  }, []);

  const getPieData = () => {
    Axios.get("http://localhost:3001/lastTrans").then((response) => {
      setChartData(sortPieData(response.data))
    })
  };

  //vv
  const { token, setToken } = useToken();

  console.log(pumpList);

  //if(!token) {
  //  return <LoginPopUp setToken={setToken} />
  //}

  // Code for conditional render based on token status.
  //if(localStorage.getItem('token') != null){
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>
      <div className="btn-group mt-2 mb-2" role="group">
        <button className="btn-primary btn d-inline shadow" onClick={getData}>Show Data</button> 
        <Link to="/login" className="btn btn-light shadow">Go To Login Page</Link> 
      </div>
      {/* <div className="row mb-4">
        <div className="col">
          <VolumeChart chartData={pumpList} chartTitle={"Volume Pumped by Date"} pumpId={284} purpose="volume"/>
        </div>
      </div> */}
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
                      <td>Status</td>
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