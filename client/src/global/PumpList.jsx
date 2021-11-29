import React, {Component, useState, useEffect} from 'react';
import Axios from 'axios';
import {
  Link,
  //Redirect
} from "react-router-dom";

function PumpList(){

    const [pumps, setPumps] = useState([]);

    const getPumpList = () => {
      Axios.get("http://localhost:3001/pumps").then((response) => {
        setPumps(response.data);
      })
    }

    return(
        <>
            <button onClick={getPumpList} />
            {pumps.map((val,key) => {
                return(
                <li className="nav-item">
                    <Link to="/pump" className="nav-link" href="/">
                    <i className="fas fa-fw fa-faucet">
                    </i>
                    <span>{val.iwp_pump_id}</span>
                    </Link>
                </li>
                )
                })
            }
        </>
    )
}

export default PumpList;