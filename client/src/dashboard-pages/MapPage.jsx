import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { queryRenderedFeatures } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import React, { Component, useRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Axios from 'axios';
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

function Map({pumpsName, setPumpsName, mapData, setMapData}){

const mapToken = "pk.eyJ1IjoiaG5pY2hvbGFzIiwiYSI6ImNremRma3hrNjA1bjAybm9iM2thdnZraXQifQ.CyiZY5YybAs-rk7ac--dsA";
mapboxgl.accessToken = mapToken;
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState([]);
const [lat, setLat] = useState([]);

//const [lng, setLng] = useState(-77.012100);
//const [lat, setLat] = useState(40.231838);
const [zoom, setZoom] = useState(5);
const [central, setCentral] = useState("");

const getMapData = (e) => {
    Axios.get("http://localhost:3001/mapData?id=" + e.target.value).then((response) => {
      setMapData(response.data);
      //const info = response.data;
      //const [id, name, latitude, longitude, country] = info.split(','); 
      //console.log(id);
    })
  }
  
const [pumps1, setPumps1] = useState([]);

const getPumpsList = () => {
    Axios.get("http://localhost:3001/pumps").then((response) => {
      setPumps1(response.data);
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


const updateCenter = (e) => {
    getMapData(e);
    if(e.target.value !== "Select Pump"){
        
        //set the center long and lat to what pump value/id corresponds to
        //parse db data to read that pump's lng/lat - ask Adam

        var long = [];
        var lats = [];
        if(mapData[0]){
            for(var i=0; i<mapData.length; i++){
              long[i] = mapData[i].gps_longitude.split(":")[0];
              lats[i] = mapData[i].gps_latitude.split(":")[0];
              //.slice(0,-3);
            }
        setLng(long);
        setLat(lats);
        }
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/hnicholas/ckzdfpm16000614mn71sfppcs',
            //style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [lng, lat],
            zoom: zoom,
                });
      }      
    }

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/hnicholas/ckzdfpm16000614mn71sfppcs',
    //style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [-77.012100, 40.231838],
    zoom: zoom,
        });
    });

    /* 
Add an event listener that runs
  when a user clicks on the map element.
*/

const interact = (event, map, mapboxgl) => {
    // If the user clicked on one of your markers, get its information.
    var features = map.queryRenderedFeatures({ layers: ['sites-outline'] }).map(function(feat) {
        return feat.properties && feat.properties.DEV_STATUS;
      });
    if (!features.length) {
      return;
    }
    const feature = features[0];
    
    
    //Create a popup, specify its options 
   // and properties, and add it to the map.
  
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
            <div ref={mapContainer} className="map-container" onClick={interact}/>

            <title>Display a map on a webpage</title>
            <link href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css" rel="stylesheet"></link>
            <script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>

        <style>{mapStyle}</style>

        <div className="col">
            <label for="pumpList">Pump</label>
            <select id="pumpList" className="form-control form-control-sm" onClick={getPumpsList} onChange={updateCenter}>
            <option key="default">Select Pump</option>
            {pumps1.map((val,key) => {
                  return(
                    <option key={val.iwp_pump_id}>{val.iwp_pump_id}</option>
                  )
                })
              }
            </select>
          </div>

        <div id="root"></div>
        </div>

        

        </div>
        );
        
}

export default Map;