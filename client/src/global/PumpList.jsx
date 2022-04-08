import React, {useState} from 'react';
import Axios from 'axios';


function PumpList({pumpName, setPumpName, chartData, setChartData, selected, setSelected}){

  const getChartData = (e) => {
    Axios.get("http://localhost:3001/chartData?id=" + e.target.value).then((response) => {
      setChartData(response.data);
    })
  }

  const updateHeader = (e) => {
		if(e.target.value !== "Select Pump"){
		    setPumpName(e.target.value);
        getChartData(e);
		  }      
	  }

    const [pumps, setPumps] = useState([]);

    const getPumpList = () => {

      if (selected != null) {
      Axios.get("http://localhost:3001/pumps").then((response) => {
        setPumps(response.data);
      })
    } else {
      console.log("in the else for selected")
    }
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