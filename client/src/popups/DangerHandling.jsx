//This function determines which pumps have what errors, and what messages to display as a result of those calculations.

import Axios from "axios";
import {Component, useState } from "react";
import PumpList from "../global/PumpList";

function DangerHandling(){

    const [pumps, setPumps] = useState([]);

    const getPumpList = () => {
        Axios.get("http://localhost:3001/pumps").then((response) => {
          setPumps(response.data);
        })
    }
    
    //getPumpList()
    console.log(pumps);

    return(<></>);
}
export default DangerHandling;