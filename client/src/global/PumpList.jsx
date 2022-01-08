import React, {useState} from 'react';
import Axios from 'axios';

function PumpList({pumpName, setPumpName, volume, setVolume, battery, setBattery}){

  const [volumeData, storeVolume] = useState([]);
  const [batteryData, storeBattery] = useState([]);

  const getVolumeData = () => {
		Axios.get("http://localhost:3001/volume").then((response) => {
		  storeVolume(response.data);
      setVolume(volumeData);
		})
  }

  const getBatteryData = () => {
    Axios.get("http://localhost:3001/battery").then((response) => {
      storeBattery(response.data);
      setBattery(batteryData);
    })
  }

  const updateHeader = (e) => {
		if(e.target.value !== "Select Pump"){
		    setPumpName(e.target.value)
        getVolumeData();
        getBatteryData();
		  }      
	  }

    const [pumps, setPumps] = useState([]);

    const getPumpList = () => {
      Axios.get("http://localhost:3001/pumps").then((response) => {
        setPumps(response.data);
      })
    }

    return(
        <div className="row">
          <div className="col-lg-10">
            <h1 className="h3 mb-4 text-gray-800">Pump {pumpName}</h1>
          </div>
          <div className="col">
            <label for="pumpList">Pump</label>
            <select id="pumpList" className="form-control form-control-sm" onClick={getPumpList} onChange={updateHeader}>
            <option key="default">Select Pump</option>
            {pumps.map((val,key) => {
                  return(
                    <option key={val.iwp_pump_id}>{val.iwp_pump_id}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
    )
}

export default PumpList;