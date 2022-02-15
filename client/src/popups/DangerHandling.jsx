//This function determines which pumps have what errors, and what messages to display as a result of those calculations.

import Axios from "axios";
import {Component, useState, useEffect } from "react";
import PumpList from "../global/PumpList";
import Danger from "./Danger";

function DangerHandling (props) {

  const [list, setList] = useState([]);

  

  const getPumpList = () => {
    Axios.get("http://localhost:3001/pumps").then((response) => {
      setList(response.data);
    })
  }

  const getDangerData = () => {
    Axios.get("http://localhost:3001/dangerData").then((response) => {
      props.setDangerData(response.data);
    })
  }

  useEffect(() => {

    getDangerData();
    getPumpList();
    
  }, [])

  console.log(props.dangerData);


  var count=1;
  
  return(
    <>
    {/* {dangerData.map((val, key) => {
      return(
        <Danger data={val}/>
      );
    })} */}
    <Danger data={props.dangerData} />
    </>
  );
    
}
export default DangerHandling;