import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import e from 'cors';

function PumpList({pumpName, setPumpName, chartData, setChartData, id}){

  if(!id){
    id = {};
    id.pumps = null;
  }

  function selectPump(){
    if(id){
      return(<option selected="true">{id.id}</option>)
    }
  }

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
    console.log(pumpName || !id)

    const getPumpList = () => {
      Axios.get("http://localhost:3001/pumps").then((response) => {
        setPumps(response.data);
      })
    }

    useEffect(() => {
      updateHeader({target: {value: id.id}})
    }, [])

    const fillSubtitle = () => {
      if(pumpName && pumps.length != 0){
        console.log(pumpName == id.pumps[0].iwp_pump_id)

        var chosenPump = "";

        for(var i=0; i<pumps.length; i++){
          console.log(pumps[i].iwp_pump_id.toString() == pumpName, pumps[i].iwp_pump_id.toString(), pumpName)
          if(pumps[i].iwp_pump_id.toString() == pumpName){
            chosenPump = pumps[i].pump_name;
            break
          }
          console.log(chosenPump)
        }
        return(<h4 className='mb-4'>{chosenPump}</h4>)
      } else if(id.pumps != null && pumpName == id.pumps[0].iwp_pump_id){
        console.log("HIOiejhoiajoihj")
        return(<h4 className='mb-4'>{id.pumps[0].pump_name}</h4>)
      } else {
        return(<h4 className='mb-4'></h4>);
      }
    }


    return(
        <div className="row">
          <div className="col-lg-10">
          <h1 className="h3 text-gray-800">Pump {pumpName}</h1>
          {fillSubtitle()}
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
              {selectPump()}
            </select>
          </div>
        </div>
    )
}

export default PumpList;