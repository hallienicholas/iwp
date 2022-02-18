import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import React, { Component, useRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Axios from 'axios';
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

function Map(){

const mapToken = "pk.eyJ1IjoiaG5pY2hvbGFzIiwiYSI6ImNremRma3hrNjA1bjAybm9iM2thdnZraXQifQ.CyiZY5YybAs-rk7ac--dsA";
mapboxgl.accessToken = mapToken;
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-77.012100);
const [lat, setLat] = useState(40.231838);
const [zoom, setZoom] = useState(5);
const [central, setCentral] = useState("");
const [pumpsName, setPumpsName] = useState([]);
const [mapData, setMapData] = useState([]);

const getMapData = (e) => {
    Axios.get("http://localhost:3001/mapData?id=" + e.target.value).then((response) => {
      setMapData(response.data);
    })
  }

const updateZoom = (e) => {
    if(e.target.value !== "Select Pump"){
        setPumpsName(e.target.value);
        getMapData(e);
        //set the center long and lat to what pump value/id corresponds to
        setLng("gps_longitude");
        setLat("gps_latitude"); 
      }      
  }
  
const [pumps, setPumps] = useState([]);

const getPumpsList = () => {
    Axios.get("http://localhost:3001/pumps").then((response) => {
      setPumps(response.data);
    })
  }

  const mapStyle = 
  `#map { 
    width: 100%;
    margin-right:auto;
    margin-left:auto;
}
#map-container {
  margin-left:auto;
  margin-right:auto;
}`;

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/hnicholas/ckzdfpm16000614mn71sfppcs',
    //style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [lng, lat],
    zoom: zoom
    
        });
    });

    /* 
Add an event listener that runs
  when a user clicks on the map element.
*/

const interact = (event) => {
    // If the user clicked on one of your markers, get its information.
    var features = map.queryRenderedFeatures({ layers: ['sites-outline'] }).map(function(feat) {
        return feat.properties && feat.properties.DEV_STATUS;
      });
    if (!features.length) {
      return;
    }
    const feature = features[0];
    
    /* 
    Create a popup, specify its options 
    and properties, and add it to the map.
  */
const popup = new mapboxgl.Popup({ offset: [0, -15] })
.setLngLat(feature.geometry.coordinates)
.setHTML(
  `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
)
.addTo(map);
    
  };

    return(
        <div className='container-fluid'>
            <div id="map">
            <div ref={mapContainer} className="map-container" onClick={interact} />
            
            <title>Display a map on a webpage</title>
            <link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet"></link>
            <script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>

        <style>{mapStyle}</style>
            
        <div id="root"></div>
        </div>

        <div className="col">
            <label for="pumpList">Pump</label>
            <select id="pumpList" className="form-control form-control-sm" onClick={getPumpsList} onChange={updateZoom}>
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
        );
        
}

export default Map;